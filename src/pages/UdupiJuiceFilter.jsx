// Udupi Palace Juice Filter Page
// Shows clickable section cards when user selects Juice filter
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import SectionCard from "../components/SectionCard";
import { UDUPI_JUICE_SECTIONS, UDUPI_JUICE_ITEMS } from "../data/menus/udupiJuice";

export default function UdupiJuiceFilter() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();

  // Landing page: show clickable section cards
  if (!sectionSlug) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace - Juices</h2>
        </div>

        <div className="section-list" style={{ marginTop: 12 }}>
          {UDUPI_JUICE_SECTIONS.map(section => (
            <SectionCard
              key={section.slug}
              english={section.english}
              kannada={section.kannada}
              onClick={() => navigate(`/udupi-hotel/filter/juices/${section.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Section view: show items from selected section
  const section = UDUPI_JUICE_SECTIONS.find(s => s.slug === sectionSlug);
  const items = UDUPI_JUICE_ITEMS[sectionSlug] || [];

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
          onClick={() => navigate('/udupi-hotel/filter/juices')}
        >
          ← Back
        </button>
        <h2 style={{ margin: 0 }} className="page-heading">
          Udupi Palace - {section.english}
        </h2>
      </div>

      <div style={{ padding: '12px' }}>
        {items.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {items.map((item) => {
              // Create unique ID for each juice item
              const itemId = `udupi-juice-${sectionSlug}-${item.itemName.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <ItemCard
                  key={itemId}
                  id={itemId}
                  name={item.itemName}
                  kannada={item.kannadaName}
                  price={item.price}
                />
              );
            })}
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
