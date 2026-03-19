import React from "react";
import { useNavigate } from "react-router-dom";
import UgadiBanner from "../components/UgadiBanner";
import "../styles/categories.css";

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      id: "food-snacks",
      name: "Food & Snacks",
      icon: "🍽️",
      description: "Restaurants & Food Delivery",
      path: "/food-and-snacks",
      gradient: "linear-gradient(135deg, #FFE5E5 0%, #FFF0F0 100%)",
      backgroundImage: "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop')"
    },
    {
      id: "grocery",
      name: "Grocery",
      icon: "🛒",
      description: "Fresh Groceries & Essentials",
      path: "/grocery",
      gradient: "linear-gradient(135deg, #E5F5F0 0%, #F0FFFE 100%)",
      backgroundImage: "url('https://images.unsplash.com/photo-1488459716781-6918f33427d7?w=500&h=500&fit=crop')"
    },
    {
      id: "medicines",
      name: "Medicines",
      icon: "💊",
      description: "Pharmacy & Health Products",
      path: "/medicines",
      gradient: "linear-gradient(135deg, #E5F0FF 0%, #F0F8FF 100%)",
      backgroundImage: "url('https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=500&h=500&fit=crop')"
    },
    {
      id: "milk-water",
      name: "Milk & Water Services",
      icon: "🥛",
      description: "Daily Milk & Water Delivery",
      path: "/milk-water",
      gradient: "linear-gradient(135deg, #F5E5FF 0%, #FAF0FF 100%)",
      backgroundImage: "url('https://images.unsplash.com/photo-1585518419759-8b0e5fb91b98?w=500&h=500&fit=crop')"
    }
  ];

  return (
    <div className="categories-container">
      <div className="categories-header">
        <h1>What are you looking for?</h1>
        <p>Select a category to get started</p>
      </div>

      <UgadiBanner />

      <div className="categories-grid">
        {categories.map(category => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => navigate(category.path)}
            style={{ 
              backgroundImage: `${category.gradient}, ${category.backgroundImage}`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="category-content">
              <div className="category-icon">{category.icon}</div>
              <h2 className="category-name">{category.name}</h2>
              <p className="category-description">{category.description}</p>
              <div className="category-arrow">→</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
