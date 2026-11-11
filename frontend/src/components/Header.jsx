import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import "./HeaderFooter.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header">
        <div className="header-container">
          <div
            className={`burger-menu ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <a href="#" className="logo">
            Sugar<span>Cafe</span>Charms
          </a>

          <div className="header-icons">
            <a href="#"><FaSearch /></a>
            <a href="#"><FaUser /></a>
            <a href="#"><FaShoppingBag /></a>
          </div>
        </div>

        <nav className={menuOpen ? "active" : ""}>
          <ul className="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="/Frontend/ShopPage">Shop</a></li>
            <li><a href="/custom">Custom Orders</a></li>
            <li><a href="/Frontend/About/About.html">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
