import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const MENU_ITEMS = [
  { id: 1, name: "Mudde and Mutton Samber", kannada: "ಮುದ್ದೆ ಮತ್ತು ಮಟನ್ ಸಾಂಬಾರ್", price: 69.00 },
  { id: 2, name: "Biriyani and Chops", kannada: "ಬಿರಿಯಾನಿ ಮತ್ತು ಚಾಪ್ಸ್", price: 109.00 },
  { id: 3, name: "White Rice and Chops", kannada: "ಬಿಳಿ ಅನ್ನ ಮತ್ತು ಚಾಪ್ಸ್", price: 79.00 },
  { id: 4, name: "White Rice and Mutton Samber", kannada: "ಬಿಳಿ ಅನ್ನ ಮತ್ತು ಮಟನ್ ಸಾಂಬಾರ್", price: 89.00 },
  { id: 5, name: "Papper Chicken", kannada: "ಪೆಪ್ಪರ್ ಚಿಕನ್", price: 60.00 }
];

export default function SunithCloudKitchen() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">☁️ Sunith Cloud Kitchen</h2>
      </div>

      <div style={{padding:'16px'}}>
        <div style={{
          background: 'linear-gradient(135deg, #BFDBFE 0%, #93C5FD 50%, #60A5FA 100%)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '20px',
          textAlign: 'center',
          color: '#1e40af'
        }}>
          <h3 style={{margin: '0 0 8px 0', fontSize: '18px', fontWeight: '900'}}>Fresh & Delicious Non-Veg Specialties</h3>
          <p style={{margin: 0, fontSize: '13px', opacity: 0.9}}>Quality food delivered fresh to your doorstep</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:'16px'}}>
          {MENU_ITEMS.map(item => (
            <ItemCard
              key={item.id}
              id={`sunith-${item.id}`}
              name={item.name}
              kannada={item.kannada}
              price={item.price}
              hotelName="Sunith Cloud Kitchen"
              subsection="Non-Veg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
