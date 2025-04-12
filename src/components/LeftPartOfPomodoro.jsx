import React, { useContext, useState } from "react";
import BoxContainer from "./BoxContainer";
import NavbarButton from "./NavbarButton";
import PendingSVG from "../svg/PendingSVG";
import CompletedSVG from "../svg/CompletedSVG";
import CalendarSVG from "../svg/CalendarSVG";
import { GlobalContext } from "../context/Context";
import EditTaskSVG from "./../svg/EditTaskSVG";
import DeleteTaskSVG from "./../svg/DeleteTaskSVG";
import { Plus } from "lucide-react";

function LeftPartOfPomodoro() {
  const { date, month } = useContext(GlobalContext);
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      completed: false,
    },
  ]);

  return (
    <BoxContainer
      classes={"h-[192px] sm:h-full lg:w-[398px] bg-amber-400 px-0"}
    >
      <div className="h-full w-full flex flex-col">
        <header className="px-3 flex items-center justify-between">
          <div className="flex items-center text-center gap-2 ">
            <NavbarButton
              text={"Pending"}
              Icon={PendingSVG}
              isArrow={false}
              classes={
                "h-full px-2 p-0.5 gap-1 text-[12px]  bg-zinc-800 rounded-md "
              }
            />
            <NavbarButton
              text={"Completed"}
              Icon={CompletedSVG}
              isArrow={false}
              classes={
                "h-full p-0.5 px-1 gap-1 cursor-pointer hover:bg-zinc-800 rounded-md text-[12px] "
              }
            />
          </div>

          <div className="text-center gap-2 flex justify-center ">
            <NavbarButton
              text={`${date} ${month}`}
              Icon={CalendarSVG}
              isArrow={false}
              classes={
                " flex my-1 px-1 py-1 items-center text-xs gap-1 justify-between cursor-pointer hover:bg-zinc-700 hover:text-zinc-300 bg-zinc-800 rounded-md cursor-pointer "
              }
            />
          </div>
        </header>

        <div className="w-full px-3 py-3 mt-2 hover:bg-zinc-800 flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <div class="w-4 h-4 rounded-md border border-gray-600 hover:border-white transition duration-200" />
            <h4 class="items-start gap-1.5 text-sm text-zinc-400 group-hover:text-zinc-300">
              do a homework
            </h4>
          </div>

          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <EditTaskSVG />
            <DeleteTaskSVG />
          </div>
        </div>

        <button className="flex w-full items-center justify-center gap-1 rounded-lg border border-dashed border-zinc-700 px-3 py-1.5 text-sm text-zinc-500 transition-colors group hover:border-zinc-500 hover:text-zinc-200">
          <div className="flex items-center gap-1">
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
              className="lucide lucide-plus flex h-[15px] w-[15px] flex-shrink-0 cursor-pointer items-center justify-center rounded-md group-hover:border-zinc-400"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <p className="text-zinc-500 text-[14px] group-hover:text-zinc-300">
              Add new task
            </p>
          </div>
        </button>

        <div className="flex items-center justify-center h-full w-full flex-col">
          <div className="flex mb-1">
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
              className="lucide lucide-square-check-big mb-3 flex h-[45px] w-[45px] flex-shrink-0 cursor-pointer items-center justify-center rounded-md text-zinc-800"
            >
              <path d="m9 11 3 3L22 4"></path>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
          </div>
          <div className="flex flex-col items-center ">
            <p className="text-[14px] mb-1 text-zinc-600 ">
              No tasks for this day
            </p>
            <p className="text-[14px] text-zinc-500 underline hover:text-zinc-100 cursor-pointer">
              Add a new task
            </p>
          </div>
        </div>
      </div>
    </BoxContainer>
  );
}

export default LeftPartOfPomodoro;
