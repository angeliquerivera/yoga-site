"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles.css";
import "tailwindcss/tailwind.css";

export default function ContactInfo() {
  return (
    <div className="w-full flex flex-col items-center bg-opacity-70">
      <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
      <div className="flex flex-col items-start mb-4">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <span>
            <a
              href="mailto:allthingsselfcare@gmail.com"
              className="text-purple-950"
            >
              allthingsselfcare@gmail.com
            </a>
          </span>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          <span>
            <a href="tel:+8458212333" className="text-purple-950">
              845-821-2333
            </a>
          </span>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faInstagram} className="text-pink-500 mr-1" />
          <span>
            <a
              href="https://instagram.com/innerpeace_outerstrengthLLC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-950"
            >
              innerpeace_outerstrengthLLC
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
