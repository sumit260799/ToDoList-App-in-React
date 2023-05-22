import React, { useState } from "react";

function SingleItem({ item, removeItem, editItem }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button type="button" onClick={() => removeItem(item.id)}>
        delete
      </button>
    </div>
  );
}

export default SingleItem;
