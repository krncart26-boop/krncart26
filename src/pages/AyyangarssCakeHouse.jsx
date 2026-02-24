import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";

const SECTIONS = [
  { english: 'Puffs', kannada: 'ಪಫ್‌ಗಳು', slug: 'puffs' },
  { english: 'Rolls', kannada: 'ರೋಲ್‌ಗಳು', slug: 'rolls' },
  { english: 'Pizza', kannada: 'ಪಿಜ್ಜಾ', slug: 'pizza' },
  { english: 'Breads / Buns', kannada: 'ಬ್ರೆಡ್‌ಗಳು / ಬನ್‌ಗಳು', slug: 'breads-buns' },
  { english: 'Sweets', kannada: 'ಮಿಠಾಯಿಗಳು', slug: 'sweets' },
];

export default function AyyangarssCakeHouse() {
  const navigate = useNavigate();

  const handleSectionClick = (slug) => {
    navigate(`/ayyangars-cake-house/${slug}`);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
        <h2 style={{ margin: 0 }} className="page-heading">Ayyangars Cake House</h2>
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
