import React, { useContext } from "react";
import PlayButtonSVG from "./../svg/PlayButtonSVG";
import { GlobalContext } from "../context/Context";

function Button({ text, isPlayButton }) {
  const { isWidthSmaller } = useContext(GlobalContext);
  return (
    <button
      className={`text-[14px] sm:text-[16px] text-zinc-500
     bg-zinc-800 hover:bg-zinc-700 rounded-md 
     ${
       isPlayButton ? "px-3 py-2 sm:px-2 sm:py-1 " : "px-2 py-2 sm:px-3 sm:py-2"
     } cursor-pointer duration-100 transition-all`}
    >
      {isPlayButton ? isWidthSmaller ? <PlayButtonSVG /> : text : text}
    </button>
  );
}

export default Button;
