// Udupi Hotel page: shows list of sections as full blue cards
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { UDUPI_DATA, UDUPI_SECTION_MAP } from "../data/menus/udupi";

const SECTIONS = [
  { english: "SOUTH INDIAN MEALS", kannada: "", slug: "south-indian-meals" },
  { english: "NORTH INDIAN MEALS", kannada: "", slug: "north-indian-meals" },
  { english: "SWEETS", kannada: "", slug: "sweets" },
  { english: "SOUPS", kannada: "", slug: "soups" },
  { english: "RAITHA", kannada: "", slug: "raitha" },
  { english: "SALAD", kannada: "", slug: "salad" },
  { english: "NORTH INDIAN GRAVY", kannada: "", slug: "north-indian-gravy" },
  { english: "MORE NORTH INDIAN GRAVY", kannada: "", slug: "more-north-indian-gravy" },
  { english: "KADAI SPECIAL", kannada: "", slug: "kadai-special" },
  { english: "JAIN SUBZI & DRY", kannada: "", slug: "jain-subzi-dry" },
  { english: "PAPADS", kannada: "", slug: "papads" },
  { english: "TANDOORI STARTERS", kannada: "", slug: "tandoori-starters" },
  { english: "BIRIYANI / PULAV", kannada: "", slug: "biriyani-pulav" },
  { english: "TANDOORI BREADS", kannada: "", slug: "tandoori-breads" },
  { english: "CHINESE RICE", kannada: "", slug: "chinese-rice" },
  { english: "DOSA & TIFFINS", kannada: "", slug: "dosa-tiffins" },
];

export default function UdupiHotel(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Udupi Hotel</h2>
      </div>

      <div className="section-list" style={{marginTop:12}}>
        {SECTIONS.map(s => (
          <SectionCard
            key={s.slug}
            english={s.english}
            kannada={s.kannada}
            onClick={()=>navigate(`/udupi-hotel/${s.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}

export const hotelId = 'udupi-hotel';
export const hotelName = 'Udupi Hotel';
export const menu = UDUPI_DATA;
export const sectionMap = UDUPI_SECTION_MAP;
export const routePrefix = 'udupi-hotel';
