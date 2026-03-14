import React, { useState, useEffect } from "react";

const BANNERS = [
  {
    id: 1,
    emoji: "🚚",
    title: "FREE DELIVERY",
    subtitle: "On orders above ₹100",
    description: "Get free delivery on all orders above ₹100. No hidden charges!",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    emoji: "📍",
    title: "FREE DELIVERY",
    subtitle: "Within 3km radius",
    description: "Enjoy free delivery on all orders within 3km from your location!",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    emoji: "🍽️",
    title: "ENJOY YOUR FAVORITES",
    subtitle: "From your favorite hotels",
    description: "Order delicious food from your favorite restaurants and enjoy!",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
  id: 4,
  emoji: "🍔",
  title: "AMERICAN CUISINE",
  subtitle: "Now available on KRN Cart",
  description: "Enjoy delicious burgers, pizzas, and more from American Cuisine!",
  gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
},
];

export default function HeroBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentBanner = BANNERS[currentIndex];

  return (
    <div className="hero-carousel-container">
      <div
        className="hero-carousel-slide"
        style={{ background: currentBanner.gradient }}
      >
        <div className="hero-carousel-emoji">{currentBanner.emoji}</div>
        <div className="hero-carousel-content">
          <h2 className="hero-carousel-title">{currentBanner.title}</h2>
          <p className="hero-carousel-subtitle">{currentBanner.subtitle}</p>
          <p className="hero-carousel-description">{currentBanner.description}</p>
        </div>
      </div>

      <div className="hero-carousel-dots">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
