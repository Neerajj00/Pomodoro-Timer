import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

function Button({ onClick, text, isPlayButton, classes , svg }) {
  const { isWidthSmaller } = useContext(GlobalContext);
  return (
    <button
      onClick={onClick}
      className={`${classes && classes} text-[14px] sm:text-[16px] text-zinc-400
  hover:bg-zinc-700 rounded-md 
  px-4 py-3 mt-1 sm:px-3 sm:py-2
  cursor-pointer duration-100 transition-all`}
    >
      {isPlayButton ? (isWidthSmaller ? svg : text) : text}
    </button>
  );
}

export default Button;
