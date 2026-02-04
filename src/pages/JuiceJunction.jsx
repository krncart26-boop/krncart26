// Lakshmi Juice Corner main page: timing banner and section list
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { JUICE_DATA, JUICE_SECTION_MAP } from "../data/menus/juiceJunction";

const SECTIONS = [
  { english: "🧃 JUICES", kannada: "ಜ್ಯೂಸ್‌ಗಳು", slug: "juices" },
  { english: "🥤 SODA", kannada: "ಸೋಡಾ", slug: "soda" },
  { english: "🥛 MILK SHAKE", kannada: "ಮಿಲ್ಕ್ ಶೇಕ್", slug: "milk-shake" },
];

export default function JuiceJunction(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Lakshmi Juice Corner</h2>
      </div>

      {/* Lakshmi Juice Corner timing banner - reuse ice-timing-banner for identical appearance */}
      <div className="ice-timing-banner" role="region" aria-label="Lakshmi Juice Corner opening hours">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
          <span className="status-dot" />
        </div>

        <div className="timing-text">
          <div className="timing-title">Lakshmi Juice Corner</div>
          <div className="timing-time">Fresh Juices & Beverages</div>
        </div>
      </div>

      <div className="section-list">
        {SECTIONS.map(s => (
          <SectionCard
            key={s.slug}
            english={s.english}
            kannada={s.kannada}
            onClick={()=>navigate(`/juice-junction/${s.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}

export const hotelId = 'juice-junction';
export const hotelName = 'Lakshmi Juice Corner';
export const menu = JUICE_DATA;
export const sectionMap = JUICE_SECTION_MAP;
export const routePrefix = 'juice-junction';
