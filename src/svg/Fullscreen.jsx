import React from "react";

function Fullscreen() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-expand ml-1 h-[15px] w-[15px] sm:h-[18px] sm:w-[18px] hover:text-zinc-300 transition-all duration-100 cursor-pointer"
    >
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path>
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
    </svg>
  );
}

export default Fullscreen;
