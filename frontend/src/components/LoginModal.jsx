// src/components/LoginModal.jsx
import React, { useState } from "react";
import "./LoginModal.css";

const LoginModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginMethod, setLoginMethod] = useState("email");

  const handleGoogleLogin = () => {
    alert("Google login goes here (set up OAuth/Firebase)");
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>×</button>

        {/* Tab Switcher */}
        <div className="tab-switch">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Login/Signup Form */}
        <div className="form">
          <div className="method-switch">
            <label>
              <input
                type="radio"
                name="method"
                checked={loginMethod === "email"}
                onChange={() => setLoginMethod("email")}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                name="method"
                checked={loginMethod === "phone"}
                onChange={() => setLoginMethod("phone")}
              />
              Phone
            </label>
          </div>

          {loginMethod === "email" ? (
            <>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </>
          ) : (
            <>
              <input type="tel" placeholder="Phone Number" />
              <input type="password" placeholder="Password" />
            </>
          )}

          <button className="primary-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <div className="divider">or</div>

          <button className="google-btn" onClick={handleGoogleLogin}>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
