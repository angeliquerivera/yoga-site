import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/styles.css";
import "tailwindcss/tailwind.css";

const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Inner Peace & Outer Strength",
    default: "Inner Peace & Outer Strength",
  },
  description:
    "The website for the yoga studio business Inner Peace & Outer Strength LLC",
  keywords: [
    "inner",
    "peace",
    "outer",
    "strength",
    "yoga",
    "studio",
    "wellness",
    "beginner",
    "chair",
    "restorative",
    "breathwork",
    "yin",
    "slow flow",
    "holistic",
    "assisted",
    "stretching",
    "mediation",
    "Westchester",
    "Fishkill",
    "Dutchess",
    "county",
    "New York",
  ],
  creator: "Angelique Rivera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={`${monsterrat.className} custom-background`}>
          <Navbar /> {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
