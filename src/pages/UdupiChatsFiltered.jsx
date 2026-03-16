import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import SectionCard from "../components/SectionCard";
import { UDUPI_CHATS_SECTIONS, UDUPI_CHATS_ITEMS } from "../data/menus/udupiChatsMenu";

export default function UdupiChatsFiltered() {
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  // Landing page: show clickable section cards
  if (!sectionSlug) {
    return (<div className="page-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace - Chats</h2>
        </div>

        <div className="section-list" style={{ marginTop: 12 }}>
          {UDUPI_CHATS_SECTIONS.map(section => (
            <SectionCard
              key={section.slug}
              english={section.english}
              kannada=""
              onClick={() => navigate(`/udupi-hotel/filter/chats/${section.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Section view: show items from selected section
  const section = UDUPI_CHATS_SECTIONS.find(s => s.slug === sectionSlug);
  const items = UDUPI_CHATS_ITEMS[sectionSlug] || [];

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
          onClick={() => navigate('/udupi-hotel/filter/chats')}
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
            {items.map((item) => (
              <ItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                kannada=""
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

