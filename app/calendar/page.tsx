import React from "react";
import type { Metadata } from "next";
import EventList from "./components/EventList";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";

export const metadata: Metadata = {
  title: "Calendar",
};

const eventsData = [
  {
    id: 1,
    title:
      "Inner Peace & Outer Strength LLC is excited to announce their Soft Opening!",
    date: "Saturday, June 28th, 2025",
    description:
      "2:00-3:00pm: Learn about my studio, the different styles I teach and the type of classes I will be offering.\n3:00-4:00pm: 60 minute Beginners Yoga class\n4:00-5:00pm: Herbal teas, fruit juices, and vegan & gluten-free snacks",
    location: "12 Sunrise Hill Road, Fishkill, NY",
    googleMapsUrl: "https://g.co/kgs/7GvWkZ5",
    time: "2:00pm-5:00pm",
    price: "No cost, but must sign up online",
    rsvpDeadline: "June 26th",
  },
];

export default function Workshops() {
  return (
    <main className="min-h-screen">
      <div>
        <EventList events={eventsData} />
      </div>
      <div className="flex justify-center">
        {/* <p className="font-bold text-lg">**No March Events**</p> */}
      </div>
      <div className="flex justify-center">
        {/* <p className="font-bold text-lg">
          *Space is limited for all workshops*
        </p> */}
      </div>
    </main>
  );
}
