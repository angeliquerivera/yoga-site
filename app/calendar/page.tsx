import React from "react";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";
import BackgroundImage from "../components/BackgroundImage";
import contactbackground from "../public/contactbackground.jpg";

export default function Calendar() {
  return (
    <main>
      <BackgroundImage imageSrc={contactbackground}>
        <h2>Upcoming Events</h2>
      </BackgroundImage>
    </main>
  );
}
