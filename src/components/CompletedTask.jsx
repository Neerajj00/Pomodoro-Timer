import React from 'react'
import EditTaskSVG from '../svg/EditTaskSVG';
import DeleteTaskSVG from '../svg/DeleteTaskSVG';
import TaskEditing from './TaskEditing';

function CompletedTask({tasks, handleTaskComplete, handleDeleteTask, setEditingTaskId, EditingTaskId, handleEditTask}) {
  return (
    <div className="flex flex-col">
          {tasks
            .filter((task) => task.completed === true) // show based on tab
            .map((task) => {
              return Number(EditingTaskId) !== task.id ? (
                <div
                  key={task.id}
                  className="w-full px-3 py-3 hover:bg-zinc-800 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      onClick={() => handleTaskComplete(task.id)}
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
                    {(
                      <>
                        <DeleteTaskSVG
                          onClick={() => handleDeleteTask(task.id)}
                        />
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div key={task.id}>
                  <TaskEditing
                    task={task}
                    onSave={(newTitle) => handleEditTask(task.id, newTitle)}
                    onCancel={() => setEditingTaskId(null)}
                  />
                </div>
              );
            })}
        </div>
  )
}

export default CompletedTask