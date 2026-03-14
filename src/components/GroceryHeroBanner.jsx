import React, { useState, useEffect } from "react";

const BANNERS = [
  {
    id: 1,
    emoji: "💰",
    title: "STARTS FROM ₹1.99",
    subtitle: "Affordable grocery items",
    description: "Get quality groceries starting from just ₹1.99. Shop now!",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  },
  {
    id: 2,
    emoji: "🎯",
    title: "NO MINIMUM ORDER",
    subtitle: "Order what you need",
    description: "Buy as little or as much as you want. No minimum order required!",
    gradient: "linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",
  },
  {
    id: 3,
    emoji: "🛒",
    title: "GROCERIES NOW AVAILABLE",
    subtitle: "On KRN Cart",
    description: "Fresh groceries, daily needs & more delivered to your doorstep!",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
];

export default function GroceryHeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentBanner = BANNERS[currentIndex];

  return (
    <div className="grocery-hero-carousel-container">
      <div
        className="grocery-hero-carousel-slide"
        style={{ background: currentBanner.gradient }}
      >
        <div className="grocery-hero-carousel-emoji">{currentBanner.emoji}</div>
        <div className="grocery-hero-carousel-content">
          <h2 className="grocery-hero-carousel-title">{currentBanner.title}</h2>
          <p className="grocery-hero-carousel-subtitle">{currentBanner.subtitle}</p>
          <p className="grocery-hero-carousel-description">{currentBanner.description}</p>
        </div>
      </div>

      <div className="grocery-hero-carousel-dots">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            className={`grocery-carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
