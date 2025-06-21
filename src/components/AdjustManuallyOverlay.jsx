import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/Context";
import { Check, Play, X } from "lucide-react";

function AdjustManuallyOverlay() {
  const {
    setSessionStartTime,
    stopPlayingSound,
    playSound,
    selectedSound,
    setSelectedSound,
    handleAdjustManuallyOverlay,
    setBreakTimeOb,
    breakTimeOb,
    setTime,
    breakTime,
    sounds,
  } = useContext(GlobalContext);

  const [localBreakTimes, setLocalBreakTimes] = useState({
    Focus: breakTimeOb["Focus"].time / 60,
    "Short Break": breakTimeOb["Short Break"].time / 60,
    "Long Break": breakTimeOb["Long Break"].time / 60,
  });

  function handleUpdateSettings() {
    // 2. Update breakTimeOb fully
    setBreakTimeOb({
      Focus: { time: localBreakTimes["Focus"] * 60 },
      "Short Break": { time: localBreakTimes["Short Break"] * 60 },
      "Long Break": { time: localBreakTimes["Long Break"] * 60 },
    });

    // 3. Update sessionStartTime and Time for currently active session
    if (breakTime === "Focus") {
      setTime(localBreakTimes["Focus"] * 60);
      // setSessionStartTime(localBreakTimes["Focus"] * 60);
    } else if (breakTime === "Short Break") {
      setTime(localBreakTimes["Short Break"] * 60);
      // setSessionStartTime(localBreakTimes["Short Break"] * 60);
    } else if (breakTime === "Long Break") {
      setTime(localBreakTimes["Long Break"] * 60);
      // setSessionStartTime(localBreakTimes["Long Break"] * 60);
    }

    // 4. Close overlay
    handleAdjustManuallyOverlay();
    stopPlayingSound();
  }

  // Array for looping
  const timeOptions = [
    { label: "Pomodoro duration (minutes)", key: "Focus" },
    { label: "Short break (min)", key: "Short Break" },
    { label: "Long break (min)", key: "Long Break" },
  ];

  const handleSoundSelect = (sound) => {
    setSelectedSound(sound);
    playSound(sound);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="relative bg-zinc-900 p-6 rounded-lg w-96">
        {/* Cross Button */}
        <button
          onClick={() => {
            handleAdjustManuallyOverlay();
            stopPlayingSound();
          }}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
        >
          <X size={20} />
        </button>

        {/* Time Inputs */}
        <div className="flex flex-col gap-4">
          {timeOptions.map((option) => (
            <div key={option.key}>
              <label className="text-gray-400 text-sm">{option.label}</label>
              <input
                type="number"
                placeholder="Enter Time"
                value={localBreakTimes[option.key] === 0 ? "" : localBreakTimes[option.key]}
                onChange={(e) => {
                  const newMinutes = Math.max(0, e.target.value);
                  setLocalBreakTimes((prev) => ({
                    ...prev,
                    [option.key]: newMinutes,
                  }));
                }}
                className="w-full mt-1 p-2 rounded bg-zinc-800 text-white outline-none"
              />
            </div>
          ))}
        </div>

        {/* Sound Selection */}
        <div className="mt-6 mb-6">
          <label className="text-gray-400 text-sm mb-2 block">
            Select Alarm Sound:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {sounds.map((sound) => (
              <button
                key={sound}
                onClick={() => handleSoundSelect(sound)}
                className={`flex cursor-pointer items-center rounded-full px-2.5 py-0.5 text-xs uppercase tracking-wide text-zinc-900 ${
                  selectedSound === sound ? "bg-zinc-100" : "bg-zinc-600"
                } `}
              >
                {selectedSound === sound ? (
                  <Check className="w-4 h-4 mr-1.5" />
                ) : (
                  <Play className="w-4 h-4 mr-1.5" />
                )}
                {sound.slice(0, -4) /* Remove the last 4 characters */}
              </button>
            ))}
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

export default AdjustManuallyOverlay;
