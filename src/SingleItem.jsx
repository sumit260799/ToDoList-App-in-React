import React from "react";

function SingleItem({ key, item, removeItem }) {
  return (
    <div>
      <input type="checkbox" />
      <p>{item.name}</p>
      <button type="button">delete</button>
    </div>
  );
}

export default SingleItem;
