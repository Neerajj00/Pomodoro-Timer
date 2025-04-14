import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import Button from "./Button";
import BoxContainer from "./BoxContainer";
import TimerInitialState from "./TimerInitialState";
import { GlobalContext } from "../context/Context";
import RightSideOfTimer from "./RightSideOfTimer";
import RightPartOfPomodoro from "./RightPartOfPomodoro";

function Timer() {
  const { isFullScreen,setTime,setSessionStartTime } = useContext(GlobalContext);
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [isInitialState , setIsInitialState] = useState(true);

  const [preset, setPreset] = useState([
    "5 min",
    "10 min",
    "15 min",
    "20 min",
    "30 min",
    "1 hour",
    "2 hour",
    "3 hour",
  ]);

  function setTimerFromTemp() {
    const totalSeconds =
      (parseInt(hour) || 0) * 3600 +
      (parseInt(minute) || 0) * 60 +
      (parseInt(second) || 0);
  
    console.log("Timer set:", totalSeconds);
  
    if (totalSeconds > 0) {
      setTime(totalSeconds);
      setSessionStartTime(totalSeconds);
    }
  }
  

  useEffect(()=>{
    setTimerFromTemp();
    console.log("hour:", hour, "minute:", minute, "second:", second);
  },[hour, minute, second]);

  return (
    <div className="flex flex-col h-[100vh] w-full">
      {!isFullScreen && (
        <Navbar NavbarButton={NavbarButton} leftMostText={"Timer"} />
      )}

      {/* main content */}
      <div className="h-full flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3 ">
        {/* leftpart */}
        { isInitialState ? <TimerInitialState
          hour={hour}
          setHour={setHour}
          minute={minute}
          setMinute={setMinute}
          second={second}
          setSecond={setSecond}
          setIsInitialState={setIsInitialState}
        /> : <RightPartOfPomodoro isInitialState={isInitialState}/>
        }
        {/* right part */}
        <RightSideOfTimer preset={preset} />
      </div>
    </div>
  );
}

export default Timer;
