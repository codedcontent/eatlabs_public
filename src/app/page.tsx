"use client";

import { IoMenu } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import { VscLoading } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  const { status, data: session } = useSession();

  return (
    <div className="h-screen w-full relative">
      {/* Background image */}
      <Image
        src="/images/foodapp.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover absolute -z-10"
      />

      {/* Nav */}
      <nav className="py-4 px-6 flex w-full justify-between items-center border-b border-white bg-white sticky top-0 bg-opacity-90 z-50">
        {/* Logo */}
        <Link href={"/"} className="hover:opacity-80">
          <div className="flex justify-center items-center gap-2">
            {/* <IoMenu className="text-2xl" /> */}

            <div className="flex gap-1 items-baseline justify-center">
              <p className="font-medium text-3xl">Eat</p>
              <p className="font-bold text-2xl">Labs</p>
            </div>
          </div>
        </Link>

        {/* Other nav links */}
        <div className="flex gap-10">
          {/* Sponsor Us */}
          <div className="flex gap-1.5 items-center font-bold">
            <p className="text-sm">Sponsor us</p>

            <LuExternalLink />
          </div>

          {status != "loading" ? (
            <>
              {status === "authenticated" ? (
                // User Account
                <div className="flex gap-3">
                  {/* <div className="flex gap-3 border-gray-200 border rounded-full px-4 py-2 items-center cursor-pointer hover:border-black">
                    <p>My account</p>

                    <RiAccountCircleLine className="text-2xl" />
                  </div> */}
                  <button
                    className="py-2 bg-black shadow-md rounded-lg px-4 cursor-pointer text-white"
                    onClick={() => signOut()}
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => signIn("google")}
                  className="bg-black text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:opacity-80 flex items-center gap-2"
                >
                  <FcGoogle className="text-xl" />

                  <p>Sign in with Google</p>
                </button>
              )}
            </>
          ) : (
            <VscLoading className="text-2xl animate-spin" />
          )}
        </div>
      </nav>

      {/* Food search section */}
      <div className="w-full flex flex-col h-[90%] justify-center">
        <div className="flex flex-col gap-10 px-10">
          <p className="text-5xl font-black">Order delivered to you</p>

          <div className="flex">
            {/* Location input */}
            <div className="bg-white rounded-l-md w-1/2 focus:outline-none flex gap-2 items-center pl-6">
              <FaLocationDot />

              <input
                type="text"
                placeholder="Enter you location on campus"
                className="bg-transparent py-4 pr-6 w-full"
              />
            </div>

            {/* Deliver now or later */}
            <button className="bg-black text-white font-semibold py-4 px-4 rounded-r-full uppercase">
              Order now
            </button>
          </div>
        </div>
      </div>

      {/* Features CTA */}
      <div className="w-full flex justify-center bg-black -mt-1 py-2">
        <div className="bg-white bg-opacity-90 rounded-full px-6 py-3 flex gap-10 shadow-lg">
          <p className="font-semibold">No minimum order</p>
          <p className="font-semibold">Live order tracking</p>
          <p className="font-semibold">Lightning fast delivery</p>
        </div>
      </div>

      {/* Account creation tiers */}
      <div className="w-full grid justify-center grid-cols-2 gap-10 px-20 py-20 bg-white">
        {/* Add restaurant card */}
        <div className="flex gap-6 w-full">
          {/* Image */}
          <Image
            src={"/images/add_restaurant.webp"}
            alt="Add your restaurant"
            width={500}
            height={500}
            className="h-60 w-96 object-cover shadow-md"
          />

          {/* Text */}
          <div className="flex flex-col gap-2">
            {/* Text 1 */}
            <p className="text-4xl font-bold">Add your restaurant</p>
            {/* Text 2 */}
            <p className="text-xl mt-2 font-light">
              Grow your business by joining Eat Labs today!
            </p>
            {/* Text 3 */}
            <Link
              href={"/add-restaurant"}
              className="mt-2 underline font-semibold"
            >
              Add your restaurant
            </Link>
          </div>
        </div>

        {/* Deliver with us card */}
        <div className="flex gap-6 w-full">
          {/* Image */}
          <Image
            src={"/images/deliver_with_us.png"}
            alt="Deliver with Eat Labs"
            width={500}
            height={500}
            className="h-60 w-96 object-cover shadow-md"
          />

          {/* Text */}
          <div className="flex flex-col gap-2">
            {/* Text 1 */}
            <p className="text-4xl font-bold">Deliver with Eat Labs</p>
            {/* Text 2 */}
            <p className="text-xl mt-2 font-light">
              Join our delivery team and earn on your schedule!
            </p>
            {/* Text 3 */}
            <Link
              href={"/delivery-signup"}
              className="mt-2 underline font-semibold"
            >
              Sign up to deliver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
