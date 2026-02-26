// A modern promotional card for the Home screen with enhanced design
import React from "react";

export default function HeroCard(){
  return (
    <div className="hero-card" style={{background:'linear-gradient(135deg, #ff6b9d 0%, #ff8fab 50%, #ffc4d6 100%)'}}>
      <div>
        <h3 style={{fontSize:'18px'}}>enjoy the home food! order on AMMA MANE UTA</h3>
        <p style={{fontSize:'14px', fontWeight:'600', marginTop:'8px'}}>
          we care! we deliver!
        </p>
        <p style={{fontSize:'12px', opacity:'0.9', marginTop:'6px'}}>
          Share a special meal with your loved one ✨
        </p>
      </div>
      <p className="hero-subtext">⏰ Open: 7:00 AM - 9:30 PM</p>
    </div>
  );
}
