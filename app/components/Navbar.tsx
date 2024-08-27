import React from "react";
// import { useState, useEffect } from "react";
import Link from "next/link";
import "../globals.css";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const handleNav = () => {};

  return (
    <nav className="md:flex md:justify-between items-center max-w-screen-md h-18 shadow-xl bg-purple-300">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <ul className="hidden sm:flex gap-5">
            <Link href="/">
              <li className="hover:border-b-purple-800 text-xl">Home</li>
            </Link>
            <Link href="/calendar">
              <li className="hover:border-b-purple-800 text-xl">Calendar</li>
            </Link>
            <Link href="/bio">
              <li className="hover:border-b-purple-800 text-xl">Bio</li>
            </Link>
            <Link href="/about">
              <li className="hover:border-b-purple-800 text-xl">About</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
