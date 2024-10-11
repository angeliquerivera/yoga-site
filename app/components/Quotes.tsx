import React from "react";
import Quote from "../components/Quote";
import quote from "../data/quote.data";

export default function Quotes() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {quote.map((quote, index) => (
        <Quote key={index} text={quote.text} author={quote.author} />
      ))}
    </div>
  );
}
