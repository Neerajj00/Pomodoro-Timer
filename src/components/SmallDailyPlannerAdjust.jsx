import React from "react";
import BoxContainer from "./BoxContainer";

function SmallDailyPlannerAdjust({reset , setHideAdjust, RingingTime, setRingingTime }) {
  return (
    <BoxContainer classes={"w-[200px] absolute right-6 top-0"}>
      <div className="flex flex-col gap-2">
        <h1 className="text-zinc-400 text-sm text-center font-sans">
          Set your Interval(in min)
        </h1>
        <input
          type="number"
          value={RingingTime}
          onChange={(e) => setRingingTime(e.target.value)}
          className="bg-zinc-800 outline-none border text-xs border-zinc-700 rounded-lg p-2 text-white"
        />
        
        <button 
        onClick={() => {
            setRingingTime(RingingTime);
            setHideAdjust((prev) => !prev)
            reset();
        }}
        className="bg-zinc-800 mt-2 hover:bg-zinc-700 text-white p-2 rounded-lg transition-all duration-100">
          Set Time
        </button>
      </div>
    </BoxContainer>
  );
}

export default SmallDailyPlannerAdjust;
