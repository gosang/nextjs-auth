import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { User } from "next-auth";

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const SessionTime = .30 * HOUR; // .30 hour

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        // const { username, password } = credentials as any;
        // const res = await fetch("http://localhost:8000/auth/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     username,
        //     password,
        //   }),
        // });

        // const user = await res.json();

        console.log({ credentials });

        const user = {
            name: "test",
            email: "test@test.com",
            password: "test"
        };

        console.log({ user });

        // if (res.ok && user) {
        if (user) {
          return user;
        } else return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: SessionTime,
  },

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// import { connectMongoDB } from "@/lib/mongodb";
// import { User } from "@/models/user";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// // import bcrypt from "bcryptjs";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {},

//       async authorize(credentials) {
       
//         // const { email, password } = credentials;

//         const user = {
//           name: "test",
//           email: "test@test.com",
//           password: "test"
//       };

//       return user;

//         // try {
//         //   await connectMongoDB();
//         //   const user = await User.findOne({ email });

//         //   if (!user) {
//         //     return null;
//         //   }

//         //   const passwordsMatch = await bcrypt.compare(password, user.password);

//         //   if (!passwordsMatch) {
//         //     return null;
//         //   }

//         //   return user;
//         // } catch (error) {
//         //   console.log("Error: ", error);
//         // }
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/",
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
