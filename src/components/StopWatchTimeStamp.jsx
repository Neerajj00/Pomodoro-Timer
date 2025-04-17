import React from "react";

function StopWatchTimeStamp({ item }) {
  return (
    <div>
      <div className="flex cursor-default flex-col items-start justify-between px-5 py-1.5 text-sm text-zinc-500 sm:flex-row sm:items-center">
        <span className="flex w-auto items-center text-left uppercase sm:block sm:w-[30px] sm:text-right">
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
            className="lucide lucide-hash mr-2 block h-[14px] w-[14px] text-zinc-700 sm:hidden"
          >
            <line x1="4" x2="20" y1="9" y2="9"></line>
            <line x1="4" x2="20" y1="15" y2="15"></line>
            <line x1="10" x2="8" y1="3" y2="21"></line>
            <line x1="16" x2="14" y1="3" y2="21"></line>
          </svg>
          {item.id}
        </span>
        <span className="flex w-auto items-center justify-end gap-1.5 lowercase tabular-nums sm:w-[180px]">
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
            className="lucide lucide-hourglass mr-0.5 block h-[14px] w-[14px] text-zinc-700 sm:hidden"
          >
            <path d="M5 22h14"></path>
            <path d="M5 2h14"></path>
            <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
            <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
          </svg>
          <span className="block w-[70px] text-xs uppercase text-zinc-600 sm:hidden">
            Duration
          </span>
          {item.duration.minutes > 0 && <span className="text-zinc-400">
          {item.duration.minutes}<span className="ml-0.5 text-zinc-600">m</span>
          </span>}
          <span className="text-zinc-400">
          {item.duration.seconds}<span className="ml-0.5 text-zinc-600">s</span>
          </span>
          <span className="text-zinc-400">
          {item.duration.milliseconds}<span className="ml-0.5 text-zinc-600">ms</span>
          </span>
        </span>
        <span className="flex w-auto items-center justify-end gap-1.5 lowercase tabular-nums sm:w-[180px]">
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
            className="lucide lucide-flag mr-0.5 block h-[14px] w-[14px] text-zinc-700 sm:hidden"
          >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <line x1="4" x2="4" y1="22" y2="15"></line>
          </svg>
          <span className="block w-[70px] text-xs uppercase text-zinc-600 sm:hidden">
            Overall
          </span>
          {item.overallTime.minutes > 0 && <span className="text-zinc-400">
          {item.overallTime.minutes}<span className="ml-0.5 text-zinc-600">m</span>
          </span>}
          <span className="text-zinc-400">
          {item.overallTime.seconds}<span className="ml-0.5 text-zinc-600">s</span>
          </span>
          <span className="text-zinc-400">
          {item.overallTime.milliseconds}<span className="ml-0.5 text-zinc-600">ms</span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default StopWatchTimeStamp;
