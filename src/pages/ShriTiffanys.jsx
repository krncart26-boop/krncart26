import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import ItemCard from "../components/ItemCard";

const MORNING_ITEMS = [
  { id: 'tiff-idli', name: 'Idli (1 piece)', kannada: '', price: 18.00 },
  { id: 'tiff-vada', name: 'Vada (1 piece)', kannada: '', price: 20.00 },
  { id: 'tiff-kesari', name: 'Kesari Bath', kannada: '', price: 25.00 },
  { id: 'tiff-kara', name: 'Kara Bath', kannada: '', price: 25.00 },
  { id: 'tiff-chow', name: 'Chow Chow Bath', kannada: '', price: 45.00 },
  { id: 'tiff-rice', name: 'Rice Item', kannada: '', price: 35.00 },
];

const RICE_DAILY = [
  { day: 'Monday', item: 'Rice Bath' },
  { day: 'Wednesday', item: 'Tomato Bath' },
  { day: 'Thursday', item: 'Bisibelebath' },
  { day: 'Friday', item: 'Vani Bath' },
  { day: 'Saturday', item: 'Veg Pulao' },
  { day: 'Sunday', item: 'Bisi Bele Bath' },
];

const EVENING_ITEMS = [
  { id: 'tiff-rava-idli', name: 'Rava Idli (1 piece)', kannada: '', price: 28.00 },
  { id: 'tiff-bonda-soup', name: 'Bonda Soup (1 piece with soup)', kannada: '', price: 30.00 },
  { id: 'tiff-mang-bajji', name: 'Mangalore Bajji (per plate / 3 pieces)', kannada: '', price: 25.00 },
  { id: 'tiff-shavige', name: 'Shavige Bath', kannada: '', price: 35.00 },
];

export default function ShriTiffanys(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Shri Tiffany's</h2>
      </div>

      {/* Top banner: weekly closure */}
      <div className="tiffany-banner" role="region" aria-label="Shri Tiffany's notice">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⚠️</span>
        </div>
        <div className="timing-text">
          <div className="timing-title">Closed on Tuesdays</div>
        </div>
      </div>

      {/* Morning section (tappable) */}
      <div style={{marginTop:12}}>
        <SectionCard english="Morning" kannada="" subtitle="7:00 AM – 11:30 AM" onClick={()=>navigate('/shri-tiffanys/morning')} />
      </div>

      {/* Evening section (tappable) */}
      <div style={{marginTop:18}}>
        <SectionCard english="Evening" kannada="" subtitle="3:30 PM – 7:30 PM" onClick={()=>navigate('/shri-tiffanys/evening')} />
      </div>
    </div>
  );
}
