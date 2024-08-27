import React from "react";
import { useState } from "react";
import Link from "next/link";
import "../globals.css";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {};
  return (
    <nav classname="fixed w-full h-24 shadow-xl bg-purple-500">
      <div className="justify-evenly items-center h-full w-full px-6 2xl:px-16">
        <div>
          <ul className="hidden sm:flex gap-5">
            <Link href="/">
              <li className="hover:border-b-purple-950 text-xl">Home</li>
            </Link>
            <Link href="/calendar">
              <li className="hover:border-b-purple-950 text-xl">Events</li>
            </Link>
            <Link href="/bio">
              <li className="hover:border-b-purple-950 text-xl">Bio</li>
            </Link>
            <Link href="/about">
              <li className="hover:border-b-purple-950 text-xl">About</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
