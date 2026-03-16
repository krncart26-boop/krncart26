// Section menu page: lists items for the requested KRN Restaurant section
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";

// Sections metadata
const SECTION_MAP = {
  "veg-starters": { english: "Veg Starters", kannada: "ಶಾಕಾಹಾರಿ ಸ್ಟಾರ್ಟರ್ಸ್" },
  "chicken-starters": { english: "Chicken Starters", kannada: "ಚಿಕನ್ ಸ್ಟಾರ್ಟರ್ಸ್" },
  "soup-starters": { english: "Soup Starters", kannada: "ಸೂಪ್ ಸ್ಟಾರ್ಟರ್ಸ್" },
  "salad-special": { english: "Salad Special", kannada: "ಸಲಾಡ್ ವಿಶೇಷ" },
  "naty-style": { english: "Naty Style", kannada: "ನಾಡಿ ಶೈಲಿ" },
  "krn-rice-bowls": { english: "KRN Rice Bowls", kannada: "ಕೆಆರ್‌ಎನ್ ರೈಸ್ ಬೌಲ್ಸ್" },
  "breads": { english: "Add On's (Breads)", kannada: "ರೊಟ್ಟಿ / ಬ್ರೆಡ್ಸ್" },
  "krn-mutton-special": { english: "KRN Mutton Special", kannada: "ಕೆಆರ್‌ಎನ್ ಮಟನ್ ವಿಶೇಷ" },
  "indian-gravies": { english: "Indian Gravies", kannada: "ಭಾರತೀಯ ಗ್ರೇವಿಗಳು" },
};

// Items dataset for each section (english, kannada, price)
const DATA = {
  "veg-starters": [
    ["French Fries","ಫ್ರೆಂಚ್ ಫ್ರೈಸ್",118.90],
    ["Paneer Pakoda","ಪನೀರ್ ಪಕೋಡಾ",164.90],
    ["Onion Bajji","ಈರುಳ್ಳಿ ಬಜ್ಜಿ",98.90],
    ["Mushroom Fried Pakoda","ಅಣಬೆ ಫ್ರೈಡ್ ಪಕೋಡಾ",154.90],
    ["Paneer Manchurian","ಪನೀರ್ ಮಂಚೂರಿಯನ್",174.90],
    ["Mushroom Chilli","ಅಣಬೆ ಚಿಲ್ಲಿ",154.90],
    ["Mushroom Manchurian","ಅಣಬೆ ಮಂಚೂರಿಯನ್",144.90],
    ["Honey Chilli Potato","ಹನಿ ಚಿಲ್ಲಿ ಆಲೂಗಡ್ಡೆ",164.90],
    ["Peri Peri Fries","ಪೇರಿ ಪೇರಿ ಫ್ರೈಸ್",134.90],
  ],

  "chicken-starters": [
    ["Chilli Chicken","ಚಿಲ್ಲಿ ಚಿಕನ್",179.90],
    ["Lemon Chicken","ಲೆಮನ್ ಚಿಕನ್",179.90],
    ["Chicken Manchurian","ಚಿಕನ್ ಮಂಚೂರಿಯನ್",179.90],
    ["Chicken Pepper Dry (8 Pcs)","ಚಿಕನ್ ಪೆಪ್ಪರ್ ಡ್ರೈ (8 ಪೀಸ್)",184.90],
    ["Chicken Lollipop (6 Pcs)","ಚಿಕನ್ ಲಾಲಿಪಾಪ್ (6 ಪೀಸ್)",169.90],
    ["Chicken Pepper Dry","ಚಿಕನ್ ಪೆಪ್ಪರ್ ಡ್ರೈ",174.90],
    ["Dragon Chicken","ಡ್ರಾಗನ್ ಚಿಕನ್",179.90],
    ["Chicken Kabab (6 Pcs)","ಚಿಕನ್ ಕಬಾಬ್ (6 ಪೀಸ್)",129.90],
    ["Guntur Chicken","ಗುಂಟೂರು ಚಿಕನ್",174.90],
    ["Egg Chilli","ಎಗ್ ಚಿಲ್ಲಿ",129.90],
    ["Egg Manchurian","ಎಗ್ ಮಂಚೂರಿಯನ್",139.90],
    ["Boiled Egg","ಉಡಿಸಿದ ಮೊಟ್ಟೆ",34.90],
    ["Masala Omelette","ಮಸಾಲಾ ಆಮ್ಲೆಟ್",54.90],
    ["Egg Burji","ಎಗ್ ಭುರ್ಜಿ",54.90],
    ["Chatpata Chicken Wings","ಚಾಟ್‌ಪಟಾ ಚಿಕನ್ ವಿಂಗ್ಸ್",154.90],
    ["Chicken 65","ಚಿಕನ್ 65",189.90],
    ["French Chicken","ಫ್ರೆಂಚ್ ಚಿಕನ್",219.90],
  ],

  "soup-starters": [
    ["Veg Hot N Sour","ವೆಜ್ ಹಾಟ್ ಅಂಡ್ ಸವರ್ ಸೂಪ್",79.90],
    ["Cream of Tomato","ಕ್ರೀಮ್ ಆಫ್ ಟೊಮೇಟೊ ಸೂಪ್",89.90],
    ["Chicken Lemon Coriander","ಚಿಕನ್ ಲೆಮನ್ ಕೊತ್ತಂಬರಿ ಸೂಪ್",134.90],
    ["Cream of Chicken","ಕ್ರೀಮ್ ಆಫ್ ಚಿಕನ್ ಸೂಪ್",134.90],
  ],

  "salad-special": [
    ["Green Salad","ಹಸಿರು ಸಲಾಡ್",79.90],
  ],

  "naty-style": [
    ["Chicken Biryani","ಚಿಕನ್ ಬಿರಿಯಾನಿ",159.90],
    ["Chicken Dum Biryani","ಚಿಕನ್ ದಮ್ ಬಿರಿಯಾನಿ",169.90],
    ["Mutton Biryani","ಮಟನ್ ಬಿರಿಯಾನಿ",269.90],
    ["Chicken Kabab Biryani","ಚಿಕನ್ ಕಬಾಬ್ ಬಿರಿಯಾನಿ",199.90],
    ["Chicken Lollipop Biryani","ಚಿಕನ್ ಲಾಲಿಪಾಪ್ ಬಿರಿಯಾನಿ",219.90],
    ["Egg Biryani","ಎಗ್ ಬಿರಿಯಾನಿ",149.90],
    ["Biryani Rice","ಬಿರಿಯಾನಿ ರೈಸ್",94.90],
    ["Naty Chilli Chicken","ನಾಟಿ ಚಿಲ್ಲಿ ಚಿಕನ್",199.90],
    ["Malnad Pepper Chicken","ಮಲೆನಾಡು ಪೆಪ್ಪರ್ ಚಿಕನ್",209.90],
    ["K.R.N. Mutton Fry","ಕೆ.ಆರ್.ಎನ್ ಮಟನ್ ಫ್ರೈ",294.90],
    ["Mutton Pepper Dry","ಮಟನ್ ಪೆಪ್ಪರ್ ಡ್ರೈ",299.90],
    ["Naty Mutton Fry","ನಾಟಿ ಮಟನ್ ಫ್ರೈ",299.90],
    ["Boti Fry","ಬೋಟಿ ಫ್ರೈ",189.90],
    ["Boti Gojju","ಬೋಟಿ ಗೊಜ್ಜು",194.90],
    ["Mutton Chops","ಮಟನ್ ಚಾಪ್ಸ್",259.90],
  ],

  "krn-rice-bowls": [
    ["Veg Biryani","ವೆಜ್ ಬಿರಿಯಾನಿ",149.90],
    ["Veg Pulao","ವೆಜ್ ಪುಲಾವ್",139.90],
    ["Jeera Rice","ಜೀರೆ ಅನ್ನ",129.90],
    ["Ghee Rice","ತುಪ್ಪ ಅನ್ನ",144.90],
    ["Lemon Rice","ನಿಂಬೆ ಅನ್ನ",98.90],
    ["Tomato Rice","ಟೊಮೇಟೊ ಅನ್ನ",98.90],
    ["Paneer Biryani","ಪನೀರ್ ಬಿರಿಯಾನಿ",154.90],
    ["Mushroom Biryani","ಅಣಬೆ ಬಿರಿಯಾನಿ",154.90],
    ["Dal Khichadi","ದಾಲ್ ಖಿಚಡಿ",149.90],
    ["Dal Palak Khichadi","ದಾಲ್ ಪಾಲಕ್ ಖಿಚಡಿ",144.90],
    ["Curd Rice","ಮೊಸರು ಅನ್ನ",76.90],
  ],

  "breads": [
    ["Tandoori Roti","ತಂದೂರಿ ರೋಟಿ",39.90],
    ["Butter Roti (Single Pcs)","ಬಟರ್ ರೋಟಿ (ಒಂದು ಪೀಸ್)",49.90],
    ["Chapathi (Single Pcs)","ಚಪಾತಿ (ಒಂದು ಪೀಸ್)",29.90],
    ["Butter Phulka (Single Pcs)","ಬಟರ್ ಫುಲ್ಕಾ (ಒಂದು ಪೀಸ್)",34.90],
    ["Phulka (Single)","ಫುಲ್ಕಾ (ಒಂದು ಪೀಸ್)",24.90],
    ["Lacha Paratha","ಲಚ್ಚಾ ಪರೋಟಾ",59.90],
    ["Butter Naan","ಬಟರ್ ನಾನ್",64.90],
    ["Curd","ಮೊಸರು",19.90],
    ["Butter Kulcha","ಬಟರ್ ಕುಲ್ಚಾ",44.90],
    ["Water","ನೀರು",29.90],
    ["Parota","ಪರೋಟಾ",34.90],
    ["Cylon Pups","ಸೈಲಾನ್ ಪಪ್ಸ್",49.90],
    ["Pups","ಪಪ್ಸ್",59.90],
  ],

  "krn-mutton-special": [
    ["Mutton Masala","ಮಟನ್ ಮಸಾಲಾ",294.90],
    ["Mutton Rogan Josh","ಮಟನ್ ರೋಗನ್ ಜೋಷ್",299.90],
    ["Mutton Kadai","ಮಟನ್ ಕಡಾಯಿ",304.90],
    ["Mutton Kolhapuri","ಮಟನ್ ಕೊಲ್ಹಾಪುರಿ",304.90],
    ["Mutton Hyderabadi","ಮಟನ್ ಹೈದರಾಬಾದಿ",304.90],
  ],

  "indian-gravies": [
    ["Iconic Paneer Butter Masala","ಐಕಾನಿಕ್ ಪನೀರ್ ಬಟರ್ ಮಸಾಲಾ",174.90],
    ["Mix Veg Masala","ಮಿಕ್ಸ್ ವೆಜ್ ಮಸಾಲಾ",164.90],
    ["Dal Fry","ದಾಲ್ ಫ್ರೈ",149.90],
    ["Dal Tadka","ದಾಲ್ ತಡ್ಕಾ",129.90],
    ["Mushroom Masala","ಅಣಬೆ ಮಸಾಲಾ",149.90],
    ["Veg Kadai","ವೆಜ್ ಕಡಾಯಿ",164.90],
    ["Paneer Do Pyaza","ಪನೀರ್ ದೋ ಪ್ಯಾಜಾ",174.90],
    ["Classic Butter Chicken Masala","ಕ್ಲಾಸಿಕ್ ಬಟರ್ ಚಿಕನ್ ಮಸಾಲಾ",184.90],
    ["Chicken Sukka","ಚಿಕನ್ ಸುಕ್ಕಾ",184.90],
    ["Chicken Ghee Roast","ಚಿಕನ್ ತುಪ್ಪ ರೋಸ್ಟ್",184.90],
    ["Egg Masala","ಎಗ್ ಮಸಾಲಾ",134.90],
    ["Chicken Do Pyaza","ಚಿಕನ್ ದೋ ಪ್ಯಾಜಾ",189.90],
    ["Chicken Tikka Masala","ಚಿಕನ್ ಟಿಕ್ಕಾ ಮಸಾಲಾ",199.90],
    ["Egg Mughlai","ಎಗ್ ಮುಘ್ಲಾಯಿ",119.90],
    ["Mutter Paneer Masala","ಮಟರ್ ಪನೀರ್ ಮಸಾಲಾ",169.90],
  ],
};

export default function SectionPlaceholder(){
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  const section = SECTION_MAP[sectionSlug];
  const items = DATA[sectionSlug] || [];

  if(!section){
    return (<div className="page-container">
        <button className="header-btn" onClick={()=>navigate('/krn-restaurant')}>← Back</button>
        <h2 className="page-heading">Section not found</h2>
        <p>Unknown section. Please go back.</p>
      </div>
    );
  }

  return (<div className="page-container">
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/krn-restaurant')}>← Back</button>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">{section.english}</h2>
          <div style={{color:'var(--muted)',marginTop:6}}>{section.kannada}</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        <div style={{marginTop:16,display:'flex',flexDirection:'column',gap:12}}>
          {items.length === 0 ? (
            <div style={{padding:12,background:'#fff',borderRadius:12}}>No items yet</div>
          ) : (
            items.map(it => (
              <ItemCard key={it[0]} id={sectionSlug + '-' + it[0].toLowerCase().replace(/\s+/g,'-')} name={it[0]} kannada={it[1]} price={it[2]} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

