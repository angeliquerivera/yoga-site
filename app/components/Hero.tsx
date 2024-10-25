import React from "react";
import Image from "next/image";
import firsthome from "../public/firsthome.jpg";
import secondhome from "../public/secondhome.jpg";
import yingyang from "../public/yingyang.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex space-x-4">
        <Image
          src={firsthome}
          alt="firsthome"
          width="200"
          height="200"
          className="w-4 rounded-lg shadow-lg"
        />
        <Image
          src={secondhome}
          alt="secondhome"
          width="200"
          height="200"
          className="w-1/3 rounded-lg shadow-lg"
        />
        <Image
          src={yingyang}
          alt="yingyang"
          width="200"
          height="200"
          className="w-1/3 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
