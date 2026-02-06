// Sanju Gobi House Chats Filter Page
// Shows clickable section cards when user selects Chats filter
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import SectionCard from "../components/SectionCard";
import { SANJU_GOBI_CHATS_SECTIONS, SANJU_GOBI_CHATS_ITEMS } from "../data/menus/sanjuGobiHouseChats";

export default function SanjuGobiHouseChatsFilter() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();

  // Landing page: show clickable section cards
  if (!sectionSlug) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Sanju Gobi House - Chats</h2>
        </div>

        <div className="section-list" style={{ marginTop: 12 }}>
          {SANJU_GOBI_CHATS_SECTIONS.map(section => (
            <SectionCard
              key={section.slug}
              english={section.name}
              kannada={section.kannada}
              onClick={() => navigate(`/sanju-gobi-house/filter/chats/${section.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Section view: show items from selected section
  const section = SANJU_GOBI_CHATS_SECTIONS.find(s => s.slug === sectionSlug);
  const items = SANJU_GOBI_CHATS_ITEMS[sectionSlug] || [];

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
          onClick={() => navigate('/sanju-gobi-house/filter/chats')}
        >
          ← Back
        </button>
        <h2 style={{ margin: 0 }} className="page-heading">
          Sanju Gobi House - {section.name}
        </h2>
      </div>

      <div style={{ padding: '12px' }}>
        {items.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {items.map((item) => (
              <ItemCard
                key={item.id}
                id={item.id}
                name={item.itemName}
                kannada={item.kannadaName}
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
