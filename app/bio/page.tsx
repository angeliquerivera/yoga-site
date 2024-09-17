import React from "react";
import Image from "next/image";
import biopic from "../public/biopic.jpg";
import "../globals.css";
import "tailwindcss/tailwind.css";

export default function Bio() {
  return (
    <main>
      <h2>Bio</h2>
      <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        <div>
          <Image src={biopic} alt="biopic" width="800" height="300" />
        </div>
        <div>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Amet quam sem
            ante dui in, facilisis nisi sit non. Cursus vulputate vel donec
            ultrices aliquet condimentum quam varius. Leo vehicula nisi
            tincidunt class lobortis placerat curabitur maecenas. Dignissim
            torquent tempor penatibus fermentum ultricies interdum leo auctor.
            Libero elit interdum vitae varius; ornare laoreet fringilla
            adipiscing.
          </p>
        </div>
      </div>
    </main>
  );
}
