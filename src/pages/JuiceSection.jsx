// Lakshmi Juice Corner section page: renders items for 'juices' and empty states for other sections
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
    ["Grapes Juice", "", 35],
    ["Musk Melon Juice", "", 35],
    ["Pineapple Juice", "", 35],
    ["Mosambi Juice", "", 35],
    ["Orange Juice", "", 35],
    ["Carrot & Beetroot Juice", "", 35],
    ["Lemon Juice", "", 25],
  ],

  "soda": [
    ["Lemon masala", "", 25],
    ["Lemon Sweet", "", 30],
    ["Lemon sweet and salt","",30],
    ["Erlikayi masala", "", 25],
    ["Erlikayi sweet and salt ", "", 30],
  ],

  "milk-shake": [
    ["Apple Milkshake", "", 45],
    ["banana milkshake","",35],
    ["Pomegranate Milkshake", "", 45],
    ["Sapota Milkshake", "", 45],
    ["Strawberry Milkshake", "", 45],
    ["Protein Milkshake", "", 45],
    ["Oreo Milkshake", "", 45],
    ["Cold Coffee", "", 45],
    ["Karbuja / Musk Melon Milkshake", "", 45],
    ["Dry Fruit Milkshake", "", 55],
    ["Chocolate Milkshake", "", 45],
    ["Boost Milkshake", "", 45],
    ["Vanilla Milkshake", "", 45],
    ["Black Current Milkshake", "", 45],
    ["Anjoora Milkshake", "", 45],
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
