import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../slice/TodoSlice';

const Todos = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.length > 0) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Todos;
