import { useEffect } from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import initialArrayOfTasks from "./data/apiInfo";
import { loadTasksActionCreator } from "./redux/features/tasksSlice/tasksSlice";
import { useAppDispatch } from "./redux/hooks";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTasksActionCreator(initialArrayOfTasks));
  }, [dispatch]);

  return (
    <>
      <ToDoList />
    </>
  );
};

export default App;
