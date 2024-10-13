import React from "react";
import Image from "next/image";

export default function ResponsiveImage({ src, alt }) {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-full">
      {" "}
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={650}
        height={336}
        className="rounded-full aspect-square object-cover"
      />
    </div>
  );
}
