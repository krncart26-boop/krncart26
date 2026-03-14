import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { PUNJAB_KITCHEN_DATA, PUNJAB_KITCHEN_SECTION_MAP } from "../data/menus/punjabKitchen";

function prettify(slug) {
  return slug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function PunjabiKitchenSection() {
  const { sectionSlug } = useParams();
  const navigate = useNavigate();
  const items = PUNJAB_KITCHEN_DATA[sectionSlug] || [];
  const sectionTitle = PUNJAB_KITCHEN_SECTION_MAP[sectionSlug]?.english || prettify(sectionSlug);

  return (
    <div className="page-container">
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/punjabi-hotel')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">{sectionTitle}</h2>
      </div>
      <div className="items-grid" style={{marginTop:12}}>
        {items.length > 0 ? (
          items.map((item, idx) => (
            <ItemCard
              key={idx}
              id={`punjabi-${sectionSlug}-${idx}`}
              name={item[0]}
              kannada={item[1]}
              price={item[2]}
            />
          ))
        ) : (
          <p>Items will be added soon</p>
        )}
      </div>
    </div>
  );
}
