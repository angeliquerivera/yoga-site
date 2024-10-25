import React from "react";
import Image from "next/image";

export default function BackgroundImage({ children, imageSrc }) {
  return (
    <div className="relative h-screen">
      <Image
        src={imageSrc}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      <div className="absolute inset-0 bg-opacity-20">{children}</div>
    </div>
  );
}
