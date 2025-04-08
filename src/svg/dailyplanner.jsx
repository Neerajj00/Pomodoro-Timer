import React from 'react'

function Dailyplanner({ isActive }) {
  return (
    <div className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        height="48"
        width="48"
        className={`h-[20px] w-[20px] ${isActive ? "fill-amber-300" : " fill-zinc-700 group-hover:fill-zinc-400 "}`}
      >
        <g>
          <path
            d="M43 6h-5.5a0.5 0.5 0 0 1 -0.5 -0.5V2a2 2 0 0 0 -4 0v9.5a1.5 1.5 0 0 1 -3 0V7a1 1 0 0 0 -1 -1H16.5A0.5 0.5 0 0 1 16 5.5V2a2 2 0 0 0 -4 0v9.5a1.5 1.5 0 0 1 -3 0V7A1 1 0 0 0 8 6H5a4 4 0 0 0 -4 4v34a4 4 0 0 0 4 4h38a4 4 0 0 0 4 -4V10a4 4 0 0 0 -4 -4Zm0 37a1 1 0 0 1 -1 1H6a1 1 0 0 1 -1 -1v-24A1 1 0 0 1 6 18h36a1 1 0 0 1 1 1Z"
            
            strokeWidth="1"
          />
          <path
            d="M24 21a10 10 0 1 0 10 10 10 10 0 0 0 -10 -10Zm5.66 8 -4.84 6.44a2.76 2.76 0 0 1 -4.16 0.3l-2.5 -2.5a1.5 1.5 0 1 1 2.12 -2.12l2.3 2.3 4.68 -6.22a1.5 1.5 0 0 1 2.4 1.8Z"
            strokeWidth="1"
          />
        </g>
      </svg>
    </div>
    )
}

export default Dailyplanner