import useTaskContext from "../hooks/custom-hooks";
import { useState } from "react";

const EditTask = ({ tasks, onSubmit }) => {
  const [task, setTask] = useState(tasks.task);
  const { editTaskById } = useTaskContext();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();

    editTaskById(tasks.id, task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task</label>
      <input value={task} onChange={handleChange} />
      <button>Save Task</button>
    </form>
  );
};

export default EditTask;
