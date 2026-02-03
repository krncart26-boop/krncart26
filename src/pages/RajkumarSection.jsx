// Rajkumar section page: renders items for gobi and masale sections
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";

function prettify(slug){
  return slug.replace(/[-_]/g,' ').replace(/\b\w/g, c => c.toUpperCase());
}

const SECTION_MAP = {
  "gobi": { english: "Gobi Items", kannada: "" },
  "masale": { english: "Masale Items", kannada: "" },
};

// Items for both sections (per spec — identical lists)
const DATA = {
  "gobi": [
    ["Gobi (1 Plate)", "", 40],
    ["Gobi Half Plate", "", 30],
    ["Baby Corn Gobi", "", 60],
    ["Noodles", "", 40],
    ["Gobi Noodles Mix", "", 60],
    ["Mushroom Gobi", "", 60],
    ["Cauliflower", "", 60],
    ["Cabbage Gobi", "", 60],
    ["Fried Rice", "", 40],
    ["Fried Rice + Gobi", "", 60],
  ],

  "masale": [
    ["Gobi (1 Plate)", "", 40],
    ["Gobi Half Plate", "", 30],
    ["Baby Corn Gobi", "", 60],
    ["Noodles", "", 40],
    ["Gobi Noodles Mix", "", 60],
    ["Mushroom Gobi", "", 60],
    ["Cauliflower", "", 60],
    ["Cabbage Gobi", "", 60],
    ["Fried Rice", "", 40],
    ["Fried Rice + Gobi", "", 60],
  ],
};

export default function RajkumarSection(){
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  const section = SECTION_MAP[sectionSlug] || { english: prettify(sectionSlug || 'Section') };
  const items = DATA[sectionSlug] || [];

  return (
    <div>
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/rajkumar')}>← Back</button>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">{section.english}</h2>
          <div style={{color:'var(--muted)',marginTop:6}}>{section.kannada}</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        {items.length === 0 ? (
          <div style={{padding:12,background:'#fff',borderRadius:12,color:'var(--muted)'}}>Items will be added soon</div>
        ) : (
          <div style={{marginTop:16,display:'flex',flexDirection:'column',gap:12}}>
            {items.map(it => (
              <ItemCard key={it[0]} id={sectionSlug + '-' + it[0].toLowerCase().replace(/\s+/g,'-')} name={it[0]} kannada={it[1]} price={it[2]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
