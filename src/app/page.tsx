import SignInForm from '@/components/SignInForm'
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  
  const session = await getServerSession(authOptions);

  if (session) redirect("/profile");
  
  return (
    <main>
      <SignInForm />
    </main>
  )
}


