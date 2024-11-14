import React from "react";
import "../../styles/styles.css";

interface Event {
  id: number;
  date: string;
  dateClass: string;
  title: string;
  titleClass: string;
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
  dateClass,
  title,
  titleClass,
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
      <p className={`${dateClass} text-2xl`}>{date}</p>
      <h2 className={`${titleClass} text-xl font-bold`}>{title}</h2>
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
      <p className="mt-2 font-semibold">
        {price}- pay through Zelle by our phone number or cash
      </p>
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
