import TasksContext from "../context/tasks";
import { useContext } from "react";

const useTaskContext = () => {
  return useContext(TasksContext);
};

export default useTaskContext;
