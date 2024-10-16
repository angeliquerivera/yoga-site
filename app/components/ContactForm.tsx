import React, { useState } from "react";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);
  };

  return (
    <>
      <form>
        <input
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          type="text"
          id="fullname"
          placeholder="John Doe"
          className="w-full h-12 text-purple-800 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          placeholder="john@gmail.com"
          className="w-full h-12 text-purple-800 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          id="message"
          placeholder="Type your message here..."
          className="w-full h-32 text-purple-800 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
        ></textarea>
      </form>
    </>
  );
}
