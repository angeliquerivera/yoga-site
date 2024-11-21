import React from "react";
import type { Metadata } from "next";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row space-x-2 w-auto h-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
