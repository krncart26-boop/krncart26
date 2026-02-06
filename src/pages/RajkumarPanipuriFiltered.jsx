import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import SectionCard from "../components/SectionCard";
import ItemCard from "../components/ItemCard";
import { RAJKUMAR_DATA, RAJKUMAR_SECTION_MAP } from "../data/menus/rajkumar";

const CHATS_SECTIONS = [
  { english: "Gobi Items", kannada: "", slug: "gobi" },
  { english: "Masale Items", kannada: "", slug: "masale" },
];

export default function RajkumarPanipuriFiltered() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current path is chats-related
  const isChatsPath = location.pathname.includes('/chats/');
  const isChatsLanding = location.pathname === '/rajkumar/filter/chats';

  // Handle Chats filter - section detail page (URL: /rajkumar/chats/:sectionSlug)
  if (sectionSlug && isChatsPath) {
    const section = CHATS_SECTIONS.find(s => s.slug === sectionSlug);
    const items = RAJKUMAR_DATA[sectionSlug] || [];

    if (!section) {
      return <FilteredHotelPage hotelName="Rajkumar Panipuri" categorySlug={categorySlug} />;
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/rajkumar/filter/chats')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">{section.english}</h2>
        </div>

        <div className="items-list">
          {items.map((item, idx) => {
            // Handle array format [name, kannada, price]
            const [itemName, kannada, price] = item;
            const id = `rajkumar-${sectionSlug}-${idx}`;

            return (
              <ItemCard
                key={id}
                id={id}
                name={itemName}
                kannada={kannada}
                price={price}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Handle Chats filter - landing page with section cards (URL: /rajkumar/filter/chats)
  if (isChatsLanding) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Rajkumar Panipuri</h2>
        </div>

        {/* Timing banner */}
        <div className="ice-timing-banner" role="region" aria-label="Rajkumar opening hours">
          <div className="timing-icon" aria-hidden="true">
            <span className="clock-emoji">⏰</span>
            <span className="status-dot" />
          </div>

          <div className="timing-text">
            <div className="timing-title">Open Today</div>
            <div className="timing-time">5:30 PM – 9:00 PM</div>
            <div className="timing-sub">Classic chats and panipuri served fresh</div>
          </div>
        </div>

        <div className="section-list">
          {CHATS_SECTIONS.map(s => (
            <SectionCard
              key={s.slug}
              english={s.english}
              kannada={s.kannada}
              subtitle={s.subtitle}
              onClick={() => navigate(`/rajkumar/chats/${s.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // For all other filters, use the generic FilteredHotelPage
  return <FilteredHotelPage hotelName="Rajkumar Panipuri" categorySlug={categorySlug} />;
}
