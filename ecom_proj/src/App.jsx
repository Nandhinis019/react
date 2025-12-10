import './App.css'
import { Route, Routes } from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Orders from './components/Orders';
import OrderConfirmation from './components/OrderConfirmation';
import Login from './components/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { products } from './utils/api';
import { useState, useEffect } from 'react';

function App() {
  const [cart,setCart]= useState([]);
  const [orders,setOrders]= useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart]);
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  },[orders]);
  
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <>
     <div className="app-container">
      <Navbar 
        cart={cart} 
        orders={orders} 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
      />
      <main>
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={
            <>
              <div className="sidebar">
                <Products Cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} />
              </div>
              <div className="content-area">
                <div className="welcome-section">
                  <h1>Welcome to Our Store</h1>
                  <p>Discover amazing products and shop with ease. Browse our collection on the left and click on any product to view details.</p>
                  <div className="welcome-stats">
                    <div className="stat">
                      <h3>{products.length}</h3>
                      <p>Products</p>
                    </div>
                    <div className="stat">
                      <h3>{cart.length}</h3>
                      <p>In Cart</p>
                    </div>
                    <div className="stat">
                      <h3>{orders.length}</h3>
                      <p>Orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }/>
          <Route path="/product/:id" element={
            <div className="full-screen-product">
              <Product orders={orders} setOrders={setOrders} isLoggedIn={isLoggedIn} />
            </div>
          } />
          <Route path="/cart" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <div className="full-screen-content">
                <Cart cart={cart} setCart={setCart}/>
              </div>
            </ProtectedRoute>
          } />
          <Route path="/orders" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <div className="full-screen-content">
                <Orders orders={orders} setOrders={setOrders} />
              </div>
            </ProtectedRoute>
          } />
          <Route path="/order-confirmation" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <div className="full-screen-content">
                <OrderConfirmation />
              </div>
            </ProtectedRoute>
          } />
        </Routes>
      </main>
     </div>
    </>
  )
}

export default App

