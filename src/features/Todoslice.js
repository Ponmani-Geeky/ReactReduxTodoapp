import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const Todoslice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            console.log("helloooo", item.done);
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = Todoslice.actions;
export const selecttodoList = (state) => state.todos.todoList;
export default Todoslice.reducer;
