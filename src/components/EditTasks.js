import useTaskContext from "../hooks/custom-hooks";
import { useState } from "react";

const EditTask = ({ task, onSubmit }) => {
  const [updateTask, setUpdatedTask] = useState(task.task);
  const { editTaskById } = useTaskContext();

  const handleChange = (e) => {
    setUpdatedTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();

    editTaskById(updateTask.id, updateTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task</label>
      <input value={updateTask} onChange={handleChange} />
      <button>Save Task</button>
    </form>
  );
};

export default EditTask;
