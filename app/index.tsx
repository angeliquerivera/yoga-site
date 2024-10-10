import React from "react";
import "./styles.css";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import firsthome from "./public/firsthome.jpg";
import secondhome from "./public/secondhome.jpg";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Inner Peace and Outer Strength
      </h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
        <div>
          <Image src={firsthome} alt="firsthome" width="400" height="400" />
        </div>
        <div>
          <Image src={secondhome} alt="firsthome" width="600" height="400" />
        </div>
      </div>
    </main>
  );
}
