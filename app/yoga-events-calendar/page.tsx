import React from "react";
import Navbar from "./components/Navbar";
import "../globals.css";
import "tailwindcss/tailwind.css";

export default function Calendar() {
  return (
    <main>
      <Navbar />
      <h2>Upcoming Events</h2>
    </main>
  );
}
