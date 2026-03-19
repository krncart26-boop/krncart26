import React, { useState, useEffect, useRef, useContext } from "react";
import { useCart } from "../context/CartContext";

const POPULAR_DISHES = [
  { name: "Obbattu/Holige", hotel: "Home Made", price: 60.00, emoji: "🥘" },
  { name: "Sweet 1", hotel: "Home Made", price: 50.00, emoji: "🍯" },
  { name: "Kadle Kalu Gojju", hotel: "Home Made", price: 45.00, emoji: "🍲" },
  { name: "Mavinkayi Chitranna", hotel: "Home Made", price: 55.00, emoji: "🍚" },
  { name: "Rice Samber", hotel: "Home Made", price: 40.00, emoji: "🍛" },
  { name: "Vada and Bonda", hotel: "Home Made", price: 35.00, emoji: "🥟" },
  { name: "Kosambari Palya", hotel: "Home Made", price: 30.00, emoji: "🥗" },
];

export default function PopularDishesCarousel() {
  const { addToCart } = useCart();
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  useEffect(() => {
    if (!isAutoScroll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % POPULAR_DISHES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScroll]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.querySelector(".dish-item")?.offsetWidth || 0;
      if (itemWidth > 0) {
        scrollContainerRef.current.scrollLeft = currentIndex * itemWidth;
      }
    }
  }, [currentIndex]);

  const handleScroll = () => {
    setIsAutoScroll(false);
    setTimeout(() => setIsAutoScroll(true), 5000);
  };

  const handleAddToCart = (dish) => {
    addToCart({
      id: `${dish.hotel}-${dish.name}`,
      name: dish.name,
      basePrice: dish.price,
      hotelName: dish.hotel,
      subsection: null,
    });
  };

  return (
    <div className="popular-dishes-section">
      <h3 className="popular-dishes-title">🌸 Ugadi Special Meals 🌸</h3>
      <div
        className="popular-dishes-carousel"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {POPULAR_DISHES.map((dish, index) => (
          <div key={index} className="dish-item">
            <div className="dish-emoji">{dish.emoji}</div>
            <div className="dish-info">
              <h4 className="dish-name">{dish.name}</h4>
              <p className="dish-hotel">{dish.hotel}</p>
              <div className="dish-footer">
                <span className="dish-price">₹{dish.price}</span>
                <button
                  className="dish-add-btn"
                  onClick={() => handleAddToCart(dish)}
                  title="Add to cart"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="popular-dishes-dots">
        {POPULAR_DISHES.map((_, index) => (
          <button
            key={index}
            className={`dish-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoScroll(false);
              setTimeout(() => setIsAutoScroll(true), 5000);
            }}
            aria-label={`Go to dish ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
