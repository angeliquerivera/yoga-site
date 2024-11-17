import React from "react";
import Image from "next/image";
import firsthome from "../public/firsthome.jpg";
import secondhome from "../public/secondhome.jpg";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";

export default function Hero() {
  return (
    <section className="relative bg-transparent p-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 relative z-10">
        <div className="flex flex-col items-center sm:w-1/3 sm:space-y-10 sm:text-left ">
          <h1 className="lg:text-7xl text-4xl font-bold sm:text-5xl sm:text-left">
            Yoga For All
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-evenly w-full sm:w-2/3 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-1/2">
            <Image
              src={secondhome}
              alt="secondhome"
              layout="intrinsic"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full sm:w-1/2">
            <Image
              src={firsthome}
              alt="firsthome"
              layout="intrinsic"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
