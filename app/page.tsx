import React from "react";
import Hero from "./components/Hero";
import YogaClasses from "./components/YogaClasses";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <YogaClasses />
    </main>
  );
}
