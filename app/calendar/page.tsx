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
    title: "Sync, Seat, and Be Merry!",
    date: "12-28-2024",
    description:
      "Celebrate Christmas with a 1 hour Chair Yoga class, followed by snacks and beverages",
    location: "12 Sunrise Hill Road, Fishkill, NY",
    googleMapsUrl: "https://maps.app.goo.gl/DX61euWwEaR4Hnh76",
    time: "2:00pm-4:00pm",
    price: "$15.00 per person",
    rsvpDeadline: "Dec 22nd",
    googleCalendarUrl:
      "https://www.google.com/calendar/render?action=TEMPLATE&text=Sync%2C+Seat%2C+and+Be+Merry%21&dates=20241228T190000Z%2F20241228T210000Z&details=Celebrate+Christmas+with+a+1+hour+Chair+Yoga+class%2C+followed+by+snacks+and+beverages&location=12+Sunrise+Hill+Road%2C+Fishkill%2C+NY",
  },
  {
    id: 2,
    title: "New Year, New Outlook",
    date: "01-10-2025",
    description:
      "Celebrate the New Year with breathwork followed by a 45 minute invigorating Yinyasa Yoga class and a 15 minute Savasana. Light snacks and beverages after.",
    location: "Residence Inn White Plains",
    googleMapsUrl: "https://maps.app.goo.gl/DX61euWwEaR4Hnh76",
    time: "7:00pm-9:30pm",
    price: "$25.00 per person",
    rsvpDeadline: "Jan 5th",
    googleCalendarUrl:
      "https://www.google.com/calendar/render?action=TEMPLATE&text=New+Year%2C+New+Outlook&dates=20250110T190000Z%2F20250110T213000Z&details=Celebrate+the+New+Year+with+breathwork+followed+by+a+45+minute+invigorating+Yinyasa+Yoga+class+and+a+15+minute.+Light+snacks+and+beverages+after.&location=Residence+Inn+White+Plains",
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
          **Upcoming February events will be posted on December 12th**
        </p>
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-lg">
          *Space is limited for all workshops*
        </p>
      </div>
    </main>
  );
}
