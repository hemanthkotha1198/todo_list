// DeleteTaskButton.js
import React from 'react';

function DeleteTaskButton({ onDelete }) {
  return (
    <button onClick={onDelete}>Delete</button>
  );
}

export default DeleteTaskButton;
