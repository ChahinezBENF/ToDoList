import React from "react";

const ToDoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="todoitem">
      <span
        onClick={() => toggleComplete(task.id)}
        className={task.completed ? "completed" : ""}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
