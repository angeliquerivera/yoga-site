import React from "react";
import "../../styles/styles.css";

interface Event {
  id: number;
  date: string;
  dateClass: string;
  title?: string;
  titleClass: string;
  description?: string;
  location: string;
  googleMapsUrl: string;
  time?: string;
  price: string;
  rsvpDeadline: string;
  googleCalendarUrl?: string;
  subEvents?: { title: string; time: string; description: string;googleCalendarUrl: string; }[];
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
  subEvents,
}: Event) {

  const isFeb8Event = date === "02-08-2025";

  return (
    <div className="p-4  border-violet-800 border-4 rounded shadow hover:shadow-lg transition bg-primary bg-opacity-50 ">
      <p className={`${dateClass} text-2xl`}>{date}</p>
      <h2 className={`${titleClass} text-xl font-bold`}>{title}</h2>
      <p>{time}</p>
      <p className="mt-2">{description}</p>
      {subEvents && subEvents.length > 0 && (
        <div>
          {subEvents.map((subEvent, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold mt-2">{subEvent.title}</h2>
              <p>{subEvent.time}</p>
              <p className="mt-2">{subEvent.description}</p>
              <a
            href={subEvent.googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-white bg-purple-800 hover:bg-purple-400 px-4 py-2 rounded"
          >
            Add {subEvent.title} to Google Calendar
          </a>
            </div>
          ))}
        </div>
      )}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-900 underline mt-4"
      >
        {location}
      </a>
      <p className="mt-2 font-semibold">{price}</p>
      <p className="mt-2 font-bold">RSVP through text by: {rsvpDeadline}</p>
      {!isFeb8Event && googleCalendarUrl && (
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-white bg-purple-800 hover:bg-purple-400 px-4 py-2 rounded"
        >
          Add to Google Calendar
        </a>
      )}
    </div>
  );
}
