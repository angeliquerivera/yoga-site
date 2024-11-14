import React from "react";
import Image from "next/image";
import firsthome from "../public/firsthome.jpg";
import secondhome from "../public/secondhome.jpg";

export default function Hero() {
  return (
    <section className="relative bg-transparent p-4 h-screen">
      <div className="container mx-auto flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 relative z-10 h-full">
        <div className="absolute top-0 left-0 p-6 flex flex-col space-y-6 sm:w-1/2 sm:space-y-10 sm:text-left bg-purple-400 bg-opacity-50 ">
          <h1 className="text-4xl font-bold text-center sm:text-5xl sm:text-left">
            Yoga For All
          </h1>
          <p className="text-lg sm:text-xl max-w-lg mx-auto sm:mx-0">
            Begin your wellness journey
          </p>
        </div>
      </div>
    </section>
  );
}
