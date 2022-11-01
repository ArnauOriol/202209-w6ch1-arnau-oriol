import Task from "../../data/types";
import { removeTaskActionCreator } from "../../redux/features/tasksSlice/tasksSlice";
import Button from "../Button/Button";
import ToDoStyled from "./ToDoStyled";

interface TaskProps {
  task: Task;
}

const ToDo = ({ task: { id, name, done } }: TaskProps): JSX.Element => {
  return (
    <ToDoStyled className="task__container">
      <h2 className="task__title">{name}</h2>
      <div className="task__wrapper">
        <input type="checkbox" className="task__checkbox" />
        <Button text="Delete" action={() => removeTaskActionCreator(id)} />
      </div>
    </ToDoStyled>
  );
};

export default ToDo;
