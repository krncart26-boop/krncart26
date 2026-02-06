import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import ItemCard from "../components/ItemCard";
import SectionCard from "../components/SectionCard";
import { UDUPI_BREAKFAST_SECTIONS, UDUPI_BREAKFAST_ITEMS } from "../data/menus/udupiBreakfast";

export default function UdupiPalaceFiltered() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();

  // Handle Breakfast filter - show sections then items
  if (categorySlug === "breakfast") {
    // Landing page: show clickable section cards
    if (!sectionSlug) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace - Breakfast</h2>
          </div>

          <div className="section-list" style={{ marginTop: 12 }}>
            {UDUPI_BREAKFAST_SECTIONS.map(section => (
              <SectionCard
                key={section.slug}
                english={section.english}
                kannada={section.kannada}
                onClick={() => navigate(`/udupi-hotel/filter/breakfast/${section.slug}`)}
              />
            ))}
          </div>
        </div>
      );
    }

    // Section view: show items from selected section
    const section = UDUPI_BREAKFAST_SECTIONS.find(s => s.slug === sectionSlug);
    const items = UDUPI_BREAKFAST_ITEMS[sectionSlug] || [];

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
          <button className="header-btn" onClick={() => navigate('/udupi-hotel/filter/breakfast')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace</h2>
        </div>

        <div style={{ margin: '12px 0' }}>
          <h3 style={{ margin: '8px 0' }}>{section.english}</h3>
          <p style={{ margin: '0', fontSize: '0.9em', color: 'var(--muted)' }}>{section.kannada}</p>
        </div>

        <div className="items-list">
          {items.map(item => (
            <ItemCard
              key={`${item.itemName.toLowerCase().replace(/\s+/g, '-')}`}
              id={`udupi-breakfast-${sectionSlug}-${item.itemName.toLowerCase().replace(/\s+/g, '-')}`}
              name={item.itemName}
              kannada={item.kannadaName}
              price={item.price}
            />
          ))}
        </div>
      </div>
    );
  }

  // For all other filters, use the generic FilteredHotelPage
  return <FilteredHotelPage hotelName="Udupi Palace" categorySlug={categorySlug} />;
}
