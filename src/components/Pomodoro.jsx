import React, { useContext, useEffect, useRef, useState } from "react";
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
import { GlobalContext } from "../context/Context";
import PauseButtonSVG from "../svg/PauseButtonSVG";
import PlayButtonSVG from "./../svg/PlayButtonSVG";
import ResetButtonSVG from "./../svg/ResetButtonSVG";

function Pomodoro() {
  const { date, month } = useContext(GlobalContext);
  const [Time, setTime] = useState(25 * 60);
  const [TimeStarted, setTimeStarted] = useState(false); // true = running
  const [HasStarted, setHasStarted] = useState(false); // true = if started once
  const [IsPaused, setIsPaused] = useState(false); // true = if paused
  const [breakTime, setBreakTime] = useState("Focus");
  const [breakTimeOb, setBreakTimeOb] = useState({
    Focus: { time: 25 * 60, isActive: true },
    "Short Break": { time: 5 * 60, isActive: false },
    "Long Break": { time: 15 * 60, isActive: false },
  });
  

  const intervalRef = useRef(null);

  function handleBreakTimeChange(buttonText) {
    setBreakTime(buttonText);
    if (buttonText == "Focus") {
      setTime(breakTimeOb[buttonText].time);
    }
    if (buttonText == "Short Break") {
      setTime(breakTimeOb[buttonText].time);
    }
    if (buttonText == "Long Break") {
      setTime(breakTimeOb[buttonText].time);
    }
  }
  function handleTimeUpdate(time) {
    let updateTime = parseInt(time) * 60;
    setTime((prev) => {
      return prev + updateTime;
    });
  }
  // Calculate progress width
function handleWidth() {
  const totalSeconds = breakTimeOb[breakTime].time;
  const percentage = ((totalSeconds - Time) / totalSeconds) * 100;
  return percentage;
}

  function start() {
    setTimeStarted(true);
    setHasStarted(true);
    setIsPaused(false); // no longer paused
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev > 0) return prev - 1;
        else {
          clearInterval(intervalRef.current);
          return 0;
        }
      });
    }, 1000);
  }

  function pause() {
    setTimeStarted(false);
    setIsPaused(true); // now paused
    clearInterval(intervalRef.current);
  }

  function reset() {
    clearInterval(intervalRef.current);
    setTimeStarted(false);
    setHasStarted(false);
    setIsPaused(false); // reset everything

    if (breakTime === "Focus") {
      setTime(breakTimeOb[breakTime].time);
    }
    if (breakTime === "Short Break") {
      setTime(breakTimeOb[breakTime].time);
    }
    if (breakTime === "Long Break") {
      setTime(breakTimeOb[breakTime].time);
    }
  }

  return (
    <div className="flex flex-col h-[100vh] w-full">
      <Navbar
        NavbarButton={NavbarButton}
        leftMostText={"Pomodoro"}
        firstButtonText={"Personal"}
        secondButtonText={"General"}
      />

      {/* main content */}
      <div className="h-full flex flex-1 flex-grow flex-col-reverse lg:flex-row gap-3 p-3 ">
        {/* leftpart */}
        <BoxContainer classes={"h-[192px] sm:h-full lg:w-[398px] bg-amber-400"}>
          <div className="h-full w-full flex flex-col">
            <header className="flex items-center justify-between">
              <div className="flex items-center text-center gap-2 ">
                <NavbarButton
                  text={"Pending"}
                  Icon={PendingSVG}
                  isArrow={false}
                  classes={
                    "h-full px-2 p-0.5 gap-1 text-[12px]  bg-zinc-800 rounded-md "
                  }
                />
                <NavbarButton
                  text={"Completed"}
                  Icon={CompletedSVG}
                  isArrow={false}
                  classes={
                    "h-full p-0.5 px-1 gap-1 cursor-pointer hover:bg-zinc-800 rounded-md text-[12px] "
                  }
                />
              </div>

              <div className="text-center gap-2 flex justify-center ">
                <NavbarButton
                  text={`${date} ${month}`}
                  Icon={CalendarSVG}
                  isArrow={false}
                  classes={
                    " flex my-1 px-1 items-center text-xs gap-1 justify-between cursor-pointer hover:bg-zinc-700 hover:text-zinc-300 bg-zinc-800 rounded-md cursor-pointer "
                  }
                />

                <div className="flex gap-0.5">
                  <div className="text-zinc-500 p-1 rounded-md cursor-pointer hover:bg-zinc-700 hover:text-zinc-100 duration-100 transition-all mb-1 rotate-180">
                    <SideArrow />
                  </div>
                  <div className="text-zinc-500 p-1 rounded-md cursor-pointer hover:bg-zinc-700 hover:text-zinc-100 duration-100 transition-all mb-1">
                    <SideArrow />
                  </div>
                </div>
              </div>
            </header>

            <div className="flex items-center justify-center h-full w-full flex-col">
              <div className="flex mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-check-big mb-3 flex h-[45px] w-[45px] flex-shrink-0 cursor-pointer items-center justify-center rounded-md text-zinc-800"
                >
                  <path d="m9 11 3 3L22 4"></path>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <div className="flex flex-col items-center ">
                <p className="text-[14px] mb-1 text-zinc-600 ">
                  No tasks for this day
                </p>
                <p className="text-[14px] text-zinc-500 underline hover:text-zinc-100 cursor-pointer">
                  Add a new task
                </p>
              </div>
            </div>
          </div>
        </BoxContainer>

        {/* rightpart */}
        {/* <div className=" h-full flex p-4 items-center flex-col justify-between w-full rounded-2xl  bg-zinc-900  "> */}
        <BoxContainer
          classes={
            "h-full flex p-4 items-center flex-col justify-between w-full flex-1 border border-zinc-800"
          }
        >
          <div className="w-full flex gap-1 items-end justify-end">
            <AdjustManually />
            <Fullscreen />
          </div>

          <div className="w-[307px] flex flex-col ">
            <div className="w-full flex flex-col items-center justify-center p-2">
              <div className="flex items-center justify-center gap-2 w-full">
                <Button
                  onClick={() => handleBreakTimeChange("Focus")}
                  text={"Focus"}
                  classes={breakTime === "Focus" ? "bg-zinc-800" : ""}
                />
                <Button
                  onClick={() => handleBreakTimeChange("Short Break")}
                  text={"Short Break"}
                  classes={breakTime === "Short Break" ? "bg-zinc-800" : ""}
                />
                <Button
                  onClick={() => handleBreakTimeChange("Long Break")}
                  text={"Long Break"}
                  classes={breakTime === "Long Break" ? "bg-zinc-800" : ""}
                />
              </div>
              <div className=" text-5xl sm:text-8xl font-sans font-bold text-zinc-50 flex text-end gap-3 py-10 px-2">
                <p>
                  {Math.floor(Time / 60) < 10
                    ? `0${Math.floor(Time / 60)}`
                    : `${Math.floor(Time / 60)}`}
                </p>
                <p>:</p>
                <p>{Time % 60 < 10 ? `0${Time % 60}` : `${Time % 60}`}</p>
              </div>
              <div className="rounded-xl bg-zinc-800 w-4/5 sm:w-full h-1 overflow-hidden">
                <div
                  className="bg-zinc-400 h-full transition-all duration-500"
                  style={{ width: `${handleWidth()}%` }}
                />
              </div>

              <div className="flex gap-2 justify-evenly my-3 w-full">
                <TimingButton
                  time={"25"}
                  onClick={() => handleTimeUpdate("25")}
                />
                <TimingButton
                  time={"10"}
                  onClick={() => handleTimeUpdate("10")}
                />
                <TimingButton
                  time={"5"}
                  onClick={() => handleTimeUpdate("5")}
                />
                <TimingButton
                  time={"1"}
                  onClick={() => handleTimeUpdate("1")}
                />
              </div>
              <div className="mt-3 flex items-center gap-2">
                {!TimeStarted && !IsPaused && (
                  <Button
                    onClick={() => start()}
                    text={"Start"}
                    classes={"bg-zinc-800"}
                    isPlayButton={true}
                    svg={<PlayButtonSVG />}
                  />
                )}

                {!TimeStarted && IsPaused && (
                  <Button
                    onClick={() => start()}
                    text={"Resume"}
                    classes={"bg-zinc-800"}
                    isPlayButton={true}
                    svg={<PlayButtonSVG />}
                  />
                )}

                {TimeStarted && (
                  <Button
                    onClick={() => pause()}
                    text={"Pause"}
                    classes={"bg-zinc-800"}
                    isPlayButton={true}
                    svg={<PauseButtonSVG />}
                  />
                )}

                {HasStarted && (
                  <Button
                    onClick={() => reset()}
                    text={"Reset"}
                    classes={"bg-zinc-800"}
                    isPlayButton={true}
                    svg={<ResetButtonSVG />}
                  />
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="text-zinc-700">No sessions today</p>
          </div>
        </BoxContainer>
      </div>
    </div>
  );
}

export default Pomodoro;
