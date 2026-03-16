import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ICE_MAGIC_JUICE_SECTIONS, ICE_MAGIC_JUICE_ITEMS } from "../data/menus/iceMagicJuice";
import SectionCard from "../components/SectionCard";
import ItemCard from "../components/ItemCard";

export default function IceMagicJuiceFiltered() {
  const { sectionSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Detect if this is a detail page or landing page
  // Landing page: /ice-magic/filter/juice OR /ice-magic/filter/juices
  const isJuiceLanding = location.pathname === '/ice-magic/filter/juice' || location.pathname === '/ice-magic/filter/juices';
  const isJuiceDetail = sectionSlug !== undefined;

  // Handle juice detail page (/ice-magic/filter/juice/:sectionSlug)
  if (isJuiceDetail) {
    const section = ICE_MAGIC_JUICE_SECTIONS.find(s => s.slug === sectionSlug);
    const items = ICE_MAGIC_JUICE_ITEMS[sectionSlug] || [];

    if (!section) {
      return (<div className="page-container">
          <button className="header-btn" onClick={() => navigate('/ice-magic')}>← Back</button>
          <p style={{ textAlign: 'center', marginTop: 20 }}>Section not found</p>
        </div>
      );
    }

    return (<div className="page-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/ice-magic')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">{section.english}</h2>
        </div>

        <div className="items-grid">
          {items.map(item => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              kannada={item.kannada}
              price={item.price}
              subsection={section.english}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle juice landing page (/ice-magic/filter/juice)
  if (isJuiceLanding) {
    return (<div className="page-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/ice-magic')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Ice Magic</h2>
        </div>

        <div className="section-list">
          {ICE_MAGIC_JUICE_SECTIONS.map(s => (
            <SectionCard
              key={s.slug}
              english={s.english}
              kannada={s.kannada}
              onClick={() => navigate(`/ice-magic/filter/juice/${s.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Fallback
  return (<div className="page-container">
      <button className="header-btn" onClick={() => navigate('/ice-magic')}>← Back</button>
      <p style={{ textAlign: 'center', marginTop: 20 }}>No content available</p>
    </div>
  );
}




