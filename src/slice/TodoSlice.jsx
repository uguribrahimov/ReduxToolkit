import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0;

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: nextTodoId++, text: action.payload, });
    },
    
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
