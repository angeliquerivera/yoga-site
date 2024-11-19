import React from "react";
import { FaYinYang } from "react-icons/fa";
import { PiChairDuotone } from "react-icons/pi";
import { TbYoga } from "react-icons/tb";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { GrYoga } from "react-icons/gr";

interface ClassType {
  title: string;
  description: string;
  icon: JSX.Element;
}

const sessionTypes: ClassType[] = [
  {
    title: "Beginner Yoga",
    description:
      "A introduction to basic yoga postures. This style is slower paced, and focuses on safe body alignment.",
    icon: <TbYoga className="w-14 h-14 mb-2 text-purple-600" />,
  },
  {
    title: "Chair Yoga",
    description:
      "A modified version of traditional yoga, using chair to perform postures while seared and to help with balance for standing postures.",
    icon: <PiChairDuotone className="w-14 h-14 mb-2 text-purple-600" />,
  },
  {
    title: "Restorative Yoga",
    description:
      "A gentle, slow paced yoga practice aimed at promoting relaxation and stress reduction. Postures are held for 5-10 minutes each, utilizing props such as blankets, bolsters, blocks, and straps to support the body.",
    icon: <PiFlowerLotusDuotone className="w-14 h-14 mb-2 text-purple-600" />,
  },
  {
    title: "Yin Yoga",
    description:
      "Focuses on passive stretching and relaxing your muscles rather than actively engaging them.",
    icon: <FaYinYang className="w-12 h-12 mb-4 text-purple-600" />,
  },
  {
    title: "Slow Flow Yoga",
    description:
      "A slow paced Vinyasa class where postures are linked together with the breath in a flowing sequence.",
    icon: <GrYoga className="w-14 h-14 mb-4 text-purple-600" />,
  },
];

export default function YogaClasses() {
  return (
    <section className="py-20">
      <div className="max-w-full mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Classes Offered</h2>
        <div className="grid grid-cols-1 md:grid-rows-2 lg:grid-cols-5 gap-8">
          {sessionTypes.map(({ icon, title, description }, index) => (
            <div key={index} className="rounded-lg p-6 text-center">
              <div className="flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-black">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
