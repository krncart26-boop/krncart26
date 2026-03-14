import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { SRI_SUDARSHAN_DATA, SRI_SUDARSHAN_SECTION_MAP } from "../data/menus/sriSudarshan";

const SECTIONS = [
  { english: "🍳 BREAKFAST", kannada: "", slug: "breakfast" },
  { english: "🍲 LUNCH", kannada: "", slug: "lunch" },
  { english: "🥣 SNACKS", kannada: "", slug: "snacks" },
  { english: "☕ BEVERAGES", kannada: "", slug: "beverages" },
];

export const hotelId = "sri-sudarshan";
export const hotelName = "Sri Sudarshan";
export const routePrefix = "sri-sudarshan";
export const menu = SRI_SUDARSHAN_DATA;
export const sectionMap = SRI_SUDARSHAN_SECTION_MAP;

export default function SriSudarshan() {
  const navigate = useNavigate();

  const handleSectionClick = (slug) => {
    navigate(`/sri-sudarshan/${slug}`);
  };

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Sri Sudarshan</h2>
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
