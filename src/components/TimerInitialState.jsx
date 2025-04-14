import React, { useContext, useState } from "react";
import BoxContainer from "./BoxContainer";
import FullscreenSVG from "../svg/FullscreenSVG";
import Button from "./Button";
import SmallScreenSVG from "../svg/SmallScreenSVG";
import { GlobalContext } from "../context/Context";
import SettingButtonInTimer from "./SettingButtonInTimer";
import PlayButtonSVG from "./../svg/PlayButtonSVG";

function TimerInitialState() {
  const { isFullScreen, setTimerOverlay } = useContext(GlobalContext);

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  return (
    <BoxContainer
      classes={
        "h-full flex p-4 items-center flex-col justify-between w-full flex-1 border border-zinc-800"
      }
    >
      <div className="w-full flex gap-1 items-end justify-end">
        {!isFullScreen ? <FullscreenSVG /> : <SmallScreenSVG />}
      </div>

      <div className="w-[315px] sm:w-[360px] items-center justify-center flex flex-col ">
        <div className="w-full flex flex-col items-center justify-center p-2">
          <div className="flex items-center justify-center gap-2 w-full">
            <p>Enter timer Duration Below</p>
          </div>
          <div class="flex text-4xl text-white sm:text-7xl my-4 flex-row items-center justify-center gap-0 sm:my-8 sm:gap-4">
            <div class="flex max-w-[80px] flex-col items-center sm:max-w-[100px]">
              <div class="relative">
                <input
                  type="text"
                  className="border-none bg-transparent text-center placeholder-white outline-none  w-full pb-7 font-bold sm:pb-9"
                  value={hour !== "" ? hour.padStart(2,'0') : ""}
                  placeholder="00"
                  maxLength={2}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,2}$/.test(val)) {
                      setHour(val);
                    }
                  }}
                />
                <span class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-base text-zinc-500 sm:text-2xl">
                  hour
                </span>
              </div>
            </div>
            <div class="relative -top-4 sm:-top-6">:</div>
            <div class="flex max-w-[100px] flex-col items-center sm:max-w-[100px]">
              <div class="relative">
                <input
                  type="text"
                  className="border-none bg-transparent text-center placeholder-white  w-full pb-7 font-bold sm:pb-9"
                  value={minute !== "" ? minute.padStart(2,'0') : ""}
                  placeholder="00"
                  maxLength={2}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,2}$/.test(val)) {
                      setMinute(val);
                    }
                  }}
                />
                <span class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-base text-zinc-500 sm:text-2xl">
                  min
                </span>
              </div>
            </div>
            <div class="relative -top-4 sm:-top-6">:</div>
            <div class="flex max-w-[80px] flex-col items-center sm:max-w-[100px]">
              <div class="relative">
                <input
                  type="text"
                  className="border-none bg-transparent text-center placeholder-white outline-none w-full pb-7 font-bold sm:pb-9"
                  value={second !== "" ? second.padStart(2,'0') : ""}
                  placeholder="00"
                  maxLength={2}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,2}$/.test(val)) {
                      setSecond(val);
                    }
                  }}
                />
                <span class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-base text-zinc-500 sm:text-2xl">
                  sec
                </span>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-2 justify-center">
            <SettingButtonInTimer onClick={() => setTimerOverlay(true)} />
            <Button
              text={"Start Timer"}
              classes={"bg-zinc-800"}
              isPlayButton={true}
              svg={<PlayButtonSVG />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-zinc-700">No sessions today</p>
      </div>
    </BoxContainer>
  );
}

export default TimerInitialState;
