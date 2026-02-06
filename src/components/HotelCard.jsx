// Modern hotel card with image placeholder, rating, and delivery info
import React from "react";

// Emoji mapping for different hotel types
const hotelEmojis = {
  "Udupi Palace": "🍳",
  "Ice Magic": "🍨",
  "KRN Restaurant": "🍽️",
  "Shri Tiffany's": "🥘",
  "Shri Hotel": "🍲",
  "Rajkumar Panipuri": "🍜",
  "Gowda Palav Centre": "🍚",
  "VB Bakery": "🥐",
  "Sanju Gobi House": "🥬",
  "Keshava Chats": "🌮",
  "Tirumala Juice": "🧃",
  "Ayyangars Bakery": "🍰",
  "Lakshmi Juice Corner": "🥤",
  "Gani's Restaurant": "🍴",
  "ShreeSha cafe": "☕",
};

export default function HotelCard({ name, onClick }){
  const emoji = hotelEmojis[name] || "🍴";
  const rating = (4 + Math.random()).toFixed(1);
  const deliveryTime = Math.floor(Math.random() * 15) + 20;

  return (
    <button 
      className="hotel-card" 
      onClick={onClick} 
      aria-label={`Open ${name}`}
    >
      <div className="hotel-image">{emoji}</div>
      <div className="hotel-info">
        <div className="hotel-name">{name}</div>
        <div className="hotel-meta">
          <span>⭐ {rating}</span>
          <span>•</span>
          <span>🚚 {deliveryTime}m</span>
        </div>
      </div>
    </button>
  );
}
