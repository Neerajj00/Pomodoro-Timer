import React, { useState } from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import Button from "./Button";
import AdjustManually from "./../svg/AdjustManually";
import Fullscreen from "./../svg/Fullscreen";
import BoxContainer from "./BoxContainer";

function Timer() {

  const [preset, setPreset] = useState(["5 min" , "10 min" , "15 min" , "20 min" , "30 min" , "1 hour" , "2 hour" , "3 hour"]);

  return (
    <div className="flex flex-col h-[100vh] w-full">
      <Navbar
        NavbarButton={NavbarButton}
        leftMostText={"Timer"}
      />

      {/* main content */}
      <div className="h-full flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3 ">
        {/* leftpart */}
        <BoxContainer
          classes={
            "h-full flex p-4 items-center flex-col justify-between w-full flex-1 border border-zinc-800"
          }
        >
          <div className="w-full flex gap-1 items-end justify-end">
            <AdjustManually />
            <Fullscreen />
          </div>

          <div className="w-[307px] sm:w-[340px] items-center justify-center flex flex-col ">
            <div className="w-full flex flex-col items-center justify-center p-2">
              <div className="flex items-center justify-center gap-2 w-full">
                <p>Enter timer Duration Below</p>
              </div>
              <div className=" text-5xl sm:text-7xl font-sans font-bold text-zinc-50 flex text-end gap-4 pt-10 pb-6 px-2">
                <p>00</p>
                <p>:</p>
                <p>00</p>
                <p>:</p>
                <p>00</p>
              </div>
              <div className="flex text-[14px] sm:text-[20px] items-center justify-evenly sm:justify-between sm:gap-4 w-full">
                <p>Hour</p>
                <p>Minute</p>
                <p>Second</p>
              </div>
              <div className="mt-3">
                <Button
                  text={"Start Timer"}
                  isPlayButton={true}
                  playButtonAlways={true}
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-zinc-700">No sessions today</p>
          </div>
        </BoxContainer>

        {/* right part */}
        <BoxContainer classes={"sm:h-[192px] sm:h-full lg:w-[398px] bg-amber-400"}>
          <div className="h-full w-full flex flex-col">
            <button className="cursor-pointer my-1 flex items-center justify-center gap-1 rounded-full px-5  text-xs uppercase tracking-[0.15em] text-zinc-500 transition-all hover:text-zinc-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus mr-1"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>{" "}
              <span className="inline ">CREATE NEW PRESET</span>
            </button>

            <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-3 w-full flex-wrap items-center">
              {
                preset.map((item,index) => {
                  return (
                    <Button key={index} text={item}/>
                  )
                })
              }
            </div>

          </div>
        </BoxContainer>
      </div>
    </div>
  );
}

export default Timer;
