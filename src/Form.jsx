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
      <div className="form-control  ">
        <input
          className="inputForm w-[77%] bg-[#f8fafc] border border-sky-300 outline-none  my-10 p-1 rounded-tl-md rounded-bl-md"
          type="text"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          className="bg-blue-400 text-white p-[0.24rem] sm:p-[0.28rem] sm:px-3 rounded-tr-md rounded-br-md"
          type="submit"
        >
          add item
        </button>
      </div>
    </form>
  );
}

export default Form;
