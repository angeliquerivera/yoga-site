import React from "react";
import Hero from "./components/Hero";
import BackgroundImage from "./components/BackgroundImage";
import contactbackground from "./public/contactbackground.jpg";
import YogaSessions from "./components/YogaSessions";
import "./styles.css";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <main>
      <BackgroundImage imageSrc={contactbackground}>
        <Hero />
        <YogaSessions />
      </BackgroundImage>
    </main>
  );
}
