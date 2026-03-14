// Bottom navigation (fixed). Mobile-first with four tabs.
import React from "react";
import { NavLink } from "react-router-dom";

export default function BottomNav(){
  return (
    <nav className="bottom-nav">
      <NavLink to="/home" className={({isActive})=>"nav-item" + (isActive?" active":"")}>
        <span className="nav-emoji">🏠</span>
        <span className="nav-label">Home</span>
      </NavLink>

      <NavLink to="/cart" className={({isActive})=>"nav-item" + (isActive?" active":"")}>
        <span className="nav-emoji">🛒</span>
        <span className="nav-label">Cart</span>
      </NavLink>

      <NavLink to="/help" className={({isActive})=>"nav-item" + (isActive?" active":"")}>
        <span className="nav-emoji">❓</span>
        <span className="nav-label">Help</span>
      </NavLink>

      <NavLink to="/account" className={({isActive})=>"nav-item" + (isActive?" active":"")}>
        <span className="nav-emoji">👤</span>
        <span className="nav-label">Account</span>
      </NavLink>
    </nav>
  );
}
