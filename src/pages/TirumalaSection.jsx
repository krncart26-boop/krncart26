import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";

function prettify(slug){
  return slug.replace(/[-_]/g,' ').replace(/\b\w/g, c => c.toUpperCase());
}

export const SECTION_MAP = {
  'fresh-juice': { english: '🍹 Fresh Juice', kannada: 'ಫ್ರೆಶ್ ಜ್ಯೂಸ್' },
  'lassi': { english: '🥤 Lassi', kannada: 'ಲಸ್ಸಿ' },
  'milk-shakes': { english: '🥛 Milk Shakes', kannada: 'ಮಿಲ್ಕ್ ಶೇಕ್' },
  'special-juice': { english: '🍓 Special Juice', kannada: 'ಸ್ಪೆಷಲ್ ಜ್ಯೂಸ್' },
  'health-juice': { english: '🥗 Health Juice', kannada: 'ಹೆಲ್ತ್ ಜ್ಯೂಸ್' },
};

export const DATA = {
  'fresh-juice': [
    ["Mosambi","ಮೋಸಂಬಿ",34.99],
    ["Rich Mosambi","ರಿಚ್ ಮೋಸಂಬಿ",34.99],
    ["Orange","ಆರೆಂಜ್",24.99],
    ["Rich Orange","ರಿಚ್ ಆರೆಂಜ್",29.99],
    ["Grapes","ದ್ರಾಕ್ಷಿ",34.99],
    ["Rich Grapes","ರಿಚ್ ದ್ರಾಕ್ಷಿ",29.99],
    ["Pineapple","ಪೈನಾಪಲ್",29.99],
    ["Apple","ಆಪಲ್",29.99],
    ["Sweet Lime","ಸ್ವೀಟ್ ಲೈಮ್",29.99],
    ["Butter Fruit","ಬಟರ್ ಫ್ರೂಟ್",24.99],
    ["Mixed Fruit Juice","ಮಿಕ್ಸ್ ಫ್ರೂಟ್ ಜ್ಯೂಸ್",39.99],
    ["Custard Apple Juice","ಸೀತಾಫಲ ಜ್ಯೂಸ್",29.99],
  ],

  'lassi': [
    ["Sweet Lassi","ಸ್ವೀಟ್ ಲಸ್ಸಿ",34.99],
    ["Salt Lassi","ಸಾಲ್ಟ್ ಲಸ್ಸಿ",34.99],
    ["Fruit Lassi","ಫ್ರೂಟ್ ಲಸ್ಸಿ",44.99],
    ["Badam Lassi","ಬಾದಾಮ್ ಲಸ್ಸಿ",44.99],
    ["Mango Lassi","ಮಾವಿನ ಲಸ್ಸಿ",44.99],
  ],

  'milk-shakes': [
    ["Vanilla Milk Shake","ವೆನಿಲ್ಲಾ ಮಿಲ್ಕ್ ಶೇಕ್",54.99],
    ["Strawberry Milk Shake","ಸ್ಟ್ರಾಬೆರಿ ಮಿಲ್ಕ್ ಶೇಕ್",54.99],
    ["Chocolate Milk Shake","ಚಾಕ್ಲೇಟ್ ಮಿಲ್ಕ್ ಶೇಕ್",54.99],
    ["Butter Scotch Milk Shake","ಬಟರ್ ಸ್ಕಾಚ್ ಮಿಲ್ಕ್ ಶೇಕ್",54.99],
    ["Dry Fruit Milk Shake","ಡ್ರೈ ಫ್ರೂಟ್ ಮಿಲ್ಕ್ ಶેક",54.99],
  ],

  'special-juice': [
    ["Apple Juice","ಆಪಲ್ ಜ್ಯೂಸ್",44.99],
    ["Pomegranate","ದಾಳಿಂಬೆ",54.99],
    ["Beetroot","ಬೀಟ್‌ರೂಟ್",59.99],
    ["Carrot","ಕ್ಯಾರೆಟ್",54.99],
    ["Dates Shake","ಖರ್ಜೂರ ಶೇಕ್",54.99],
  ],

  'health-juice': [
    ["ABC (Apple + Beetroot + Carrot)","ಎಬಿಸಿ (ಆಪಲ್ + ಬೀಟ್‌ರೂಟ್ + ಕ್ಯಾರೆಟ್)",64.99],
  ],
};

export default function TirumalaSection(){
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  const section = SECTION_MAP[sectionSlug] || { english: prettify(sectionSlug || 'Section') };
  const items = DATA[sectionSlug] || [];

  return (<div className="page-container">
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/tirumala-juice')}>← Back</button>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">{section.english}</h2>
          <div style={{color:'var(--muted)',marginTop:6}}>{section.kannada}</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        {items.length === 0 ? (
          <div style={{padding:12,background:'#fff',borderRadius:12,color:'var(--muted)'}}>Items will be added soon</div>
        ) : (
          <div style={{marginTop:16,display:'flex',flexDirection:'column',gap:12}}>
            {items.map(it => (
              <ItemCard key={it[0]} id={sectionSlug + '-' + it[0].toLowerCase().replace(/\s+/g,'-')} name={it[0]} kannada={it[1]} price={it[2]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

