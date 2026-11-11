import React from "react";
import "./HeaderFooter.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>About Us</h3>
            <ul className="footer-links">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Meet the Artist</a></li>
              <li><a href="#">Shop Policies</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Customer Care</h3>
            <ul className="footer-links">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Custom Orders</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Shop</h3>
            <ul className="footer-links">
              <li><a href="#">All Collections</a></li>
              <li><a href="#">New Releases</a></li>
              <li><a href="#">Bestsellers</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/sugarcafecharms?igsh=N2piZWJoYmhmd2R6"><FaInstagram /></a>
              <a href="https://www.youtube.com/@barnika_roynath"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 SugarCafeCharms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
