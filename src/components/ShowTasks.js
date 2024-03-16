import useTaskContext from "../hooks/custom-hooks";
import { useState } from "react";
import EditTask from "./EditTasks";

const ShowTasks = ({ task }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTaskById } = useTaskContext();

  const handleDelete = () => {
    deleteTaskById(task.id);
  };

  const handleEdit = () => {
    setShowEdit(!false);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{task.task}</h3>;
  if (showEdit) {
    content = <EditTask tasks={task} onSubmit={handleSubmit} />;
  }
  return (
    <div>
      <div>{content}</div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default ShowTasks;
