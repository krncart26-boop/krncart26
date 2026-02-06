import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import SectionCard from "../components/SectionCard";
import ItemCard from "../components/ItemCard";
import { SHRI_TIFFANYS_EVENING_DOSA, SHRI_TIFFANYS_EVENING_OTHERS } from "../data/menus/shriTiffanysEvening";
import { SHRI_TIFFANYS_BREAKFAST_SECTIONS, SHRI_TIFFANYS_BREAKFAST_DOSA, SHRI_TIFFANYS_BREAKFAST_OTHERS } from "../data/menus/shriTiffanysBreakfastFilter";

const EVENING_SECTIONS = [
  { english: "Dosa", kannada: "ದೋಸೆ", slug: "dosa" },
  { english: "Others", kannada: "ಇತರೆ", slug: "others" },
];

export default function ShriTiffanysFiltered() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current path is breakfast-related
  const isBreakfastPath = location.pathname.includes('/filter/breakfast');
  const isBreakfastLanding = location.pathname === '/shri-tiffanys/filter/breakfast' || categorySlug === 'breakfast';

  // Check if current path is evening-related
  const isEveningPath = location.pathname.includes('/evening/');
  const isEveningLanding = location.pathname === '/shri-tiffanys/filter/evening-food';

  // Handle Breakfast filter - section detail page (URL: /shri-tiffanys/filter/breakfast/:sectionSlug)
  if (sectionSlug && isBreakfastPath) {
    const section = SHRI_TIFFANYS_BREAKFAST_SECTIONS.find(s => s.slug === sectionSlug);
    let items = [];

    if (sectionSlug === 'dosa') {
      items = SHRI_TIFFANYS_BREAKFAST_DOSA;
    } else if (sectionSlug === 'others') {
      items = SHRI_TIFFANYS_BREAKFAST_OTHERS;
    }

    if (!section) {
      return <FilteredHotelPage hotelName="Shri Tiffany's" categorySlug={categorySlug} />;
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/shri-tiffanys/filter/breakfast')}>← Back</button>
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

  // Handle Breakfast filter - landing page with section cards (URL: /shri-tiffanys/filter/breakfast)
  if (isBreakfastLanding) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Shri Tiffany's</h2>
        </div>

        <div className="section-list">
          {SHRI_TIFFANYS_BREAKFAST_SECTIONS.map(s => (
            <SectionCard
              key={s.slug}
              english={s.english}
              kannada={s.kannada}
              subtitle={s.subtitle}
              onClick={() => navigate(`/shri-tiffanys/filter/breakfast/${s.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle Evening Food filter - section detail page (URL: /shri-tiffanys/evening/:sectionSlug)
  if (sectionSlug && isEveningPath) {
    const section = EVENING_SECTIONS.find(s => s.slug === sectionSlug);
    let items = [];

    if (sectionSlug === 'dosa') {
      items = SHRI_TIFFANYS_EVENING_DOSA;
    } else if (sectionSlug === 'others') {
      items = SHRI_TIFFANYS_EVENING_OTHERS;
    }

    if (!section) {
      return <FilteredHotelPage hotelName="Shri Tiffany's" categorySlug={categorySlug} />;
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/shri-tiffanys/filter/evening-food')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">{section.english}</h2>
        </div>

        {/* Timing banner - only for Others section */}
        {sectionSlug === 'others' && (
          <div className="ice-timing-banner" role="region" aria-label="Evening opening hours">
            <div className="timing-icon" aria-hidden="true">
              <span className="clock-emoji">⏰</span>
              <span className="status-dot" />
            </div>

            <div className="timing-text">
              <div className="timing-title">Evening</div>
              <div className="timing-time">4:30 PM – 8:30 PM</div>
            </div>
          </div>
        )}

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

  // Handle Evening Food filter - landing page with section cards (URL: /shri-tiffanys/filter/evening-food)
  if (isEveningLanding) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Shri Tiffany's</h2>
        </div>

        <div className="section-list">
          {EVENING_SECTIONS.map(s => (
            <SectionCard
              key={s.slug}
              english={s.english}
              kannada={s.kannada}
              subtitle={s.subtitle}
              onClick={() => navigate(`/shri-tiffanys/evening/${s.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // For all other filters, use the generic FilteredHotelPage
  return <FilteredHotelPage hotelName="Shri Tiffany's" categorySlug={categorySlug} />;
}
