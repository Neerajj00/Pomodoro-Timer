import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

function SmallScreenSVG() {
    const { setisFullScreen } = useContext(GlobalContext);
  return (
    <svg
    onClick={() => setisFullScreen(prev => !prev)}
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
      <path d="M8 3v3a2 2 0 0 1-2 2H3"></path>
      <path d="M21 8h-3a2 2 0 0 1-2-2V3"></path>
      <path d="M3 16h3a2 2 0 0 1 2 2v3"></path>
      <path d="M16 21v-3a2 2 0 0 1 2-2h3"></path>
    </svg>
  );
}

export default SmallScreenSVG;
