import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";

const SECTIONS = [
  { english: "🍹 Fresh Juice", kannada: "ಫ್ರೆಶ್ ಜ್ಯೂಸ್", slug: "fresh-juice" },
  { english: "🥤 Lassi", kannada: "ಲಸ್ಸಿ", slug: "lassi" },
  { english: "🥛 Milk Shakes", kannada: "ಮಿಲ್ಕ್ ಶೇಕ್", slug: "milk-shakes" },
  { english: "🍓 Special Juice", kannada: "ಸ್ಪೆಷಲ್ ಜ್ಯೂಸ್", slug: "special-juice" },
  { english: "🥗 Health Juice", kannada: "ಹೆಲ್ತ್ ಜ್ಯೂಸ್", slug: "health-juice" },
];

export default function TirumalaJuice(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Tirumala Juice Centre</h2>
      </div>

      <div style={{marginTop:12}}>
        <div className="section-list">
          {SECTIONS.map(s => (
            <SectionCard
              key={s.slug}
              english={s.english}
              kannada={s.kannada}
              onClick={()=>navigate(`/tirumala-juice/${s.slug}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}