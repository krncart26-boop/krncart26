// Bottom navigation (fixed). Mobile-first with three tabs.
import React from "react";
import { NavLink } from "react-router-dom";

export default function BottomNav(){
  return (
    <nav className="bottom-nav">
      <NavLink to="/home" className={({isActive})=>"nav-item" + (isActive?" active":"")}>
        <div>🏠</div>
        <div>Home</div>
      </NavLink>

      <NavLink to="/cart" className={({isActive})=>"nav-item" + (isActive?" active":"")}>
        <div>🛒</div>
        <div>Cart</div>
      </NavLink>

      <NavLink to="/account" className={({isActive})=>"nav-item" + (isActive?" active":"")}>
        <div>👤</div>
        <div>Account</div>
      </NavLink>
    </nav>
  );
}
