import React from "react";

function App() {

  const products = [
    {
      id: 1,
      name: "Mobile",
      price: "₹15000",
      desc: "Latest Android smartphone",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 2,
      name: "Laptop",
      price: "₹55000",
      desc: "High performance laptop",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=60"
    },
    {
  id: 3,
  name: "Smart Watch",
  price: "₹7000",
  desc: "Fitness tracking & notifications",
  img: "https://m.media-amazon.com/images/I/61+wwNBP7aL.jpg"
},
    {
      id: 4,
      name: "Headphones",
      price: "₹3000",
      desc: "Noise cancellation audio",
      img: "https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 5,
      name: "Keyboard",
      price: "₹1200",
      desc: "Wireless soft keys",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRzuqLu_7SlPSnFGUQvg04LQ3cMnjUfaUZA8WqvPaVBkxxX1BVFE0Jor2ZVGGDEm3KatTHwxBcHPuOvxac1CRm_-9FDoxB7zpC-D3ipN8GfDNIUpkBFWLeXCw"
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Details</h1>

      {products.map((p) => (
        <div key={p.id}
          style={{
            border: "2px solid black",
            width: "380px",
            margin: "15px auto",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: "#f8f8f8",
            textAlign: "left",
            color: "#333"
          }}
        >
          <img
            src={p.img}
            alt={p.name}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
          />

          <p><strong>Product Name:</strong> {p.name}</p>
          <p><strong>Price:</strong> {p.price}</p>
          <p><strong>Description:</strong> {p.desc}</p>
        </div>
      ))}

    </div>
  );
}

export default App;








