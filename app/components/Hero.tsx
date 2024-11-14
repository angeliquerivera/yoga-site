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
        <div className="mb-90 flex flex-col items-center sm:w-1/3 sm:space-y-10 sm:text-left  ">
          <h1 className="lg:text-7xl text-4xl font-bold sm:text-5xl sm:text-left">
            Yoga For All
          </h1>
          {/* <p className="p-6 lg:text-3xl sm:text-xl max-w-lg mx-auto sm:mx-0">
            Let's begin healing
          </p> */}
        </div>
        <div className="flex flex-row justify-evenly w-2/3">
          <Image
            src={secondhome}
            alt="secondhome"
            layout="responsive"
            width={300}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <Image
            src={firsthome}
            alt="firsthome"
            layout="responsive"
            width={300}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
