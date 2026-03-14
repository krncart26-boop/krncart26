import React, { useState, useEffect } from "react";

const BANNERS = [
  {
    id: 1,
    emoji: "💊",
    title: "MEDICINES NOW AVAILABLE",
    subtitle: "On KRN Cart",
    description: "Get quality medicines delivered to your doorstep. Fast & reliable service!",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    emoji: "🏥",
    title: "TRUSTED PHARMACY",
    subtitle: "Quality assured medicines",
    description: "All medicines are authentic and sourced from trusted suppliers.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    emoji: "⚡",
    title: "FAST DELIVERY",
    subtitle: "Quick & convenient",
    description: "Order now and get your medicines delivered quickly to your location!",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

export default function MedicinesHeroBanner() {
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
    <div className="medicines-hero-carousel-container">
      <div
        className="medicines-hero-carousel-slide"
        style={{ background: currentBanner.gradient }}
      >
        <div className="medicines-hero-carousel-emoji">{currentBanner.emoji}</div>
        <div className="medicines-hero-carousel-content">
          <h2 className="medicines-hero-carousel-title">{currentBanner.title}</h2>
          <p className="medicines-hero-carousel-subtitle">{currentBanner.subtitle}</p>
          <p className="medicines-hero-carousel-description">{currentBanner.description}</p>
        </div>
      </div>

      <div className="medicines-hero-carousel-dots">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            className={`medicines-carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
