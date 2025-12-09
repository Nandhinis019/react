import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';

function App() {
  
  return (
    <>
     <div >
      <header>
      <Link to="/"><h1> MERN Ecommerce Project</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </main>
     </div>
    </>
  )
}

export default App
