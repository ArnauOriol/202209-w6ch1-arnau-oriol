import { loadTasksActionCreator, tasksReducer } from "./tasksSlice";

describe("Given the function tasksReducer", () => {
  describe("When its invoked with an array of tasks", () => {
    const tasks = [
      {
        id: 1,
        name: "fregar platos",
        done: false,
      },
      {
        id: 2,
        name: "dormir",
        done: false,
      },
    ];

    describe("And the action loadTasks", () => {
      test("Then it should return the array of tasks received", () => {
        const currentTaskListState = { tasks: [] };
        const expectedTaskListState = {
          tasks: [
            {
              id: 1,
              name: "fregar platos",
              done: false,
            },
            {
              id: 2,
              name: "dormir",
              done: false,
            },
          ],
        };

        const newTasksState = tasksReducer(
          currentTaskListState,
          loadTasksActionCreator(tasks)
        );

        expect(newTasksState).toStrictEqual(expectedTaskListState);
      });
    });
  });
});
