import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="todolist">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks yet. Add one!</p>
      )}
    </div>
  );
};

export default ToDoList;
