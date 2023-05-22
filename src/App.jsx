import { useState } from "react";
import { nanoid } from "nanoid";
import Items from "./Items";
import Form from "./Form";

const setlocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultItems = JSON.parse(localStorage.getItem("list") || "[]");

export default function App() {
  const [items, setItems] = useState(defaultItems);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
    setlocalStorage([...items, newItem]);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setlocalStorage(newItems);
  };

  const editItem = (id) => {
    const newitems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newitems);
    setlocalStorage(newitems);
  };

  return (
    <section>
      Grocery Bud Starter
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}
