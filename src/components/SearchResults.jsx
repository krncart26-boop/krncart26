// SearchResults: shows a dropdown list of search matches
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResults({ results = [], onClose }){
  const navigate = useNavigate();

  function handleClick(route){
    navigate(route);
    if(onClose) onClose();
  }

  if(!results || results.length === 0) return null;

  return (
    <div className="search-results" role="list" aria-label="Search results">
      {results.map(r => (
        <button key={r.id} className="search-result-card" onClick={()=>handleClick(r.route)} role="listitem">
          <div style={{fontWeight:800}}>{r.itemName}</div>
          <div style={{fontSize:13,color:'var(--muted)'}}>{r.hotelName} • {r.sectionName}</div>
        </button>
      ))}
    </div>
  );
}
