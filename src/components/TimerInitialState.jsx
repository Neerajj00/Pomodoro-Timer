import React, { useContext } from 'react'
import BoxContainer from './BoxContainer'
import FullscreenSVG from "../svg/FullscreenSVG";
import Button from './Button'
import SmallScreenSVG from '../svg/SmallScreenSVG'
import { GlobalContext } from '../context/Context'
import SettingButtonInTimer from './SettingButtonInTimer';
import PlayButtonSVG from './../svg/PlayButtonSVG';

function TimerInitialState() {
    const {
      isFullScreen,
    } = useContext(GlobalContext);

  return (
    <BoxContainer
          classes={
            "h-full flex p-4 items-center flex-col justify-between w-full flex-1 border border-zinc-800"
          }
        >
          <div className="w-full flex gap-1 items-end justify-end">
          {!isFullScreen ? <FullscreenSVG /> : <SmallScreenSVG/>}
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
              <div className="mt-3 flex items-center gap-2 justify-center">
                <SettingButtonInTimer/>
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
  )
}

export default TimerInitialState