import { useState } from "react";

const EditToDo = ({ currentText, currentCategory, onSave, onCancel }) => {
  const [editText, setEditText] = useState(currentText);
 const [editCategory, setEditCategory] = useState(currentCategory);

  const handleSave = () => {
    if (editText.trim()) {
      onSave(editText, editCategory);
    }
  };

  return (
    <div className="edittodo">
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <select
        value={editCategory}
        onChange={(e) => setEditCategory(e.target.value)}
      >
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button className="edit-btn" onClick={handleSave}>Save</button>
      <button className="delete-btn" onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditToDo;
