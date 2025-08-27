// import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

export default function Home() {
  return (
    <div className="h-screen w-full bg-[url('/images/foodapp.webp')] bg-cover bg-center relative">
      {/* Nav */}
      <nav className="py-4 px-6 flex w-full justify-between items-center border-b border-white bg-white">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2">
          <IoMenu className="text-2xl" />

          <div className="flex gap-1 items-baseline justify-center">
            <p className="font-medium text-3xl">Eat</p>
            <p className="font-bold text-2xl">Labs</p>
          </div>
        </div>

        {/* Other nav links */}
        <div className="flex gap-10">
          {/* Sponsor Us */}
          <div className="flex gap-1.5 items-center font-bold">
            <p className="text-sm">Sponsor us</p>

            <LuExternalLink />
          </div>

          {/* User Account */}
          <div className="flex gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-full shadow-lg border border-gray-100">
              Log in
            </button>

            <button className="bg-black text-white px-4 py-2 rounded-full shadow-lg">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Food search */}
      <div className="flex flex-col h-[90%] justify-center items-center gap-6">
        <p>Food in the hands of students</p>

        <div className="flex gap-2">
          <input type="text" placeholder="Search for food..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
