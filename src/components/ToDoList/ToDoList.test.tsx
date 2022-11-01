import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import mockStore from "../../mocks/mockStore";
import ToDoList from "./ToDoList";

describe("Given a ToDoList component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading of level 1 with 'Task List:'", () => {
      const title = "Task List:";

      render(
        <Provider store={mockStore()}>
          <ToDoList />
        </Provider>
      );
      const taskListTitle = screen.queryByRole("heading", {
        level: 1,
        name: title,
      });

      expect(taskListTitle).toBeInTheDocument();
    });
  });
});
