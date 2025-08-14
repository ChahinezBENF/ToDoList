import { useState } from "react";

const EditToDo = ({ currentText, onSave, onCancel }) => {
  const [editText, setEditText] = useState(currentText);

  const handleSave = () => {
    if (editText.trim()) {
      onSave(editText);
    }
  };

  return (
    <div className="edittodo">
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button className="edit-btn" onClick={handleSave}>Save</button>
      <button className="delete-btn" onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditToDo;
