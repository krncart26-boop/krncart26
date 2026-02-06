import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import SectionCard from "../components/SectionCard";
import ItemCard from "../components/ItemCard";
import { KRN_LUNCH_MENU } from "../data/menus/krnLunch";

const SNACKS_SECTIONS = [
  { english: "Veg Starters", kannada: "ಶಾಕಾಹಾರಿ ಸ್ಟಾರ್ಟರ್ಸ್", slug: "veg-starters" },
  { english: "Chicken Starters", kannada: "ಚಿಕನ್ ಸ್ಟಾರ್ಟರ್ಸ್", slug: "chicken-starters" },
  { english: "Soup Starters", kannada: "ಸೂಪ್ ಸ್ಟಾರ್ಟರ್ಸ್", slug: "soup-starters" },
  { english: "Salad Special", kannada: "ಸಲಾಡ್ ವಿಶೇಷ", slug: "salad-special" },
];

const LUNCH_SECTIONS = [
  { english: "Veg Starters", kannada: "ಶಾಕಾಹಾರಿ ಸ್ಟಾರ್ಟರ್ಸ್", slug: "veg-starters" },
  { english: "Chicken Starters", kannada: "ಚಿಕನ್ ಸ್ಟಾರ್ಟರ್ಸ್", slug: "chicken-starters" },
  { english: "Soup Starters", kannada: "ಸೂಪ್ ಸ್ಟಾರ್ಟರ್ಸ್", slug: "soup-starters" },
  { english: "Salad Special", kannada: "ಸಲಾಡ್ ವಿಶೇಷ", slug: "salad-special" },
  { english: "Naty Style", kannada: "ನಾಡಿ ಶೈಲಿ", slug: "naty-style", subtitle: "Local / Traditional Style" },
  { english: "KRN Rice Bowls", kannada: "ಕೆಆರ್‌ಎನ್ ರೈಸ್ ಬೌಲ್ಸ್", slug: "krn-rice-bowls" },
  { english: "Breads", kannada: "ರೊಟ್ಟಿ / ಬ್ರೆಡ್ಸ್", slug: "breads" },
  { english: "KRN Mutton Special", kannada: "ಕೆಆರ್‌ಎನ್ ಮಟನ್ ವಿಶೇಷ", slug: "krn-mutton-special" },
  { english: "Indian Gravies", kannada: "ಭಾರತೀಯ ಗ್ರೇವಿಗಳು", slug: "indian-gravies" },
];

export default function KRNRestaurantFiltered() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current path is snacks-related
  const isSnacksPath = location.pathname.includes('/snacks/');
  const isSnacksLanding = location.pathname === '/krn-restaurant/filter/snacks';
  const isLunchPath = location.pathname.includes('/lunch/');
  const isLunchLanding = categorySlug === 'lunch';
  const isEveningPath = location.pathname.includes('/filter/evening');
  const isEveningLanding = location.pathname === '/krn-restaurant/filter/evening' || categorySlug === 'evening-food';

  // Debug logs
  console.log('🔍 KRNRestaurantFiltered Debug:', {
    pathname: location.pathname,
    categorySlug,
    sectionSlug,
    isEveningPath,
    isEveningLanding,
    LUNCH_SECTIONS_length: LUNCH_SECTIONS.length
  });

  // Handle Snacks filter - section detail page (URL: /krn-restaurant/snacks/:sectionSlug)
  if (sectionSlug && isSnacksPath) {
    const section = SNACKS_SECTIONS.find(s => s.slug === sectionSlug);
    const items = KRN_LUNCH_MENU[sectionSlug] || [];

    if (!section) {
      return <FilteredHotelPage hotelName="KRN Restaurant" categorySlug="snacks" />;
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/krn-restaurant/filter/snacks')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">{section.english}</h2>
        </div>

        {section.subtitle && (
          <p style={{ textAlign: 'center', color: '#999', fontSize: '12px', marginTop: '8px' }}>
            {section.subtitle}
          </p>
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

  // Handle Lunch filter - section detail page (URL: /krn-restaurant/lunch/:sectionSlug)
  if (sectionSlug && isLunchPath) {
    const section = LUNCH_SECTIONS.find(s => s.slug === sectionSlug);
    const items = KRN_LUNCH_MENU[sectionSlug] || [];

    if (!section) {
      return <FilteredHotelPage hotelName="KRN Restaurant" categorySlug="lunch" />;
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/krn-restaurant/filter/lunch')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">{section.english}</h2>
        </div>

        {section.subtitle && (
          <p style={{ textAlign: 'center', color: '#999', fontSize: '12px', marginTop: '8px' }}>
            {section.subtitle}
          </p>
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

  // Handle Snacks filter - landing page with section cards (URL: /krn-restaurant/filter/snacks)
  if (isSnacksLanding) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">KRN Restaurant</h2>
        </div>

        {/* Timing banner - informational only */}
        <div className="timing-banner" role="region" aria-label="Restaurant opening hours">
          <div className="timing-icon" aria-hidden="true">
            <span className="clock-emoji">⏰</span>
            <span className="status-dot" />
          </div>

          <div className="timing-text">
            <div className="timing-title">Open Today</div>
            <div className="timing-time">1:00 PM – 9:00 PM</div>
            <div className="timing-sub">Freshly prepared after opening hours</div>
          </div>
        </div>

        <div className="section-list">
          {SNACKS_SECTIONS.map(s => (
            <SectionCard
              key={s.slug}
              english={s.english}
              kannada={s.kannada}
              subtitle={s.subtitle}
              onClick={() => navigate(`/krn-restaurant/snacks/${s.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle Lunch filter - landing page with section cards (URL: /krn-restaurant/filter/lunch)
  if (isLunchLanding) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">KRN Restaurant</h2>
        </div>

        {/* Timing banner - informational only */}
        <div className="timing-banner" role="region" aria-label="Restaurant opening hours">
          <div className="timing-icon" aria-hidden="true">
            <span className="clock-emoji">⏰</span>
            <span className="status-dot" />
          </div>

          <div className="timing-text">
            <div className="timing-title">Open Today</div>
            <div className="timing-time">1:00 PM – 9:00 PM</div>
            <div className="timing-sub">Freshly prepared after opening hours</div>
          </div>
        </div>

        <div className="section-list">
          {LUNCH_SECTIONS.map(s => (
            <SectionCard
              key={s.slug}
              english={s.english}
              kannada={s.kannada}
              subtitle={s.subtitle}
              onClick={() => navigate(`/krn-restaurant/lunch/${s.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle Evening Food filter - section detail page (URL: /krn-restaurant/filter/evening/:sectionSlug)
  if (sectionSlug && isEveningPath) {
    const section = LUNCH_SECTIONS.find(s => s.slug === sectionSlug);
    const items = KRN_LUNCH_MENU[sectionSlug] || [];

    if (!section) {
      return <FilteredHotelPage hotelName="KRN Restaurant" categorySlug="evening" />;
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/krn-restaurant/filter/evening')}>← Back</button>
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

  // Handle Evening Food filter - landing page with section cards (URL: /krn-restaurant/filter/evening)
  if (isEveningLanding) {
    console.log('✅ Evening landing page detected!', {
      isEveningLanding,
      LUNCH_SECTIONS_length: LUNCH_SECTIONS.length,
      sections: LUNCH_SECTIONS.map(s => s.slug)
    });

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">KRN Restaurant</h2>
        </div>

        {/* Timing banner - informational only */}
        <div className="timing-banner" role="region" aria-label="Restaurant opening hours">
          <div className="timing-icon" aria-hidden="true">
            <span className="clock-emoji">⏰</span>
            <span className="status-dot" />
          </div>

          <div className="timing-text">
            <div className="timing-title">Open Today</div>
            <div className="timing-time">1:00 PM – 9:00 PM</div>
            <div className="timing-sub">Freshly prepared after opening hours</div>
          </div>
        </div>

        <div className="section-list">
          {LUNCH_SECTIONS.length > 0 ? (
            LUNCH_SECTIONS.map(s => {
              console.log('Rendering section card:', s.english);
              return (
                <SectionCard
                  key={s.slug}
                  english={s.english}
                  kannada={s.kannada}
                  subtitle={s.subtitle}
                  onClick={() => {
                    console.log('Section clicked:', s.slug);
                    navigate(`/krn-restaurant/filter/evening/${s.slug}`);
                  }}
                />
              );
            })
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
              No sections available
            </div>
          )}
        </div>
      </div>
    );
  }

  // For all other filters, use the generic FilteredHotelPage
  return <FilteredHotelPage hotelName="KRN Restaurant" categorySlug={categorySlug} />;
}
