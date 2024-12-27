import { useState } from "react";
import Navbar from "./Components/Navbar";
import Bodycontent from "./Components/Bodycontent";

function App() {
  const [task, setTask] = useState(""); // Input value
  const [taskList, setTaskList] = useState([]); // List of tasks

  // Function to add a task
  const handleAddTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    setTaskList([...taskList, { text: task, completed: false }]);
    setTask(""); // Clear input field
  };

  // Function to toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskList(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedtasklist = taskList.filter((_, i) => i !== index);
    setTaskList(updatedtasklist);
  };


  return (
    <>
      <Navbar />
      <Bodycontent
        task={task}
        setTask={setTask}
        taskList={taskList}
        handleAddTask={handleAddTask}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
