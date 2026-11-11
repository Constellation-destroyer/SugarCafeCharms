import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [fetchedProducts, setFetchedProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        setFetchedProducts(res.data);
      })
      .catch(err => {
        console.error("Error fetching from backend:", err);
      });
  }, []);

  const staticProducts = [
    {
      id: 1,
      name: "Pink Bunny Charm",
      price: "₹150",
      image: "/Images/Product1.png", 
      category: "Animal Charms",
      badge: "New",
    },
    {
      id: 2,
      name: "Pastel Green Cake Box",
      price: "₹980",
      image: "/Images/Product2.png",
      category: "Cake Box",
      badge: "Bestseller",
    },
  ];

  const hardcoded = [{
  _id: "demo",
  name: "Test Product",
  price: "₹100",
  image: "/Images/Product1.png",
  category: "Test",
  badge: "New"
}];

  const allProducts = [...staticProducts, ...fetchedProducts, ...hardcoded];

  const categories = ["All", "Animal Charms", "Cake Box", "Keychains", "Accessories", "Custom", "Trinkets"];
  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <>
      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={product.id || product._id || index}>
            {product.badge && (
              <div className="product-badge">{product.badge}</div>
            )}
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p>{product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
