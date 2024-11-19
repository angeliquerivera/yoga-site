import React from "react";
import Hero from "./components/Hero";
import YogaClasses from "./components/YogaClasses";
import "./styles/styles.css";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <YogaClasses />
    </main>
  );
}
