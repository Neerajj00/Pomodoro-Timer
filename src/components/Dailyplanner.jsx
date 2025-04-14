import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import FullscreenSVG from "./../svg/FullscreenSVG";
import BoxContainer from "./BoxContainer";
import { GlobalContext } from "../context/Context";
import PauseButtonSVG from "./../svg/PauseButtonSVG";
import ResetButtonSVG from "./../svg/ResetButtonSVG";
import PlayButtonSVG from "./../svg/PlayButtonSVG";
import SmallDailyPlannerAdjust from "./SmallDailyPlannerAdjust";
import NavbarButton from './NavbarButton';

function Dailyplanner() {
  const { isFullScreen, selectedSound } = useContext(GlobalContext);
  const [time, setTime] = useState(0);
  const [maxTime, setMaxTime] = useState(60);
  const [CountDown, setCountDown] = useState(20);
  const [IsPaused, setIsPaused] = useState(false);
  const [TimeStarted, setTimeStarted] = useState(false);
  const [HasStarted, setHasStarted] = useState(false);
  // const [isInBreak, setIsInBreak] = useState(false);

  function stopAlarmSound() {
    if (soundRef.current) {
      soundRef.current.pause();
      soundRef.current.currentTime = 0;
    }
  }

  const soundRef = useRef(null); // store sound reference

  function playSound() {
    soundRef.current = new Audio(`/audio/${selectedSound}`);
    soundRef.current.play();
  }

  const timerRef = useRef(null); // store interval ID
  const countdownRef = useRef(null); // store countdown interval

  function pause() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }

    setIsPaused(true);
    setTimeStarted(false);
  }
  function handleWidth() {
    const percentage = ((20 - CountDown) / 20) * 100;
    return percentage;
  }
  function reset() {
    console.log("reset");
    clearInterval(timerRef.current);
    clearInterval(countdownRef.current);
    timerRef.current = null;
    countdownRef.current = null;
    setTime(0);
    setCountDown(20);
    setIsPaused(false);
    setTimeStarted(false);
    setHasStarted(false);
    isInBreak.current = false; // 🔁 reset break state
  }
  const isInBreak = useRef(false); // store break state

  function start() {
    if (timerRef.current || countdownRef.current) return; // Already running
    setTimeStarted(true);
    setHasStarted(true);

    if (isInBreak.current) {
      let countdown = CountDown; // local variable to avoid stale closure
      countdownRef.current = setInterval(() => {
        countdown -= 1;
        setCountDown(countdown); // update state
        console.log(countdown);
        if (countdown <= 0) {
          playSound();
          clearInterval(countdownRef.current);
          countdownRef.current = null;
          setCountDown(20); // reset for next break
          isInBreak.current = false; // exit break
          start();
        }
      }, 1000);
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          if (newTime >= (maxTime * 60)) {
            reset();
            return 0;
          }
          if (newTime % (RingingTime * 60) === 0) {
            playSound();

            clearInterval(timerRef.current);
            timerRef.current = null;

            isInBreak.current = true;
            setCountDown(20);
            start();
          }

          return newTime;
        });
      }, 1000);
    }
  }

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      clearInterval(countdownRef.current);
    };
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [RingingTime, setRingingTime] = useState(20);
  const [HideAdjust, setHideAdjust] = useState(true);
  return (
    <div className=" flex flex-col h-[100vh] w-full">
      {!isFullScreen && (
        <Navbar NavbarButton={NavbarButton} leftMostText={"20:20:20"} />
      )}

      {/* main content */}
      <div className="h-full flex flex-1 flex-grow flex-col-reverse lg:flex-row gap-3 p-3 ">
        {/* rightpart */}
        {/* <div className=" h-full flex p-4 items-center flex-col justify-between w-full rounded-2xl  bg-zinc-900  "> */}
        <BoxContainer
          classes={
            "h-full flex p-4 items-center flex-col justify-between w-full flex-1 border border-zinc-800"
          }
        >
          <div className="w-full flex gap-1 items-end justify-end">
            <div className="relative">
              {!HideAdjust && (
                <SmallDailyPlannerAdjust
                  setHideAdjust={setHideAdjust}
                  RingingTime={RingingTime}
                  setRingingTime={setRingingTime}
                  reset={reset}
                  setMaxTime={setMaxTime}
                  MaxTime={maxTime}
                />
              )}
              <svg
                onClick={() => setHideAdjust(!HideAdjust)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-settings2 ml-1 h-[15px] w-[15px] sm:h-[20px] sm:w-[20px] hover:text-zinc-300 transition-all duration-100 cursor-pointer"
              >
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
            </div>

            <FullscreenSVG />
          </div>
          <div className="mb-20 sm:mb-0 flex items-center flex-col">
            <div className="text-center mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-zinc-100">
                👀 The 20-20-20 Rule for Your Eyes
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 mt-1">
                Every 20 minutes, take a 20-second break and look at something
                20 feet away.
              </p>
            </div>

            <div className="w-full mb-20 sm:w-[307px] flex flex-col ">
              <div className="w-full flex flex-col items-center justify-center p-2">
                <div className="flex items-end py-10 ">
                  <div className=" text-7xl sm:text-8xl font-sans font-bold text-zinc-50 flex text-end gap-3  px-2">
                    <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
                    <p>:</p>
                    <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
                  </div>
                  <div className="text-zinc-50 font-bold mb-2 mr-2">|</div>
                  <p className="tabular-nums font-sans text-lg font-bold mb-1 text-red-600">
                    {CountDown}
                  </p>
                </div>
                <div className="rounded-xl mb-2 bg-zinc-800 w-4/5 sm:w-full h-1 overflow-hidden">
                  <div
                    className="bg-red-600 h-full transition-all duration-500"
                    style={{ width: `${handleWidth()}%` }}
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

                  {!TimeStarted && HasStarted && IsPaused && (
                    <Button
                      onClick={() => start()}
                      text={"Resume"}
                      classes={"bg-zinc-800"}
                      isPlayButton={true}
                      svg={<PlayButtonSVG />}
                    />
                  )}

                  {TimeStarted && HasStarted && (
                    <Button
                      onClick={() => {
                        pause();
                        stopAlarmSound();
                      }}
                      text={"Pause"}
                      classes={"bg-zinc-800"}
                      isPlayButton={true}
                      svg={<PauseButtonSVG />}
                    />
                  )}

                  {HasStarted && (
                    <Button
                      onClick={() => {
                        reset();
                        stopAlarmSound();
                      }}
                      text={"Reset"}
                      classes={"bg-zinc-800"}
                      isPlayButton={true}
                      svg={<ResetButtonSVG />}
                    />
                  )}
                </div>
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

export default Dailyplanner;
