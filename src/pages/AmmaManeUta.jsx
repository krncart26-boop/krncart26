import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { AMMA_MANE_UTA_ITEMS } from "../data/menus/ammaManeUtaMenu";

export default function AmmaManeUta(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Amma Mane Uta</h2>
      </div>

      {/* Notification banner for preparation time */}
      <div className="timing-banner" role="region" aria-label="Preparation time notice">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
        </div>
        <div className="timing-text">
          <div className="timing-title">Food Preparation</div>
          <div className="timing-sub" style={{fontSize:'12px', marginTop:'4px'}}>Food will prepare after your order confirmation, so it will take time of minimum 30 minutes to prepare and deliver the food.</div>
        </div>
      </div>

      {/* Direct items list */}
      <div style={{ padding: '12px' }}>
        {AMMA_MANE_UTA_ITEMS.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {AMMA_MANE_UTA_ITEMS.map((item) => (
              <ItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                kannada={item.kannada}
                price={item.price}
                parcelCharge={item.parcelCharge}
                deliveryCharge={item.deliveryCharge}
              />
            ))}
          </div>
        ) : (
          <div style={{ padding: '20px', textAlign: 'center', marginTop: '20px' }}>
            <p style={{ color: 'var(--muted)' }}>No items available</p>
          </div>
        )}
      </div>
    </div>
  );
}
