import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const ITEMS = [
  { id: 'gp-lunch-chicken-palav-full', name: 'Chicken Palav (Full)', kannada: 'ಚಿಕನ್ ಪುಲಾವ್', price: 139.99 },
  { id: 'gp-lunch-chicken-palav-half', name: 'Chicken Palav (Half)', kannada: 'ಚಿಕನ್ ಪುಲಾವ್', price: 89.99 },
  { id: 'gp-lunch-mutton-pulav-full', name: 'Mutton Pulav (Full)', kannada: 'ಮಟನ್ ಪುಲಾವ್', price: 239.99 },
  { id: 'gp-lunch-mutton-pulav-half', name: 'Mutton Pulav (Half)', kannada: 'ಮಟನ್ ಪುಲಾವ್', price: 139.99 },
  { id: 'gp-lunch-pulav-rice-egg', name: 'Pulav Rice + Egg', kannada: 'ಪುಲಾವ್ ರೈಸ್ + ಮೊಟ್ಟೆ', price: 74.99 },
  { id: 'gp-lunch-chicken-kabab-full', name: 'Chicken Kabab full', kannada: 'ಚಿಕನ್ (ಕಬಾಬ್)', price: 139.99 },
  { id: 'gp-lunch-chicken-kabab-full', name: 'Chicken chops full', kannada: 'ಚಿಕನ್ (ಚಾಪ್ಸ್)', price: 139.99 },
  { id: 'gp-lunch-chicken-kabab-half', name: 'Chicken Kabab (Half)', kannada: 'ಚಿಕನ್ (ಕಬಾಬ್)', price: 99.99 },
  { id: 'gp-lunch-chicken-kabab-half', name: 'Chicken chops (Half)', kannada: 'ಚಿಕನ್ (ಚಾಪ್ಸ್)', price: 99.99 },
  { id: 'gp-lunch-chicken-leg', name: 'Chicken Leg Piece', kannada: 'ಚಿಕನ್ (ಲೆಗ್ ಪೀಸ್)', price: 89.99 },
  { id: 'gp-lunch-chicken-lollipop-full', name: 'Chicken Lollipop  (Full)', kannada: 'ಚಿಕನ್ (ಲಾಲಿಪಾಪ್)', price: 139.99 },
  { id: 'gp-lunch-chicken-liver-full', name: 'Chicken Liver  (Full)', kannada: 'ಚಿಕನ್ (ಲಿವರ್)', price: 139.99 },
  { id: 'gp-lunch-chicken-lollipop-half', name: 'Chicken Lollipop  (Half)', kannada: 'ಚಿಕನ್ (ಲಾಲಿಪಾಪ್ )', price: 99.99 },
  { id: 'gp-lunch-chicken-liver-half', name: 'Chicken Liver  (Half)', kannada: 'ಚಿಕನ್ (ಲಿವರ್)', price: 99.99 },
  { id: 'gp-lunch-kal-soup', name: 'Kal Soup (1 Cup)', kannada: 'ಕಾಲು ಸೂಪ್ (1 ಕಪ್)', price: 129.99 },
  { id: 'gp-lunch-boti-full', name: 'Boti (Full)', kannada: 'ಬೋಟಿ', price: 149.99 },
  { id: 'gp-lunch-boti-half', name: 'Boti (Half)', kannada: 'ಬೋಟಿ', price: 99.99 },
  { id: 'gp-lunch-mutton-keema-full', name: 'Mutton Keema (Full)', kannada: 'ಮಟನ್ ಕೀಮಾ', price: 159.99 },
  { id: 'gp-lunch-mutton-keema-half', name: 'Mutton Keema (Half)', kannada: 'ಮಟನ್ ಕೀಮಾ', price: 89.99 },
  { id: 'gp-lunch-thale-mamsa-full', name: 'Thale Mamsa (Full)', kannada: 'ತಲೆ ಮಾಂಸ', price: 149.99 },
  { id: 'gp-lunch-thale-mamsa-half', name: 'Thale Mamsa (Half)', kannada: 'ತಲೆ ಮಾಂಸ', price: 99.99 },
  { id: 'gp-lunch-keema-fry-full', name: 'Keema Fry (Full)', kannada: 'ಕೀಮಾ ಫ್ರೈ', price: 209.99 },
  { id: 'gp-lunch-keema-fry-half', name: 'Keema Fry (Half)', kannada: 'ಕೀಮಾ ಫ್ರೈ', price: 109.99 },
  { id: 'gp-lunch-nati-koli-full', name: 'Nati Koli Palav (Full)', kannada: 'ನಾಟಿ ಕೋಳಿ ಪುಲಾವ್', price: 159.99 },
  { id: 'gp-lunch-nati-koli-half', name: 'Nati Koli Palav (Half)', kannada: 'ನಾಟಿ ಕೋಳಿ ಪುಲಾವ್', price: 99.99 },
];


export default function GowdaPalavCentre(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Gowda Palav Centre</h2>
      </div>

      {/* Unified blue banner with hours and closure info */}
      <div className="gowda-unified-banner" role="region" aria-label="Gowda Palav Centre hours and notice">
        <div className="timing-icon" aria-hidden="true">
          <span className="clock-emoji">⏰</span>
        </div>
        <div className="timing-text">
          <div className="timing-title">Gowda Palav Centre</div>
          <div className="timing-sub" style={{fontSize:'12px', marginTop:'4px'}}>12:00 PM – 5:00 PM</div>
          <div className="timing-sub" style={{fontSize:'12px', marginTop:'2px'}}>Closed on Mondays</div>
        </div>
      </div>

      <div className="menu">
        {ITEMS.map(item => (
          <div key={item.id}>
            {item.id === 'nati-koli-pulav-full' && (
              <div className="special-note" role="note">
                <span className="info-icon" aria-hidden="true">ℹ️</span>
                Available only on Tuesdays & Fridays
              </div>
            )}

            <ItemCard id={item.id} name={item.name} kannada={item.kannada} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
}
