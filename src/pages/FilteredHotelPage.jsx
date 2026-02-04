// Reusable filtered hotel page: shows only items for a specific category
import React from "react";
import { useNavigate } from "react-router-dom";

// Helper to prettify category names
function prettifyCategory(slug) {
  return slug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function FilteredHotelPage({ hotelName, categorySlug }) {
  const navigate = useNavigate();
  const categoryName = prettifyCategory(categorySlug);

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">{hotelName} - {categoryName}</h2>
      </div>

      <div style={{padding:'20px', textAlign:'center', marginTop:'40px'}}>
        <h3 style={{color:'var(--muted)'}}>{categoryName.toUpperCase()}</h3>
        <p style={{color:'var(--muted)', fontSize:'14px', marginTop:'10px'}}>
          Items coming soon. Check back later!
        </p>
      </div>
    </div>
  );
}
