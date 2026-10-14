import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary bg-opacity-20 text-purple-900 py-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Inner Peace & Outer Strength LLC.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
