import React from "react";
import Image from "next/image";

export default function BackgroundImage({ children, imageSrc }) {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <Image
        src={imageSrc}
        alt="Background"
        layout="fill"
        className="opacity-30 object-cover "
      />
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}
