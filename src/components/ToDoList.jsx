import React from "react";
import ToDoItem from "./ToDoItem";
import EditToDo from "./EditToDo";

const ToDoList = ({ tasks, toggleComplete, deleteTask, updateTask }) => {

  const groupedTasks = tasks.reduce((groups, task) => {
    if (!groups[task.category]) {
      groups[task.category] = [];
    }
    groups[task.category].push(task);
    return groups;
  }, {});

  return (
    <div className="todolist">
      {Object.keys(groupedTasks).length > 0 ? (
        Object.keys(groupedTasks).map((category) => (
          <div key={category} className="category-block">
            <h3>{category}</h3>
            {groupedTasks[category].map((task) => (
              <ToDoItem
                key={task.id}
                task={task}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </div>
        ))
      ) : (
        <p>No tasks yet. Add one!</p>
      )}
    </div>
  );
};

export default ToDoList;
