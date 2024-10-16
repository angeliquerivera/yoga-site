import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function Contact() {
  return (
    <main>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row space-x-4 w-full h-full max-w-5xl p-24">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
