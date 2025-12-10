import React from 'react'

export default function Orders({ orders, setOrders }) {
  const cancelOrder = (id) => {
    setOrders(orders.filter(order => order._id !== id));
  };

  if (orders.length === 0) {
    return (
      <div className="orders-container">
        <h2>Your Orders</h2>
        <p>You have no orders yet.</p>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h2>Your Orders ({orders.length} items)</h2>

      <div className="orders-items">
        {orders.map((order) => (
          <div key={order._id} className="order-item">
            <img src={order.image} alt={order.name} width="100" />
            <div className="item-details">
              <h3>{order.name}</h3>
              <p>₹{order.price}</p>
              <p>Status: Ordered</p>
              <button onClick={() => cancelOrder(order._id)} className="cancel-btn">Cancel Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
