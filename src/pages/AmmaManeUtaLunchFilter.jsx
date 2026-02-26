// Amma Mane Uta Lunch Filter Page
// Shows clickable section cards when user selects Lunch section
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import SectionCard from "../components/SectionCard";
import { AMMA_MANE_UTA_LUNCH_SECTIONS, AMMA_MANE_UTA_LUNCH_ITEMS } from "../data/menus/ammaManeUtaLunch";

export default function AmmaManeUtaLunchFilter() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();

  // Landing page: show clickable section cards
  if (!sectionSlug) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/amma-mane-uta')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Amma Mane Uta - Lunch</h2>
        </div>

        <div className="section-list" style={{ marginTop: 12 }}>
          {AMMA_MANE_UTA_LUNCH_SECTIONS.map(section => (
            <SectionCard
              key={section.slug}
              english={section.english}
              kannada={section.kannada}
              onClick={() => navigate(`/amma-mane-uta/lunch/${section.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Section view: show items from selected section
  const section = AMMA_MANE_UTA_LUNCH_SECTIONS.find(s => s.slug === sectionSlug);
  const items = AMMA_MANE_UTA_LUNCH_ITEMS[sectionSlug] || [];

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
          onClick={() => navigate('/amma-mane-uta/lunch')}
        >
          ← Back
        </button>
        <h2 style={{ margin: 0 }} className="page-heading">
          Amma Mane Uta - {section.english}
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
