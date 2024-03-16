import { createContext, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

const Provider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchAllTasks = async () => {
    const response = axios.get(`http://localhost:3001/tasks`);

    setTasks(response.data);
  };

  const createTask = (newTask) => {
    const response = axios.post(`http//localhost:3001/tasks`, {
      newTask,
    });
  };

  const methodsToShare = {
    tasks,
    fetchAllTasks,
    createTask,
  };

  return (
    <TasksContext.Provider value={methodsToShare}>
      {children}
    </TasksContext.Provider>
  );
};

export { Provider };
export default TasksContext;
