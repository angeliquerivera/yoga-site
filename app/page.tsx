import React from "react";
import Hero from "./components/Hero";
import YogaSessions from "./components/YogaSessions";
import "./styles/styles.css";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <YogaSessions />
    </main>
  );
}
