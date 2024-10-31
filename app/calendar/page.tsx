import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import contactbackground from "../public/contactbackground.jpg";
import EventList from "./components/EventList";
import "../styles/styles.css";
import "tailwindcss/tailwind.css";

const eventsData = [
  {
    id: 1,
    title: "Holistic Holiday HoeDown!",
    date: "12-19-2024",
    description:
      "Celebrate the holidays with a fusion of Vinyasa Yoga & line dancing to holiday-themed country music! Activities followed by snacks, beverages, and raffles. 90 min class, suitable for all levels of fitness",
    location: "Residence Inn White Plains",
    googleMapsUrl: "https://g.co/kgs/aPQbBgo",
    time: "7:00pm-9:30pm",
    price: "$20.00 per person",
    rsvpDeadline: "Dec 16th",
    googleCalendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Holistic+Holiday+HoeDown!&dates=20241219T000000Z/20241219T023000Z&details=Celebrate+the+holidays+with+a+fusion+of+Vinyasa+Yoga+%26+line+dancing+to+holiday-themed+country+music!+Activities+followed+by+snacks,+beverages,+and+raffles.+90+min+class,+suitable+for+all+levels+of+fitness.&location=Residence+Inn+White+Plains",
  },
  {
    id: 2,
    title: "Event Two",
    date: "12-26-2024",
    description: "This is the second event.",
    location: "12 Sunrise Hill Road, Fishkill, NY",
    googleMapsUrl: "https://maps.app.goo.gl/DX61euWwEaR4Hnh76",
    time: "7:00pm-9:30pm",
    price: "$20.00 per person",
    rsvpDeadline: "Dec 23rd",
    googleCalendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Holistic+Holiday+HoeDown!&dates=20241219T000000Z/20241219T023000Z&details=Celebrate+the+holidays+with+a+fusion+of+Vinyasa+Yoga+%26+line+dancing+to+holiday-themed+country+music!+Activities+followed+by+snacks,+beverages,+and+raffles.+90+min+class,+suitable+for+all+levels+of+fitness.&location=Residence+Inn+White+Plains",
  },
  {
    id: 3,
    title: "Event Three",
    date: "01-03-2025",
    description: "This is the third event.",
    location: "The Opus Westchester",
    googleMapsUrl: "https://g.co/kgs/mNvxTng",
    time: "7:00pm-9:30pm",
    price: "$20.00 per person",
    rsvpDeadline: "Dec 31st",
    googleCalendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Holistic+Holiday+HoeDown!&dates=20241219T000000Z/20241219T023000Z&details=Celebrate+the+holidays+with+a+fusion+of+Vinyasa+Yoga+%26+line+dancing+to+holiday-themed+country+music!+Activities+followed+by+snacks,+beverages,+and+raffles.+90+min+class,+suitable+for+all+levels+of+fitness.&location=Residence+Inn+White+Plains",
  },
];

export default function Calendar() {
  return (
    <main className="min-h-screen">
      <BackgroundImage imageSrc={contactbackground}>
        <div>
          <EventList events={eventsData} />
        </div>
        <div className="flex items-center">
          <h3 className="font-bold">**Space is limited for all workshops**</h3>
        </div>
      </BackgroundImage>
    </main>
  );
}
