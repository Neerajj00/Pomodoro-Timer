import React from 'react'
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import PendingSVG from "./../svg/PendingSVG";
import CompletedSVG from "./../svg/CompletedSVG";
import SideArrow from "./../svg/SideArrow";
import CalendarSVG from "./../svg/CalendarSVG";
import Button from "./Button";
import AdjustManually from "./../svg/AdjustManually";
import Fullscreen from "./../svg/Fullscreen";
import TimingButton from "./TimingButton";
import BoxContainer from "./BoxContainer";

function Dailyplanner() {
  return (
      <div className="flex flex-col h-[100vh] w-full">
        <Navbar NavbarButton={NavbarButton} leftMostText={"20:20:20"} />
  
        {/* main content */}
        <div className="h-full flex flex-1 flex-grow flex-col-reverse lg:flex-row gap-3 p-3 ">
          {/* rightpart */}
          {/* <div className=" h-full flex p-4 items-center flex-col justify-between w-full rounded-2xl  bg-zinc-900  "> */}
          <BoxContainer classes={"h-full flex p-4 items-center flex-col justify-between w-full flex-1 border border-zinc-800"}>
            <div className="w-full flex gap-1 items-end justify-end">
              <AdjustManually />
              <Fullscreen />
            </div>
  
            <div className="w-[307px] flex flex-col ">
              <div className="w-full flex flex-col items-center justify-center p-2">
                <div className="flex items-center justify-center gap-2 w-full">
                  <Button text={"Fixed Time"} />
                  <Button text={"Infinite Loop"} />
                </div>
                <div className=" text-5xl sm:text-8xl font-sans font-bold text-zinc-50 flex text-end gap-3 py-10 px-2">
                  <p>25</p>
                  <p>:</p>
                  <p>00</p>
                </div>
                <div className="rounded-xl bg-zinc-800 w-4/5 sm:w-full h-1" />
                <div className="flex gap-2 justify-evenly my-3 w-full">
                  <TimingButton time={"25"} />
                  <TimingButton time={"10"} />
                  <TimingButton time={"5"} />
                  <TimingButton time={"1"} />
                </div>
                <div className="mt-3">
                  <Button text={"Start"} isPlayButton={true} />
                </div>
              </div>
            </div>
  
            <div>
              <p className="text-zinc-700">Focus while caring for your eyes ❤</p>
            </div>
          </BoxContainer>
        </div>
      </div>
    );
}

export default Dailyplanner