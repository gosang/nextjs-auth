import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

const MINUTE = 60;
const HOUR = 60 * MINUTE;
const SessionTime = process.env.SESSION_TIME * HOUR; // .30 hour

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",    
      credentials: {},
      async authorize(credentials, req) {
        
        console.log({ credentials });

        const user = {
            name: "test",
            email: "test@test.com",
            password: "test"
        };

        console.log({ user });

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