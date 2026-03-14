import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/milkWater.css";
import MilkWaterHeroBanner from "../components/MilkWaterHeroBanner";

export default function MilkWater() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    const message = "I want to subscribe to milk and water delivery service.";
    const phoneNumber = "8660769547";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="milkwater-container">
      <div className="milkwater-header">
        <button 
          className="milkwater-back-btn"
          onClick={() => navigate("/home")}
        >
          ← Back
        </button>
        <h1>🥛 Milk & Water Services</h1>
      </div>

      <MilkWaterHeroBanner />

      <div className="milkwater-content">
        <h2>Our Services</h2>

        <div className="milkwater-services">
          <div className="service-card">
            <h3>💧 Water Delivery</h3>
            <p>
              Get 20 liters of fresh, purified water delivered to your doorstep every day. 
              Reliable and affordable water supply for your family.
            </p>
            <div className="service-price">₹19.99 per can</div>
          </div>

          <div className="service-card">
            <h3>🥛 Milk Service</h3>
            <p>
              Fresh milk delivered to your home with just one click. Choose from various 
              options and enjoy the convenience of doorstep delivery.
            </p>
            <div className="service-price">Flexible Plans Available</div>
          </div>

          <div className="service-card">
            <h3>🎁 Subscription Plans</h3>
            <p>
              Subscribe to our service and enjoy exclusive benefits, discounts, and 
              priority delivery. Best deals for regular customers.
            </p>
            <div className="service-price">Save More with Subscriptions</div>
          </div>
        </div>

        <button
          className="milkwater-subscribe-button"
          onClick={handleSubscribe}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
