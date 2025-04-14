import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import Button from "./Button";
import BoxContainer from "./BoxContainer";
import TimerInitialState from "./TimerInitialState";
import { GlobalContext } from "../context/Context";
import RightSideOfTimer from './RightSideOfTimer';

function Timer() {
  const { isFullScreen } = useContext(GlobalContext);

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

  return (
    <div className="flex flex-col h-[100vh] w-full">
      {!isFullScreen && <Navbar NavbarButton={NavbarButton} leftMostText={"Timer"} />}

      {/* main content */}
      <div className="h-full flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3 ">
        {/* leftpart */}
        <TimerInitialState />

        {/* right part */}
        <RightSideOfTimer preset={preset} />
      </div>
    </div>
  );
}

export default Timer;
