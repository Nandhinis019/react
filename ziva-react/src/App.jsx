


/*import React from "react";/*  */

/*  *function App() {/*  */

 /*   const products = [/*  */
   /*   {
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
}/*  */

/*  *export default App;/*  */

/*  *import { useState, useRef } from 'react';

export default function App() {
  
  // State to hold submitted values
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    marks: ""
  });

  // Refs for each input
  const nameRef = useRef();
  const ageRef = useRef();
  const marksRef = useRef();

  const handleSubmit = () => {
    setFormData({
      name: nameRef.current.value,
      age: ageRef.current.value,
      marks: marksRef.current.value
    });
  };

  return (
    <>
      <input type="text" placeholder="Enter your name" ref={nameRef} />
      <input type="number" placeholder="Enter your age" ref={ageRef} />
      <input type="number" placeholder="Enter your marks" ref={marksRef} />
      
      <button onClick={handleSubmit}>Submit</button>

      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
      <p>Marks: {formData.marks}</p>
    </>
  );
}
  /*  */
 /*  import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedName(name); 
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleName}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display the submitted name */
      /*  *{submittedName && (
        <h2>Submitted Name: {submittedName}</h2>
      )}
    </>
  );
}/*  */
/*  import { useEffect, useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(data => setTodo(data.title));
  }, []);

  return (
    <div>
      <h2>{todo}</h2>
    </div>
  );
}/ */

/*  *import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const handleClick = (value) => {
    setText(value);
    console.log(value); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ZOVA</h1>

      <button onClick={() => handleClick("Users")}>Users</button>
      <button onClick={() => handleClick("Posts")}>Posts</button>
      <button onClick={() => handleClick("Comments")}>Comments</button>

      <h2>{text}</h2>
    </div>
  );
}/*  */

/*  import { useEffect, useState} from "react"; 

  export default function App() {
    const [type, setType] = useState();
    console.log("RENDERING");
    useEffect(() => {
      console.log("USE EFFECT");
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => console.log(json))
    },[]) //empty differences
    return (
      <>
        <button onClick={() => setType("albumId")}>AlbumID</button>
        <button onClick={() => setType("id")}>ID</button>
        <button onClick={() => setType("url")}>URL</button>
        <h1>{type}</h1>
      </>
    );
  }/*  */
/* import { useEffect, useState } from "react";

export default function App() {
  const [type, setType] = useState("");

  useEffect(() => {
    if (!type) return;

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(json => {
        const selectedData = json.map(item => item[type]);
        console.log(`Showing only: ${type}`);
        console.log(selectedData);
      });
  }, [type]);

  return (
    <>
      <button onClick={() => setType("id")}>ID</button>
      <button onClick={() => setType("title")}>Title</button>
      <button onClick={() => setType("completed")}>Completed</button>
    </>
  );
}
 */
 /* import React, { useState, useEffect } from 'react'

export default function App() {
  const [type, setType] = useState("photos");
  const [data, setData] = useState([]);

  console.log("Rendering");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json)); // Save data to state
  }, [type]);

  return (
    <> 
      <button onClick={() => setType("photos")}>Photo</button>
      <button onClick={() => setType("albums")}>Album</button>
      
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
} */

 /* import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const handleSave = () => {
    localStorage.setItem("username", name);
    console.log("Saved:", name);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </>
  );
} */
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Product from './components/Products'; 

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{""}
        <Link to="/about">About</Link> |{""}
        <Link to="/contact">Contact</Link> |{""}
        <Link to="/product">Product</Link> {/* ✔ Added */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} /> {/* Already correct */}
      </Routes>
    </BrowserRouter>
  );
};

