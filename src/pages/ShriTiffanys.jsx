import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import ItemCard from "../components/ItemCard";

const MORNING_ITEMS = [
  { id: 'tiff-idli', name: 'Idli', kannada: 'ಇಡ್ಲಿ', price: 18.00 },
  { id: 'tiff-vada', name: 'Vada', kannada: 'ವಡೆ', price: 20.00 },
  { id: 'tiff-kesari', name: 'Kesari Bath', kannada: 'ಕೇಸರಿ ಬಾತ್', price: 25.00 },
  { id: 'tiff-kara', name: 'Kara Bath', kannada: 'ಖಾರ ಬಾತ್', price: 25.00 },
  { id: 'tiff-chow', name: 'Chow Chow Bath', kannada: 'ಚೌ ಚೌ ಬಾತ್', price: 45.00 },
  { id: 'tiff-rice', name: 'Rice Item (Daily Special)', kannada: 'ಅನ್ನ ಪದಾರ್ಥ (ದಿನ ವಿಶೇಷ)', price: 35.00 },
];

const RICE_DAILY = [
  { day: 'Monday', item: 'Rice Bath' },
  { day: 'Wednesday', item: 'Tomato Bath' },
  { day: 'Thursday', item: 'Bisi Bele Bath' },
  { day: 'Friday', item: 'Vani Bath' },
  { day: 'Saturday', item: 'Veg Pulao' },
  { day: 'Sunday', item: 'Bisi Bele Bath' },
];

const EVENING_ITEMS = [
  { id: 'tiff-rava-idli', name: 'Rava Idli', kannada: 'ರವೆ ಇಡ್ಲಿ', price: 28.00 },
  { id: 'tiff-bonda-soup', name: 'Bonda Soup (with soup)', kannada: 'ಬೋಂಡಾ ಸೂಪ್', price: 30.00 },
  { id: 'tiff-mang-bajji', name: 'Mangalore Bajji (3 pcs per plate)', kannada: 'ಮಂಗಳೂರು ಬಜ್ಜಿ', price: 25.00 },
  { id: 'tiff-shavige', name: 'Shavige Bath', kannada: 'ಶಾವಿಗೆ ಬಾತ್', price: 35.00 },
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
          <div className="timing-title">Closed on Thursday</div>
          <div style={{fontSize:'13px',color:'rgba(17,24,39,0.7)',marginTop:'4px'}}>
            Morning: 7:00 AM – 11:30 AM<br/>
            Evening: 4:30 PM – 8:30 PM
          </div>
        </div>
      </div>

      {/* Morning section (tappable) */}
      <div style={{marginTop:12}}>
        <SectionCard english="Morning" kannada="ಬೆಳಿಗ್ಗೆ" subtitle="7:00 AM – 11:30 AM" onClick={()=>navigate('/shri-tiffanys/morning')} />
      </div>

      {/* Evening section (tappable) */}
      <div style={{marginTop:18}}>
        <SectionCard english="Evening" kannada="ಸಂಜೆ" subtitle="4:30 PM – 8:30 PM" onClick={()=>navigate('/shri-tiffanys/evening')} />
      </div>
    </div>
  );
}

export const hotelId = 'shri-tiffanys';
export const hotelName = "Shri Tiffany's";
export const menu = { 'morning': MORNING_ITEMS, 'evening': EVENING_ITEMS };
export const sectionMap = { 'morning': { english: 'Morning' }, 'evening': { english: 'Evening' } };
export const routePrefix = 'shri-tiffanys';
