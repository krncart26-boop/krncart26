import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const ITEMS = [
  { id: 'hg-gobi-full', name: 'Gobi (Full)', kannada: 'ಗೋಬಿ ಫುಲ್', price: 40 },
  { id: 'hg-gobi-half', name: 'Gobi (Half)', kannada: 'ಗೋಬಿ ಹಾಫ್', price: 30 },
  { id: 'hg-noodles-full', name: 'Noodles (Full)', kannada: 'ನೂಡಲ್ಸ್ ಫುಲ್', price: 40 },
  { id: 'hg-gobi-noodles-mix', name: 'Gobi + Noodles Mix', kannada: 'ಗೋಬಿ + ನೂಡಲ್ಸ್ ಮಿಕ್ಸ್', price: 50 },
  { id: 'hg-fried-rice-full', name: 'Fried Rice (Full)', kannada: 'ಫ್ರೈಡ್ ರೈಸ್ ಫುಲ್', price: 40 },
  { id: 'hg-fried-rice-gobi', name: 'Fried Rice + Gobi', kannada: 'ಫ್ರೈಡ್ ರೈಸ್ + ಗೋಬಿ', price: 50 },
];

export default function HarishGobiCentre(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Harish Gobi Centre</h2>
      </div>

      {/* Timing banner */}
      <div className="sanju-timing-banner" role="region" aria-label="Harish Gobi Centre timings">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
        </div>
        <div className="timing-text">
          <div className="timing-title">Open Today</div>
          <div className="timing-time">1:00 PM – 9:00 PM</div>
        </div>
      </div>

      <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:12}}>
        {ITEMS.map(it => (
          <ItemCard key={it.id} id={it.id} name={it.name} kannada={it.kannada} price={it.price} />
        ))}
      </div>
    </div>
  );
}

export const hotelId = 'harish-gobi-centre';
export const hotelName = 'Harish Gobi Centre';
export const menu = { 'gobi': ITEMS };
export const sectionMap = { 'gobi': { english: 'Gobi Items', kannada: '' } };
export const routePrefix = 'harish-gobi-centre';
export const parcelCharges = 1.99;
