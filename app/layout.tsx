import React from "react";
import Navbar from "./components/Navbar";
import "./globals.css";
import "tailwindcss/tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
    </html>
  );
}
