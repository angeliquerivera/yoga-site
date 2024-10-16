import React from "react";
import Image from "next/image";
import biopic2 from "../public/biopic2.jpg";

export default function OfficerYogiImage() {
  return (
    <div className="relative w-full flex flex-col items-start p-4">
      <Image
        src={biopic2}
        alt="biopic2"
        className="rounded-full aspect-square object-cover min-w-[300px] min-h-[300px] max-w-[600px] max-h-[600px]"
      />
    </div>
  );
}
