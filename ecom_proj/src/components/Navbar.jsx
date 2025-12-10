import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cart, orders, isLoggedIn, onLogout }) {
  return (
    <header className="header">
      <Link to="/" className="logo">🛍️ MERN Ecommerce</Link>
      <div className="header-links">
        {isLoggedIn ? (
          <>
            <Link to="/cart" className="header-link">🛒 Cart ({cart.length})</Link>
            <Link to="/orders" className="header-link">📦 Orders ({orders.length})</Link>
            <button 
              onClick={onLogout}
              className="header-link"
              style={{
                background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              🚪 Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="header-link">🔐 Login</Link>
        )}
      </div>
    </header>
  );
}