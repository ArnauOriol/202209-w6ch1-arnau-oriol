import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../../../data/types";

interface TasksState {
  taskList: Task[];
}

const tasksInitialState: TasksState = {
  taskList: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    loadTasks: (
      currentTasksState,
      action: PayloadAction<Task[]>
    ): TasksState => ({
      ...currentTasksState,
      taskList: [...action.payload],
    }),
    removeTask: (
      currentTasksState,
      action: PayloadAction<number>
    ): TasksState => ({
      ...currentTasksState,
      taskList: currentTasksState.taskList.filter(
        (task) => task.id !== action.payload
      ),
    }),
  },
});

export const tasksReducer = tasksSlice.reducer;

export const {
  loadTasks: loadTasksActionCreator,
  removeTask: removeTaskActionCreator,
} = tasksSlice.actions;
