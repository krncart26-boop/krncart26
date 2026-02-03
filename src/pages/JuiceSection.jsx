// Juice Junction section page: renders items for 'juices' and empty states for other sections
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";

function prettify(slug){
  return slug.replace(/[-_]/g,' ').replace(/\b\w/g, c => c.toUpperCase());
}

const SECTION_MAP = {
  "juices": { english: "JUICES", kannada: "ಜ್ಯೂಸ್‌ಗಳು" },
  "soda": { english: "SODA", kannada: "ಸೋಡಾ" },
  "milk-shake": { english: "MILK SHAKE", kannada: "ಮಿಲ್ಕ್ ಶೇಕ್" },
};

const DATA = {
  "juices": [
    ["Grapes Juice", "", 30],
    ["Musk Melon Juice", "", 30],
    ["Pineapple Juice", "", 30],
    ["Mosambi Juice", "", 30],
    ["Orange Juice", "", 30],
    ["Carrot & Beetroot Juice", "", 30],
    ["Lemon Juice", "", 20],
  ],

  "soda": [
    ["Lemon Salt", "", 20],
    ["Lemon Sweet", "", 25],
    ["Herale Kayi Salt", "", 20],
    ["Herale Kayi Sweet", "", 25],
  ],

  "milk-shake": [
    ["Apple Milkshake", "", 40],
    ["Pomegranate Milkshake", "", 40],
    ["Sapota Milkshake", "", 40],
    ["Strawberry Milkshake", "", 40],
    ["Protein Milkshake", "", 40],
    ["Oreo Milkshake", "", 40],
    ["Cold Coffee", "", 40],
    ["Karbuja / Musk Melon Milkshake", "", 40],
    ["Dry Fruit Milkshake", "", 50],
    ["Chocolate Milkshake", "", 40],
    ["Boost Milkshake", "", 40],
    ["Vanilla Milkshake", "", 40],
    ["Black Current Milkshake", "", 40],
    ["Anjoora Milkshake", "", 40],
  ],
};

export default function JuiceSection(){
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  const section = SECTION_MAP[sectionSlug] || { english: prettify(sectionSlug || 'Section') };
  const items = DATA[sectionSlug] || [];

  return (
    <div>
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/juice-junction')}>← Back</button>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">{section.english}</h2>
          <div style={{color:'var(--muted)',marginTop:6}}>{section.kannada}</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        {items.length === 0 ? (
          <div style={{padding:12,background:'#fff',borderRadius:12,color:'var(--muted)'}}>Items coming soon</div>
        ) : (
          <div style={{marginTop:16,display:'flex',flexDirection:'column',gap:12}}>
            {items.map(it => (
              <ItemCard key={it[0]} id={'juice-' + it[0].toLowerCase().replace(/\s+/g,'-').replace(/[&+\/]/g,'and')} name={it[0]} kannada={it[1]} price={it[2]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
