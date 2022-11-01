import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import initialArrayOfTasks from "../../data/apiInfo";
import { loadTasksActionCreator } from "../../redux/features/tasksSlice/tasksSlice";
import ToDo from "../ToDo/ToDo";

const ToDoList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTasksActionCreator(initialArrayOfTasks));
  }, [dispatch]);

  const tasks = useAppSelector((selector) => selector.tasks.tasks);

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
