import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/Context";
import { X } from "lucide-react";

function AdjustManuallyOverlay() {
  const {
    stopPlayingSound,
    playSound,
    selectedSound,
    setSelectedSound,
    handleAdjustManuallyOverlay,
    setBreakTimeOb,
    breakTimeOb,
    setTime,
    breakTime,
  } = useContext(GlobalContext);

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
        <div className="flex-1 gap-4">
          <label className="text-gray-400 text-sm">
            Pomodoro duration (minutes)
          </label>
          <input
            type="number"
            value={breakTimeOb["Focus"].time / 60}
            onChange={(e) => {
              const newTime = e.target.value * 60;
              setBreakTimeOb((prev) => ({
                ...prev,
                Focus: {
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
                const newTime = e.target.value * 60;
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
                const newTime = e.target.value * 60;
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

        {/* Sound Selection */}
        <div className="mb-6">
          <label className="text-gray-400 text-sm mb-2 block">
            Select Alarm Sound:
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleSoundSelect("rooster.wav")}
              className={`p-2 rounded ${
                selectedSound === "rooster.wav" ? "bg-green-600" : "bg-zinc-700"
              } text-white hover:bg-zinc-600 transition`}
            >
              Rooster
            </button>
            <button
              onClick={() => handleSoundSelect("digital.wav")}
              className={`p-2 rounded ${
                selectedSound === "digital.wav" ? "bg-green-600" : "bg-zinc-700"
              } text-white hover:bg-zinc-600 transition`}
            >
              Digital
            </button>
            <button
              onClick={() => handleSoundSelect("emergency.wav")}
              className={`p-2 rounded ${
                selectedSound === "emergency.wav" ? "bg-green-600" : "bg-zinc-700"
              } text-white hover:bg-zinc-600 transition`}
            >
              Emergency
            </button>
            <button
              onClick={() => handleSoundSelect("fire.wav")}
              className={`p-2 rounded ${
                selectedSound === "fire.wav" ? "bg-green-600" : "bg-zinc-700"
              } text-white hover:bg-zinc-600 transition`}
            >
              Fire
            </button>
          </div>
        </div>

        <button
          onClick={() => {
            handleAdjustManuallyOverlay();stopPlayingSound();
          }}
          className="w-full bg-zinc-700 text-white p-2 rounded hover:bg-zinc-600 transition"
        >
          Update Settings
        </button>
      </div>
    </div>
  );
}

export default AdjustManuallyOverlay;
