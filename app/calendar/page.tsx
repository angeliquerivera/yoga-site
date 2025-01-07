import React from "react";
import type { Metadata } from "next";
import EventList from "./components/EventList";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";

export const metadata: Metadata = {
  title: "Calendar",
};
const eventsData = [];

export default function Workshops() {
  return (
    <main className="min-h-screen">
      <div>
        <EventList events={eventsData} />
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-lg">**Upcoming February events TBA**</p>
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-lg">
          *Space is limited for all workshops*
        </p>
      </div>
    </main>
  );
}
