import React, { useContext, useState } from "react";

import SideArrow from "../svg/SideArrow";
import { GlobalContext } from "../context/Context";
import SidebarElement from "./SidebarElement";

function Sidebar() {
  const { menuOpen, handleMenuToggle } = useContext(GlobalContext);

  return (
    <div
      className={`hidden sm:block ${
        menuOpen ? "w-[155px]" : "w-[48px]"
      } mx-auto pt-4 border-r-zinc-800 border-r bg-zinc-900`}
    >
      <div
        className={`hidden sm:flex ${
          menuOpen ? "item-start" : "items-center "
        } justify-center items-start flex-col gap-4`}
      >
        {/* button */}
        <div className="text-zinc-500 w-[24px] flex items-center justify-center bg-zinc-800 rounded-md cursor-pointer hover:bg-zinc-700 hover:text-zinc-100 duration-100 transition-all ml-2 mb-1">
          <SideArrow handleMenuToggle={handleMenuToggle} />
        </div>
        <SidebarElement />
      </div>
    </div>
  );
}

export default Sidebar;
