import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";
import { CrossIcon, X } from "lucide-react";

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
      <div className="  w-[450px] shadow rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-sm text-zinc-400">
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
              className={`flex cursor-pointer items-center rounded-full px-2.5 py-0.5 text-xs uppercase tracking-wide text-zinc-900 ${selectedSound === sound ? 'bg-zinc-100' : 'bg-zinc-600'} `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide ${selectedSound === sound ? 'lucide-check' : 'CrossIcon'} mr-1.5`}
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>{" "}
              {sound.slice(0, -4) /* Remove the last 4 characters */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimerSettingOverlay;
