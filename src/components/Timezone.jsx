import React from "react";
import Navbar from "./Navbar";
import BoxContainer from "./BoxContainer";
import SideArrow from "../svg/SideArrow";
import Button from "./Button";
import TimingButton from "./TimingButton";
import NavbarButton from "./NavbarButton";
import PendingSVG from "../svg/PendingSVG";
import CompletedSVG from "../svg/CompletedSVG";
import CalendarSVG from "../svg/CalendarSVG";
import AdjustManually from "../svg/AdjustManually";
import Fullscreen from "../svg/Fullscreen";

function Timezone() {
  return (
    <div className="flex flex-col h-[100vh] w-full">
      <Navbar
        NavbarButton={NavbarButton}
        leftMostText={"Timezones"}
        firstButtonText={"Select Team"}
      />

      {/* main content */}
      <div className="h-full flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3 ">
        {/*  big size me leftpart small size me upar vala h */}
        <BoxContainer
          classes={
            "h-full flex p-4 items-center flex-col justify-between w-full flex-1 border border-zinc-800"
          }
        >
          <div className="w-[307px] flex flex-col items-center justify-center h-full">
            <div className="w-full flex flex-col items-center justify-center p-2">
              <div className="flex items-center justify-center w-full">
                <p className="text-[20px] font-sans text-zinc-400">
                  Calcutta, GMT
                </p>
              </div>
              {/* <div className=" text-5xl sm:text-9xl font-sans font-medium text-zinc-50 flex text-end gap-3 py-10 px-2"> */}
              <div className="flex items-end my-2.5 font-mono text-5xl font-semibold tabular-nums md:text-7xl lg:text-9xl">
                <p>25</p>
                <p>:</p>
                <p>00</p>
                <p className="ml-2 md:mb-2 lg:mb-4 font-sans text-lg mb-1 md:text-xl lg:text-2xl font-medium text-neutral-600">
                  PM
                </p>
              </div>
              <div className=" border-b-zinc-400 flex items-center justify-center ">
                <p className="mt-1 border-b border-dashed border-zinc-700 pb-0.5 text-base text-gray-400 transition-colors hover:text-gray-300 hover:border-zinc-500 lg:mt-2 lg:text-xl relative cursor-pointer">
                  Monday - April 07, 2025
                </p>
              </div>
            </div>
          </div>
        </BoxContainer>

        {/* big size me rightpart small size me niche vala h */}
        <BoxContainer
          classes={"h-[360px] md:h-[300px] lg:w-[398px] lg:h-full px-0 "}
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
              <span className="hidden sm:inline">
                Add City, Country, or Timezone
              </span>
              <span className="inline sm:hidden">Add a Timezone</span>
            </button>

            <div className=" flex flex-1 mt-1 flex-col" id="timezones">
              <button className="cursor-pointer flex items-center gap-2 px-2 py-2 text-zinc-400 transition-colors xl:gap-3.5 xl:px-4 bg-zinc-800 hover:bg-zinc-800">
                <span className="inline-grid w-full">
                  <span className="flex-1 truncate text-left text-sm sm:text-base">
                    Calcutta, India Standard Time
                  </span>
                </span>
                <span className="flex items-center gap-1.5 font-mono text-sm text-zinc-50 sm:text-base">
                  <span className="ml-0.5 flex text-base sm:text-lg">
                    <span>12</span>
                    <span className="mx-0.5 font-sans ">:</span>
                    <span>59</span>
                    <span className="ml-1 inline-block w-[31px] font-sans font-medium text-zinc-500">
                      PM
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </BoxContainer>
      </div>
    </div>
  );
}

export default Timezone;
