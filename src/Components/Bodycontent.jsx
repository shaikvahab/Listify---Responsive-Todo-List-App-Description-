import React from "react";

const Bodycontent = ({ task, setTask, taskList, handleAddTask, toggleTask, deleteTask }) => {
  return (
    <div className="bg-green-200 min-h-screen flex flex-col items-center pt-12">
      {/* Main Container */}
      <div className="w-full sm:w-11/12 md:w-1/2 mx-auto mt-8 p-4 bg-white rounded shadow-md">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-4">
          TO-DO LIST
        </h1>

        {/* Input and Save Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

          <input
            type="text"
            placeholder="Enter a new task...!"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full sm:w-3/4 p-2 border border-gray-300 rounded sm:mr-4 mb-4 sm:mb-0"
          />
          <button
            onClick={handleAddTask}
            className="mt-4 sm:mt-0 w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-md shadow hover:bg-green-600 focus:outline-none sm:ml-4"
          >
            Save
          </button>
        </div>

        {/* Task List */}
        <ul>
          {taskList.map((taskItem, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white p-4 shadow rounded mb-2 sm:p-3 md:p-4"
            >
              <div className="flex items-center w-full sm:w-auto">
                <input
                  type="checkbox"
                  checked={taskItem.completed}
                  onChange={() => toggleTask(index)}
                  className="form-checkbox text-green-500 rounded focus:ring-2 focus:ring-green-400"
                />
                <span
                  className={`ml-2 text-gray-700 ${taskItem.completed ? "line-through" : ""
                    }`}
                >
                  {taskItem.text}
                </span>
              </div>
              {/* Delete Button */}
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 focus:outline-none sm:ml-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>




      </div>
    </div>
  );
};

export default Bodycontent;
