import React from 'react'
import DeleteTaskSVG from '../svg/DeleteTaskSVG';
import { toast } from 'react-toastify';

function CompletedTask({ incompleteCount, tasks, handleTaskComplete, handleDeleteTask }) {

  const handleClickCheckbox = (taskId) => {
    if (incompleteCount >= 7) {
      toast.error("First delete some Pending task in your Pending tab", {
        position: "top-center",
      });
    } else {
      handleTaskComplete(taskId); // normal behavior
    }
  };

  return (
    <div className="flex flex-col">
      {tasks
        .filter(task => task.completed === true)
        .map(task => (
          <div
            key={`completed-${task.id}`} // Give clean key
            className="w-full px-3 py-3 hover:bg-zinc-800 flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div
                onClick={() => handleClickCheckbox(task.id)}
                className={`w-4 h-4 rounded-md transition duration-200 cursor-pointer border 
                  ${
                    task.completed
                      ? "bg-green-600 border-green-600"
                      : "border-gray-600 hover:border-white"
                  }`}
              />
              <h4 className="line-through items-start gap-1.5 text-sm text-zinc-500 group-hover:text-zinc-300">
                {task.title}
              </h4>
            </div>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <DeleteTaskSVG onClick={() => handleDeleteTask(task.id)} />
            </div>
          </div>
        ))}
    </div>
  )
}

export default CompletedTask;
