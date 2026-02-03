// Reusable section card used in KRN Restaurant page
import React from "react";

export default function SectionCard({ english, kannada, subtitle, onClick, children, container=false }){
  // If used as a container (non-clickable), render a div and include children inside
  if(container){
    return (
      <div className="section-card" role="region" aria-label={`${english} - ${kannada}`}>
        <div>
          <div className="section-title">{english}</div>
          <div className="section-kannada">{kannada}</div>
          {subtitle && <div className="section-subtitle">{subtitle}</div>}
        </div>
        {children}
      </div>
    );
  }

  return (
    <button
      className="section-card"
      onClick={onClick}
      aria-label={`${english} - ${kannada}`}
    >
      <div className="section-title">{english}</div>
      <div className="section-kannada">{kannada}</div>
      {subtitle && <div className="section-subtitle">{subtitle}</div>}
    </button>
  );
}