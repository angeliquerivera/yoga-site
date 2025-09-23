import React from "react";
import "../../styles/styles.css";

interface Event {
  id: number;
  date: string;
  // dates: string[];
  title?: string;
  description?: string;
  location: string;
  googleMapsUrl: string;
  time?: string;
  price?: string;
  rsvpDeadline?: string;
}
export default function EventCard({
  id,
  date,
  // dates,
  title,
  description,
  location,
  googleMapsUrl,
  time,
  price,
  rsvpDeadline,
}: Event) {
  return (
    <div className="p-4  border-violet-800 border-4 rounded shadow hover:shadow-lg transition bg-primary bg-opacity-50 ">
      <h2 className="text-2xl font-bold event-title">{title}</h2>
      <p className="text-2xl font-semibold">{date}</p>
      <p className="text-2xl font-medium">{time}</p>
      <p
        className={`mt-2 whitespace-pre-line ${
          id === 1 ? "text-xl" : "text-2xl"
        } `}
      >
        {description}
      </p>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-900 underline mt-4 text-lg"
      >
        {location}
      </a>
      {<p className="mt-2 text-lg font-semibold">{price}</p>}
      {<p className="mt-2 font-bold">{rsvpDeadline}</p>}
    </div>
  );
}
