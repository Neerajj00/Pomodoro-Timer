import { X } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/Context';

function TimerPresetOverlay() {
    const {setPreset , setIsTimerPresetOverlay} = useContext(GlobalContext);
    const [tempTime , setTempTime] = useState(0);
    const [tempTimeMode , setTempTimeMode] = useState("min");

    function handleUpdateSettings() {
        if (tempTimeMode === "min") {
            setPreset((prev) => [...prev, { label: `${tempTime} min`, value: tempTime, lastName: "min" }]);
        } else {
            setPreset((prev) => [...prev, { label: `${tempTime} hour`, value: tempTime, lastName: "hour" }]);
        }
        setTempTime(0);
        setIsTimerPresetOverlay(false);
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="relative bg-zinc-900 p-6 rounded-lg w-96">
            {/* Cross Button */}
            <button
              onClick={() => {
                setIsTimerPresetOverlay(false);
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              <X size={20} />
            </button>
    
            {/* Time Inputs */}
            <div className="flex flex-col gap-4">
                <div>
                  <label className="text-gray-400 text-sm">Enter the Time</label>
                  <input
                    type="number"
                    value={tempTime}
                    onChange={(e) => {
                      const newMinutes = Math.max(0, e.target.value);
                      setTempTime(newMinutes);
                    }}
                    className="w-full mt-1 p-2 rounded bg-zinc-800 text-white outline-none"
                  />
                </div>
            </div>
    
            <div className="mt-6 mb-6">
              <label className="text-gray-400 text-sm mb-2 block">
                Select Time Mode:
              </label>
              <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setTempTimeMode("min")}
                    className={`flex cursor-pointer items-center rounded-full px-2.5 py-2 text-xs uppercase tracking-wide text-zinc-900 ${
                      tempTimeMode === 'min' ? "bg-zinc-100" : "bg-zinc-600"
                    } `}
                  >
                    Minutes
                  </button>
                  <button
                    onClick={() => setTempTimeMode("hour")}
                    className={`flex cursor-pointer items-center rounded-full px-2.5 py-2 text-xs uppercase tracking-wide text-zinc-900 ${
                      tempTimeMode === 'hour' ? "bg-zinc-100" : "bg-zinc-600"
                    } `}
                  >
                    Hour
                  </button>
              </div>
            </div>
    
            <button
              onClick={handleUpdateSettings}
              className="w-full bg-zinc-700 text-white p-2 rounded hover:bg-zinc-600 transition"
            >
              Update Settings
            </button>
          </div>
        </div>
      );
}

export default TimerPresetOverlay