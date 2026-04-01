import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, "Item"]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>QuickCart</h1>

      <button onClick={addToCart}>
        Add to Cart
      </button>

      <h2>Cart Items: {cart.length}</h2>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;