import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignUpForm from "@/components/SignUpForm";

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/profile");

  return <SignUpForm />;
}
