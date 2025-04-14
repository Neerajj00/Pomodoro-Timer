import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import TimerInitialState from "./TimerInitialState";
import { GlobalContext } from "../context/Context";
import RightSideOfTimer from "./RightSideOfTimer";
import RightPartOfPomodoro from "./RightPartOfPomodoro";
import { useLocation } from "react-router-dom";

function Timer() {
  const {
    isFullScreen,
    setTime,
    setSessionStartTime,
    isInitialState,
    setIsInitialState,
  } = useContext(GlobalContext);
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  const location = useLocation();

  const [preset, setPreset] = useState([
    { label: "5 min", value: 5 ,lastName : "min"},
    { label: "10 min", value: 10 ,lastName : "min"},
    { label: "15 min", value: 15 ,lastName : "min"},
    { label: "20 min", value: 20 ,lastName : "min"},
    { label: "30 min", value: 30 ,lastName : "min"},
    { label: "1 hour", value: 1 ,lastName : "hour"},
    { label: "2 hour", value: 2 ,lastName : "hour"},
    { label: "3 hour", value: 3 ,lastName : "hour"},
  ]);

  function setTimerFromTemp() {
    const totalSeconds =
      (parseInt(hour) || 0) * 3600 +
      (parseInt(minute) || 0) * 60 +
      (parseInt(second) || 0);

    if (totalSeconds > 0) {
      setTime(totalSeconds);
      setSessionStartTime(totalSeconds);
    }
  }

  useEffect(() => {
    // reset Timer page manually
    setIsInitialState(true);
    setTime(0); // Timer page usually starts empty
    setSessionStartTime(0);
  }, []);

  useEffect(() => {
    setTimerFromTemp();
  }, [hour, minute, second, isInitialState]);

  return (
    <div className="flex flex-col h-[100vh] w-full">
      {!isFullScreen && (
        <Navbar NavbarButton={NavbarButton} leftMostText={"Timer"} />
      )}

      {/* main content */}
      <div className="h-full flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3 ">
        {/* leftpart */}
        {isInitialState ? (
          <TimerInitialState
            hour={hour}
            setHour={setHour}
            minute={minute}
            setMinute={setMinute}
            second={second}
            setSecond={setSecond}
            setIsInitialState={setIsInitialState}
          />
        ) : (
          <RightPartOfPomodoro isUsedForTimer={true} key={location.pathname} />
        )}
        {/* right part */}
        {!isFullScreen && <RightSideOfTimer preset={preset} setHour={setHour} setMinute={setMinute} />}
      </div>
    </div>
  );
}

export default Timer;
