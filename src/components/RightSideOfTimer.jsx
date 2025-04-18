import React, { useContext } from 'react'
import BoxContainer from './BoxContainer';
import Button from './Button';
import { GlobalContext } from '../context/Context';

function RightSideOfTimer({preset , setHour , setMinute}) {

  const {setIsTimerPresetOverlay} = useContext(GlobalContext);

  return (
    <BoxContainer
    classes={" p-0 h-full w-full lg:w-[400px] "}
        >
          <div className="h-full w-full flex flex-col">
            {preset.length < 4 * 6 && <button 
            onClick={() => setIsTimerPresetOverlay(true) }
            className="cursor-pointer my-1 flex items-center justify-center gap-1 rounded-full px-5  text-xs uppercase tracking-[0.15em] text-zinc-500 transition-all hover:text-zinc-400">
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
            </button>}

            <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-3 w-full flex-wrap items-center">
              {preset.map((item, index) => {
                return <Button 
                onClick={() => {
                  setHour("");
                  setMinute("");
                  if(item.lastName === "hour"){
                    setHour(item.value < 10 ? "0" + item.value : item.value);
                  }
                  if(item.lastName === "min"){
                    setMinute(item.value < 10 ? "0" + item.value : item.value);
                  }
                }}
                key={index} text={item.label} classes={"bg-zinc-800 "}/>;
              })}
            </div>

            <div className="w-full">
                {
                  // Show a message when the task limit is reached
                  preset.length >= 4 * 6 && (
                    <button className="flex w-full h-[34px] items-center justify-center gap-2 rounded-md border border-yellow-500 bg-yellow-400 p-2 text-sm  text-black cursor-not-allowed mt-3">
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
                        className="lucide lucide-flag h-4 w-4"
                      >
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                        <line x1="4" x2="4" y1="22" y2="15"></line>
                      </svg>
                      {"Preset Limit Reached"}
                    </button>
                  )
                }
              </div>
          </div>
        </BoxContainer>
  )
}

export default RightSideOfTimer