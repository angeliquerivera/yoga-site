import React, { useState } from "react";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
  };

  const response = await fetch('/api/contact/contactRoute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (response.ok) {
    setStatus('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  } else {
    const data = await response.json();
    setStatus(data.error || 'An error occurred. Please try again.');
  }
};

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          value="name"
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full h-12 text-purple-800 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
        />
        <input
          type="email"
          placeholder="Email"
          value="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full h-12 text-purple-800 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
        />
        <textarea
          placeholder="Type your message here..."
          value="message"
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full h-32 text-purple-800 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
        ></textarea>
        <button type="submit" className="bg-purple-600 text-pink-300 p-2">
          Send
        </button>
      </form>
      {status && <p className="text-red-500">{status}</p>}
    </>
  );
}
