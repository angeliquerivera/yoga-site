"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import yingyang from "../public/yingyang.jpg";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between place-items-center top-0 z-50 lg:static bg-primary bg-opacity-60 ">
        <div className="flex items-center lg:flex align-text-bottom">
          <Image
            src={yingyang}
            alt="yingyang"
            width={60}
            height={60}
            className="mt-1 outline-4 outline-indigo-600 rounded-full ml-2"
          />
          <span className="text-purple-900 text-xl font-extrabold ml-2">
            Inner Peace & Outer Strength LLC
          </span>
        </div>

        <button
          className="lg:hidden text-purple-900 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-7 h-7"
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
          className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
          onClick={toggleMenu} // Close the menu if clicking outside of it
        ></div>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-purple-300 shadow-xl bg-opacity-45 transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-gray-600"
            onClick={toggleMenu}
          >
            &times;
          </button>

          <div className="flex flex-col p-6">
            <ul className="space-y-4">
              <Link href="/">
                <li
                  className="text-xl text-black hover:text-purple-600 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Home
                </li>
              </Link>
              <Link href="/bio">
                <li
                  className="text-xl text-black hover:text-purple-600 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Bio
                </li>
              </Link>
              <Link href="/calendar">
                <li
                  className="text-xl text-blackhover:text-purple-600 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Calendar
                </li>
              </Link>
              <Link href="/contact">
                <li
                  className="text-xl text-blackhover:text-purple-600 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 mr-4">
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
