import React from "react";
import EventCard from "./EventCard";
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

interface EventListProps {
  events: Event[];
}

export default function EventList({ events }: EventListProps) {
  if (!events || !Array.isArray(events)) {
    return <p>No events available at this time.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Upcoming Classes</h1>
      <div className="grid grid-cols-1 gap-6">
        {events.map((event) => {
          return <EventCard key={event.id} {...event} />;
        })}
      </div>
    </div>
  );
}
