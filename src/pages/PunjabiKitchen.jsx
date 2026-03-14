import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { PUNJAB_KITCHEN_DATA, PUNJAB_KITCHEN_SECTION_MAP } from "../data/menus/punjabKitchen";

const SECTIONS = [
  { english: "🌅 MORNING BREAKFAST", kannada: "", slug: "breakfast" },
  { english: "🍛 AFTERNOON MEALS", kannada: "", slug: "lunch" },
  { english: "🥟 MOMOS & SNACKS", kannada: "", slug: "momos-snacks" },
  { english: "🍔 BURGERS & ROLLS", kannada: "", slug: "burgers-rolls" },
];

export const hotelId = "punjabi-hotel";
export const hotelName = "Punjabi Kitchen";
export const routePrefix = "punjabi-hotel";
export const menu = PUNJAB_KITCHEN_DATA;
export const sectionMap = PUNJAB_KITCHEN_SECTION_MAP;

export default function PunjabiKitchen() {
  const navigate = useNavigate();

  const handleSectionClick = (slug) => {
    navigate(`/punjabi-hotel/${slug}`);
  };

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Punjabi Kitchen</h2>
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
