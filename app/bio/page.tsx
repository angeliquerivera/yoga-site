import React from "react";
import Image from "next/image";
import biopic from "../public/biopic.jpg";
import biopic2 from "../public/biopic2.jpg";
import { Montserrat } from "next/font/google";
import "../styles.css";
import "tailwindcss/tailwind.css";

const montserrat = Montserrat({
  weight: "400",
  preload: false,
});

export default function Bio() {
  return (
    <>
      <main className="caret-transparent no-outline">
        <div className="flex flex-row items-center gap-4">
          <div>
            <Image
              src={biopic}
              alt="biopic"
              width="1600"
              height="1200"
              className="rounded-full aspect-square object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className={montserrat.className}>
              I have been a correction officer, working in NY State and county
              prisons for 20 years. 14 years ago, desperate to find a healthy
              outlet and relieve the stresses of my job, I turned to yoga. I had
              always heard that yoga was good for stress. I decided to try a
              class, and instantly fell in love. This is what my body and mind
              had been looking for. I started with Hot Yoga, and 6 months later,
              tried all different styles of yoga. I felt at peace and blissful
              every time I was on my mat. I soon realized that yoga was much
              more than physical flexibility and strength. It was also about
              building mental flexibility and strength. I noticed a huge
              difference, not just in my body, but in my perceptions, attitudes,
              and thoughts, which influenced my actions. I decided that I needed
              to share all the benefits of yoga with as many people as I could.
              It's been my passion and my dream to open up a yoga studio. I
              began doing Yoga Teacher trainings, to further my own practice,
              and to expand my knowledge of the many benefits of various styles
              of yoga.
            </p>
            <blockquote className={montserrat.className}>
              <p className="indent-6">
                My goals are to help people understand:
              </p>
              <ol>
                <li className="indent-14">
                  1. EVERYONE AND ANYONE can do yoga
                </li>
                <li className="indent-14">2. The MANY benefits of yoga</li>
              </ol>
            </blockquote>
          </div>
          <div>
            <Image
              src={biopic2}
              alt="biopic2"
              width="1800"
              height="1000"
              className="rounded-full aspect-square object-cover"
            />
          </div>
        </div>
      </main>
    </>
  );
}
