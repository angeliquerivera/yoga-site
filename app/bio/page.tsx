import React from "react";
import Image from "next/image";
import biopic from "../public/biopic.jpg";
import biopic2 from "../public/biopic2.jpg";
import { Benne } from "next/font/google";
import "../styles.css";
import "tailwindcss/tailwind.css";

const benne = Benne({
  weight: "400",
  preload: false,
});

export default function Bio() {
  return (
    <main>
      <h2>Bio</h2>
      <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        <div>
          <Image
            src={biopic}
            alt="biopic"
            width="1200"
            height="200"
            className="clip-circle"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className={benne.className}>
            I have been a correction officer, working in NY State and county
            prisons for 20 years. 14 years ago, desperate to find a healthy
            outlet and relieve the stresses of my job, I turned to yoga. I had
            always heard that yoga was good for stress. I decided to try a
            class, and instantly fell in love. This is what my body and mind had
            been looking for. I started with Hot Yoga, and 6 months later, tried
            all different styles of yoga. I felt at peace and blissful every
            time I was on my mat. I soon realized that yoga was much more than
            physical flexibility and strength. It was also about building mental
            flexibility and strength. I noticed a huge difference, not just in
            my body, but in my perceptions, attitudes, and thoughts, which
            influenced my actions. I decided that I needed to share all the
            benefits of yoga with as many people as I could. It's been my
            passion and my dream to open up a yoga studio. I began doing Yoga
            Teacher trainings, to further my own practice, and to expand my
            knowledge of the many benefits of various styles of yoga.{" "}
            <blockquote className={benne.className}>
              {" "}
              <p className="tab">
                My goals are to help people understand that: 1. EVERYONE AND
                ANYONE can do yoga 2. The MANY benefits of yoga
              </p>
            </blockquote>
          </p>
        </div>
        <div className="rounded-none">
          <Image src={biopic2} alt="biopic2" width="1500" height="500" />
        </div>
      </div>
    </main>
  );
}
