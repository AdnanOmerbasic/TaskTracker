import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { useEffect } from "react";
import useTaskContext from "./hooks/custom-hooks";

const App = () => {
  const { fetchAllTasks } = useTaskContext();
  useEffect(() => {
    fetchAllTasks();
  }, []);
  return (
    <div>
      <CreateTask />
      <TaskList />
    </div>
  );
};

export default App;
