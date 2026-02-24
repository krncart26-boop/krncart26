// VB Bakery section page: renders items for each section
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";

function prettify(slug){
  return slug.replace(/[-_]/g,' ').replace(/\b\w/g, c => c.toUpperCase());
}

const SECTION_MAP = {
  "bakery-sweets": { english: "BAKERY & SWEETS", kannada: "" },
  "cakes-snacks": { english: "CAKES / SNACKS (WEIGHT-BASED)", kannada: "" },
  "mixtures": { english: "MIXTURES", kannada: "" },
  "cool-drinks": { english: "COOL DRINKS", kannada: "" },
  "chocolates": { english: "CHOCOLATES", kannada: "" },
  "ice-cream": { english: "ICE CREAM", kannada: "" },
};

const DATA = {
  "bakery-sweets": [
    ["Chocolate Cake half", "ಚಾಕ್ಲೇಟ್ ಕೇಕ್", 17.99],
    ["Chocolate Cake full", "ಚಾಕ್ಲೇಟ್ ಕೇಕ್", 22.99],
    ["Hani Cake", "ಹನಿ ಕೇಕ್", 12.99],
    ["Jam Roll Cake", "ಜ್ಯಾಮ್ ರೋಲ್ ಕೇಕ್", 12.99],
    ["Cream Cake", "ಕ್ರೀಮ್ ಕೇಕ್", 17.99],
    ["Dil Pasand (1 pc)", "ದಿಲ್ ಪಸಂದ್", 17.99],
    ["Dil Pasand (Full)", "ದಿಲ್ ಪಸಂದ್", 59.99],
    ["Bread Roast", "ಬ್ರೆಡ್ ರೋಸ್ಟ್", 17.99],
    ["Cream Biscuit", "ಕ್ರೀಮ್ ಬಿಸ್ಕಟ್", 22.99],
    ["Khara Biscuit (100 gm)", "ಕಾರ ಬಿಸ್ಕಟ್", 32.99],
    ["Kobbari Biscuit (100 gm)", "ಕೊಬ್ಬರಿ ಬಿಸ್ಕಟ್", 32.99],
    ["Benne Biscuit (100 gm)", "ಬೆಣ್ಣೆ ಬಿಸ್ಕಟ್", 32.99],
    ["Donut", "ಡೋನಟ್", 22.99],
    ["Bread", "ಬ್ರೆಡ್", 32.99],
    ["Rusk", "ರಸ್ಕ್", 42.99],
    ["Apple Cake", "ಆಪಲ್ ಕೇಕ್", 7.99],
    ["Bun (3 pcs)", "ಬನ್", 12.99],
    ["Puff (Egg)", "ಪಫ್ (ಎಗ್)", 22.99],
    ["Puff (Veg)", "ಪಫ್ (ವೆಜ್)", 22.99],
    ["Puff Full Egg", "ಫುಲ್ ಎಗ್ ಪಫ್", 27.99],
    ["Cream Bun", "ಕ್ರೀಮ್ ಬನ್", 12.99],
    ["Jam Bun", "ಜ್ಯಾಮ್ ಬನ್", 12.99],
    ["Khara Bun", "ಕಾರ ಬನ್", 17.99],
    ["Jamun (2 pcs)", "ಜಾಮೂನ್", 22.99],
    ["Barfi (250 gm)", "ಬರ್ಫಿ", 102.99],
    ["Champakali", "ಚಂಪಕಾಲೀ", 22.22],
    ["Dates Burfi (250 gm)", "ಡೇಟ್ಸ್ ಬರ್ಫಿ", 102.99],
    ["Cream Roll", "ಕ್ರೀಮ್ ರೋಲ್", 17.99],
  ],

  "cakes-snacks": [
    ["Plain Cake (100 gm)", "ಪ್ಲೇನ್ ಕೇಕ್", 32.99],
    ["Plain Cake (250 gm)", "ಪ್ಲೇನ್ ಕೇಕ್", 72.99],
    ["Banana Chips (100 gm)", "ಬಾಳೆಹಣ್ಣು ಚಿಪ್ಸ್", 42.99],
    ["Potato Chips (100 gm)", "ಆಲೂಗಡ್ಡೆ ಚಿಪ್ಸ್", 42.99],
    ["Jamun (2 pcs)", "ಜಾಮೂನ್", 22.99],
    ["Barfi (250 gm)", "ಬರ್ಫಿ", 102.99],
    ["Champakali", "ಚಂಪಕಾಲೀ", 22.22],
    ["Dates Burfi (250 gm)", "ಡೇಟ್ಸ್ ಬರ್ಫಿ", 102.99],
    ["Cream Roll", "ಕ್ರೀಮ್ ರೋಲ್", 17.99],
  ],

  "mixtures": [
    ["Small Khara Mixture (100 gm)", "ಸಣ್ಣ ಖಾರ ಮಿಶ್ರಣ", 32.99],
    ["Medium Khara Mixture (100 gm)", "ಮೀಡಿಯಂ ಖಾರ ಮಿಶ್ರಣ", 32.99],
    ["Dappa Khara Mixture (100 gm)", "ದಪ್ಪ ಖಾರ ಮಿಶ್ರಣ", 32.99],
    ["Small Khara Mixture (250 gm)", "ಸಣ್ಣ ಖಾರ ಮಿಶ್ರಣ", 72.99],
    ["Medium Khara Mixture (250 gm)", "ಮೀಡಿಯಂ ಖಾರ ಮಿಶ್ರಣ", 72.99],
    ["Dappa Khara Mixture (250 gm)", "ದಪ್ಪ ಖಾರ ಮಿಶ್ರಣ", 72.99],
    ["Peanuts (100 gm)", "ಬಟಾಣಿ", 34.55],
    ["Hesarubele (100 gm)", "ಹೆಸರು ಬೇಳೆ", 34.55],
    ["Congress Kadale (100 gm)", "ಕಾಂಗ್ರೆಸ್ ಕಡಲೆ", 34.55],
    ["Mix Kalu (100 gm)", "ಮಿಕ್ಸ್ ಕಾಳು", 34.55],
    ["Kadale Beeja (100 gm)", "ಕಡಲೆ ಬೀಜ", 34.55],
    ["Chakuli (100 gm)", "ಚಕುಲಿ", 34.55],
    ["Kodubale (100 gm)", "ಕೊಡಬಳೆ", 34.55],
    ["Kaddi Chips (100 gm)", "ಕಡ್ಡಿ ಚಿಪ್ಸ್", 34.55],
  ],

  "cool-drinks": [
    ["Mirinda (250 ml)", "ಮಿರಿಂಡಾ", 24.99],
    ["Mirinda (750 ml)", "ಮಿರಿಂಡಾ", 44.99],
    ["Mirinda (2.25 L)", "ಮಿರಿಂಡಾ", 95.99],
    ["7UP (250 ml)", "", 24.99],
    ["7UP (750 ml)", "", 45.99],
    ["7UP (2.25 L)", "", 95.99],
    ["Slice (250 ml)", "ಸ್ಲೈಸ್", 25.99],
    ["Slice (750 ml)", "ಸ್ಲೈಸ್", 45.99],
    ["Slice (2.25 L)", "स್ಲೈಸ್", 95.99],
    ["Puply Orange", "ಪುಪ್ಲಿ ಆರೆಂಜ್", 27.99],
    ["Jeera Bind (200 ml)", "ಜೀರಾ ಬಿಂದ್", 15.99],
    ["Jeera Bind (600 ml)", "ಜೀರಾ ಬಿಂದ್", 40.99],
    ["Jeera Bind (2 L)", "ಜೀರಾ ಬಿಂದ್", 99.99],
    ["Dodla Badam Milk", "ದೊಡ್ಲಾ ಬಾದಾಮ್ ಮಿಲ್ಕ್", 32.99],
    ["Sting (250 ml)", "ಸ್ಟಿಂಗ್", 24.99],
    ["Sipon (125 ml)", "ಸಿಪಾನ್", 12.99],
  ],

  "chocolates": [
    ["Dairy Milk", "ಡೈರಿ ಮಿಲ್ಕ್", 12.99],
    ["Dairy Milk", "ಡೈರಿ ಮಿಲ್ಕ್", 22.99],
    ["Dairy Milk", "ಡೈರಿ ಮಿಲ್ಕ್", 47.99],
    ["Dairy Milk", "ಡೈರಿ ಮಿಲ್ಕ್", 102.99],
  ],

  "ice-cream": [
    ["Dairy Day Cup", "ಡೈರಿ ಡೇ ಕಪ್", 12.99],
    ["Dairy Day Cone", "ಡೈರಿ ಡೇ ಕೋನ್", 12.99],
    ["Dairy Day Cone (Big)", "ಡೈರಿ ಡೇ ಕೋನ್ (ಬಿಗ್)", 22.99],
    ["Chocobar", "ಚಾಕೋಬಾರ್", 12.99],
    ["Goodbad", "ಗುಡ್‌ಬ್ಯಾಡ್", 52.99],
  ],
};

export default function VBBakerySection(){
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  const section = SECTION_MAP[sectionSlug] || { english: prettify(sectionSlug || 'Section') };
  const items = DATA[sectionSlug] || [];

  return (
    <div>
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/vb-bakery')}>← Back</button>

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
