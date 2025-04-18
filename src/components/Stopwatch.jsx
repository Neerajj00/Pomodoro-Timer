import React, { useContext, useRef, useState } from "react";
import Navbar from "./Navbar";
import NavbarButton from "./NavbarButton";
import Button from "./Button";
import BoxContainer from "./BoxContainer";
import FullscreenSVG from "./../svg/FullscreenSVG";
import SmallScreenSVG from "./../svg/SmallScreenSVG";
import { GlobalContext } from "../context/Context";
import StopWatchTimeStamp from "./StopWatchTimeStamp";
import PlayButtonSVG from "./../svg/PlayButtonSVG";
import PauseButtonSVG from "./../svg/PauseButtonSVG";
import ResetButtonSVG from "./../svg/ResetButtonSVG";
import LapSVG from './../svg/LapSVG';

function Stopwatch() {
  const { isFullScreen } = useContext(GlobalContext);
  const [TimeStamp, setTimeStamp] = useState([
    
  ]);

  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const [TimeStarted, setTimeStarted] = useState(false);
  const [HasStarted, setHasStarted] = useState(false);
  const [IsPaused, setIsPaused] = useState(false);

  function startStopwatch() {
    setHasStarted(true);
    setTimeStarted(true);
    startTimeRef.current = Date.now() - timeElapsed;

    intervalRef.current = setInterval(() => {
      setTimeElapsed(Date.now() - startTimeRef.current);
      const elapsed = Date.now() - startTimeRef.current;
      const minutes = Math.floor((elapsed % 3600000) / 60000);
      const seconds = Math.floor((elapsed % 60000) / 1000);
      const milliseconds = Math.floor((elapsed % 1000) / 10);
      
    }, 10); // update every 10ms
  }

  function addLap() {
    const elapsed = Date.now() - startTimeRef.current;
  
    const overallTime = {
      minutes: Math.floor(elapsed / 60000),
      seconds: Math.floor((elapsed % 60000) / 1000),
      milliseconds: Math.floor((elapsed % 1000) / 10),
    };
  
    setTimeStamp((prev) => {
      const lastLap = prev[prev.length - 1];
      let duration;
  
      if (lastLap) {
        const lastElapsed =
          lastLap.overallTime.minutes * 60000 +
          lastLap.overallTime.seconds * 1000 +
          lastLap.overallTime.milliseconds * 10;
  
        const delta = elapsed - lastElapsed;
  
        duration = {
          minutes: Math.floor(delta / 60000),
          seconds: Math.floor((delta % 60000) / 1000),
          milliseconds: Math.floor((delta % 1000) / 10),
        };
      } else {
        // First lap — duration same as overall time
        duration = { ...overallTime };
      }
  
      const newLap = {
        id: prev.length + 1,
        overallTime,
        duration,
      };
  
      return [...prev, newLap];
    });
  }
  

  function stopStopwatch() {
    setIsPaused(true);
    setTimeStarted(false);
    clearInterval(intervalRef.current);
  }

  function resetStopwatch() {
    setTimeStamp([]);
    setHasStarted(false);
    setTimeStarted(false);
    setIsPaused(false);
    clearInterval(intervalRef.current);
    setTimeElapsed(0);
  }

  return (
    <div className="flex flex-col h-[100vh] w-full">
      {!isFullScreen && (
        <Navbar NavbarButton={NavbarButton} leftMostText={"Stopwatch"} />
      )}

      {/* main content */}
      <div className="h-full flex flex-1 flex-grow flex-col lg:flex-row gap-3 p-3 ">
        {/* leftpart */}
        <BoxContainer
          classes={"w-full flex item-center justify-between flex-col  "}
        >
          <div className="w-full flex gap-1 items-end justify-end">
            {!isFullScreen ? <FullscreenSVG /> : <SmallScreenSVG />}
          </div>
          <div className="h-[200px]  flex w-full flex-col lg:h-full items-center justify-center">
            <p className="mb-3 text-zinc-50 flex flex-row gap-2 font-mono text-3xl font-medium tabular-nums md:mb-5 md:text-5xl lg:mb-7 lg:gap-5 lg:text-7xl">
              {Math.floor(timeElapsed / 60000) > 0 && <span>
              {String(Math.floor(timeElapsed / 60000)).padStart(2, "0")}
                <span className="ml-1 text-lg text-zinc-500 md:text-2xl">
                  m
                </span>
              </span>}
              <span>
              {String(Math.floor((timeElapsed % 60000) / 1000)).padStart(2, "0")}
                <span className="ml-1 text-lg text-zinc-500 md:text-2xl">
                  s
                </span>
              </span>
              <span>
              {String(Math.floor((timeElapsed % 1000) / 10)).padStart(2, "0")}
                <span className="ml-1 text-lg text-zinc-500 md:text-2xl">
                  ms
                </span>
              </span>
            </p>
            <div className="mt-3 flex items-center gap-2">
              {!TimeStarted && !IsPaused && (
                <Button
                  onClick={() => startStopwatch()}
                  text={"Start"}
                  classes={"bg-zinc-800"}
                  isPlayButton={true}
                  svg={<PlayButtonSVG />}
                />
              )}

              {!TimeStarted && IsPaused && (
                <Button
                  onClick={() => startStopwatch()}
                  text={"Resume"}
                  classes={"bg-zinc-800"}
                  isPlayButton={true}
                  svg={<PlayButtonSVG />}
                />
              )}
              {TimeStarted && (
                <Button
                  onClick={() => addLap()}
                  text={"Lap"}
                  classes={"bg-zinc-800"}
                  isPlayButton={true}
                  svg={<LapSVG />}
                />
              )}

              {TimeStarted && (
                <Button
                  onClick={() => stopStopwatch()}
                  text={"Pause"}
                  classes={"bg-zinc-800"}
                  isPlayButton={true}
                  svg={<PauseButtonSVG />}
                />
              )}

              {HasStarted && (
                <Button
                  onClick={() => resetStopwatch()}
                  text={"Reset"}
                  classes={"bg-zinc-800"}
                  isPlayButton={true}
                  svg={<ResetButtonSVG />}
                />
              )}
            </div>
          </div>
        </BoxContainer>

        {/* right part */}
        {!isFullScreen && (
          <BoxContainer
            classes={
              "sm:h-[192px] p-0 sm:h-full h-full w-full lg:w-[620px] bg-amber-400"
            }
          >
            <div className="hidden items-center justify-between px-5 pb-2 pt-3 text-xs tracking-[0.15em] text-zinc-600 sm:flex">
              <span className="w-[30px] text-right uppercase">Lap</span>
              <span className="w-[180px] text-right uppercase">Lap Time</span>
              <span className="w-[180px] text-right uppercase">
                Overall Time
              </span>
            </div>
            {TimeStamp.length === 0 && (
              <div className="flex h-full items-center justify-center w-full text-md text-zinc-700">
                No laps yet
              </div>
            )}

            {TimeStamp &&
              TimeStamp.length > 0 &&
              TimeStamp
                .slice()
                .sort((a, b) => b.id - a.id)
                .map((item) => (
                  <StopWatchTimeStamp key={item.id} item={item} />
              ))}
              
          </BoxContainer>
        )}
      </div>
    </div>
  );
}

export default Stopwatch;
