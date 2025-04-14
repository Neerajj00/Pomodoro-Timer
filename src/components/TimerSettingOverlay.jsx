import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";
import { Check, Play, X } from "lucide-react";

function TimerSettingOverlay() {
  const {
    stopPlayingSound,
    playSound,
    selectedSound,
    setSelectedSound,
    sounds,
    setTimerOverlay,
  } = useContext(GlobalContext);

  const handleSoundSelect = (sound) => {
    setSelectedSound(sound);
    playSound(sound);
  };

  return (
    <div className="w-full rounded-lg fixed inset-0 flex items-center justify-center bg-zinc-800/90 z-50 ">
      <div className="w-[300px]  sm:w-[450px] shadow rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-400">
        <div className="flex justify-between items-center mb-3">
          <p>Play a chime sound during the timer</p>
          {/* Cross Button */}
          <button
            onClick={() => {
              setTimerOverlay(false);
              stopPlayingSound();
            }}
            className=" text-gray-400 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
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
    </div>
  );
}

export default TimerSettingOverlay;
