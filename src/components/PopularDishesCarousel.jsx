import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";

const UGADI_MEALS = [
  {
    id: "ugadi-special-1",
    title: "🌸 Ugadi Special Meals",
    description: "Obbattu/Holige, Sweet 1, Kadle Kalu Gojju, Mavinkayi Chitranna, Rice Samber, Vada and Bonda, Kosambari Palya",
    price: 179.00,
    hotel: "Home Made",
    emoji: "🌸"
  },
  {
    id: "ugadi-special-2",
    title: "🌸 Ugadi Special Meals",
    description: "Obbattu/Holige, Sweet 1, Kadle Kalu Gojju, Mavinkayi Chitranna, Rice Samber, Vada and Bonda, Kosambari Palya",
    price: 179.00,
    hotel: "Home Made",
    emoji: "🌸"
  }
];

export default function PopularDishesCarousel() {
  const { addToCart } = useCart();
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % UGADI_MEALS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Scroll to current item
  useEffect(() => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.querySelector(".dish-item")?.offsetWidth || 0;
      if (itemWidth > 0) {
        scrollContainerRef.current.scrollLeft = currentIndex * itemWidth;
      }
    }
  }, [currentIndex]);

  const handleAddToCart = (meal) => {
    addToCart({
      id: meal.id,
      name: meal.title,
      basePrice: meal.price,
      hotelName: meal.hotel,
      subsection: null,
    });
  };

  return (
    <div className="popular-dishes-section">
      <h3 className="popular-dishes-title">🌸 Ugadi Special Meals 🌸</h3>
      <div
        className="popular-dishes-carousel"
        ref={scrollContainerRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        {UGADI_MEALS.map((meal, index) => (
          <div key={index} className="dish-item" style={{ minWidth: '100%', flex: '0 0 100%' }}>
            <div className="dish-emoji" style={{ fontSize: '48px', marginBottom: '12px' }}>{meal.emoji}</div>
            <div className="dish-info">
              <h4 className="dish-name" style={{ fontSize: '18px', fontWeight: '900', marginBottom: '8px' }}>{meal.title}</h4>
              <p className="dish-description" style={{ fontSize: '13px', color: '#666', marginBottom: '12px', lineHeight: '1.5' }}>
                {meal.description}
              </p>
              <p className="dish-hotel" style={{ fontSize: '12px', color: '#999', marginBottom: '12px' }}>{meal.hotel}</p>
              <div className="dish-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="dish-price" style={{ fontSize: '20px', fontWeight: '900', color: '#2E7D32' }}>₹{meal.price.toFixed(2)}</span>
                <button
                  className="dish-add-btn"
                  onClick={() => handleAddToCart(meal)}
                  title="Add to cart"
                  style={{
                    background: '#2E7D32',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#1b5e20'}
                  onMouseLeave={(e) => e.target.style.background = '#2E7D32'}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="popular-dishes-dots" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
        {UGADI_MEALS.map((_, index) => (
          <button
            key={index}
            className={`dish-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentIndex ? '#2E7D32' : '#ddd',
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
