import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { AMERICAN_CUISINE_DATA, AMERICAN_CUISINE_SECTION_MAP } from "../data/menus/americanCuisine";

function prettify(slug) {
  return slug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function AmericanCuisineSection() {
  const { sectionSlug } = useParams();
  const navigate = useNavigate();
  const items = AMERICAN_CUISINE_DATA[sectionSlug] || [];
  const sectionTitle = AMERICAN_CUISINE_SECTION_MAP[sectionSlug]?.english || prettify(sectionSlug);

  return (
    <div className="page-container">
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/american-cuisine')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">{sectionTitle}</h2>
      </div>
      <div className="items-grid">
        {items.length > 0 ? (
          items.map((item, idx) => (
            <ItemCard
              key={idx}
              id={`american-${sectionSlug}-${idx}`}
              name={item[0]}
              description={item[1]}
              price={item[2]}
              subsection={sectionTitle}
            />
          ))
        ) : (
          <p>Items will be added soon</p>
        )}
      </div>
    </div>
  );
}

