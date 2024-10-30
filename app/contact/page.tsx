import React from "react";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import BackgroundImage from "../components/BackgroundImage";
import contactbackground from "../public/contactbackground.jpg";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";

export default function Contact() {
  return (
    <main>
      <BackgroundImage imageSrc={contactbackground}>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="flex flex-col md:flex-row space-x-2 w-auto h-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </BackgroundImage>
    </main>
  );
}
