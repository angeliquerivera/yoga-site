import React from "react";
import { FaYinYang } from "react-icons/fa";
import { PiChairDuotone } from "react-icons/pi";
import { TbYoga } from "react-icons/tb";
import { PiFlowerLotusDuotone } from "react-icons/pi";

interface SessionType {
  title: string;
  description: string;
  icon: JSX.Element;
}

const sessionTypes: SessionType[] = [
  {
    title: "Beginners Yoga",
    description: "A gentle introduction to basic yoga postures",
    icon: <TbYoga className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Chair Yoga",
    description: "Yoga stretches while seated in a chair",
    icon: <PiChairDuotone className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Restorative Yoga",
    description: "Passive stretching and relaxation to enhance your well-being",
    icon: <PiFlowerLotusDuotone className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Yin and Slow Flow Yoga",
    description: "Breath awareness and mindfulness while posing.",
    icon: <FaYinYang className="w-8 h-8 text-purple-600" />,
  },
];

export default function SessionTypes() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Sessions Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sessionTypes.map((yoga, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <div className="mb-4">{yoga.icon}</div>
              <h3 className="text-xl font-semibold">{yoga.title}</h3>
              <p className="text-purple-950">{yoga.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
