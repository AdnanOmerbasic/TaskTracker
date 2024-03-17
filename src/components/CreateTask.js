import useTaskContext from "../hooks/custom-hooks";
import { useState } from "react";

const CreateTask = () => {
  const [task, newTask] = useState("");
  const { createTask } = useTaskContext();

  const handleChange = (e) => {
    newTask(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      return alert("You need to add a task!");
    }

    createTask(task);
    newTask("");
  };

  return (
    <form
      className="flex flex-col items-center space-y-4 pt-0"
      onSubmit={handleClick}
    >
      <div className="flex items-center mt-7">
        <input
          className="flex-grow outline-none shadow-custom-shadow backdrop-blur-custom-blur border border-custom-border text-lg rounded-lg ml-11 w-customForms h-customForms"
          value={task}
          onChange={handleChange}
          placeholder="Add your tasks here"
        />
        <button className="flex shadow-custom-shadow backdrop-blur-custom-blur border border-custom-border text-sm rounded-lg ml-2 justify-center items-center h-customFormsButton w-customFormsButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
