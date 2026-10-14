import React from "react";

interface QuoteProps {
  text: string;
  author: string;
}

export default function Quote({ text, author }: QuoteProps) {
  return (
    <blockquote className="mb-10 p-12">
      <p className="text-lg italic montserrat text-gray-700">"{text}"</p>
      <footer className="mt-2 text-right text-gray-600">— {author}</footer>
    </blockquote>
  );
}
