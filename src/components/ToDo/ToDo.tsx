import Task from "../../data/types";
import { removeTaskActionCreator } from "../../redux/features/tasksSlice";
import Button from "../Button/Button";

interface TaskProps {
  task: Task;
}

const ToDo = ({ task: { id, name, done } }: TaskProps): JSX.Element => {
  return (
    <div>
      <h2>{name}</h2>
      <input type="checkbox" name="" id="" />
      <Button text="DELETE" action={() => removeTaskActionCreator(id)} />
    </div>
  );
};

export default ToDo;
