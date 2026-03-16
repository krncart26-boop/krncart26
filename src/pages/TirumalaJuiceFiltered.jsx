import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import SectionCard from "../components/SectionCard";
import TirumalaSection from "./TirumalaSection";

const SECTIONS = [
  { english: "🍹 Fresh Juice", kannada: "ಫ್ರೆಶ್ ಜ್ಯೂಸ್", slug: "fresh-juice" },
  { english: "🥤 Lassi", kannada: "ಲಸ್ಸಿ", slug: "lassi" },
  { english: "🥛 Milk Shakes", kannada: "ಮಿಲ್ಕ್ ಶೇಕ್", slug: "milk-shakes" },
  { english: "🍓 Special Juice", kannada: "ಸ್ಪೆಷಲ್ ಜ್ಯೂಸ್", slug: "special-juice" },
  { english: "🥗 Health Juice", kannada: "ಹೆಲ್ತ್ ಜ್ಯೂಸ್", slug: "health-juice" },
];

export default function TirumalaJuiceFiltered() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we're viewing a section detail page (/tirumala-juice/filter/juices/:sectionSlug)
  const isJuiceFilterDetail = sectionSlug && location.pathname.includes('/filter/juices/');
  const isJuiceFilterLanding = categorySlug === 'juices' && !sectionSlug;

  // Handle section detail page when accessed from Juice filter
  if (isJuiceFilterDetail) {
    return (
      <TirumalaSection sectionSlug={sectionSlug} hotelName="Tirumala Juice" backPath="/tirumala-juice/filter/juices" />
    );
  }

  // Handle Juice filter landing page - show sections
  if (isJuiceFilterLanding) {
    return (<div className="page-container">
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <button className="header-btn" onClick={()=>navigate('/tirumala-juice')}>← Back</button>
          <h2 style={{margin:0}} className="page-heading">Tirumala Juice Centre</h2>
        </div>

        <div style={{marginTop:12}}>
          <div className="section-list">
            {SECTIONS.map(s => (
              <SectionCard
                key={s.slug}
                english={s.english}
                kannada={s.kannada}
                onClick={()=>navigate(`/tirumala-juice/filter/juices/${s.slug}`)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For other filters, use generic FilteredHotelPage
  return <FilteredHotelPage hotelName="Tirumala Juice" categorySlug={categorySlug} />;
}


