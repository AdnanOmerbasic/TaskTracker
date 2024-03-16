import useTaskContext from "../hooks/custom-hooks";
import { useState } from "react";

const CreateTask = () => {
  const [task, newTask] = useState("");
  const { createTask } = useTaskContext();

  const handleChange = (e) => {
    newTask(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();

    createTask(task);
    newTask("");
  };

  return (
    <form onSubmit={handleClick}>
      <label>New task</label>
      <input value={task} onChange={handleChange} />
      <button>Add Task</button>
    </form>
  );
};

export default CreateTask;
