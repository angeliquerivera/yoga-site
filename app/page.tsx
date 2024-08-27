import React from "react";
import Navbar from "./components/Navbar";
import "./globals.css";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Inner Peace and Outer Strength
      </h1>
      <Navbar />
    </main>
  );
}
