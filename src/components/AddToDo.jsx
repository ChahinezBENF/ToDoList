import React, { useState } from "react";

const AddToDo = ({ addTask }) => {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("General");

 const handleAdd = () => {
    if (input.trim()) {
      addTask(input, category); // pass category
      setInput("");
      setCategory("General");
    }
  };

 return (
    <div className="addtodo"> 
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)} // ✅ updates category
      >
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button className="add-btn" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddToDo;
