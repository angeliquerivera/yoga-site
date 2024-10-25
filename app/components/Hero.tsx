import React from "react";
import Image from "next/image";
import firsthome from "../public/firsthome.jpg";
import secondhome from "../public/secondhome.jpg";
import yingyang from "../public/yingyang.jpg";

export default function Hero() {
  return (
    <section className="bg-transparent p-5">
      <div className="container flex flex-col-reverse md:flex-row items-center mx-auto mt-8 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-60 space-y-12 md:w-1/3 bg-purple-400 bg-opacity-50">
          <h1 className="max-w-screen-lg text-4xl font-bold text-center md:text-5xl md:text-left">
            Yoga For All
          </h1>
          <p className="max-w-lg text-center md:text-left">
            Begin your wellness journey
          </p>
        </div>{" "}
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center space-x-8">
            {/* <Image
              src={yingyang}
              alt="yingyang"
              width="500"
              height="500"
              className="rounded-full object-cover"
            /> */}
            <Image
              src={firsthome}
              alt="firsthome"
              width="500"
              height="500"
              className="rounded-lg object-cover"
            />
            <Image
              src={secondhome}
              alt="secondhome"
              width="500"
              height="500"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
