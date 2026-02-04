// Ice Magic page: shows list of sections as cards with a timing banner
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { ICE_MAGIC_DATA, ICE_MAGIC_SECTION_MAP } from "../data/menus/iceMagic";

const SECTIONS = [
  { english: "IM SPECIAL ICE CREAM", kannada: "", slug: "im-special-ice-cream" },
  { english: "PASTRY", kannada: "", slug: "pastry" },
  { english: "FALOODA & SPECIAL ITEMS", kannada: "", slug: "falooda-special" },
  { english: "🍓 FRUITS & CUSTARD", kannada: "", slug: "fruits-custard" },
  { english: "🍧 SPECIAL COMBINATIONS", kannada: "", slug: "special-combinations" },
  { english: "👑 ROYAL SUNDAES", kannada: "", slug: "royal-sundaes" },
  { english: "🧒 KIDS ZONE", kannada: "", slug: "kids-zone" },
  { english: "🍫 CHOCOLATE SUNDAES", kannada: "", slug: "chocolate-sundaes" },
  { english: "🍰 CAKE WITH ICE CREAM", kannada: "", slug: "cake-with-ice-cream" },
  { english: "🍨 ICE CREAM SCOOPS", kannada: "", slug: "ice-cream-scoops" },
  { english: "🥤 ICE CREAM SHAKES", kannada: "ಐಸ್ ಕ್ರೀಮ್ ಶೇಕ್ಸ್", slug: "ice-cream-shakes" },
  { english: "🥛 MILK SHAKE WITH ICE CREAM", kannada: "ಐಸ್ ಕ್ರೀಮ್ ಮಿಲ್ಕ್ ಶೇಕ್", slug: "milk-shake-with-ice-cream" },
  { english: "🥤 MILK SHAKES", kannada: "ಮಿಲ್ಕ್ ಶೇಕ್ಸ್", slug: "milk-shakes" },
  { english: "🍟 STARTERS", kannada: "ಸ್ಟಾರ್ಟರ್ಸ್", slug: "starters" },
  { english: "🥟 VEG MOMOS", kannada: "ವೆಜ್ ಮೊಮೊಸ್", slug: "veg-momos" },
  { english: "🥪 SANDWICH", kannada: "ಸ್ಯಾನ್‌ಡ್‌ವಿಚ್", slug: "sandwich" },
  { english: "🍔 BURGER", kannada: "ಬರ್ಗರ್", slug: "burger" },
  { english: "⭐ SPECIAL BURGER", kannada: "ಸ್ಪೆಷಲ್ ಬರ್ಗರ್", slug: "special-burger" },
  { english: "🍹 MOJITO", kannada: "ಮೊಜಿಟೋ", slug: "mojito" },
  { english: "🥤 SPECIAL SODA", kannada: "ಸ್ಪೆಷಲ್ ಸೋಡಾ", slug: "special-soda" },
  { english: "🧃 JUICE – FRESH JUICE", kannada: "ತಾಜಾ ಜ್ಯೂಸ್", slug: "fresh-juice" },
  { english: "🥤 SMOOTHIE", kannada: "ಸ್ಮೂದಿ", slug: "smoothie" },
  { english: "🥛 SPECIAL LASSI", kannada: "ಸ್ಪೆಷಲ್ ಲಸ್ಸಿ", slug: "special-lassi" },
  { english: "🍕 PIZZA", kannada: "ಪಿಜ್ಜಾ", slug: "pizza" },
  { english: "🥡 CHINESE", kannada: "ಚೈನೀಸ್", slug: "chinese" },
  { english: "🍜 NOODLES", kannada: "ನೂಡಲ್ಸ್", slug: "noodles" },
  { english: "🍚 FRIED RICE", kannada: "ಫ್ರೈಡ್ ರೈಸ್", slug: "fried-rice" },
  { english: "🍝 PASTA", kannada: "ಪಾಸ್ತಾ", slug: "pasta" },
  { english: "🌯 SHAWARMA", kannada: "ಶವರ್ಮಾ", slug: "shawarma" },
];

export default function IceMagic(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Ice Magic</h2>
      </div>

      {/* Ice Magic timing banner (darker blue than section cards) */}
      <div className="ice-timing-banner" role="region" aria-label="Ice Magic opening hours">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
          <span className="status-dot" />
        </div>

        <div className="timing-text">
          <div className="timing-title">Open Today</div>
          <div className="timing-time">11:00 AM – 9:30 PM</div>
          <div className="timing-sub">Fresh desserts served all day</div>
        </div>
      </div>

      <div className="section-list">
        {SECTIONS.map(s => (
          <SectionCard
            key={s.slug}
            english={s.english}
            kannada={s.kannada}
            onClick={()=>navigate(`/ice-magic/${s.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}

// Exports to make menu data available programmatically
export const hotelId = 'ice-magic';
export const hotelName = 'Ice Magic';
export const menu = ICE_MAGIC_DATA;
export const sectionMap = ICE_MAGIC_SECTION_MAP;
export const routePrefix = 'ice-magic';
