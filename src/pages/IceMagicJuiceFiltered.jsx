import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ICE_MAGIC_JUICE_SECTIONS, ICE_MAGIC_JUICE_ITEMS } from "../data/menus/iceMagicJuice";
import SectionCard from "../components/SectionCard";
import ItemCard from "../components/ItemCard";

export default function IceMagicJuiceFiltered() {
  const { sectionSlug, categorySlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Detect path type
  const isJuicePath = location.pathname.includes('/juice/');
  const isJuiceLanding = location.pathname === '/ice-magic/filter/juice' || categorySlug === 'juice';
  const isJuiceDetail = sectionSlug && isJuicePath;

  // Handle juice detail page (/ice-magic/filter/juice/:sectionSlug)
  if (isJuiceDetail) {
    const section = ICE_MAGIC_JUICE_SECTIONS.find(s => s.slug === sectionSlug);
    const items = ICE_MAGIC_JUICE_ITEMS[sectionSlug] || [];

    if (!section) {
      return (
        <div>
          <button className="header-btn" onClick={() => navigate('/ice-magic/filter/juice')}>← Back</button>
          <p style={{ textAlign: 'center', marginTop: 20 }}>Section not found</p>
        </div>
      );
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/ice-magic/filter/juice')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">{section.english}</h2>
        </div>

        <div className="items-list">
          {items.map(item => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              kannada={item.kannada}
              price={item.price}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle juice landing page (/ice-magic/filter/juice)
  if (isJuiceLanding) {
    return (
      <div>
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
  return (
    <div>
      <button className="header-btn" onClick={() => navigate('/ice-magic')}>← Back</button>
      <p style={{ textAlign: 'center', marginTop: 20 }}>No content available</p>
    </div>
  );
}
