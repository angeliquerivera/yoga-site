import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
// import EventList from "./components/EventList";

export const metadata: Metadata = {
  title: "Events",
};

// const eventsData = [
//   {
//     id: 1,
//     title:
//       "Inner Peace & Outer Strength LLC is excited to announce their Grand Opening!",
//     date: "Sunday, September 28th, 2025",
//     description:
//       "1:00-1:45pm: Learn about my studio, the different styles I teach and the type of classes I will be offering\n1:45-3:00pm: Beginners Yoga class\n3:00-4:00pm: Herbal teas and light snacks",
//     location: "12 Sunrise Hill Road, Fishkill, NY",
//     googleMapsUrl: "https://g.co/kgs/7GvWkZ5",
//     time: "1:00pm-4:00pm",
//     // price: "Free",
//     // rsvpDeadline: "Sept 22nd"
//   },
// ];

export default function Workshops() {
  return (
    <main className="min-h-screen pt-2">
      <div className="flex justify-center items-start gap-20 flex-wrap">
        {" "}
        <Image
          src="/fusionwellnessevent.jpg"
          alt="Image of October 24th event flyer"
          width={700}
          height={700}
        />
        <Image
          src="/fusionyoga.jpg"
          alt="Image of October 25th event flyer"
          width={695}
          height={695}
        />
      </div>

      {/* <div>
        <EventList events={eventsData} />
      </div> */}
      {/* <div className="flex justify-center">
        <p className="font-bold text-lg">
          *Classes after Grand Opening month will be $15 a person*
        </p>
      </div> */}
      {/* <div className="flex justify-center">
        {" "}
        <p className="font-bold text-lg justify-center">
          *Space is limited, so please text 845-591-3223 if you will be
          attending*
        </p>
      </div> */}
    </main>
  );
}
