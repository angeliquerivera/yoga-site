import React from "react";

interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
  location: string;
  googleMapsUrl: string;
  time: string;
  price: string;
  rsvpDeadline: string;
  googleCalendarUrl: string;
}
export default function EventCard({
  id,
  date,
  title,
  description,
  location,
  googleMapsUrl,
  time,
  price,
  rsvpDeadline,
  googleCalendarUrl,
}: Event) {
  return (
    <div className="p-4  border-violet-800 border-4 rounded shadow hover:shadow-lg transition ">
      <p className="text-2xl">{date}</p>
      <h2 className="text-xl font-bold">{title}</h2>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-900 underline"
      >
        {location}
      </a>
      <p>{time}</p>
      <p className="mt-2">{description}</p>
      <p className="mt-2">{price}</p>
      <p className="mt-2 font-bold">RSVP by phone by: {rsvpDeadline}</p>
      <a
        href={googleCalendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-white bg-purple-800 hover:bg-purple-400 px-4 py-2 rounded"
      >
        Add to Google Calendar
      </a>
    </div>
  );
}
