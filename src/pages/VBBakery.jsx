// VB Bakery page: shows list of sections as cards with a timing banner (Ice Magic pattern)
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { VB_DATA, VB_SECTION_MAP } from "../data/menus/vbBakery";

const SECTIONS = [
  { english: "BAKERY & SWEETS", kannada: "", slug: "bakery-sweets" },
  { english: "CAKES / SNACKS (WEIGHT-BASED)", kannada: "", slug: "cakes-snacks" },
  { english: "MIXTURES", kannada: "", slug: "mixtures" },
  { english: "COOL DRINKS", kannada: "", slug: "cool-drinks" },
  { english: "CHOCOLATES", kannada: "", slug: "chocolates" },
  { english: "ICE CREAM", kannada: "", slug: "ice-cream" },
];

export default function VBBakery(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">VB Bakery</h2>
      </div>

      {/* Timing banner to match Ice Magic pattern */}
      <div className="ice-timing-banner" role="region" aria-label="VB Bakery opening hours">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
          <span className="status-dot" />
        </div>

        <div className="timing-text">
          <div className="timing-title">Open Today</div>
          <div className="timing-time">8:00 AM – 8:00 PM</div>
          <div className="timing-sub">Fresh bakery items and sweets</div>
        </div>
      </div>

      <div className="section-list">
        {SECTIONS.map(s => (
          <SectionCard
            key={s.slug}
            english={s.english}
            kannada={s.kannada}
            onClick={()=>navigate(`/vb-bakery/${s.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}

export const hotelId = 'vb-bakery';
export const hotelName = 'VB Bakery';
export const menu = VB_DATA;
export const sectionMap = VB_SECTION_MAP;
export const routePrefix = 'vb-bakery';

