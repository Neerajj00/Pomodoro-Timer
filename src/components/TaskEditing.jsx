import React, { useContext, useState } from "react";
import NavbarButton from "./NavbarButton";
import CalendarSVG from "../svg/CalendarSVG";
import { GlobalContext } from "../context/Context";
import { nanoid } from "nanoid";

function TaskEditing({task , isAddingNewTask ,taskLength , onCancel , onSave}) {
    const { date, month } = useContext(GlobalContext);
    const [title, setTitle] = useState(task?.title || "");

    const handleSubmit = () => {
      if (title.trim()) {
        onSave(title); // pass updated title to parent
      }
    };
    const handleAddSubmit = () => {
      if (title.trim()) {
        onSave({ id:nanoid(), title, completed: false }); // pass new task to parent
      }
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (isAddingNewTask) {
        handleAddSubmit();
      } else {
        handleSubmit();
      }
    };
  return (
    <div className="mx-3">
      <form
      onSubmit={handleFormSubmit}
      className="relative my-1 flex items-center justify-start">
        <input
          type="text"
          className="flex-grow rounded-lg border border-zinc-700 bg-transparent px-3 py-2.5 pb-12 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none"
          placeholder="Type and press enter to save or esc to cancel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              onCancel(); // callback to exit edit mode
            }
          }}          
        />
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="group flex items-center gap-1 rounded-md text-xs uppercase tracking-wide text-zinc-500 hover:text-zinc-300"
            >
              <span className="hidden rounded-md bg-zinc-800 px-2 py-0.5 group-hover:bg-zinc-700 md:inline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                >
                  <g
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M3 14a1 1 0 0 1 1-1h12a3 3 0 0 0 3-3V6a1 1 0 1 1 2 0v4a5 5 0 0 1-5 5H4a1 1 0 0 1-1-1z"></path>
                    <path d="M3.293 14.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 14l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4z"></path>
                  </g>
                </svg>
              </span>
              Save
            </button>
            <button
              type="button"
              onClick={() => onCancel()}
              className="group flex items-center gap-1 rounded-md text-xs uppercase tracking-wide text-zinc-500 hover:text-zinc-300"
            >
              <span className="hidden rounded-md bg-zinc-800 px-2 py-0.5 group-hover:bg-zinc-700 md:inline">
                Esc
              </span>
              Cancel
            </button>
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
        </div>
      </form>
    </div>
  );
}

export default TaskEditing;
