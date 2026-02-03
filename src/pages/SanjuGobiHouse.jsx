import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const ITEMS = [
  { id: 'g-cabbage-manch-hf', kannada: 'ಕ್ಯಾಬೇಜ್ ಮಂಚೂರಿ (ಹಾಫ್)', name: 'Cabbage Manchurian (Half)', price: 32.99 },
  { id: 'g-cabbage-manch-full', kannada: 'ಕ್ಯಾಬೇಜ್ ಮಂಚೂರಿ (ಫುಲ್)', name: 'Cabbage Manchurian (Full)', price: 42.99 },
  { id: 'g-cauliflower-manch', kannada: 'ಕಾಲಿಫ್ಲವರ್ ಮಂಚೂರಿ', name: 'Cauliflower Manchurian', price: 52.99 },
  { id: 'g-mushroom-manch', kannada: 'ಮಶ್ರೂಮ್ ಮಂಚೂರಿ', name: 'Mushroom Manchurian', price: 72.99 },
  { id: 'g-babycorn-manch', kannada: 'ಬೇಬಿ ಕಾರ್ನ್ ಮಂಚೂರಿ', name: 'Baby Corn Manchurian', price: 72.99 },
  { id: 'g-gobi-dry', kannada: 'ಡ್ರೈ ಗೋಬಿ', name: 'Gobi Dry', price: 62.99 },
  { id: 'g-mushroom-kabab', kannada: 'ಮಶ್ರೂಮ್ ಕಬಾಬ್', name: 'Mushroom Kabab', price: 82.99 },
  { id: 'g-mushroom-fried-rice', kannada: 'ಮಶ್ರೂಮ್ ಫ್ರೈಡ್ ರೈಸ್', name: 'Mushroom Fried Rice', price: 82.99 },
  { id: 'g-veg-noodles', kannada: 'ವೆಜ್ ನೂಡಲ್ಸ್', name: 'Veg Noodles', price: 52.99 },
  { id: 'g-paneer-fried-rice', kannada: 'ಪನ್ನೀರ್ ಫ್ರೈಡ್ ರೈಸ್', name: 'Paneer Fried Rice', price: 82.99 },
  { id: 'g-mushroom-biryani', kannada: 'ಮಶ್ರೂಮ್ ಬಿರಿಯಾನಿ', name: 'Mushroom Biryani', price: 82.99 },
  { id: 'g-mushroom-pepper-dry', kannada: 'ಮಶ್ರೂಮ್ ಪೆಪ್ಪರ್ ಡ್ರೈ', name: 'Mushroom Pepper Dry', price: 72.99 },
  { id: 'g-paneer-manch', kannada: 'ಪನ್ನೀರ್ ಮಂಚೂರಿ', name: 'Paneer Manchurian', price: 82.99 },
  { id: 'g-aloo-manch', kannada: 'ಆಲೂಗಡ್ಡೆ ಮಂಚೂರಿ', name: 'Aloo Manchurian', price: 52.99 },
  { id: 'g-beetroot-manch', kannada: 'ಬೀಟ್ರೂಟ್ ಮಂಚೂರಿ', name: 'Beetroot Manchurian', price: 52.99 },
  { id: 'g-banana-manch', kannada: 'ಬಾಳೆಕಾಯಿ ಮಂಚೂರಿ', name: 'Banana (Raw) Manchurian', price: 52.99 },
];

export default function SanjuGobiHouse(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Sanju Gobi House</h2>
      </div>

      {/* Timing banner */}
      <div className="sanju-timing-banner" role="region" aria-label="Sanju Gobi House timings">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
        </div>
        <div className="timing-text">
          <div className="timing-title">Open Today</div>
          <div className="timing-time">2:00 PM – 8:00 PM</div>
        </div>
      </div>

      <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:12}}>
        {ITEMS.map(it => (
          // Pass kannada as name and english as kannada to show Kannada on top for this hotel
          <ItemCard key={it.id} id={it.id} name={it.kannada} kannada={it.name} price={it.price} />
        ))}
      </div>
    </div>
  );
}
