import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/grocery.css";
import GroceryHeroBanner from "../components/GroceryHeroBanner";
import ItemCard from "../components/ItemCard";
import pulsesAndLentils from "../data/groceryItems/pulsesAndLentils";
import spices from "../data/groceryItems/spices";
import oilsAndGhee from "../data/groceryItems/oilsAndGhee";
import flourAndSemolina from "../data/groceryItems/flourAndSemolina";
import dairyProducts from "../data/groceryItems/dairyProducts";
import masalaPackets from "../data/groceryItems/masalaPackets";
import chipsAndKurkure from "../data/groceryItems/chipsAndKurkure";
import biscuits from "../data/groceryItems/biscuits";
import chocolates from "../data/groceryItems/chocolates";
import personalCare from "../data/groceryItems/personalCare";
import dentalCare from "../data/groceryItems/dentalCare";
import hairCare from "../data/groceryItems/hairCare";
import cleaningItems from "../data/groceryItems/cleaningItems";
import poojaItems from "../data/groceryItems/poojaItems";

export default function Grocery() {
  const navigate = useNavigate();
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const groceryData = [
    {
      id: "cooking-essentials",
      title: "Cooking Essentials",
      icon: "🍳",
      type: "cards",
      subcategories: [
        { name: "ಕಾಳು ಮತ್ತು ಬೇಳೆ", englishName: "Pulses & Lentils", icon: "🫘", items: pulsesAndLentils },
        { name: "ಮಸಾಲೆ ಪದಾರ್ಥ", englishName: "Spices", icon: "🌶️", items: spices },
        { name: "ಎಣ್ಣೆ ಮತ್ತು ತುಪ್ಪ", englishName: "Oil & Ghee", icon: "🫗", items: oilsAndGhee },
        { name: "ಹಿಟ್ಟು, ರವೆ ಮತ್ತು ಅವಲಕ್ಕಿ", englishName: "Flour & Semolina", icon: "🌾", items: flourAndSemolina },
        { name: "ಹಾಲು ಮತ್ತು ಮೊಸರು", englishName: "Dairy Products", icon: "🥛", items: dairyProducts },
        { name: "ಮಸಾಲೆ ಪ್ಯಾಕೆಟ್", englishName: "Masala Packets", icon: "📦", items: masalaPackets }
      ]
    },
    {
      id: "tindis",
      title: "Tindis",
      icon: "🍟",
      type: "cards",
      subcategories: [
        { name: "ಚಿಪ್ಸ್ ಮತ್ತು ಕುರ್ಕುರೆ", englishName: "Chips & Kurkure", icon: "🥔", items: chipsAndKurkure },
        { name: "ಬಿಸ್ಕೆಟ್", englishName: "Biscuits", icon: "🍪", items: biscuits },
        { name: "ಚಾಕೋಲೇಟ್ ಮತ್ತು ಸಿಹಿ", englishName: "Chocolates & Sweets", icon: "🍫", items: chocolates }
      ]
    },
    {
      id: "daily-needs",
      title: "Daily Needs",
      icon: "🛁",
      type: "cards",
      subcategories: [
        { name: "ವೈಯಕ್ತಿಕ ಬಳಕೆ", englishName: "Personal Care", icon: "🧴", items: personalCare },
        { name: "ಹಲ್ಲು ಸ್ವಚ್ಛತೆ", englishName: "Dental Care", icon: "🦷", items: dentalCare },
        { name: "ಕೂದಲು ಸಂರಕ್ಷಣೆ", englishName: "Hair Care", icon: "💇", items: hairCare },
        { name: "ಸ್ವಚ್ಛತಾ ಸಾಮಗ್ರಿಗಳು", englishName: "Cleaning Items", icon: "🧹", items: cleaningItems },
        { name: "ಪೂಜಾ ಸಾಮಗ್ರಿಗಳು", englishName: "Pooja Items", icon: "🙏", items: poojaItems }
      ]
    }
  ];

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleBackFromItems = () => {
    setSelectedSubcategory(null);
  };

  if (selectedSubcategory) {
    return (
      <div className="grocery-container">
        <div className="grocery-header">
          <button 
            className="back-btn"
            onClick={handleBackFromItems}
          >
            ← Back
          </button>
          <h1>{selectedSubcategory.englishName}</h1>
        </div>

        <div className="items-list">
          {selectedSubcategory.items && selectedSubcategory.items.length > 0 ? (
            selectedSubcategory.items.map(item => (
              <ItemCard
                key={item.id}
                id={`grocery-${item.id}`}
                name={item.englishName}
                kannada={item.name}
                price={item.price}
                subsection={selectedSubcategory.englishName}
              />
            ))
          ) : (
            <div className="no-items">
              <p>No items available yet</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="grocery-container">
      <div className="grocery-header">
        <button 
          className="back-btn"
          onClick={() => navigate("/home")}
        >
          ← Back
        </button>
        <h1>🛒 Grocery</h1>
      </div>

      <GroceryHeroBanner />

      <div className="grocery-sections">
        {groceryData.map(section => (
          <div key={section.id} className="grocery-section">
            <div className="section-header">
              <div className="section-title-wrapper">
                <span className="section-icon">{section.icon}</span>
                <h2 className="section-title">{section.title}</h2>
              </div>
            </div>

            {section.type === "cards" ? (
              <div className="subcategories-grid">
                {section.subcategories.map((sub, idx) => (
                  <div 
                    key={idx} 
                    className="subcategory-card"
                    onClick={() => handleSubcategoryClick(sub)}
                  >
                    <div className="card-icon">{sub.icon}</div>
                    <p className="card-kannada">{sub.name}</p>
                    <p className="card-english">{sub.englishName}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="subcategories">
                {section.subcategories.map((sub, idx) => (
                  <div 
                    key={idx} 
                    className="subcategory-item"
                    onClick={() => handleSubcategoryClick(sub)}
                  >
                    <div className="subcategory-content">
                      <p className="subcategory-kannada">{sub.name}</p>
                      <p className="subcategory-english">{sub.englishName}</p>
                    </div>
                    <span className="subcategory-arrow">→</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
