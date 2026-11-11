import React, { useEffect } from "react";
import ProductGrid from "./components/ProductGrid";
import "./assets/Shop.css";

const Shop = () => {
  useEffect(() => {
    document.body.classList.add("shop-theme");

    return () => {
      document.body.classList.remove("shop-theme");
    };
  }, []);

  return (
    <div className="shop-page">
      <ProductGrid />
    </div>
  );
};

export default Shop;
