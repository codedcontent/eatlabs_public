import { connectToDB } from "@/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email } = await request.json();

  await connectToDB();
  await User.create({ name, email });

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
