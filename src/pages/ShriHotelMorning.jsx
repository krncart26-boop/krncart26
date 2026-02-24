import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const ITEMS = [
  { id: 'sh-idli', name: 'Idli', kannada: 'ಇಡ್ಲಿ', price: 20.99 },
  { id: 'sh-vada', name: 'Vada', kannada: 'ವಡೆ', price: 26.99 },
  { id: 'sh-khali-dosa', name: 'Khali Dosa', kannada: 'ಖಾಲಿ ದೋಸೆ', price: 20.99 },
  { id: 'sh-special-khali', name: 'Special Khali Dosa', kannada: 'ಸ್ಪೆಷಲ್ ಖಾಲಿ ದೋಸೆ', price: 30.99 },
  { id: 'sh-masala-dosa', name: 'Masala Dosa', kannada: 'ಮಸಾಲೆ ದೋಸೆ', price: 57.99 },
  { id: 'sh-set-masala', name: 'Set Masala Dosa', kannada: 'ಸೆಟ್ ಮಸಾಲೆ ದೋಸೆ', price: 59.99 },
  { id: 'sh-butter-set-masala', name: 'Butter Set Masala', kannada: 'ಬೆಣ್ಣೆ ಸೆಟ್ ಮಸಾಲೆ', price: 68.99 },
  { id: 'sh-butter-masala', name: 'Butter Masala', kannada: 'ಬೆಣ್ಣೆ ಮಸಾಲೆ', price: 68.99 },
  { id: 'sh-plain-dosa', name: 'Plain Dosa', kannada: 'ಪ್ಲೇನ್ ದೋಸೆ', price: 52.99 },
  { id: 'sh-butter-plain', name: 'Butter Plain Dosa', kannada: 'ಬೆಣ್ಣೆ ಪ್ಲೇನ್ ದೋಸೆ', price: 62.99 },
  { id: 'sh-rice-bath', name: 'Rice Bath', kannada: 'ರೈಸ್ ಬಾತ್', price: 42.99 },
  { id: 'sh-bisi-bath', name: 'Bisi Bele Bath', kannada: 'ಬಿಸಿ ಬೆಳೆ ಬಾತ್', price: 42.99 },
  { id: 'sh-pongal', name: 'Pongal', kannada: 'ಪೊಂಗಲ್', price: 42.99 },
  { id: 'sh-poori', name: 'Poori', kannada: 'ಪೂರಿ', price: 57.99 },
  { id: 'sh-kesari-bath', name: 'Kesari Bath', kannada: 'ಕೇಸರಿ ಬಾತ್', price: 27.99 },
  { id: 'sh-khara-bath', name: 'Khara Bath', kannada: 'ಖಾರ ಬಾತ್', price: 27.99 },
  { id: 'sh-chou-bath', name: 'Chou Chou Bath', kannada: 'ಚೌ ಚೌ ಬಾತ್', price: 47.99 },
  { id: 'sh-curd-vada', name: 'Curd Vada', kannada: 'ಮೊಸರು ವಡೆ', price: 47.99 },
  { id: 'sh-tomato-dosa', name: 'Tomato Dosa', kannada: 'ಟೊಮೋಟೊ ದೋಸೆ', price: 52.99 },
  { id: 'sh-butter-set-single', name: 'Butter Set Masala (Single)', kannada: 'ಬೆಣ್ಣೆ ಸೆಟ್ ಮಸಾಲೆ ಸಿಂಗಲ್', price: 37.99 },
  { id: 'sh-single-set', name: 'Single Set Masala', kannada: 'ಸಿಂಗಲ್ ಸೆಟ್ ಮಸಾಲೆ', price: 29.99 },
];

export default function ShriHotelMorning(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/shri-hotel')}>← Back</button>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">Morning</h2>
          <div style={{color:'var(--muted)',marginTop:6}}>7:15 AM – 11:45 AM</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:12}}>
          {ITEMS.map(it => (
            <ItemCard key={it.id} id={it.id} name={it.name} kannada={it.kannada} price={it.price} />
          ))}
        </div>
      </div>
    </div>
  );
}