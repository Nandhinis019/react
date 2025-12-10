import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";

export default function Navbar() {
  const { isLoggedIn, logout, cart, wishlist, orders } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link className="nav-logo" to={isLoggedIn ? "/home" : "/login"}>
        🕰 Timeless Treasures
      </Link>

      <div className="nav-links">
        {isLoggedIn ? (
          <>
            <Link to="/home">Home</Link>
            <Link to="/cart" className="badge-link">
              🛒 Cart: <span>{cart.length}</span>
            </Link>
            <Link to="/wishlist" className="badge-link">
              ❤️ Wishlist: <span>{wishlist.length}</span>
            </Link>
            <Link to="/orders" className="badge-link">
              📦 Orders: <span>{orders.length}</span>
            </Link>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
