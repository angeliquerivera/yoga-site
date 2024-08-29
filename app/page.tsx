import React from "react";
import "./globals.css";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import HomeImage from "./components/HomeImage";
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Inner Peace and Outer Strength
      </h1>
      <HomeImage />
    </main>
  );
}
