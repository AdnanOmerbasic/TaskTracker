import useTaskContext from "../hooks/custom-hooks";
import { useState } from "react";

const ShowTasks = ({ task }) => {
  const [showEdit, setShowEdit] = useState(false);

  let content = <h3>{task.newTask}</h3>;
  return <div>{content}</div>;
};

export default ShowTasks;
