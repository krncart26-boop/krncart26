import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { AMERICAN_CUISINE_DATA, AMERICAN_CUISINE_SECTION_MAP } from "../data/menus/americanCuisine";

const SECTIONS = [
  { english: "🍔 VEG BURGER", kannada: "", slug: "veg-burger", category: "BURGERS" },
  { english: "🍔 NON VEG BURGER", kannada: "", slug: "non-veg-burger", category: "BURGERS" },
  { english: "🍟 VEG SIDES", kannada: "", slug: "veg-sides", category: "SIDES" },
  { english: "🍗 NON VEG SIDES", kannada: "", slug: "non-veg-sides", category: "SIDES" },
  { english: "🥪 SANDWICH", kannada: "", slug: "sandwich", category: "SANDWICH" },
  { english: "🍽️ SNACK PACKS", kannada: "", slug: "snack-packs", category: "SNACKS" },
  { english: "🥔 ALOO TIKKA", kannada: "", slug: "aloo-tikka", category: "SPECIALS" },
  { english: "🍫 CHACO LAVE", kannada: "", slug: "chaco-lave", category: "SPECIALS" },
  { english: "🍝 PASTA", kannada: "", slug: "pasta", category: "PASTA & MOMOS" },
  { english: "🥟 MOMOS", kannada: "", slug: "momos", category: "PASTA & MOMOS" },
  { english: "🍹 MOJITO", kannada: "", slug: "mojito", category: "BEVERAGES" },
  { english: "🍕 PIZZA - VEG", kannada: "", slug: "pizza-veg", category: "PIZZA" },
  { english: "🍕 PIZZA - NON VEG", kannada: "", slug: "pizza-non-veg", category: "PIZZA" },
  { english: "🍕 PIZZA TOPPINGS", kannada: "", slug: "pizza-toppings", category: "PIZZA" },
  { english: "🍞 BREADS", kannada: "", slug: "breads", category: "BREADS & DESSERTS" },
  { english: "🍰 DESSERT", kannada: "", slug: "dessert", category: "BREADS & DESSERTS" },
  { english: "🌯 NON VEG ROLLS", kannada: "", slug: "non-veg-rolls", category: "ROLLS" },
  { english: "🌯 VEG ROLLS", kannada: "", slug: "veg-rolls", category: "ROLLS" },
];

// Group sections by category
const groupedSections = SECTIONS.reduce((acc, section) => {
  const category = section.category || "OTHER";
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(section);
  return acc;
}, {});

export const hotelId = "american-cuisine";
export const hotelName = "American Cuisine";
export const routePrefix = "american-cuisine";
export const menu = AMERICAN_CUISINE_DATA;
export const sectionMap = AMERICAN_CUISINE_SECTION_MAP;

export default function AmericanCuisine() {
  const navigate = useNavigate();

  const handleSectionClick = (slug) => {
    navigate(`/american-cuisine/${slug}`);
  };

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">American Cuisine</h2>
      </div>

      {Object.entries(groupedSections).map(([category, sections]) => (
        <div key={category} style={{marginTop:16}}>
          <h3 style={{
            fontSize:'14px',
            fontWeight:'700',
            color:'#1f2937',
            margin:'0 0 -8px 0',
            paddingLeft:'8px',
            position:'relative',
            zIndex:2,
            backgroundColor:'#faf8f6',
            display:'inline-block',
            paddingRight:'8px'
          }}>
            {category}
          </h3>
          <div className="section-list" style={{marginTop:12}}>
            {sections.map(s => (
              <SectionCard
                key={s.slug}
                english={s.english}
                kannada={s.kannada}
                onClick={() => handleSectionClick(s.slug)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
