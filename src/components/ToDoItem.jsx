import React, { useState } from "react";
import EditToDo from "./EditToDo";

const ToDoItem = ({ task, toggleComplete, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);

const handleSave = (newText, newCategory) => {
    updateTask(task.id, newText, newCategory);
    setIsEditing(false);
  };

  return (
    <div className="todoitem">
      {isEditing ? (
        <EditToDo
          currentText={task.text}
          currentCategory={task.category}  // Pass current category
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <span
            onClick={() => toggleComplete(task.id)}
            className={task.completed ? "completed" : ""}
          >
            {task.text}
          </span>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
