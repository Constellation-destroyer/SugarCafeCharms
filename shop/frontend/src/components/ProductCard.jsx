import React from "react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Pink Bunny Charm",
      price: "₹150",
      image: "/Images/Product1.png", 
    },
    {
      id: 2,
      name: "Pastel Green Cakebox",
      price: "₹980",
      image: "/Images/Product2.png",
    },
    // Add more products 
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
