"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import omsymbol from "../public/omsymbol.jpeg";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between place-items-baseline bg-violet-400 sticky top-0 z-50 lg:static ">
        <div className="flex items-baseline lg:flex align-text-bottom">
          <Image
            src={omsymbol}
            alt="omsymbol"
            className="h-16 w-16 rounded-full aspect-square object-cover ml-2"
          />
          <span className="text-purple-900 text-2xl font-extrabold">
            Inner Peace & Outer Strength LLC
          </span>
        </div>

        <button
          className="lg:hidden text-purple-900 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-10 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-2 mr-4`}
        >
          <ul className="flex-wrap sm:flex gap-4">
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
