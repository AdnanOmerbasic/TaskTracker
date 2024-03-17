import useTaskContext from "../hooks/custom-hooks";
import ShowTasks from "./ShowTasks";
const TaskList = () => {
  const { tasks } = useTaskContext();
  const renderTaskList = tasks.map((task) => {
    return <ShowTasks key={task.id} task={task} />;
  });

  return (
    <div className="mt-7 ">
      <ul>
        <li className=" min-h-customDisplayList">{renderTaskList}</li>
      </ul>
    </div>
  );
};

export default TaskList;
