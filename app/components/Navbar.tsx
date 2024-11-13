"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import omsymbol from "../public/omsymbol.jpeg";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between place-items-baseline bg-violet-400 sticky top-0 z-50 lg:static">
        <div className="flex items-baseline">
          <Image
            src={omsymbol}
            alt="omsymbol"
            className="h-16 w-16 rounded-full aspect-square object-cover ml-2"
          />
          <span className="text-purple-900 text-2xl font-extrabold ml-1">
            Inner Peace & Outer Strength LLC
          </span>
        </div>

        <div className="flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0  mr-4">
          <ul className="flex-wrap flex gap-4">
            <Link href="/">
              <li className="hover:text-purple-800 hover:underline text-xl">
                Home
              </li>
            </Link>
            <Link href="/bio">
              <li className="hover:text-purple-800 hover:underline text-xl">
                Bio
              </li>
            </Link>
            <Link href="/calendar">
              <li className="hover:text-purple-800 hover:underline text-xl">
                Calendar
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-purple-800 hover:underline text-xl">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
