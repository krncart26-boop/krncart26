// Individual hotel circular card used in the grid.
import React from "react";

export default function HotelCard({ name, onClick }){
  return (
    <button className="hotel-card" onClick={onClick} aria-label={`Open ${name}`}>
      {name}
    </button>
  );
}
