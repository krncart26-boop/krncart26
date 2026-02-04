import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const EVENING_ITEMS = [
  { id: 'tiff-rava-idli', name: 'Rava Idli', kannada: 'ರವೆ ಇಡ್ಲಿ', price: 28.00 },
  { id: 'tiff-bonda-soup', name: 'Bonda Soup (with soup)', kannada: 'ಬೋಂಡಾ ಸೂಪ್', price: 30.00 },
  { id: 'tiff-mang-bajji', name: 'Mangalore Bajji (3 pcs per plate)', kannada: 'ಮಂಗಳೂರು ಬಜ್ಜಿ', price: 25.00 },
  { id: 'tiff-shavige', name: 'Shavige Bath', kannada: 'ಶಾವಿಗೆ ಬಾತ್', price: 35.00 },
];

export default function ShriTiffanysEvening(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/shri-tiffanys')}>← Back</button>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">Evening</h2>
          <div style={{color:'var(--muted)',marginTop:6}}>4:30 PM – 8:30 PM</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {EVENING_ITEMS.map(it => (
            <ItemCard key={it.id} id={it.id} name={it.name} kannada={it.kannada} price={it.price} />
          ))}
        </div>
      </div>
    </div>
  );
}