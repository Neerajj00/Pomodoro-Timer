import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/Context";
import { X } from "lucide-react"; // (if you have lucide-react, else use plain text ×)

function AdjustManuallyOverlay() {
  const { handleAdjustManuallyOverlay } = useContext(GlobalContext);
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

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
          <label className="text-gray-400 text-sm">Pomodoro duration (minutes)</label>
          <input
            type="number"
            value={pomodoro}
            onChange={(e) => setPomodoro(e.target.value)}
            className="w-full mt-1 mb-4 p-2 rounded bg-zinc-800 text-white outline-none"
          />
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="text-gray-400 text-sm">Short break (min)</label>
            <input
              type="number"
              value={shortBreak}
              onChange={(e) => setShortBreak(e.target.value)}
              className="w-full p-2 rounded bg-zinc-800 text-white outline-none mt-1"
            />
          </div>
          <div className="flex-1">
            <label className="text-gray-400 text-sm">Long break (min)</label>
            <input
              type="number"
              value={longBreak}
              onChange={(e) => setLongBreak(e.target.value)}
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
