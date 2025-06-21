import React, {  useContext } from "react";
import { NavLink } from "react-router-dom";
import Timezones from "../svg/Timezones";
import PomodoroSvg from "../svg/PomodoroSvg";
import EyeStrain202020SVG from "./../svg/EyeStrain202020SVG";
import Timer from "./../svg/Timer";
import Stopwatch from "../svg/Stopwatch";
import { GlobalContext } from "../context/Context";
//
const menuItems = [
  { to: "/Timezone", icon: <Timezones />, label: "Timezones" },
  { to: "/", icon: <PomodoroSvg />, label: "Pomodoro" },
  { to: "/EyeStrain202020", icon: <EyeStrain202020SVG />, label: "Daily Planner" },
  { to: "/timer", icon: <Timer />, label: "Timer" },
  { to: "/stopwatch", icon: <Stopwatch />, label: "StopWatch" },
];
function SidebarElement() {
  const { menuOpen, displayMenuOverlay , handleMenuClose} = useContext(GlobalContext);

  return (
    <div className="h-[200px] flex flex-col gap-4 items-start">
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          title={menuOpen ? "" : item.label}
          onClick={handleMenuClose}
          className={({ isActive }) =>
            `group flex h-[20px] items-center gap-2 cursor-pointer text-[14px] font-sans 
             ${
               isActive ? "text-amber-300" : "text-zinc-700 hover:text-zinc-400"
             }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`h-full w-[2px] ${
                  isActive ? "bg-amber-300" : "bg-transparent"
                }`}
              />
               {React.cloneElement(item.icon, { isActive })}
              {(menuOpen || displayMenuOverlay) && <p>{item.label}</p>}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
}

export default SidebarElement;
