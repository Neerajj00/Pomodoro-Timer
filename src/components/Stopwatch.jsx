import React from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import Button from "./Button";
import AdjustManually from "./../svg/AdjustManually";
import Fullscreen from "./../svg/Fullscreen";
import BoxContainer from "./BoxContainer";

function Stopwatch() {
  return (
    <div className="flex flex-col h-[100vh] w-full">
      <Navbar
        NavbarButton={NavbarButton}
        leftMostText={"Stopwatch"}
      />

      {/* main content */}
      <div className="h-full flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3 ">
        {/* leftpart */}
        <BoxContainer
          classes={
            "w-full flex item-center justify-between flex-col  "
          }
        >
            <div className="h-[200px]  flex w-full flex-col lg:h-full items-center justify-center">
              <p class="mb-3 flex flex-row gap-2 font-mono text-3xl font-medium tabular-nums md:mb-5 md:text-5xl lg:mb-7 lg:gap-5 lg:text-7xl">
                <span>
                  00
                  <span class="ml-1 text-lg text-zinc-500 md:text-2xl">s</span>
                </span>
                <span>
                  000
                  <span class="ml-1 text-lg text-zinc-500 md:text-2xl">ms</span>
                </span>
              </p>
              <Button text={"Start Timer"}/>
            </div>

          
        </BoxContainer>

        {/* right part */}
        <BoxContainer
          classes={"sm:h-[192px] sm:h-full h-full w-full lg:w-[620px] bg-amber-400"}
        >
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
          </div>
        </BoxContainer>
      </div>
    </div>
  );
}

export default Stopwatch;
