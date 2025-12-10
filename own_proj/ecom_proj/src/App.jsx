import { Routes, Route, Navigate } from "react-router-dom";
import { useAppContext } from "./context/AppContext.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Orders from "./components/Orders.jsx";

function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route
            path="/signup"
            element={!isLoggedIn ? <Signup /> : <Navigate to="/home" />}
          />
          <Route
            path="/login"
            element={!isLoggedIn ? <Login /> : <Navigate to="/home" />}
          />

          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
          />
          <Route
            path="/wishlist"
            element={isLoggedIn ? <Wishlist /> : <Navigate to="/login" />}
          />
          <Route
            path="/orders"
            element={isLoggedIn ? <Orders /> : <Navigate to="/login" />}
          />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
