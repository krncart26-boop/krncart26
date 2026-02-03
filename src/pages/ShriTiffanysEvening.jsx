import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const EVENING_ITEMS = [
  { id: 'tiff-rava-idli', name: 'Rava Idli (1 piece)', kannada: '', price: 28.00 },
  { id: 'tiff-bonda-soup', name: 'Bonda Soup (1 piece with soup)', kannada: '', price: 30.00 },
  { id: 'tiff-mang-bajji', name: 'Mangalore Bajji (per plate / 3 pieces)', kannada: '', price: 25.00 },
  { id: 'tiff-shavige', name: 'Shavige Bath', kannada: '', price: 35.00 },
];

export default function ShriTiffanysEvening(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/shri-tiffanys')}>← Back</button>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">Evening</h2>
          <div style={{color:'var(--muted)',marginTop:6}}>3:30 PM – 7:30 PM</div>
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