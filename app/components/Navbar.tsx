"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import omsymbol from "../public/omsymbol.jpeg";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <>
      <header className="bg-violet-400 p-0">
        <nav className="flex justify-between place-items-baseline">
          <div className="flex items-baseline">
            <Image
              src={omsymbol}
              alt="omsymbol"
              className="h-16 w-16 rounded-full aspect-square object-cover"
            />
            <span className="text-purple-800 text-2xl font-extrabold">
              Inner Peace & Outer Strength LLC
            </span>
          </div>

          <div className="flex-col">
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
      </header>
    </>
  );
}
