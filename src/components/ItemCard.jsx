// Reusable ItemCard: shows item name, Kannada name, price, qty controls and Add to Cart
import React, {useState} from "react";
import { useCart } from "../context/CartContext";

import { useLocation } from "react-router-dom";

export default function ItemCard({ id, name, kannada, price }){
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const location = useLocation();

  // Derive hotel name from current route for parcel charges
  function getHotelNameFromPath(pathname){
    const parts = pathname.split('/').filter(Boolean);
    if(parts.length === 0) return undefined;
    const first = parts[0];

    const map = {
      'vb-bakery': 'VB Bakery',
      'ice-magic': 'Ice Magic',
      'udupi-hotel': 'Udupi Hotel',
      'krn-restaurant': 'KRN Restaurant',
      'gowda-palav-centre': 'Gowda Palav Centre',
      'tirumala-juice': 'Tirumala Juice',
      'shri-hotel': 'Shri Hotel',
      'shri-tiffanys': "Shri Tiffany's",
      'rajkumar': 'Rajkumar Panipuri',
      'sanju-gobi-house': 'Sanju Gobi House',
      'keshava-chats': 'Keshava Chats',
      'juice-junction': 'Juice Junction',
    };

    if(map[first]) return map[first];
    if(first === 'hotel' && parts[1]) return decodeURIComponent(parts[1]);
    return undefined;
  }

  function inc(){ setQty(q => q + 1); }
  function dec(){ setQty(q => Math.max(1, q - 1)); }

  const [toast, setToast] = useState(null);

  function showToast(msg){
    setToast(msg);
    setTimeout(()=>setToast(null), 2200);
  }

  function handleAdd(){
    const hotelName = getHotelNameFromPath(location.pathname);
    addToCart({ id, name, basePrice: price, hotelName }, qty);
    showToast(`${name} x${qty} added to cart`);
    setQty(1);
  }

  return (
    <div className="item-card">
      <div className="item-card-row">
        <div className="item-meta">
          <div className="item-name">{name}</div>
          <div className="item-kannada">{kannada}</div>
        </div>

        <div className="item-card-right">
          <div className="item-price">₹{price.toFixed(2)}</div>

          <div className="controls">
            <div className="qty-controls">
              <button className="qty-btn" onClick={dec}>-</button>
              <div className="qty-number">{qty}</div>
              <button className="qty-btn" onClick={inc}>+</button>
            </div>

            <button className="add-btn" onClick={handleAdd}>Add to Cart</button>
          </div>
        </div>
      </div>

      {toast && <div className="toast" role="status" aria-live="polite">{toast}</div>}
    </div>
  );
}