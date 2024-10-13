import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  layout: string;
  width?: number; // Optional width
  height?: number; // Optional height
  className?: string;
  priority?: boolean;
};

export default function ResponsiveImage({ src, alt, layout, priority }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      objectFit="cover"
      width={650}
      height={336}
      className="rounded-full aspect-square"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={!!priority}
    />
  );
}
