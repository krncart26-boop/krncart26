// Header component shown on top of non-splash pages.
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { count } = useCart();

  return (
    <header className="header">
      <div className="logo">KRN CART</div>

      <div className="header-right">
        <button className="header-btn" onClick={() => navigate("/order-history")}>Order History</button>

        <div className="cart-icon" style={{cursor:'pointer'}} onClick={()=>navigate('/cart')}>
          <span style={{fontSize:18}}>🛒</span>
          <span className="cart-count">{count}</span>
        </div>
      </div>
    </header>
  );
}
