"use client";

import React, { useState } from "react";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("");

    try {
      const response = await fetch("/api/contact/contactRoute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setResult("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json();
        setResult(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col space-y-4"
    >
      <h1 className="text-2xl font-bold">Comments or Ideas?</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full h-16 text-black  placeholder-gray-500 shadow-sm bg-transparent text-lg font-normal leading-4 rounded-md border border-violet-600 focus:outline-none pl-4 mb-4"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full h-16 text-black  placeholder-gray-500 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-md border  border-violet-600  focus:outline-none pl-4 mb-10"
      />
      <textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="w-full h-40 placeholder-gray-500 text-black shadow-sm bg-transparent text-lg font-normal leading-10 rounded-md border  border-violet-600  focus:outline-none pl-4 mb-16"
      ></textarea>
      <button
        type="submit"
        className="bg-purple-600 text-pink-300 p-2 text-base font-semibold leading-6 rounded-full"
      >
        Send
      </button>
      {result && <p className="text-red-500">{result}</p>}
    </form>
  );
}
