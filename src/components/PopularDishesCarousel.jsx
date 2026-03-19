import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";

const UGADI_MEALS = [
  {
    id: "ugadi-special",
    title: "🌸 Ugadi Special Meals 🌸",
    description: "Obbattu/Holige, Sweet 1, Kadle Kalu Gojju, Mavinkayi Chitranna, Rice Samber, Vada and Bonda, Kosambari Palya",
    price: 179.00,
    hotel: "Home Made",
    emoji: "🌸"
  }
];

export default function PopularDishesCarousel() {
  const { addToCart } = useCart();
  const meal = UGADI_MEALS[0];

  const handleAddToCart = () => {
    addToCart({
      id: meal.id,
      name: meal.title,
      basePrice: meal.price,
      hotelName: meal.hotel,
      subsection: null,
    });
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
        borderRadius: '12px',
        padding: '14px 12px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)',
        border: '2px solid #6EE7B7'
      }}>
        {/* Decorative festive elements */}
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '-15px',
          fontSize: '60px',
          opacity: '0.1',
          animation: 'spin 20s linear infinite'
        }}>🎉</div>
        <div style={{
          position: 'absolute',
          bottom: '-18px',
          right: '-18px',
          fontSize: '70px',
          opacity: '0.08',
          animation: 'spin 25s linear infinite reverse'
        }}>🎊</div>
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '14px',
          fontSize: '20px',
          animation: 'bounce 2s infinite'
        }}>🌸</div>
        <div style={{
          position: 'absolute',
          bottom: '14px',
          left: '14px',
          fontSize: '20px',
          animation: 'bounce 2s infinite 0.5s'
        }}>🌸</div>

        {/* Main content */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          {/* Emoji */}
          <div style={{ fontSize: '36px', marginBottom: '6px', animation: 'pulse 2s infinite' }}>
            {meal.emoji}
          </div>

          {/* Title */}
          <h2 style={{
            fontSize: '16px',
            fontWeight: '900',
            margin: '0 0 4px 0',
            color: '#fff',
            textShadow: '1px 1px 2px rgba(0,0,0,0.15)',
            letterSpacing: '0.3px'
          }}>
            {meal.title}
          </h2>

          {/* Hotel name */}
          <p style={{
            fontSize: '11px',
            fontWeight: '600',
            color: '#fff',
            margin: '0 0 6px 0',
            opacity: '0.9',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            🏠 {meal.hotel}
          </p>

          {/* Description */}
          <p style={{
            fontSize: '11px',
            color: '#fff',
            margin: '0 0 10px 0',
            lineHeight: '1.4',
            opacity: '0.85',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            fontWeight: '500'
          }}>
            {meal.description}
          </p>

          {/* Price and Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '8px',
              padding: '6px 12px',
              border: '1px solid rgba(255,255,255,0.4)'
            }}>
              <span style={{
                fontSize: '18px',
                fontWeight: '900',
                color: '#fff',
                textShadow: '1px 1px 2px rgba(0,0,0,0.15)'
              }}>
                ₹{meal.price.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              style={{
                background: '#fff',
                color: '#10B981',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '11px',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
              }}
            >
              🛒 Add
            </button>
          </div>
        </div>

        {/* CSS animations */}
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
          }
        `}</style>
      </div>
    </div>
  );
}
