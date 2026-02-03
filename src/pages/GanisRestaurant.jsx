// Gani's Restaurant — temporary Not In Service page
import React from "react";
import { useNavigate } from "react-router-dom";

export default function GanisRestaurant(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Gani’s Restaurant</h2>
      </div>

      <div className="coming-soon-page">
        <div className="coming-soon-banner" role="region" aria-label="Gani's Restaurant status">
          <div className="coming-soon-title">Not in Service</div>
          <div className="coming-soon-quote">We’ll be back in a few days. Thank you for your patience!</div>
        </div>
      </div>
    </div>
  );
}
