// LeftPartOfPomodoro.jsx
import React, { useContext, useEffect, useState } from "react";
import BoxContainer from "./BoxContainer";
import NavbarButton from "./NavbarButton";
import PendingSVG from "../svg/PendingSVG";
import CompletedSVG from "../svg/CompletedSVG";
import CalendarSVG from "../svg/CalendarSVG";
import { GlobalContext } from "../context/Context";
import TaskEditing from "./TaskEditing";
import CompletedTask from "./CompletedTask";
import NonCompletedTask from "./NonCompletedTask";

function LeftPartOfPomodoro() {
  const { date, month } = useContext(GlobalContext);
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [AddingFirstTask, setAddingFirstTask] = useState(false);
  const [EditingTaskId, setEditingTaskId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [ButtonText, setButtonText] = useState("Pending");

  function handleEditTask(taskId, newTitle) {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === taskId ? { ...t, title: newTitle } : t))
    );
    setEditingTaskId(null); // exit edit mode
  }

  function addNewTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsAdding(false); // exit add mode
    setAddingFirstTask(false); // exit add mode
  }

  function handleDeleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function handleTaskComplete(taskid) {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === taskid ? { ...t, completed: !t.completed } : t
      )
    );
  }

  useEffect(() => {
    const tasksString = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksString);
  }, [tasks]);

  return (
    <BoxContainer classes={"h-full lg:w-[398px] bg-amber-400 px-0 "}>
      <div className="h-full w-full flex flex-col ">
        {/* Header with buttons and date */}
        <header className="px-3 mb-3 flex items-center justify-between">
          <div className="flex items-center text-center gap-2 ">
            <NavbarButton
              text={"Pending"}
              Icon={PendingSVG}
              isArrow={false}
              classes={"h-full px-2 p-0.5 gap-1 text-[12px]  rounded-md "}
              onClick={() => setButtonText("Pending")}
              ButtonText={ButtonText}
            />
            <NavbarButton
              text={"Completed"}
              Icon={CompletedSVG}
              isArrow={false}
              classes={"h-full p-0.5 px-1 gap-1 cursor-pointer hover:bg-zinc-800 rounded-md text-[12px] "}
              onClick={() => setButtonText("Completed")}
              ButtonText={ButtonText}
            />
          </div>

          <div className="text-center gap-2 flex justify-center ">
            <NavbarButton
              text={`${date} ${month}`}
              Icon={CalendarSVG}
              isArrow={false}
              classes={" flex my-1 px-1 py-1 items-center text-xs gap-1 justify-between hover:bg-zinc-700 hover:text-zinc-300 bg-zinc-800 rounded-md cursor-pointer "}
            />
          </div>
        </header>

        {/* show task using map function */}
        {ButtonText === "Pending" ? (
          <NonCompletedTask
            tasks={tasks}
            handleTaskComplete={handleTaskComplete}
            handleDeleteTask={handleDeleteTask}
            setEditingTaskId={setEditingTaskId}
            EditingTaskId={EditingTaskId}
            handleEditTask={handleEditTask}
          />
        ) : (
          <CompletedTask
            tasks={tasks}
            handleTaskComplete={handleTaskComplete}
            handleDeleteTask={handleDeleteTask}
            setEditingTaskId={setEditingTaskId}
            EditingTaskId={EditingTaskId}
            handleEditTask={handleEditTask}
          />
        )}

        {/* Add new task button */}
        {(ButtonText === "Pending") && tasks.length > 0 && !isAdding && (
          <div className="w-full px-3 mt-2">
            <button
              onClick={() => setIsAdding(true)}
              className="flex w-full items-center justify-center gap-1 rounded-lg border border-dashed border-zinc-700 px-3 py-1.5 text-sm text-zinc-500 transition-colors duration-100 group hover:border-zinc-500 hover:text-zinc-200"
            >
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
                  className="lucide lucide-plus flex h-[15px] w-[15px] flex-shrink-0 items-center justify-center rounded-md"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <p className="text-zinc-500 text-[14px] transition-colors duration-100 group-hover:text-zinc-200">
                  Add new task
                </p>
              </div>
            </button>
          </div>
        )}

        {isAdding && (
          <TaskEditing
            onSave={(task) => addNewTask(task)}
            onCancel={() => setIsAdding(false)}
            isAddingNewTask={isAdding}
            taskLength={tasks.length}
          />
        )}
        {AddingFirstTask && (
          <TaskEditing
            onSave={(task) => addNewTask(task)}
            onCancel={() => {
              setIsAdding(false);
              setAddingFirstTask(false);
            }}
            isAddingNewTask={true}
            taskLength={tasks.length}
          />
        )}

        {/* No tasks message */}
        {!tasks.length && !AddingFirstTask && (
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
                {(ButtonText === "Pending") ? "No tasks for this day" : "No completed tasks for this day"}
              </p>
              {(ButtonText === "Pending") && <p
                onClick={() => setAddingFirstTask(true)}
                className="text-[14px] text-zinc-500 underline hover:text-zinc-100 cursor-pointer"
              >
                Add a new task
              </p>}
            </div>
          </div>
        )}
      </div>
    </BoxContainer>
  );
}

export default LeftPartOfPomodoro;
