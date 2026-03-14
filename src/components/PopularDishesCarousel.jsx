import React, { useState, useEffect, useRef, useContext } from "react";
import { useCart } from "../context/CartContext";

const POPULAR_DISHES = [
  { name: "Masala Dosa", hotel: "Udupi Palace", price: 79.99, emoji: "🥘" },
  { name: "Idli Vada", hotel: "Sri Sudarshan", price: 42.99, emoji: "🍲" },
  { name: "Egg Burger", hotel: "American Cuisine", price: 69.99, emoji: "🍔" },
  { name: "Kunafa Pistachio dessert", hotel: "Ice Magic", price: 209.99, emoji: " 🍰" },
  { name: "Masala", hotel: "Keshava Chats", price: 39.99, emoji: "🍲" },
  { name: "chicken Biryani", hotel: "Popular Biriyani Palace", price: 149.99, emoji: "🍚" },
  { name: "Samosa", hotel: "Rajkumar Panipuri", price: 25.00, emoji: "🥟" },
  { name: "Champakali(1 piece)", hotel: "Ayyangars Cake House", price: 19.99, emoji: "🍰" },
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
      price: dish.price,
      hotelId: dish.hotel.toLowerCase().replace(/\s+/g, "-"),
      quantity: 1,
    });
  };

  return (
    <div className="popular-dishes-section">
      <h3 className="popular-dishes-title">🌟 Popular Dishes</h3>
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
