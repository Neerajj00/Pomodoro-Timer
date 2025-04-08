import React, { useContext } from "react";
import PlayButtonSVG from "./../svg/PlayButtonSVG";
import { GlobalContext } from "../context/Context";

function Button({ onClick, text, isPlayButton , classes }) {
  const { isWidthSmaller } = useContext(GlobalContext);
  return (
    <button
      onClick = {onClick}
      className={`${classes && classes} text-[14px] sm:text-[16px] text-zinc-500
      hover:bg-zinc-700 rounded-md 
     ${
       isPlayButton ? "px-3 py-2 sm:px-2 sm:py-1 " : "px-2 py-2 sm:px-3 sm:py-2"
     } cursor-pointer duration-100 transition-all`}
    >
      {isPlayButton ? isWidthSmaller ? <PlayButtonSVG /> : text : text}
    </button>
  );
}

export default Button;
