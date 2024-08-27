import React from "react";
import Link from "next/link";
import "../globals.css";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  return (
    <nav>
      <Link href="/calendar">Events</Link>
      <Link href="/bio">Bio</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
