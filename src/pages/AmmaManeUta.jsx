import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { AMMA_MANE_UTA_DATA, AMMA_MANE_UTA_SECTION_MAP } from "../data/menus/ammaManeUtaMenu";

const SECTIONS = [
  { english: "🍽️ ಉಪಹಾರ | Breakfast", kannada: "", slug: "breakfast" },
  { english: "🍛 ಮಧ್ಯಾಹ್ನ ಊಟ | Afternoon Lunch", kannada: "", slug: "lunch" },
  { english: "⭐ ವಿಶೇಷ | Special", kannada: "", slug: "special" },
];

export default function AmmaManeUta(){
  const navigate = useNavigate();

  const handleSectionClick = (slug) => {
    navigate(`/amma-mane-uta/${slug}`);
  };

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Amma Mane Uta</h2>
      </div>

      {/* Notification banner for preparation time */}
      <div className="timing-banner" role="region" aria-label="Preparation time notice">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
        </div>
        <div className="timing-text">
          <div className="timing-title">Food Preparation</div>
          <div className="timing-sub" style={{fontSize:'12px', marginTop:'4px'}}>Food will prepare after your order confirmation, so it will take time of minimum 30 minutes to prepare and deliver the food.</div>
        </div>
      </div>

      <div className="section-list" style={{marginTop:12}}>
        {SECTIONS.map(s => (
          <SectionCard
            key={s.slug}
            english={s.english}
            kannada={s.kannada}
            onClick={() => handleSectionClick(s.slug)}
          />
        ))}
      </div>
    </div>
  );
}
