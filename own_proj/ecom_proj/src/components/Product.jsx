import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../utils/api";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => String(p._id) === id);

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="details-image" />

      <div className="details-content">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p>{product.description}</p>

        <Link to="/products" className="back-btn">← Back to Products</Link>
      </div>
    </div>
  );
}


