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
      "Inner Peace & Outer Strength LLC is excited to announce their Grand Opening!",
    date: "Sunday, September 28th, 2025",
    description:
      "1:00-1:45pm: Learn about my studio, the different styles I teach and the type of classes I will be offering\n1:45-3:00pm: Beginners Yoga class\n3:00-4:00pm: Herbal teas, fruit juices, and snacks",
    location: "12 Sunrise Hill Road, Fishkill, NY",
    googleMapsUrl: "https://g.co/kgs/7GvWkZ5",
    time: "1:00pm-4:00pm",
    // price: "Free",
    // rsvpDeadline: "Sept 22nd"
  },
  {
    id: 2,
    // title:
    //   "Inner Peace & Outer Strength LLC is excited to announce their Grand Opening!",
    date: "Saturday, October 4th, 2025",
    description: "Slow Flow",
    location: "12 Sunrise Hill Road, Fishkill, NY",
    googleMapsUrl: "https://g.co/kgs/7GvWkZ5",
    time: "10:30am-11:45am",
    price: "$10 per person",
    // rsvpDeadline: "Sept 22nd"
  },
  {
    id: 3,
    // title:
    // "Inner Peace & Outer Strength LLC is excited to announce their Grand Opening!",
    date: "Sunday, October 5th, 2025",
    description: "Vin Yin",
    location: "12 Sunrise Hill Road, Fishkill, NY",
    googleMapsUrl: "https://g.co/kgs/7GvWkZ5",
    time: "10:30am-11:45am",
    price: "$10 per person",
    // rsvpDeadline: "Sept 22nd"
  },
  {
    id: 4,
    // title:
    // "Inner Peace & Outer Strength LLC is excited to announce their Grand Opening!",
    date: "Saturday, October 11th, 2025",
    description: "Chair Yoga",
    location: "12 Sunrise Hill Road, Fishkill, NY",
    googleMapsUrl: "https://g.co/kgs/7GvWkZ5",
    time: "10:30am-11:45am",
    price: "$10 per person",
    // rsvpDeadline: "Sept 22nd"
  },
  {
    id: 5,
    // title:
    // "Inner Peace & Outer Strength LLC is excited to announce their Grand Opening!",
    date: "Sunday, October 12th, 2025",
    description: "Restorative Yoga",
    location: "12 Sunrise Hill Road, Fishkill, NY",
    googleMapsUrl: "https://g.co/kgs/7GvWkZ5",
    time: "10:30am-11:45am",
    price: "$10 per person",
    // rsvpDeadline: "Sept 22nd"
  },
  {
    id: 6,
    // title:
    // "Inner Peace & Outer Strength LLC is excited to announce their Grand Opening!",
    date: "Saturday October 18th, 2025",
    description: "Vin Yin",
    location: "12 Sunrise Hill Road, Fishkill, NY",
    googleMapsUrl: "https://g.co/kgs/7GvWkZ5",
    time: "10:30am-11:45am",
    price: "$10 per person",
    // rsvpDeadline: "Sept 22nd"
  },
  {
    id: 7,
    // title:
    // "Inner Peace & Outer Strength LLC is excited to announce their Grand Opening!",
    date: "Saturday, October 25th, 2025",
    description: "Slow Flow",
    location: "12 Sunrise Hill Road, Fishkill, NY",
    googleMapsUrl: "https://g.co/kgs/7GvWkZ5",
    time: "10:30am-11:45am",
    price: "$10 per person",
    // rsvpDeadline: "Sept 22nd"
  },
  {
    id: 8,
    // // title:
    //   "Inner Peace & Outer Strength LLC is excited to announce their Grand Opening!",
    date: "Sunday, October 26th, 2025",
    description: "Chair Yoga",
    location: "12 Sunrise Hill Road, Fishkill, NY",
    googleMapsUrl: "https://g.co/kgs/7GvWkZ5",
    time: "10:30am-11:45am",
    price: "$10 per person",
    // rsvpDeadline: "Sept 22nd"
  },
];

export default function Workshops() {
  return (
    <main className="min-h-screen">
      <div>
        <EventList events={eventsData} />
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-lg">
          *Space is limited, so please text 845-591-3223 if you will be
          attending*
        </p>
      </div>
    </main>
  );
}
