import React from "react";

export default function BackgroundImage({
  imageUrl,
  children,
}: {
  imageUrl: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
}
