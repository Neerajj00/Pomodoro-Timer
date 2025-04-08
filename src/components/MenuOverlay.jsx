import React, { useContext } from "react";
import Button from "./Button";
import { GlobalContext } from "../context/Context";
import SidebarElement from './SidebarElement';

function MenuOverlay() {
    const {handleMenuOverlay} = useContext(GlobalContext);

  return (
    <div className="fixed top-0 left-0 h-[100vh] w-full z-10 bg-zinc-900/100 pr-4 py-4">
      <div className="flex items-center justify-end "
      onClick={handleMenuOverlay}
      >
        <Button
          text={
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
              className="lucide lucide-x h-[20px] w-[20px]"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          }
        />
      </div>
      
      <div className="flex flex-col gap-4 items-start justify-center h-full mb-2">
        <SidebarElement/>
      </div>

      
    </div>
  );
}

export default MenuOverlay;
