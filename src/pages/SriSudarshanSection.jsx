import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { SRI_SUDARSHAN_DATA, SRI_SUDARSHAN_SECTION_MAP } from "../data/menus/sriSudarshan";

function prettify(slug) {
  return slug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function SriSudarshanSection() {
  const { sectionSlug } = useParams();
  const navigate = useNavigate();
  const items = SRI_SUDARSHAN_DATA[sectionSlug] || [];
  const sectionTitle = SRI_SUDARSHAN_SECTION_MAP[sectionSlug]?.english || prettify(sectionSlug);

  return (
    <div className="page-container">
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/sri-sudarshan')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">{sectionTitle}</h2>
      </div>
      <div className="items-grid" style={{marginTop:12}}>
        {items.length > 0 ? (
          items.map((item, idx) => (
            <ItemCard
              key={idx}
              name={item[0]}
              description={item[1]}
              price={item[2]}
              hotelId="sri-sudarshan"
            />
          ))
        ) : (
          <p>Items will be added soon</p>
        )}
      </div>
    </div>
  );
}
