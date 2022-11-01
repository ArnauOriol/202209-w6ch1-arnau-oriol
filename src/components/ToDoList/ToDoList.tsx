import { useAppSelector } from "../../redux/hooks";
import ToDo from "../ToDo/ToDo";

const ToDoList = (): JSX.Element => {
  const tasks = useAppSelector(({ tasks }) => tasks.taskList);

  return (
    <div className="container">
      <h1>Task List:</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <ToDo task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
