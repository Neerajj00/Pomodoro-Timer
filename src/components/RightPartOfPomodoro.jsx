import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import AdjustManually from "../svg/AdjustManually";
import FullscreenSVG from "../svg/FullscreenSVG";
import TimingButton from "./TimingButton";
import BoxContainer from "./BoxContainer";
import { GlobalContext } from "../context/Context";
import PauseButtonSVG from "../svg/PauseButtonSVG";
import PlayButtonSVG from "../svg/PlayButtonSVG";
import ResetButtonSVG from "../svg/ResetButtonSVG";
import SmallScreenSVG from "../svg/SmallScreenSVG";
import { useLocation } from "react-router-dom";


function RightPartOfPomodoro({isUsedForTimer , initialTimer}) {
  const location = useLocation();
  const {
    isInitialState,
    setIsInitialState,
    isWidthSmaller,
    isFullScreen,
    selectedSound,
    Time,
    setTime,
    breakTimeOb,
    breakTime,
    setBreakTime,
  } = useContext(GlobalContext);

  const [TimeStarted, setTimeStarted] = useState(false);
  const [HasStarted, setHasStarted] = useState(false);
  const [IsPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);
  const alarmSoundRef = useRef(null);
  
  const startTimestampRef = useRef(null);
  const initialTimeLeftRef = useRef(null);

  
  useEffect(() => {
    if (!isInitialState && location.pathname === '/timer') {
      start();
    }
  }, [isInitialState]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      setTimeStarted(false);
      setHasStarted(false);
      setIsPaused(false);
      setIsInitialState(true);
      stopAlarmSound();
    };
  }, []);
  
  function handleBreakTimeChange(buttonText) {
    clearInterval(intervalRef.current);
    setTimeStarted(false);
    setHasStarted(false);
    setIsPaused(false);

    setBreakTime(buttonText);
    setTime(breakTimeOb[buttonText].time);
    // setSessionStartTime(breakTimeOb[buttonText].time);
  }

  function handleTimeUpdate(minStr) {
    const updateTime = parseInt(minStr) * 60;
    setTime((prev) => {
      const newTime = prev + updateTime;
  
      if (TimeStarted) {
        startTimestampRef.current = Date.now();
        initialTimeLeftRef.current = newTime;
      }
  
      return newTime;
    });
  }
  

  function stopAlarmSound() {
    if (alarmSoundRef.current) {
      alarmSoundRef.current.pause();
      alarmSoundRef.current.currentTime = 0;
      alarmSoundRef.current.onended = null;
      alarmSoundRef.current = null;
    }
  }

  function handleWidth() {
    if (!initialTimeLeftRef.current || !startTimestampRef.current) return 0;
  
    const elapsed = Math.floor((Date.now() - startTimestampRef.current) / 1000);
    const total = initialTimeLeftRef.current;
  
    const percentage = Math.min((elapsed / total) * 100, 100); // cap at 100%
    return percentage;
  }


  function playAlarm() {
    if (!alarmSoundRef.current) {
      alarmSoundRef.current = new Audio(`/audio/${selectedSound}`);
    }
  
    alarmSoundRef.current.currentTime = 0;
  
    alarmSoundRef.current.play().catch((err) =>
      console.error("Audio playback failed:", err)
    );
  
    alarmSoundRef.current.onended = () => {
      alarmSoundRef.current = null;
      reset();
      setIsInitialState(true);
    };
  }

  
  function start() {
    setTimeStarted(true);
    setHasStarted(true);
    setIsPaused(false);
    
    startTimestampRef.current = Date.now(); // record the start time
    initialTimeLeftRef.current = Time; // store the initial time left
  
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const elapsedSeconds = Math.floor((now - startTimestampRef.current) / 1000); // how many seconds have passed since start
      const remaining = initialTimeLeftRef.current - elapsedSeconds; // how many seconds remain
  
      if (remaining >= 0) {
        setTime(remaining);
      } else {
        clearInterval(intervalRef.current);
        playAlarm();
      }
    }, 1000);
  }
  

  function pause() {
    setTimeStarted(false);
    setIsPaused(true);
    clearInterval(intervalRef.current);
  
    // 👇 Only update if the timer is actually running
    if (startTimestampRef.current && initialTimeLeftRef.current) {
      const elapsed = Math.floor((Date.now() - startTimestampRef.current) / 1000);
      const remaining = initialTimeLeftRef.current - elapsed;
  
      // Don't let it go negative
      const safeRemaining = Math.max(remaining, 0);
  
      // Update visible time
      setTime(safeRemaining);
  
      // Update refs to resume from this time later
      initialTimeLeftRef.current = safeRemaining;
      startTimestampRef.current = null; // clear start timestamp until resumed
    }
  }
  

  function reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  
    setTimeStarted(false);
    setHasStarted(false);
    setIsPaused(false);
  
    if (isUsedForTimer) {
      setTime(initialTimer);
      // setSessionStartTime(initialTimer);
  
      // Update tracking refs for date-based timer
      initialTimeLeftRef.current = initialTimer;
      startTimestampRef.current = null; // since we're not running now
    } else {
      const breakDuration = breakTimeOb[breakTime].time;
      setTime(breakDuration);
      // setSessionStartTime(breakDuration);
  
      initialTimeLeftRef.current = breakDuration;
      startTimestampRef.current = null;
    }
  
    setIsInitialState(true);
  }
  

  return (
    <BoxContainer
      classes={
        "h-[500px] sm:h-full flex p-4 items-center flex-col justify-between w-full flex-1 border border-zinc-800"
      }
    >
      <div className="w-full flex gap-1 items-end justify-end">
        {!isUsedForTimer && <AdjustManually />}
        {!isFullScreen ? <FullscreenSVG /> : <SmallScreenSVG />}
      </div>

      <div className="w-[307px] flex flex-col ">
        <div className="w-full flex flex-col items-center justify-center p-2">
          {!isUsedForTimer && <div className="flex items-center justify-center gap-2 w-full">
            <Button
              onClick={() => {
                handleBreakTimeChange("Focus");
                stopAlarmSound();
              }}
              text={"Focus"}
              classes={breakTime === "Focus" ? "bg-zinc-800" : ""}
            />
            <Button
              onClick={() => {
                handleBreakTimeChange("Short Break");
                stopAlarmSound();
              }}
              text={`${isWidthSmaller ? "Short" : "Short Break"}`}
              classes={breakTime === "Short Break" ? "bg-zinc-800" : ""}
            />
            <Button
              onClick={() => {
                handleBreakTimeChange("Long Break");
                stopAlarmSound();
              }}
              text={`${isWidthSmaller ? "Long" : "Long Break"}`}
              classes={breakTime === "Long Break" ? "bg-zinc-800" : ""}
            />
          </div>}
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
            <TimingButton time={"25"} onClick={() => handleTimeUpdate("25")} />
            <TimingButton time={"10"} onClick={() => handleTimeUpdate("10")} />
            <TimingButton time={"5"} onClick={() => handleTimeUpdate("5")} />
            <TimingButton time={"1"} onClick={() => handleTimeUpdate("1")} />
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

      <div>
        <p className="text-zinc-700">No sessions today</p>
      </div>
    </BoxContainer>
  );
}

export default RightPartOfPomodoro;
