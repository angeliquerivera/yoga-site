import React from "react";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function ContactForm() {
  return (
    <>
      <form>
        <input
          type="text"
          id="fullname"
          placeholder="John Doe"
          className="w-full h-12 text-purple-800 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
        />
      </form>
    </>
  );
}
