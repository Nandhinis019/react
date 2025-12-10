import { useAppContext } from "../context/AppContext.jsx";

export default function Cart() {
  const { cart, removeFromCart } = useAppContext();

  if (cart.length === 0) {
    return <p className="empty-text">Your cart is empty.</p>;
  }

  return (
    <div className="page-box">
      <h2 className="page-title">Your Cart</h2>
      <div className="list-grid">
        {cart.map((item) => (
          <div key={item._id} className="list-card fade-in-up">
            <img src={item.image} alt={item.name} className="list-image" />
            <div className="list-info">
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
            </div>
            <button
              className="secondary-btn"
              onClick={() => removeFromCart(item._id)}
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
