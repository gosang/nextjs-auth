import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // sign up API call

    return NextResponse.json({ message: "User has successfully signed up." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while signing up the user." },
      { status: 500 }
    );
  }
}
