// Reusable ItemCard: shows item name, Kannada name, price, qty controls and Add to Cart
import React, {useState} from "react";
import { useCart } from "../context/CartContext";

import { useLocation } from "react-router-dom";

export default function ItemCard({ id, name, kannada, price, parcelCharge, deliveryCharge, subsection: propSubsection, quantity }){
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
      'amma-mane-uta': 'Amma Mane Uta',
      'udupi-hotel': 'Udupi Hotel',
      'udupi-palace': 'Udupi Palace',
      'krn-restaurant': 'KRN Restaurant',
      'gowda-palav-centre': 'Gowda Palav Centre',
      'tirumala-juice': 'Tirumala Juice',
      'shri-hotel': 'Shri Hotel',
      'shri-tiffanys': "Shri Tiffany's",
      'rajkumar': 'Rajkumar Panipuri',
      'sanju-gobi-house': 'Sanju Gobi House',
      'harish-gobi-centre': 'Harish Gobi Centre',
      'keshava-chats': 'Keshava Chats',
      'juice-junction': 'Lakshmi Juice Corner',
      'lakshmi-juice-corner': 'Lakshmi Juice Corner',
      'ayyangars-bakery': 'Ayyangars Bakery',
      'ayyangars-cake-house': 'Ayyangars Cake House',
      'shreesha-india': 'ShreeSha India',
      'shreesha-cafe': 'ShreeSha cafe',
      'ganis-restaurant': "Gani's Restaurant",
      'popular-biriyani-palace': 'Popular Biriyani Palace',
      'american-cuisine': 'American Cuisine',
      'sri-sudarshan': 'Sri Sudarshan',
      'punjabi-hotel': 'Punjabi Hotel',
      'grocery': 'Grocery Store',
    };

    if(map[first]) return map[first];
    if(first === 'hotel' && parts[1]) return decodeURIComponent(parts[1]);
    return undefined;
  }

  // Extract subsection from current route
  function getSubsectionFromPath(pathname){
    const parts = pathname.split('/').filter(Boolean);
    if(parts.length <= 1) return null; // No subsection if only hotel name
    
    // Remove the hotel name and 'filter' keyword from path
    let subsectionParts = parts.slice(1);
    if(subsectionParts[0] === 'filter') {
      subsectionParts = subsectionParts.slice(1);
    }
    
    if(subsectionParts.length === 0) return null;
    
    // Format: convert slugs to readable names
    const formatted = subsectionParts.map(part => {
      return part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }).join(' > ');
    
    return formatted || null;
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
    // Use prop subsection if provided, otherwise extract from path
    const subsection = propSubsection || getSubsectionFromPath(location.pathname);
    const cartItem = { id, name, basePrice: price, hotelName, subsection };
    if(quantity) cartItem.productQuantity = quantity;
    if(parcelCharge !== undefined) cartItem.parcelCharge = parcelCharge;
    if(deliveryCharge !== undefined) cartItem.deliveryCharge = deliveryCharge;
    addToCart(cartItem, qty);
    showToast(`${name} x${qty} added to cart`);
    setQty(1);
  }

  return (
    <div className="item-card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'8px',marginBottom:'8px'}}>
        <div style={{flex:1}}>
          <div className="item-name">{name}</div>
          <div className="item-kannada">{kannada}</div>
        </div>
        <div className="item-price">₹{price.toFixed(2)}</div>
      </div>

      {quantity && <div style={{fontSize:'11px',color:'var(--muted)',marginBottom:'8px'}}>Size: {quantity}</div>}

      <div className="controls">
        <div className="qty-controls">
          <button className="qty-btn" onClick={dec}>-</button>
          <div className="qty-number">{qty}</div>
          <button className="qty-btn" onClick={inc}>+</button>
        </div>

        <button className="add-btn" onClick={handleAdd}>Add</button>
      </div>

      {toast && <div className="toast" role="status" aria-live="polite">{toast}</div>}
    </div>
  );
}