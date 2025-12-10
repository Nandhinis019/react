import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);

  // ---- Auth (dummy) ----
  const signup = (name, email, password) => {
    setUser({ name, email });
  };

  const login = (email, password) => {
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
    setCart([]);
    setWishlist([]);
    setOrders([]);
  };

  // ---- Cart ----
  const addToCart = (product) => {
    if (!cart.some((p) => p._id === product._id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((p) => p._id !== id));
  };

  // ---- Wishlist ----
  const toggleWishlist = (product) => {
    if (wishlist.some((p) => p._id === product._id)) {
      setWishlist(wishlist.filter((p) => p._id !== product._id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((p) => p._id !== id));
  };

  // ---- Orders ----
  const orderNow = (product) => {
    if (!orders.some((p) => p._id === product._id)) {
      setOrders([...orders, product]);
    }
  };

  const cancelOrder = (id) => {
    setOrders(orders.filter((p) => p._id !== id));
  };

  const value = {
    user,
    isLoggedIn: !!user,
    signup,
    login,
    logout,
    cart,
    wishlist,
    orders,
    addToCart,
    removeFromCart,
    toggleWishlist,
    removeFromWishlist,
    orderNow,
    cancelOrder,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);

