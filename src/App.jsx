import { useState } from "react"
import AddForm from "./AddForm"
import ShoppingList from "./ShoppingList"

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Melk",
      quantity: 2,
      purchased: false,
    },
    {
      id: 2,
      name: "Egg",
      quantity: 1,
      purchased: true,
    },
  ]);

  function addItem(name, quantity) {
    const newItem = {
      id: Date.now(),
      name: name,
      quantity: quantity,
      purchased: false,
    };

    
    setItems((prevItems) => [newItem, ...prevItems])
  }

  function togglePurchased(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, purchased: !item.purchased }
          : item
      )
    );
  }

  function updateQuantity(id, newQuantity) {
    if (newQuantity <= 0) return

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  return (
    <main>
      <h1>Handleliste</h1>

      <AddForm onAddItem={addItem} />

      <ShoppingList
        items={items}
        onToggle={togglePurchased}
        onUpdateQuantity={updateQuantity}
      />
    </main>
  );
}
