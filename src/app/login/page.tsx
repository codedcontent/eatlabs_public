"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <button
        className="py-2 bg-amber-300 shadow-md rounded-lg px-4 cursor-pointer hover:bg-amber-400 hover:shadow-lg transition hover:scale-105 hover:-translate-y-1 hover:duration-200 hover:ease-in-out hover:font-semibold hover:text-white"
        onClick={() => signIn("google")}
      >
        Google Sign In
      </button>
    </div>
  );
}
