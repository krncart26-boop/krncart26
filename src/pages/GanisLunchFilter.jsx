// Gani's Restaurant Lunch Filter Page
// Shows clickable section cards when user selects Lunch filter
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import SectionCard from "../components/SectionCard";
import { GANIS_LUNCH_SECTIONS, GANIS_LUNCH_ITEMS } from "../data/menus/ganisRestaurantLunch";

export default function GanisLunchFilter() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();

  // Landing page: show clickable section cards
  if (!sectionSlug) {
    return (<div className="page-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Gani's Restaurant - Lunch</h2>
        </div>

        <div className="section-list" style={{ marginTop: 12 }}>
          {GANIS_LUNCH_SECTIONS.map(section => (
            <SectionCard
              key={section.slug}
              english={section.english}
              kannada={section.kannada}
              onClick={() => navigate(`/ganis-restaurant/filter/lunch/${section.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Section view: show items from selected section
  const section = GANIS_LUNCH_SECTIONS.find(s => s.slug === sectionSlug);
  const items = GANIS_LUNCH_ITEMS[sectionSlug] || [];

  if (!section) {
    return (<div className="page-container">
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

  return (<div className="page-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button 
          className="header-btn" 
          onClick={() => navigate('/ganis-restaurant/filter/lunch')}
        >
          ← Back
        </button>
        <h2 style={{ margin: 0 }} className="page-heading">Gani's - {section.english}</h2>
      </div>

      {items.length === 0 ? (
        <div style={{ padding: '20px', textAlign: 'center', marginTop: '40px' }}>
          <h3 style={{ color: 'var(--muted)' }}>No items available</h3>
        </div>
      ) : (
        <div className="items-grid">
          {items.map(item => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              kannada={item.kannada}
              price={item.price}
              parcelCharge={item.parcelCharge}
              subsection={section.english}
            />
          ))}
        </div>
      )}
    </div>
  );
}


