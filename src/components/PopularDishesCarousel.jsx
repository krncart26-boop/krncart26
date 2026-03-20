import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const SPECIAL_MEALS = [
  {
    id: "hosatodaku-special",
    title: "🍛 Hosatodaku Special Meals Combo 🍛",
    description: "Mudde, Mutton Samber, Biriyani Rice, Chicken Chops, Papper Chicken, White Rice, Mosarbajji, Banana",
    price: 299.00,
    hotel: "Home Made",
    emoji: "🍛",
    type: "combo"
  },
  {
    id: "sunith-cloud-kitchen",
    title: "☁️ Sunith Cloud Kitchen ☁️",
    description: "Fresh & Delicious Non-Veg Specialties - Check Menu for Details",
    price: "From ₹60",
    hotel: "Cloud Kitchen",
    emoji: "☁️",
    type: "restaurant"
  }
];

export default function PopularDishesCarousel() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SPECIAL_MEALS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to current item
  useEffect(() => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.querySelector(".meal-card")?.offsetWidth || 0;
      if (itemWidth > 0) {
        scrollContainerRef.current.scrollLeft = currentIndex * itemWidth;
      }
    }
  }, [currentIndex]);

  const handleAddToCart = (meal) => {
    if (meal.type === "combo") {
      addToCart({
        id: meal.id,
        name: meal.title,
        basePrice: meal.price,
        hotelName: meal.hotel,
        subsection: null,
      });
    }
  };

  const handleMenuClick = (meal) => {
    if (meal.type === "restaurant") {
      navigate("/sunith-cloud-kitchen");
    }
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <div
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: '12px',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {SPECIAL_MEALS.map((meal, index) => (
          <div
            key={index}
            className="meal-card"
            style={{
              flex: '0 0 100%',
              minWidth: '100%',
              scrollSnapAlign: 'start'
            }}
            onClick={() => handleMenuClick(meal)}
          >
            <div style={{
              background: meal.type === "combo" 
                ? 'linear-gradient(135deg, #FCA5A5 0%, #F87171 50%, #EF4444 100%)'
                : 'linear-gradient(135deg, #BFDBFE 0%, #93C5FD 50%, #60A5FA 100%)',
              borderRadius: '12px',
              padding: '14px 12px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: meal.type === "combo" 
                ? '0 4px 12px rgba(239, 68, 68, 0.2)'
                : '0 4px 12px rgba(59, 130, 246, 0.2)',
              border: meal.type === "combo" ? '2px solid #FECACA' : '2px solid #BFDBFE',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {/* Decorative elements */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                fontSize: '60px',
                opacity: '0.1',
                animation: 'spin 20s linear infinite'
              }}>
                {meal.type === "combo" ? '🍗' : '☁️'}
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-18px',
                right: '-18px',
                fontSize: '70px',
                opacity: '0.08',
                animation: 'spin 25s linear infinite reverse'
              }}>
                {meal.type === "combo" ? '🍖' : '☁️'}
              </div>
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '14px',
                fontSize: '20px',
                animation: 'bounce 2s infinite'
              }}>
                {meal.type === "combo" ? '🍗' : '☁️'}
              </div>
              <div style={{
                position: 'absolute',
                bottom: '14px',
                left: '14px',
                fontSize: '20px',
                animation: 'bounce 2s infinite 0.5s'
              }}>
                {meal.type === "combo" ? '🍖' : '☁️'}
              </div>

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
                  color: meal.type === "combo" ? '#7f1d1d' : '#1e40af',
                  textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
                  letterSpacing: '0.3px'
                }}>
                  {meal.title}
                </h2>

                {/* Hotel name */}
                <p style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  color: meal.type === "combo" ? '#991b1b' : '#1e3a8a',
                  margin: '0 0 6px 0',
                  opacity: '0.9',
                  textShadow: '1px 1px 2px rgba(255,255,255,0.3)'
                }}>
                  🏠 {meal.hotel}
                </p>

                {/* Description */}
                <p style={{
                  fontSize: '11px',
                  color: meal.type === "combo" ? '#7f1d1d' : '#1e40af',
                  margin: '0 0 10px 0',
                  lineHeight: '1.4',
                  opacity: '0.85',
                  textShadow: '1px 1px 2px rgba(255,255,255,0.3)',
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
                    background: 'rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    border: '1px solid rgba(255,255,255,0.6)'
                  }}>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: '900',
                      color: meal.type === "combo" ? '#7f1d1d' : '#1e40af',
                      textShadow: '1px 1px 2px rgba(255,255,255,0.5)'
                    }}>
                      {meal.type === "combo" ? `₹${meal.price.toFixed(2)}` : meal.price}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (meal.type === "combo") {
                        handleAddToCart(meal);
                      } else {
                        handleMenuClick(meal);
                      }
                    }}
                    style={{
                      background: meal.type === "combo" ? '#DC2626' : '#2563EB',
                      color: '#fff',
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
                    {meal.type === "combo" ? '🛒 Add' : '📋 Menu'}
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
        ))}
      </div>

      {/* Navigation dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
        {SPECIAL_MEALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentIndex ? '#DC2626' : '#ddd',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            aria-label={`Go to meal ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
