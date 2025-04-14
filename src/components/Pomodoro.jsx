
// Pomodoro.jsx
import React, { useContext } from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import { GlobalContext } from "../context/Context";
import LeftPartOfPomodoro from "./LeftPartOfPomodoro";
import RightPartOfPomodoro from './RightPartOfPomodoro';

function Pomodoro() {
  const {
    isFullScreen,
  } = useContext(GlobalContext);

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

        <RightPartOfPomodoro/>
      </div>
    </div>
  );
}

export default Pomodoro;