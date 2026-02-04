// Rajkumar page: shows list of two sections as cards with a timing banner
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { RAJKUMAR_DATA, RAJKUMAR_SECTION_MAP } from "../data/menus/rajkumar";

const SECTIONS = [
  { english: "Gobi Items", kannada: "", slug: "gobi" },
  { english: "Masale Items", kannada: "", slug: "masale" },
];

export default function Rajkumar(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Rajkumar (Chats)</h2>
      </div>

      {/* Timing banner (darker blue) */}
      <div className="ice-timing-banner" role="region" aria-label="Rajkumar opening hours">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
          <span className="status-dot" />
        </div>

        <div className="timing-text">
          <div className="timing-title">Open Today</div>
          <div className="timing-time">5:30 PM – 9:00 PM</div>
          <div className="timing-sub">Classic chats and panipuri served fresh</div>
        </div>
      </div>

      <div className="section-list">
        {SECTIONS.map(s => (
          <SectionCard
            key={s.slug}
            english={s.english}
            kannada={s.kannada}
            onClick={()=>navigate(`/rajkumar/${s.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}

export const hotelId = 'rajkumar';
export const hotelName = 'Rajkumar';
export const menu = RAJKUMAR_DATA;
export const sectionMap = RAJKUMAR_SECTION_MAP;
export const routePrefix = 'rajkumar';
