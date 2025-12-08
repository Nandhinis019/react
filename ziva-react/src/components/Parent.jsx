import React, { useState } from 'react'
import Child from './Child'

export default function Parent({ propsname }) {

  const [count, setCount] = useState(0);
  const increaseParent = () => setCount(count + 1);

  // 🆕 Product Array with Description
  const products = [
    { id: 1, name: "Mobile", price: 15000, desc: "Latest Android smartphone" },
    { id: 2, name: "Laptop", price: 55000, desc: "High performance laptop" },
    { id: 3, name: "Smart Watch", price: 7000, desc: "Fitness & heart rate tracking" },
    { id: 4, name: "Headphones", price: 3000, desc: "Noise cancellation sound" },
    { id: 5, name: "Keyboard", price: 1200, desc: "Wireless typing experience" }
  ];

  return (
    <div style={{ textAlign: "center" }}>

      <h2>This is Parent Component</h2>
      <h3>{propsname}</h3>

      <h3>Parent Count: {count}</h3>
      <button onClick={increaseParent}>Increase from Parent</button>

      <Child propschild={propsname} onIncrease={increaseParent} />

      <br /><br />

      {/* 🆕 Product Table */}
      <h1>Product Details</h1>

      <table style={{
        width: "85%",
        margin: "auto",
        borderCollapse: "collapse",
        fontSize: "18px"
      }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Product Name</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Description</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td style={tdStyle}>{item.id}</td>
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>₹{item.price}</td>
              <td style={tdStyle}>{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

const thStyle = {
  border: "1px solid black",
  padding: "10px",
  fontWeight: "bold"
};

const tdStyle = {
  border: "1px solid black",
  padding: "10px"
};
