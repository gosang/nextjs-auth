"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const router = useRouter();  
  const { data: session } = useSession();

  if(!session) router.replace("/");

  const handleSignOut = async () => {    
    // const redirectUrl = `${window.location.origin}`;
    //router.replace("/");
    await signOut({
      callbackUrl: "/"
    })

  };

  return (
      
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">10</p>
              <p className="text-gray-400">Notifications</p>
            </div>
            <div>
                <p className="font-bold text-gray-700 text-xl">10</p>
              <p className="text-gray-400">Messages</p>
            </div>
            {/*     <div>
                <p className="font-bold text-gray-700 text-xl">89</p>
              <p className="text-gray-400">Comments</p>
            </div> */}
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
      
      <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
          <button
            className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            Connect
          </button>
          <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            Message
          </button>

          <button onClick={handleSignOut} className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            Log Out 
          </button>

        </div>
        </div>
      
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
          <span className="font-light text-gray-500">Hello</span> {session?.user?.name},
          </h1>
          <p className="font-light text-gray-600 mt-3">London, UK</p>      
          <p className="mt-8 text-gray-500">Solution Architect</p>
          <p className="mt-2 text-gray-500">Cloud Solution Inc.</p>
        </div>
      
        <div className="mt-12 flex flex-col justify-center">
          <p className="text-gray-600 text-center font-light lg:px-16">
            This is a sample text.
          </p>
          <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}
