import { useState } from "react";
import { nanoid } from "nanoid";
import Items from "./Items";
import Form from "./Form";
export default function App() {
  const [items, setItems] = useState([]);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };

  const removeItem = (itemId) => {};
  return (
    <section>
      Grocery Bud Starter
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}
