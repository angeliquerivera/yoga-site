import React from "react";
import Quote from "../components/Quote";
import quote from "../data/quote.data";

export default function Quotes() {
  return (
    <div className="max-w-4xl mx-auto flex items-center">
      {quote.map((quote, index) => (
        <Quote key={index} text={quote.text} author={quote.author} />
      ))}
    </div>
  );
}
