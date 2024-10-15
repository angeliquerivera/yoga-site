import React from "react";
import "../styles.css";
import "tailwindcss/tailwind.css";

interface QuoteProps {
  text: string;
  author: string;
}

export default function Quote({ text, author }) {
  return (
    <blockquote className="mb-10 p-12 border-l-8 border-purple-600 bg-purple-300">
      <p className="text-lg italic montserrat text-gray-700">"{text}"</p>
      <footer className="mt-2 text-right text-gray-600">— {author}</footer>
    </blockquote>
  );
}
