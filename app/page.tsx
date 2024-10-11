import Image from "next/image";
import firsthome from "./public/firsthome.jpg";
import secondhome from "./public/secondhome.jpg";
import React from "react";
import "./styles.css";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <main>
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
