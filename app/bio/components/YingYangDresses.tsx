import React from "react";
import Image from "next/image";

export default function YingYangDresses() {
  return (
    <div className="relative w-full p-3 ">
      <Image
        src="/biopic.jpg"
        width={900}
        height={900}
        alt="biopic"
        className="border-4 border-purple-600 rounded-lg aspect-square object-cover object-center min-w-[300px] min-h-[200px] max-w-[100%] max-h-[500px]"
      />
    </div>
  );
}
