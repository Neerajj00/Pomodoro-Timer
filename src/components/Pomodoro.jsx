
// Pomodoro.jsx
import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import { GlobalContext } from "../context/Context";
import LeftPartOfPomodoro from "./LeftPartOfPomodoro";
import RightPartOfPomodoro from './RightPartOfPomodoro';
import { useLocation } from "react-router-dom";

function Pomodoro() {
  const {
    isFullScreen,setIsInitialState,setTime,setSessionStartTime,
  } = useContext(GlobalContext);
  const location = useLocation();


  useEffect(() => {
    document.title = "Pomodoro - Productivity Timer";
    setIsInitialState(true);
    setTime(1500);  // 25 minutes
    // setSessionStartTime(1500);
  }, []);
  
  

  return (
    <div className="flex pomodoro flex-col lg:h-[100vh] w-full">
      {!isFullScreen && <Navbar
        NavbarButton={NavbarButton}
        leftMostText={"Pomodoro"}
        firstButtonText={"Personal"}
        secondButtonText={"General"}
      />}

      <div className="h-full flex flex-1 flex-grow flex-col-reverse lg:flex-row gap-3 p-3 ">
        {!isFullScreen && <LeftPartOfPomodoro/>}

        <RightPartOfPomodoro  key={location.pathname}/>
      </div>
    </div>
  );
}

export default Pomodoro;