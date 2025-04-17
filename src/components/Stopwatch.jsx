import React, { useContext } from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import Button from "./Button";
import BoxContainer from "./BoxContainer";
import FullscreenSVG from './../svg/FullscreenSVG';
import SmallScreenSVG from './../svg/SmallScreenSVG';
import { GlobalContext } from "../context/Context";

function Stopwatch() {
  const {isFullScreen} = useContext(GlobalContext);
  return (
    <div className="flex flex-col h-[100vh] w-full">
      {!isFullScreen && <Navbar
        NavbarButton={NavbarButton}
        leftMostText={"Stopwatch"}
      />}

      {/* main content */}
      <div className="h-full flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3 ">
        {/* leftpart */}
        <BoxContainer
          classes={
            "w-full flex item-center justify-between flex-col  "
          }
        >
          <div className="w-full flex gap-1 items-end justify-end">
        {!isFullScreen ? <FullscreenSVG /> : <SmallScreenSVG />}
      </div>
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
        {!isFullScreen && <BoxContainer
          classes={"sm:h-[192px] sm:h-full h-full w-full lg:w-[620px] bg-amber-400"}
        >
          
        </BoxContainer>}
      </div>
    </div>
  );
}

export default Stopwatch;
