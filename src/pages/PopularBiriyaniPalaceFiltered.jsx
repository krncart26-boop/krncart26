import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { POPULAR_BIRIYANI_PALACE_LUNCH, POPULAR_BIRIYANI_PALACE_EVENING } from "../data/menus/popularBiriyaniPalace";

export default function PopularBiriyaniPalaceFiltered() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  // Get menu items based on filter
  const menuItems = categorySlug === 'lunch' 
    ? POPULAR_BIRIYANI_PALACE_LUNCH 
    : categorySlug === 'evening-food'
    ? POPULAR_BIRIYANI_PALACE_EVENING
    : POPULAR_BIRIYANI_PALACE_LUNCH; // default to lunch for ALL filter

  const categoryName = categorySlug === 'lunch' 
    ? 'Lunch' 
    : categorySlug === 'evening-food'
    ? 'Evening Food'
    : 'Popular Biriyani Palace';

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
        <h2 style={{ margin: 0 }} className="page-heading">Popular Biriyani Palace - {categoryName}</h2>
      </div>

      {/* Banner with timing notice */}
      <div style={{
        padding: '16px 14px',
        margin: '12px',
        backgroundColor: '#FFF3CD',
        border: '2px solid #FFC107',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p style={{color: '#856404', margin: '4px 0', fontWeight: 600, fontSize: '13px'}}>
          ⚠️ Mutton items available only on:
        </p>
        <p style={{color: '#856404', margin: '4px 0', fontSize: '13px'}}>
          Sunday, Tuesday, Wednesday, Friday
        </p>
        <p style={{color: '#d32f2f', margin: '8px 0', fontWeight: 600, fontSize: '13px'}}>
          🚫 Monday – Hotel Holiday
        </p>
      </div>

      {/* Menu items list */}
      <div className="items-list">
        {menuItems.map(item => (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            kannada={item.kannada}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
