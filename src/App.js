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
    <div className="bg-gradient-to-r from-gradiant-1 to-gradiant-2 flex flex-col items-center min-h-screen bg-cover ">
      <div className="items-center mt-11 min-h-custom min-w-custom bg-white border border-gray-300 rounded-3xl shadow-lg dark:bg-gray-1000 dark:border-gray-700 flex flex-col ">
        <h1 className=" font-bold text-4xl text-gray-300 mt-11 ml-1">
          <span className="text-green-300">Task</span>Tracker
        </h1>
        <CreateTask />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
