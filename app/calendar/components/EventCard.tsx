import React from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  location: string;
  price: string;
}
export default function EventCard({
  id,
  title,
  date,
  description,
  location,
  price,
}: Event) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{date}</p>
      <p className="text-gray-500">{location}</p>
      <p className="mt-2">{description}</p>
      <p className="mt-2">{price}</p>
    </div>
  );
}
