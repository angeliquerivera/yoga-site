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
    title: "Yinyasa Workshop",
    date: "02-01-2025",
    description:
      "A brief explanation of the benefits of yin yoga followed by 15 minutes of breathwork, 30 minutes of slow flow vinyasa postures, and 30 minutes of yin postures",
    location: "Residence Inn White Plains",
    googleMapsUrl: "https://g.co/kgs/joaHH9o",
    time: "2:00pm-4:00pm",
    price: "$20.00 per person (cash or Zelle)",
    rsvpDeadline: "January 31st",
    googleCalendarUrl:
      "https://www.google.com/calendar/render?action=TEMPLATE&text=Yinyasa+Workshop&dates=20250201T190000Z%2F20250201T210000Z&details=A+brief+explanation+of+the+benefits+of+yin+yoga+followed+by+15+minutes+of+breathwork%2C+30+minutes+of+slow+flow+yinyasa+postures%2C+and+30+minutes+of+yin+poses.&location=Residence+Inn+White+Plains%2C+White+Plains%2C+NY&trp=true",
  },
  {
    id: 2,
    title: "Yinyasa Workshop",
    date: "02-02-2025",
    description:
      "A brief explanation of the benefits of yin yoga followed by 15 minutes of breathwork, 30 minutes of slow flow vinyasa postures, and 30 minutes of yin postures",
    location: "Residence Inn White Plains",
    googleMapsUrl: "https://g.co/kgs/joaHH9o",
    time: "2:00pm-4:00pm",
    price: "$20.00 per person (cash or Zelle)",
    rsvpDeadline: "January 31st",
    googleCalendarUrl:
      "https://www.google.com/calendar/render?action=TEMPLATE&text=Yinyasa+Workshop&dates=20250202T190000Z%2F20250202T210000Z&details=A+brief+explanation+of+the+benefits+of+yin+yoga+followed+by+15+minutes+of+breathwork%2C+30+minutes+of+slow+flow+yinyasa+postures%2C+and+30+minutes+of+yin+poses.&location=Residence+Inn+White+Plains%2C+White+Plains%2C+NY&trp=true",
  },
  {
    id: 3,
    date: "02-08-2025",
    location: "Residence Inn White Plains",
    googleMapsUrl: "https://g.co/kgs/joaHH9o",
    price: "$20.00 per person (cash or Zelle)",
    rsvpDeadline: "February 7th",
    subEvents: [
      {
        title: "Yin Yoga",
        time: "12:00pm-2:00pm",
        description:
          "15 minutes of breathwork followed by a 60 minute yin class and closing with a 15 minute shavasana",
        googleCalendarUrl:
          "https://www.google.com/calendar/render?action=TEMPLATE&text=Yin+Yoga&dates=20250208T120000Z/20250208T140000Z&details=15+minutes+of+breathwork+followed+by+a+60+minute+yin+class+and+closing+with+a+15+minute+shavasana&location=Residence+Inn+White+Plains&trp=true",
      },
      {
        title: "Movement & Dance Workshop",
        time: "4:30pm-6:00pm",
        description:
          "Burn calories & work your core, in this fun fast paced class. Gentle stretches followed by 20 minutes of free movement and dancing targeting cardio, endurance, hips, abs, and legs! Enjoy protein smoothies after class!",
        googleCalendarUrl:
          "https://www.google.com/calendar/render?action=TEMPLATE&text=Movement+%26+Dance+Workshop&dates=20250208T163000Z/20250208T180000Z&details=Burn+calories+%26+work+your+core%2C+in+this+fun+fast-paced+class.+Gentle+stretches+followed+by+20+minutes+of+free+movement+and+dancing+targeting+cardio%2C+endurance%2C+hips%2C+abs%2C+and+legs%21+Enjoy+protein+smoothies+after+class%21&location=Residence+Inn+White+Plains&trp=true",
      },
    ],
  },
  {
    id: 4,
    title: "A Galentine's Party featuring Mary Kay products",
    date: "02-16-2025",
    description:
      "Skincare featuring MK products, face masks and 10 minute hand massages. There will be beverages, light snacks, raffles, and prizes!",
    location: "The Opus Westchester",
    googleMapsUrl: "https://g.co/kgs/HFdEzrf",
    time: "2:00pm-6:00pm",
    price:
      "No cost, just bring cash or Zelle for raffles and to purchase any products you fall in love with!",
    rsvpDeadline: "February 14th",
    googleCalendarUrl:
      "https://www.google.com/calendar/render?action=TEMPLATE&text=A+Galentine%27s+featuring+Mary+Kay+products&dates=20250216T190000Z%2F20250216T230000Z&details=Skincare+featuring+MK+products%2C+face+masks+and+10+minute+hand+massages.+There+will+be+beverages%2C+light+snacks%2C+raffles%2C+and+prizes%21&location=Opus+Westchester%2C+White+Plains%2C+NY",
  },
];

export default function Workshops() {
  return (
    <main className="min-h-screen">
      <div>
        <EventList events={eventsData} />
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-lg">**No March Events**</p>
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-lg">
          *Space is limited for all workshops*
        </p>
      </div>
    </main>
  );
}
