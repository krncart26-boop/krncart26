// Keshava Chats — menu page with items (reuses Ice Magic banner style)
import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const ITEMS = [
  ["Masala", "ಮಸಾಲಾ", 40],
  ["Panipuri", "ಪಾನಿಪುರಿ", 40],
  ["Dahi Poori", "ದಹಿ ಪುರಿ", 40],
  ["Samosa Masala", "ಸಮೋಸಾ ಮಸಾಲಾ", 40],
  ["Bhel Poori", "ಬೆಲ್ ಪುರಿ", 40],
  ["Sev Poori", "ಸೇವ್ ಪುರಿ", 40],
  ["Sukha Poori", "ಸುಖಾ ಪುರಿ", 40],
  ["Samosa + Sweet Chutney", "ಸಮೋಸಾ + ಸಿಹಿ ಚಟ್ನಿ", 25],
];

export default function KeshavaChats(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Keshava Chats</h2>
      </div>

      {/* Keshava Chats timing banner - reuse ice-timing-banner for identical style */}
      <div className="ice-timing-banner" role="region" aria-label="Keshava Chats opening hours">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
          <span className="status-dot" />
        </div>

        <div className="timing-text">
          <div className="timing-title">Keshava Chats</div>
          <div className="timing-time">Open from 5:30 PM</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        {ITEMS.length === 0 ? (
          <div style={{padding:12,background:'#fff',borderRadius:12,color:'var(--muted)'}}>Items will be added soon</div>
        ) : (
          <div style={{marginTop:16,display:'flex',flexDirection:'column',gap:12}}>
            {ITEMS.map(it => (
              <ItemCard key={it[0]} id={'keshava-' + it[0].toLowerCase().replace(/\s+/g,'-').replace(/[+]/g,'plus')} name={it[0]} kannada={it[1]} price={it[2]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const hotelId = 'keshava-chats';
export const hotelName = 'Keshava Chats';
export const menu = { 'items': ITEMS };
export const sectionMap = { 'items': { english: 'Chats', kannada: '' } };
export const routePrefix = 'keshava-chats';
