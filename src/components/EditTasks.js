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
    <div className="flex flex-col pt-5 pb-5 items-center">
      <form
        className="flex flex-col bg-white rounded-lg p-4 shadow-lg w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-bold text-gray-700 mb-4 items-center justify-center flex">
          Edit Task
        </h3>
        <div className="mb-4 w-full">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={task}
            onChange={handleChange}
          />
        </div>
        <button className=" bg-green-300 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Save Edit
        </button>
      </form>
    </div>
  );
};

export default EditTask;
