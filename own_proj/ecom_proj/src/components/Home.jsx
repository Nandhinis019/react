import { useState } from "react";
import { products } from "../utils/api";
import ProductModal from "./ProductModal.jsx";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home-page">
      <h1 className="page-title">Our Antique Collection</h1>
      <p className="page-subtitle">
        Explore unique vintage pieces that carry stories from the past.
      </p>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by name or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select
          className="filter-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((p) => (
          <div
            key={p._id}
            className="product-card fade-in-up"
            onClick={() => setSelectedProduct(p)}
          >
            <img src={p.image} alt={p.name} className="product-image" />
            <h3>{p.name}</h3>
            <p className="price">₹{p.price}</p>
            <p className="category-tag">{p.category}</p>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="empty-text">No products match your search.</p>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

