import React, { useState } from "react";

function SingleItem({ item, removeItem, editItem }) {
  return (
    <div className="formAlign pb-5 justify-between">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        className=""
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        className="bg-blue-400 px-3 hover:bg-blue-700 duration-400 text-white  rounded-md"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
}

export default SingleItem;
