import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import SectionCard from "../components/SectionCard";
import JuiceSection from "./JuiceSection";

const SECTIONS = [
  { english: "🧃 JUICES", kannada: "ಜ್ಯೂಸ್‌ಗಳು", slug: "juices" },
  { english: "🥤 SODA", kannada: "ಸೋಡಾ", slug: "soda" },
  { english: "🥛 MILK SHAKE", kannada: "ಮಿಲ್ಕ್ ಶೇಕ್", slug: "milk-shake" },
];

export default function LakshmiJuiceCornerFiltered() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're viewing a section detail page (/juice-junction/filter/juices/:sectionSlug)
  const isJuiceFilterDetail = sectionSlug && location.pathname.includes('/filter/juices/');
  const isJuiceFilterLanding = categorySlug === 'juices' && !sectionSlug;

  // Handle section detail page when accessed from Juice filter
  if (isJuiceFilterDetail) {
    return (
      <JuiceSection sectionSlug={sectionSlug} hotelName="Lakshmi Juice Corner" backPath="/juice-junction/filter/juices" />
    );
  }

  // Handle Juice filter landing page - show sections
  if (isJuiceFilterLanding) {
    return (
      <div>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
          <h2 style={{margin:0}} className="page-heading">Lakshmi Juice Corner</h2>
        </div>

        {/* Timing banner - informational only */}
        <div className="ice-timing-banner" role="region" aria-label="Lakshmi Juice Corner opening hours">
          <div className="timing-icon" aria-hidden="true">
            <span className="clock-emoji">⏰</span>
            <span className="status-dot" />
          </div>

          <div className="timing-text">
            <div className="timing-title">Lakshmi Juice Corner</div>
            <div className="timing-time">Fresh Juices & Beverages</div>
          </div>
        </div>

        <div style={{marginTop:12}}>
          <div className="section-list">
            {SECTIONS.map(s => (
              <SectionCard
                key={s.slug}
                english={s.english}
                kannada={s.kannada}
                onClick={()=>navigate(`/juice-junction/filter/juices/${s.slug}`)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For other filters, use generic FilteredHotelPage
  return <FilteredHotelPage hotelName="Lakshmi Juice Corner" categorySlug={categorySlug} />;
}
