import React, { useState, useEffect } from "react";
import "../styles/milkWater.css";

export default function MilkWaterHeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "20 Liter Water",
      subtitle: "Delivered Every Day",
      price: "₹19.99",
      emoji: "💧",
      gradient: "linear-gradient(135deg, #4A9FBE 0%, #2E7BA8 100%)"
    },
    {
      title: "Milk Service",
      subtitle: "To Your Home Starts by One Click",
      price: "Fresh Daily",
      emoji: "🥛",
      gradient: "linear-gradient(135deg, #F5A623 0%, #D68910 100%)"
    },
    {
      title: "Take Subscription",
      subtitle: "Enjoy Our Service",
      price: "Best Deals",
      emoji: "🎁",
      gradient: "linear-gradient(135deg, #7ED321 0%, #5FA319 100%)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="milkwater-hero-carousel-container">
      <div className="milkwater-hero-carousel-slide" style={{ background: slides[currentSlide].gradient }}>
        <div className="milkwater-hero-carousel-emoji">
          {slides[currentSlide].emoji}
        </div>
        <div className="milkwater-hero-carousel-content">
          <h2 className="milkwater-hero-carousel-title">
            {slides[currentSlide].title}
          </h2>
          <p className="milkwater-hero-carousel-subtitle">
            {slides[currentSlide].subtitle}
          </p>
          <p className="milkwater-hero-carousel-price">
            {slides[currentSlide].price}
          </p>
        </div>
      </div>

      <div className="milkwater-hero-carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`milkwater-carousel-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
