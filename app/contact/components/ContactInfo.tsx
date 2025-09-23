"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../../styles/styles.css";
import "tailwindcss/tailwind.css";

export default function ContactInfo() {
  const handleEmailClick = () => {
    const email = "allthingsselfcare01@gmail.com";
    const subject = "";
    const body = "";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="w-full flex flex-col items-center bg-opacity-25">
      <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
      <div className="flex flex-col items-start mb-4">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <span>
            <a href="#" onClick={handleEmailClick} className="text-purple-950">
              allthingsselfcare01@gmail.com
            </a>
          </span>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          <span>
            <a href="tel:+8455913223" className="text-purple-950">
              845-591-3223
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
