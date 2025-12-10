import { useAppContext } from "../context/AppContext.jsx";

export default function ProductModal({ product, onClose }) {
  const {
    cart,
    wishlist,
    orders,
    addToCart,
    toggleWishlist,
    orderNow,
    cancelOrder,
  } = useAppContext();

  const inCart = cart.some((p) => p._id === product._id);
  const inWishlist = wishlist.some((p) => p._id === product._id);
  const ordered = orders.some((p) => p._id === product._id);

  const handleOrderClick = () => {
    if (ordered) {
      cancelOrder(product._id);
    } else {
      orderNow(product);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>

        <img src={product.image} alt={product.name} className="details-image" />

        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="details-desc">{product.description}</p>

        <div className="modal-actions">
          <button
            className={`secondary-btn ${inCart ? "disabled-btn" : ""}`}
            onClick={() => !inCart && addToCart(product)}
          >
            🛒 {inCart ? "Added to Cart" : "Add to Cart"}
          </button>

          <button
            className={`secondary-btn ${inWishlist ? "active-wishlist" : ""}`}
            onClick={() => toggleWishlist(product)}
          >
            ❤️ {inWishlist ? "Remove Wishlist" : "Add Wishlist"}
          </button>

          <button
            className={`primary-btn ${ordered ? "ordered-btn" : ""}`}
            onClick={handleOrderClick}
          >
            📦 {ordered ? "Cancel Order" : "Order Now"}
          </button>
        </div>

        {ordered && (
          <p className="order-note">✅ Product added to your orders.</p>
        )}
      </div>
    </div>
  );
}

