import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../../data/types";

interface TasksState {
  tasks: Task[];
}

const tasksInitialState: TasksState = {
  tasks: [],
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
      tasks: [...action.payload],
    }),
    removeTask: (
      currentTasksState,
      action: PayloadAction<number>
    ): TasksState => ({
      ...currentTasksState,
      tasks: currentTasksState.tasks.filter(
        (task) => task.id !== action.payload
      ),
    }),
  },
});

export const tasksReducer = tasksSlice.reducer;
