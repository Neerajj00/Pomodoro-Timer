import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/Context";
import { X } from "lucide-react"; // (if you have lucide-react, else use plain text ×)

function AdjustManuallyOverlay() {
  const { handleAdjustManuallyOverlay, setBreakTimeOb, breakTimeOb ,setTime , breakTime } =
    useContext(GlobalContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="relative bg-zinc-900 p-6 rounded-lg w-96">
        {/* Cross Button */}
        <button
          onClick={handleAdjustManuallyOverlay}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
        >
          <X size={20} />
          {/* OR if you don't have lucide-react installed, just use: × */}
          {/* × */}
        </button>

        <div className="flex-1 gap-4">
          <label className="text-gray-400 text-sm">
            Pomodoro duration (minutes)
          </label>
          <input
            type="number"
            value={breakTimeOb["Focus"].time / 60}
            onChange={(e) => {
              const newTime = e.target.value * 60; // convert to seconds
            
              setBreakTimeOb((prev) => ({
                ...prev,
                "Focus": {
                  ...prev["Focus"],
                  time: newTime,
                },
              }));
            
              if (breakTime === "Focus") {
                setTime(newTime);
              }
            }}
            
            className="w-full mt-1 mb-4 p-2 rounded bg-zinc-800 text-white outline-none"
          />
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="text-gray-400 text-sm">Short break (min)</label>
            <input
              type="number"
              value={breakTimeOb["Short Break"].time / 60}
              onChange={(e) => {
                const newTime = e.target.value * 60; // convert to seconds
              
                setBreakTimeOb((prev) => ({
                  ...prev,
                  "Short Break": {
                    ...prev["Short Break"],
                    time: newTime,
                  },
                }));
              
                if (breakTime === "Short Break") {
                  setTime(newTime);
                }
              }}
              className="w-full p-2 rounded bg-zinc-800 text-white outline-none mt-1"
            />
          </div>
          <div className="flex-1">
            <label className="text-gray-400 text-sm">Long break (min)</label>
            <input
              type="number"
              value={breakTimeOb["Long Break"].time / 60}
              onChange={(e) => {
                const newTime = e.target.value * 60; // convert to seconds
              
                setBreakTimeOb((prev) => ({
                  ...prev,
                  "Long Break": {
                    ...prev["Long Break"],
                    time: newTime,
                  },
                }));
              
                if (breakTime === "Long Break") {
                  setTime(newTime);
                }
              }}
              className="w-full p-2 rounded bg-zinc-800 text-white outline-none mt-1"
            />
          </div>
        </div>

        <button
          onClick={handleAdjustManuallyOverlay}
          className="w-full bg-zinc-700 text-white p-2 rounded hover:bg-zinc-600 transition"
        >
          Update Settings
        </button>
      </div>
    </div>
  );
}

export default AdjustManuallyOverlay;
