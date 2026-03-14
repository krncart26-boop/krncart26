import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import { SHRI_MORNING_ITEMS } from "../data/menus/shriHotelMorning";
import { SHRI_EVENING_ITEMS } from "../data/menus/shriHotelEvening";

export const hotelId = 'shri-hotel';
export const hotelName = 'Shri Hotel';
export const routePrefix = 'shri-hotel';
export const menu = {
  morning: SHRI_MORNING_ITEMS,
  evening: SHRI_EVENING_ITEMS
};
export const sectionMap = {
  morning: 'Morning',
  evening: 'Evening'
};

export default function ShriHotel(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Shri Hotel</h2>
      </div>

      {/* Top banner: Shri Hotel timing and notice */}
      <div className="shri-hotel-banner" role="region" aria-label="Shri Hotel timings">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
        </div>
        <div className="timing-text">
          <div className="timing-title">Shri Hotel</div>
          <div className="timing-sub" style={{fontSize:'12px', marginTop:'4px'}}>Morning: 7:15 AM – 11:45 AM</div>
          <div className="timing-sub" style={{fontSize:'12px', marginTop:'2px'}}>Evening: 3:15 PM – 7:45 PM</div>
        </div>
      </div>

      {/* Sub-section cards */}
      <div style={{marginTop:12, display:'flex', flexDirection:'row', flexWrap:'wrap', gap:12}}>
        <SectionCard english="Morning" kannada="" subtitle="7:15 AM – 11:45 AM" onClick={()=>navigate('/shri-hotel/morning')} />
        <SectionCard english="Evening" kannada="" subtitle="3:15 PM – 7:45 PM" onClick={()=>navigate('/shri-hotel/evening')} />
      </div>
    </div>
  );
}