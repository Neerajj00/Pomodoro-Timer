import React, { useState, useEffect } from "react";
import { createContext } from "react";

// Create a context
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  // state that handles the size of the window used for showing play button svg on button when screen size is smalled
  const [isWidthSmaller, setIsWidthSmaller] = useState(false);

  const [selectedSound, setSelectedSound] = useState("rooster.wav"); // default
  const [audioPlayer, setAudioPlayer] = useState(null);
  const sounds = ["rooster.wav", "digital.wav", "emergency.wav", "fire.wav"];
  const [isFullScreen, setisFullScreen] = useState(false);

  const [isInitialState , setIsInitialState] = useState(true); // timer ka intitial state

  const playSound = (sound) => {
    if (audioPlayer) {
      audioPlayer.pause();
      setAudioPlayer(null);
    }
    const newAudio = new Audio(`/audio/${sound}`);
    newAudio.currentTime = 0;
    newAudio.play().catch((error) => {
      console.error("Audio play failed", error);
    });
    setAudioPlayer(newAudio);
  };
  const stopPlayingSound = () => {
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      setAudioPlayer(null);
    }
  };
  // function to check the size of the window
  function checkScreenSize() {
    setIsWidthSmaller(window.innerWidth < 640);
  }
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // state that handles the menu overlay
  const [displayMenuOverlay, setDisplayMenuOverlay] = useState(false);

  // function to handle the menu overlay
  function handleMenuOverlay() {
    setDisplayMenuOverlay((prev) => !prev);
  }
  // this function provokes when user click on a link on menuoverlay so this closes the menuoverlay
  function handleMenuClose() {
    if (displayMenuOverlay) {
      setDisplayMenuOverlay(false);
    }
  }

  // state that handles the side bar menu open and close
  const [menuOpen, setMenuOpen] = useState(false);

  // toggle sidebar menu
  function handleMenuToggle() {
    setMenuOpen((prev) => !prev);
    console.log("Toggled Menu:", menuOpen);
  }

  // main functionality starts here
  const now = new Date();

  const [is24Hr, setis24Hr] = useState(false);
  const [hour, setHour] = useState(() => now.getHours());
  const [minute, setMinute] = useState(() =>
    now.getMinutes().toString().padStart(2, "0")
  );
  const [ampm, setAmpm] = useState(() => (now.getHours() >= 12 ? "PM" : "AM"));

  const [day] = useState(() =>
    now.toLocaleDateString("en-US", { weekday: "long" })
  );
  const [date] = useState(() => now.getDate().toString().padStart(2, 0));
  const [month] = useState(() =>
    now.toLocaleDateString("en-US", { month: "long" })
  );
  const [year] = useState(() => now.getFullYear());

  const handle24HrChange = () => {
    setis24Hr(!is24Hr);
  };
  const [displayAdjustManuallyOverlay, setDisplayAdjustManuallyOverlay] =
    useState(false);

  function handleAdjustManuallyOverlay() {
    setDisplayAdjustManuallyOverlay((prev) => !prev);
  }

  const [breakTimeOb, setBreakTimeOb] = useState({
    Focus: { time: 25 * 60 },
    "Short Break": { time: 5 * 60 },
    "Long Break": { time: 15 * 60 },
  });

  const [Time, setTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState("Focus");
  const [sessionStartTime, setSessionStartTime] = useState(breakTimeOb[breakTime].time);

  const [TimerOverlay, setTimerOverlay] = useState(false)

  return (
    <GlobalContext.Provider
      value={{
        isInitialState , setIsInitialState,
        TimerOverlay, setTimerOverlay,
        sounds,
        isFullScreen, setisFullScreen,
        sessionStartTime, setSessionStartTime,
        stopPlayingSound,
        selectedSound,
        setSelectedSound,
        playSound,
        Time,
        setTime,
        breakTime,
        setBreakTime,
        breakTimeOb,
        setBreakTimeOb,
        displayAdjustManuallyOverlay,
        setDisplayAdjustManuallyOverlay,
        handleAdjustManuallyOverlay,
        handle24HrChange,
        day,
        date,
        month,
        year,
        hour,
        minute,
        setHour,
        setMinute,
        is24Hr,
        setis24Hr,
        ampm,
        setAmpm,
        isWidthSmaller,
        setIsWidthSmaller,
        menuOpen,
        setMenuOpen,
        displayMenuOverlay,
        setDisplayMenuOverlay,
        handleMenuClose, // function
        checkScreenSize, // function
        handleMenuOverlay, //function
        handleMenuToggle, // function
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
