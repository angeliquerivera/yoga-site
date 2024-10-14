import React from "react";
import YingYangDresses from "../components/YingYangDresses";
import OfficerYogiImage from "../components/OfficerYogiImage";
import Quotes from "../components/Quotes";
import "tailwindcss/tailwind.css";

export default function Bio() {
  return (
    <>
      <main>
        <h2 className="text-justify text-4xl font-extrabold text-purple-900">
          Meet Fredeswinda
        </h2>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <YingYangDresses />
          </div>

          <p className="text-base md:text-lg lg:text-xl p-6">
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
            knowledge of the many benefits of various styles of yoga.
          </p>
          <p className="text-base md:text-lg lg:text-xl p-4">
            My goals are to help people understand:
          </p>
          <ol>
            <li className="text-base md:text-lg lg:text-xl font-semibold indent-14">
              1. EVERYONE AND ANYONE can do yoga
            </li>
            <li className="text-base md:text-lg lg:text-xl font-semibold indent-14">
              2. The MANY benefits of yoga
            </li>
          </ol>
        </div>

        <div className="flex flex-row justify-center p-10">
          <Quotes />
        </div>
      </main>
    </>
  );
}
