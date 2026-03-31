import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("products")) || [];
    setData(savedData);
  }, []);

  const addItem = () => {
    const newItem = { name, category, price };
    const updatedData = [...data, newItem];
    setData(updatedData);
    localStorage.setItem("products", JSON.stringify(updatedData));

    setName("");
    setCategory("");
    setPrice("");
  };

  return (
    <div className="container">
      <h1>Shop</h1>

      <input placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Enter category type" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input placeholder="Enter price amount" value={price} onChange={(e) => setPrice(e.target.value)} />

      <button onClick={addItem}>Register</button>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;