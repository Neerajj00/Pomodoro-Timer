import { useContext } from "react";
import React from "react";
import { GlobalContext } from "../context/Context";

function SideArrow({ handleMenuToggle }) {

  const { menuOpen } = useContext(GlobalContext);

  return (
    <div
    className="p-1"
     onClick={handleMenuToggle}>
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
        className={`${menuOpen ? "rotate-180" : null} lucide lucide-chevron-right h-[15px] w-[15px]`}
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </div>
  );
}

export default SideArrow;
