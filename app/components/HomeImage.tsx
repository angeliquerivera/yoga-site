import React from "react";
import "../globals.css";
import "tailwindcss/tailwind.css";

export default function HomeImage() {
  return (
    <div>
      {["home1", "home2"].map((path) => {
        return (
          <div key={path}>
            <img
              src={`/${path}.jpg`}
              alt="yogaposes"
              width="280"
              height="420"
            />
          </div>
        );
      })}
    </div>
  );
}
