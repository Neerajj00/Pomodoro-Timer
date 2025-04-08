import React from "react";

function Timezones({ isActive }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      id="Earth-Time--Streamline-Ultimate"
      height="48"
      width="48"
      className={`h-[20px] w-[20px] ${isActive ? "fill-amber-300" : " fill-zinc-700 group-hover:fill-zinc-400 "}`}
    >
      {" "}
      <g>
        <path
          d="M22 44.22a1.08 1.08 0 0 0 -0.68 -0.42 19.56 19.56 0 0 1 -6.26 -2v-2.58a5 5 0 0 1 1.78 -3.82 8.92 8.92 0 0 0 2.54 -3.56 16.32 16.32 0 0 1 0.52 -2 8.12 8.12 0 0 0 0.16 -1.4 9.02 9.02 0 0 0 -9 -9H4.52a20 20 0 0 1 30.76 -12h-6.78a5.5 5.5 0 0 0 0 11 5.14 5.14 0 0 1 2.56 0.72 1.14 1.14 0 0 0 0.72 0.12 15.56 15.56 0 0 1 3.22 -0.28 16 16 0 0 1 12 5.4 0.6 0.6 0 0 0 1 -0.4 24 24 0 0 0 -48 0c0 9.84 8 24 24 24a0.6 0.6 0 0 0 0.4 -1.04 16 16 0 0 1 -2.4 -2.74Z"
          strokeWidth="1"
        ></path>
        <path
          d="M35 22a13 13 0 1 0 13 13 13.02 13.02 0 0 0 -13 -13Zm0 22a9 9 0 1 1 9 -9 9.02 9.02 0 0 1 -9 9Z"
          strokeWidth="1"
        ></path>
        <path
          d="M39 33h-1.5a0.5 0.5 0 0 1 -0.5 -0.5V30a2 2 0 0 0 -4 0v5a2 2 0 0 0 2 2h4a2 2 0 0 0 0 -4Z"
          strokeWidth="1"
        ></path>
      </g>
    </svg>
  );
}

export default Timezones;
