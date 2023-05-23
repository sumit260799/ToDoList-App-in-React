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
    <section className="w-[80%] justify-center text-center my-5 mx-auto md:my-14 m-auto">
      <h2 className="text-center text-[2rem] mb-5 text-black font-normal">
        <span className="text-blue-400">T</span>o
        <span className="text-blue-400">D</span>o{" "}
        <span className="text-blue-400">L</span>ist{" "}
        <span className="text-blue-400">A</span>pp
      </h2>
      <div className="bg-[#ffffff] overflow-x-auto p-1 sm:p-5 hover:shadow-xl transition-all max-w-[550px] mx-auto rounded-md justify-center  shadow-md">
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </div>
    </section>
  );
}
