// TodoItem.js
import React from 'react';
import DeleteTaskButton from './DeleteTaskButton';

function TodoItem({ todo, deleteTodo, toggleCompleted }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <DeleteTaskButton onDelete={() => deleteTodo(todo.id)} />
    </li>
  );
}

export default TodoItem;
