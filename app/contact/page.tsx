import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function Contact() {
  return (
    <main>
      <div className="flex flex-col justify-between">Socials</div>
      <div className="flex flex-col justify-between">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  );
}
