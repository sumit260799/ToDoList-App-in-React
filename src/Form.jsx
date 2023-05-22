import React from "react";
import { useState } from "react";
function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItemName);
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit">add item</button>
      </div>
    </form>
  );
}

export default Form;
