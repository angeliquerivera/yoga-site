import React from "react";
import Image from "next/image";

interface BackgroundImageProps {
  children: React.ReactNode; // Accepts valid React nodes as children
  imageSrc: string; // Path to the background image
}

export default function BackgroundImage({ children, imageSrc }) {
  return (
    <div className="relative h-screen bg-primary">
      <Image
        src={imageSrc}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-10"
      />
      <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
