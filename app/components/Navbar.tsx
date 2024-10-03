"use client";

import React from "react";
import Link from "next/link";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar md:flex w-screen h-18 shadow-xl bg-violet-400">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl">InnerThoughtsOuterStrength</div>
        <div className="justify-end">
          <ul className="hidden sm:flex gap-6">
            <Link
              className={`link ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              <li className="hover:border-b-purple-800 text-xl ">Home</li>
            </Link>
            <Link
              className={`link ${pathname === "/about" ? "active" : ""}`}
              href="/about"
            >
              <li className="hover:border-b-purple-800 text-xl">About</li>
            </Link>
            <Link
              className={`link ${pathname === "/calendar" ? "active" : ""}`}
              href="/calendar"
            >
              <li className="hover:border-b-purple-800 text-xl">Calendar</li>
            </Link>
            <Link
              className={`link ${pathname === "/bio" ? "active" : ""}`}
              href="/bio"
            >
              <li className="hover:border-b-purple-800 text-xl">Bio</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
