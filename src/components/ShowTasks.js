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

  let content = <h3>{task.newTask}</h3>;
  if (showEdit) {
    content = <EditTask task={task} onSubmit={handleSubmit} />;
  }
  return (
    <div>
      <div>{content}</div>
      <button onClick={handleEdit}></button>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default ShowTasks;
