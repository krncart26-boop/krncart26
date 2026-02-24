import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";

const SECTIONS = [
  { english: 'Puffs', kannada: 'ಪಫ್‌ಗಳು', slug: 'puffs' },
  { english: 'Rolls', kannada: 'ರೋಲ್‌ಗಳು', slug: 'rolls' },
  { english: 'Pizza', kannada: 'ಪಿಜ್ಜಾ', slug: 'pizza' },
  { english: 'Breads / Buns', kannada: 'ಬ್ರೆಡ್‌ಗಳು / ಬನ್‌ಗಳು', slug: 'breads-buns' },
  { english: 'Sweets', kannada: 'ಮಿಠಾಯಿಗಳು', slug: 'sweets' },
  { english: 'Biscuits', kannada: 'ಬಿಸ್ಕಟ್‌ಗಳು', slug: 'biscuits' },
];

export default function AyyangarssBakeryFiltered() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const handleSectionClick = (slug) => {
    navigate(`/ayyangars-bakery/${slug}`);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
        <h2 style={{ margin: 0 }} className="page-heading">Ayyangars Bakery</h2>
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
