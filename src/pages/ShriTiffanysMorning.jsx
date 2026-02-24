import React from "react";
import { useNavigate } from "react-router-dom";
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

export default function ShriTiffanysMorning(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/shri-tiffanys')}>← Back</button>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">Morning</h2>
          <div style={{color:'var(--muted)',marginTop:6}}>7:00 AM – 11:30 AM</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:12}}>
          {MORNING_ITEMS.map(it => (
            <ItemCard key={it.id} id={it.id} name={it.name} kannada={it.kannada} price={it.price} />
          ))}

          <div className="info-box" role="note" aria-label="Rice item changes daily">
            <div style={{fontWeight:800,marginBottom:6}}>Rice Item – Changes Daily</div>
            <ul style={{paddingLeft:18,margin:0}}>
              {RICE_DAILY.map(r => (
                <li key={r.day} style={{fontSize:13,color:'rgba(17,24,39,0.7)'}}>{r.day} – {r.item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}