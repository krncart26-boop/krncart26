// KRN Restaurant page: shows list of sections as cards
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";

// Sections data in required order with English + Kannada titles
const SECTIONS = [
  { english: "Veg Starters", kannada: "ಶಾಕಾಹಾರಿ ಸ್ಟಾರ್ಟರ್ಸ್", slug: "veg-starters" },
  { english: "Chicken Starters", kannada: "ಚಿಕನ್ ಸ್ಟಾರ್ಟರ್ಸ್", slug: "chicken-starters" },
  { english: "Soup Starters", kannada: "ಸೂಪ್ ಸ್ಟಾರ್ಟರ್ಸ್", slug: "soup-starters" },
  { english: "Salad Special", kannada: "ಸಲಾಡ್ ವಿಶೇಷ", slug: "salad-special" },
  { english: "Naty Style", kannada: "ನಾಡಿ ಶೈಲಿ", slug: "naty-style", subtitle: "Local / Traditional Style" },
  { english: "KRN Rice Bowls", kannada: "ಕೆಆರ್‌ಎನ್ ರೈಸ್ ಬೌಲ್ಸ್", slug: "krn-rice-bowls" },
  { english: "Breads", kannada: "ರೊಟ್ಟಿ / ಬ್ರೆಡ್ಸ್", slug: "breads" },
  { english: "KRN Mutton Special", kannada: "ಕೆಆರ್‌ಎನ್ ಮಟನ್ ವಿಶೇಷ", slug: "krn-mutton-special" },
  { english: "Indian Gravies", kannada: "ಭಾರತೀಯ ಗ್ರೇವಿಗಳು", slug: "indian-gravies" },
];

export default function KRNRestaurant(){
  const navigate = useNavigate();

  const handleSectionClick = (slug) => {
    // Route all section clicks to the evening food filter
    navigate(`/krn-restaurant/filter/evening`);
  };

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">KRN Restaurant</h2>
      </div>

      {/* Timing banner - informational only */}
      <div className="timing-banner" role="region" aria-label="Restaurant opening hours">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
          <span className="status-dot" />
        </div>

        <div className="timing-text">
          <div className="timing-title">Open Today</div>
          <div className="timing-time">1:00 PM – 9:00 PM</div>
          <div className="timing-sub">Freshly prepared after opening hours</div>
        </div>
      </div>

      <div className="section-list">
        {SECTIONS.map(s => (
          <SectionCard
            key={s.slug}
            english={s.english}
            kannada={s.kannada}
            subtitle={s.subtitle}
            onClick={() => handleSectionClick(s.slug)}
          />
        ))}
      </div>
    </div>
  );
}