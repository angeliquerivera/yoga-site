import React from "react";
import Image from "next/image";
import biopic from "../public/biopic.jpg";

export default function YingYangDresses() {
  return (
    <div className="relative w-full flex flex-col">
      <Image
        src={biopic}
        alt="biopic"
        className="rounded-lg aspect-square object-cover object-center min-w-[300px] min-h-[200px] max-w-[100%] max-h-[750px]"
      />
    </div>
  );
}
