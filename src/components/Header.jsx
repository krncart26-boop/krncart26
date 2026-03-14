// Header component shown on top of non-splash pages.
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { count } = useCart();

  return (
    <header className="header">
      <div className="header-logo-section">
        <div className="logo-emoji">🍽️</div>
        <div className="logo">KRN CART</div>
      </div>

      <div className="header-right">
        <button className="header-btn order-history-btn" onClick={() => navigate("/order-history")}>
          <span className="btn-icon">📋</span>
          <span className="btn-text">Orders</span>
        </button>

        <div className="cart-icon-wrapper" onClick={()=>navigate('/cart')}>
          <div className="cart-icon">
            <span className="cart-emoji">🛒</span>
            {count > 0 && <span className="cart-count">{count}</span>}
          </div>
        </div>
      </div>
    </header>
  );
}
