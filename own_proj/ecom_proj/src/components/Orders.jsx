import { useAppContext } from "../context/AppContext.jsx";

export default function Orders() {
  const { orders, cancelOrder } = useAppContext();

  if (orders.length === 0) {
    return <p className="empty-text">You have no orders yet.</p>;
  }

  return (
    <div className="page-box">
      <h2 className="page-title">Your Orders</h2>
      <div className="list-grid">
        {orders.map((item) => (
          <div key={item._id} className="list-card fade-in-up">
            <img src={item.image} alt={item.name} className="list-image" />
            <div className="list-info">
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>
            </div>
            <button
              className="secondary-btn"
              onClick={() => cancelOrder(item._id)}
            >
              ⛔ Cancel Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
