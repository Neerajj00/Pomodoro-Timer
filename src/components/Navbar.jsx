import React, { useContext, useEffect, useState } from "react";
import NavbarButton from "./NavbarButton";
import FolderIcon from "../svg/Foldericon";
import GeneralSVG from "../svg/GeneralSVG";
import FeedbackSVG from "./../svg/FeedbackSVG";
import FocusSVG from "./../svg/FocusSVG";
import HamburgerSVG from "./../svg/HamburgerSVG";
import { GlobalContext } from "../context/Context";

function Navbar({
  NavbarButton,
  leftMostText,
  firstButtonText,
  secondButtonText,
}) {
  const {
    handleMenuOverlay,
    setHour,
    handle24HrChange,
    setMinute,
    setAmpm,
    hour,
    minute,
    ampm,
    is24Hr,
  } = useContext(GlobalContext);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date(); // <- Create NEW date every second
      const currentHour = date.getHours();
      setHour(currentHour.toString().padStart(2, "0"));
      setMinute(date.getMinutes().toString().padStart(2, "0"));
      setAmpm(currentHour >= 12 ? "PM" : "AM");
    }, 1000);

    // Clean up the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* navbar */}
      <div className="flex h-[33px] justify-between  items-center text-[14px] text-center w-full bg-zinc-900 border-b border-b-zinc-800">
        <div className="flex gap-2 h-full">
          <div
            onClick={handleMenuOverlay}
            className="h-full bg-zinc-800 text-zinc-400 px-2 flex sm:hidden items-center gap-1 text-[14px] font-bold  cursor-pointer hover:bg-zinc-700 transition duration-100"
          >
            <HamburgerSVG />
          </div>
          <div className="py-1 flex">
            <div className="text-[14px]  font-sans hidden md:flex md:gap-2 ml-2">
              <p className="p-0.5">{leftMostText}</p>
              <p className="text-zinc-700 mr-2 ">/</p>
            </div>
            {firstButtonText && (
              <NavbarButton
                text={firstButtonText}
                Icon={FolderIcon}
                isArrow={true}
              />
            )}
            {secondButtonText && (
              <NavbarButton
                text={secondButtonText}
                Icon={GeneralSVG}
                isArrow={true}
              />
            )}
          </div>
        </div>
        <div className="flex h-full gap-2">
          <div className="flex h-full ">
            <NavbarButton
              text={"Feedback"}
              Icon={FeedbackSVG}
              isArrow={false}
              classes={
                "h-full px-1 hidden lg:flex items-center gap-1 cursor-pointer hover:bg-zinc-800 "
              }
            />
            <NavbarButton
              text={"Focus"}
              Icon={FocusSVG}
              isArrow={false}
              classes={
                "h-full px-1 hidden md:flex items-center gap-1 cursor-pointer hover:bg-zinc-800 "
              }
            />
          </div>
          <div className="hidden sm:flex h-full">
            <div className="h-full px-1 flex items-center gap-1 text-[14px]">
              <span className="text-zinc-50 tabular-nums">
                {is24Hr
                  ? hour.toString().padStart(2, "0")
                  : (hour % 12 === 0 ? 12 : hour % 12)
                      .toString()
                      .padStart(2, "0")}
              </span>
              <span className="animate-blink text-zinc-50">:</span>
              <span className="text-zinc-50 tabular-nums">
                {minute}
              </span>
              <span>{ampm}</span>
            </div>
            <div
              onClick={handle24HrChange}
              className="h-full bg-zinc-800 text-zinc-400 px-2 flex items-center gap-1 text-[14px] font-bold  cursor-pointer hover:bg-zinc-700 ml-1 transition duration-100"
            >
              <span>{is24Hr ? "24" : "12"}</span>
              <span>hr</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
