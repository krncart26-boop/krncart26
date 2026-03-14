import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { AYYANGARS_CAKE_HOUSE_SECTION_MAP, AYYANGARS_CAKE_HOUSE_DATA } from "../data/menus/ayyangarssCakeHouse";

function prettify(slug) {
  return slug.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function AyyangarssCakeHouseSection() {
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  const section = AYYANGARS_CAKE_HOUSE_SECTION_MAP[sectionSlug] || { english: prettify(sectionSlug || 'Section') };
  const items = AYYANGARS_CAKE_HOUSE_DATA[sectionSlug] || [];

  return (
    <div>
      <div style={{ position: 'relative', padding: '8px 0' }}>
        <button className="header-btn" style={{ position: 'absolute', left: 0, top: 6 }} onClick={() => navigate('/ayyangars-cake-house')}>← Back</button>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }} className="page-heading">{section.english}</h2>
          <div style={{ color: 'var(--muted)', marginTop: 6 }}>{section.kannada}</div>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        {items.length === 0 ? (
          <div style={{ padding: 12, background: '#fff', borderRadius: 12, color: 'var(--muted)' }}>Items will be added soon</div>
        ) : (
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {items.map(it => (
              <ItemCard key={it.id} id={it.id} name={it.name} kannada={it.kannada} price={it.price} parcelCharge={it.parcelCharge} subsection={section.english} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
