import { createContext, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

const Provider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Get all Tasks
  const fetchAllTasks = async () => {
    const response = await axios.get(`http://localhost:3001/tasks`);

    setTasks(response.data);
  };

  // Create Task
  const createTask = async (task) => {
    const response = await axios.post(`http://localhost:3001/tasks`, {
      task,
    });

    const taskCreated = [...tasks, response.data];

    setTasks(taskCreated);
  };

  // Edit Task
  const editTaskById = async (id, newTask) => {
    const response = await axios.put(`http://localhost:3001/tasks/${id}`, {
      task: newTask,
    });

    console.log(response);

    const taskUpdated = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...response.data };
      }
      return task;
    });

    setTasks(taskUpdated);
  };

  // Delete Task
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  };

  // Share methods
  const methodsToShare = {
    tasks,
    fetchAllTasks,
    createTask,
    editTaskById,
    deleteTaskById,
  };

  return (
    <TasksContext.Provider value={methodsToShare}>
      {children}
    </TasksContext.Provider>
  );
};

export { Provider };
export default TasksContext;
