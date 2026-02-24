// Ice Magic Evening Food Filter Page
// Shows clickable section cards when user selects Evening Food filter
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import SectionCard from "../components/SectionCard";
import { IM_EVENING_SECTIONS, IM_EVENING_ITEMS } from "../data/menus/iceMagicEvening";

export default function IceMagicEveningFilter() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();

  // Landing page: show clickable section cards
  if (!sectionSlug) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Ice Magic - Evening Food</h2>
        </div>

        <div className="section-list" style={{ marginTop: 12 }}>
          {IM_EVENING_SECTIONS.map(section => (
            <SectionCard
              key={section.slug}
              english={section.english}
              kannada={section.kannada}
              onClick={() => navigate(`/ice-magic/filter/evening-food/${section.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Section view: show items from selected section
  const section = IM_EVENING_SECTIONS.find(s => s.slug === sectionSlug);
  const items = IM_EVENING_ITEMS[sectionSlug] || [];

  if (!section) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Not Found</h2>
        </div>
        <div style={{ padding: '20px', textAlign: 'center', marginTop: '40px' }}>
          <p style={{ color: 'var(--muted)' }}>Section not found</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button 
          className="header-btn" 
          onClick={() => navigate('/ice-magic/filter/evening-food')}
        >
          ← Back
        </button>
        <h2 style={{ margin: 0 }} className="page-heading">
          Ice Magic - {section.english}
        </h2>
      </div>

      <div style={{ padding: '12px' }}>
        {items.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {items.map((item) => (
              <ItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                kannada={item.kannada}
                price={item.price}
              />
            ))}
          </div>
        ) : (
          <div style={{ padding: '20px', textAlign: 'center', marginTop: '20px' }}>
            <p style={{ color: 'var(--muted)' }}>No items available in this section</p>
          </div>
        )}
      </div>
    </div>
  );
}
