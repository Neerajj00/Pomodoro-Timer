import React from "react";
import DownArrow from "./../svg/DownArrow";

function NavbarButton({onClick, ButtonText, text, Icon, isArrow, classes }) {
  return (
    <div
    onClick={onClick}
      className={
        (classes
          ? classes
          : " gap-2 px-[5px] rounded-md hover:bg-zinc-700 hover:text-zinc-400 ") +
        `cursor-pointer duration-100 transition-all flex items-center ${ButtonText == text ? " bg-zinc-800" : "" }`
      }
    >
      <div className="flex items-center">
        <Icon className="h-[13px] w-[13px] fill-current" />
      </div>
      <p className="font-sans">{text}</p>
      <div className="flex items-center">{isArrow && <DownArrow />}</div>
    </div>
  );
}

export default NavbarButton;
