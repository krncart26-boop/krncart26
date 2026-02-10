// Gani's Restaurant — ALL filter with subsections
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";

const SECTIONS = [
  { english: "Chicken Starters", kannada: "ಚಿಕನ್ ಸ್ಟಾರ್ಟರ್ಸ್", slug: "chicken-starters" },
  { english: "Chicken Specials", kannada: "ಚಿಕನ್ ವಿಶೇಷ", slug: "chicken-specials" },
  { english: "Combo Meals", kannada: "ಕಾಂಬೋ ಮೀಲ್ಸ್", slug: "combo-meals" },
  { english: "Palav Rice Items", kannada: "ಪಲಾವ್ ಅನ್ನ ವಸ್ತುಗಳು", slug: "palav-rice-items" },
  { english: "Veg Starters", kannada: "ಶಾಕಾಹಾರಿ ಸ್ಟಾರ್ಟರ್ಸ್", slug: "veg-starters" },
  { english: "Veg Rice Items", kannada: "ವೆಜ್ ರೈಸ್ ವಸ್ತುಗಳು", slug: "veg-rice-items" },
];

export default function GanisRestaurant(){
  const navigate = useNavigate();

  const handleSectionClick = (slug) => {
    navigate(`/ganis-restaurant/filter/all/${slug}`);
  };

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">Gani's Restaurant</h2>
      </div>

      <div className="section-list">
        {SECTIONS.map(s => (
          <SectionCard
            key={s.slug}
            english={s.english}
            kannada={s.kannada}
            onClick={() => handleSectionClick(s.slug)}
          />
        ))}
      </div>
    </div>
  );
}
