import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { AMMA_MANE_UTA_DATA, AMMA_MANE_UTA_SECTION_MAP } from "../data/menus/ammaManeUtaMenu";

function prettify(slug) {
  return slug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function AmmaManeUtaSection() {
  const { sectionSlug } = useParams();
  const navigate = useNavigate();
  const items = AMMA_MANE_UTA_DATA[sectionSlug] || [];
  const sectionTitle = AMMA_MANE_UTA_SECTION_MAP[sectionSlug]?.english || prettify(sectionSlug);

  return (
    <div className="page-container">
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/amma-mane-uta')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">{sectionTitle}</h2>
      </div>
      <div className="items-grid" style={{marginTop:12}}>
        {items.length > 0 ? (
          items.map((item, idx) => (
            <ItemCard
              key={idx}
              id={`amma-${sectionSlug}-${idx}`}
              name={item[0]}
              kannada={item[1]}
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
