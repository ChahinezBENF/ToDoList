import React, { useState } from "react";

const AddToDo = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div className="addtodo">
      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button  onClick={handleAdd} >
        Add
      </button>
    </div>
  );
};

export default AddToDo;
