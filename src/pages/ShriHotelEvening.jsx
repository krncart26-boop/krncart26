import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const ITEMS = [
  { id: 'sh-onion-dosa', name: 'Onion Dosa', kannada: 'ಈರುಳ್ಳಿ ದೋಸೆ', price: 62.99 },
  { id: 'sh-khali-dosa', name: 'Khali Dosa', kannada: 'ಖಾಲಿ ದೋಸೆ', price: 20.99 },
  { id: 'sh-special-khali', name: 'Special Khali Dosa', kannada: 'ಸ್ಪೆಷಲ್ ಖಾಲಿ ದೋಸೆ', price: 30.99 },
  { id: 'sh-masala-dosa', name: 'Masala Dosa', kannada: 'ಮಸಾಲೆ ದೋಸೆ', price: 57.99 },
  { id: 'sh-set-masala', name: 'Set Masala Dosa', kannada: 'ಸೆಟ್ ಮಸಾಲೆ ದೋಸೆ', price: 59.99 },
  { id: 'sh-butter-set-masala', name: 'Butter Set Masala', kannada: 'ಬೆಣ್ಣೆ ಸೆಟ್ ಮಸಾಲೆ', price: 68.99 },
  { id: 'sh-butter-masala', name: 'Butter Masala', kannada: 'ಬೆಣ್ಣೆ ಮಸಾಲೆ', price: 68.99 },
  { id: 'sh-plain-dosa', name: 'Plain Dosa', kannada: 'ಪ್ಲೇನ್ ದೋಸೆ', price: 52.99 },
  { id: 'sh-butter-plain', name: 'Butter Plain Dosa', kannada: 'ಬೆಣ್ಣೆ ಪ್ಲೇನ್ ದೋಸೆ', price: 62.99 },
  { id: 'sh-poori', name: 'Poori', kannada: 'ಪೂರಿ', price: 57.99 },
  { id: 'sh-shavige-bath', name: 'Shavige Bath', kannada: 'ಶಾವಿಗೆ ಬಾತ್', price: 52.99 },
  { id: 'sh-bajji', name: 'Bajji', kannada: 'ಬಜ್ಜಿ', price: 26.99 },
  { id: 'sh-rava-idli', name: 'Rava Idli', kannada: 'ರವೆ ಇಡ್ಲಿ', price: 30.99 },
  { id: 'sh-bonda-soup', name: 'Bonda Soup', kannada: 'ಬೋಂಡಾ ಸೂಪ್', price: 32.99 },
  { id: 'sh-sweet', name: 'Sweet', kannada: 'ಸಿಹಿ', price: 27.99 },
  { id: 'sh-tomato-dosa', name: 'Tomato Dosa', kannada: 'ಟೊಮೋಟೊ ದೋಸೆ', price: 52.99 },
  { id: 'sh-butter-set-single', name: 'Butter Set Masala (Single)', kannada: 'ಬೆಣ್ಣೆ ಸೆಟ್ ಮಸಾಲೆ ಸಿಂಗಲ್', price: 37.99 },
  { id: 'sh-single-set', name: 'Single Set Masala', kannada: 'ಸಿಂಗಲ್ ಸೆಟ್ ಮಸಾಲೆ', price: 29.99 },
];

export default function ShriHotelEvening(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/shri-hotel')}>← Back</button>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">Evening</h2>
          <div style={{color:'var(--muted)',marginTop:6}}>3:15 PM – 7:45 PM</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {ITEMS.map(it => (
            <ItemCard key={it.id} id={it.id} name={it.name} kannada={it.kannada} price={it.price} />
          ))}
        </div>
      </div>
    </div>
  );
}