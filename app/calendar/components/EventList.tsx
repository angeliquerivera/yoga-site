import React from "react";
import EventCard from "./EventCard";
import "../../styles/styles.css";

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

interface EventListProps {
  events: Event[];
}

export default function EventList({ events }: EventListProps) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 gap-6">
        {events.map((event, index) => {
          const titleClass = index === 3 ? "fourth-event-title" : "event-title";
          const dateClass = index === 3 ? "fourth-event-date" : "event-date";

          return (
            <EventCard
              key={event.id}
              {...event}
              titleClass={titleClass}
              dateClass={dateClass}
            />
          );
        })}
      </div>
    </div>
  );
}
