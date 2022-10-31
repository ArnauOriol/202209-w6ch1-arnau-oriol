import { render, screen } from "@testing-library/react";
import ToDo from "./ToDo";

describe("Given a ToDo component", () => {
  describe("When its rendered with a 'fregar platos' task", () => {
    test("Then it should show 'fregar platos' in a heading of level 2", () => {
      const task = {
        name: "fregar platos",
        id: 1,
        done: false,
      };

      render(<ToDo task={task} />);
      const ToDoComponent = screen.queryByRole("heading", { name: task.name });

      expect(ToDoComponent).toBeInTheDocument();
    });
  });
});
