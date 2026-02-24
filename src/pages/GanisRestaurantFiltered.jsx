import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import ItemCard from "../components/ItemCard";
import { GANIS_RESTAURANT_MENU, GANIS_SECTION_MAP } from "../data/menus/ganisRestaurant";

export default function GanisRestaurantFiltered() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log('GanisRestaurantFiltered Debug:', {
    categorySlug,
    sectionSlug,
    pathname: location.pathname,
    params: { categorySlug, sectionSlug },
  });

  // Parse URL directly to handle both route patterns
  const pathParts = location.pathname.split('/').filter(Boolean);
  // pathParts: ['ganis-restaurant', 'filter', 'all', 'chicken-starters']
  const isAllFilter = pathParts[2] === 'all';
  const routeSectionSlug = pathParts[3]; // The actual section slug

  if (isAllFilter && routeSectionSlug) {
    const items = GANIS_RESTAURANT_MENU[routeSectionSlug] || [];
    const section = GANIS_SECTION_MAP[routeSectionSlug];
    const sectionName = section ? section.english : routeSectionSlug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    console.log('Items found:', {
      routeSectionSlug,
      itemCount: items.length,
      sectionName,
      menuKeys: Object.keys(GANIS_RESTAURANT_MENU),
    });

    return (
      <div>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <button className="header-btn" onClick={()=>navigate('/ganis-restaurant')}>← Back</button>
          <h2 style={{margin:0}} className="page-heading">Gani's - {sectionName}</h2>
        </div>

        {items.length === 0 ? (
          <div style={{padding:'20px', textAlign:'center', marginTop:'40px'}}>
            <h3 style={{color:'var(--muted)'}}>No items available</h3>
          </div>
        ) : (
          <div className="items-list">
            {items.map(item => (
              <ItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                kannada={item.kannada}
                price={item.price}
                parcelCharge={item.parcelCharge}
                subsection={sectionName}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // For non-ALL categories, show coming soon
  return <FilteredHotelPage hotelName="Gani's Restaurant" categorySlug={categorySlug} />;
}
