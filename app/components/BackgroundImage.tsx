import React from "react";
import Image from "next/image";

export default function BackgroundImage({ children, imageSrc }) {
  return (
    <div className="min-h-screen">
      <Image
        src={imageSrc}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-30"
      />
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
