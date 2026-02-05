import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { VB_BAKERY_ITEMS } from "../data/menus/vbBakeryFilter";

export default function VBBakeryFilterPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
        <h2 style={{ margin: 0 }} className="page-heading">VB Bakery - Bakery</h2>
      </div>

      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {VB_BAKERY_ITEMS.map((item, index) => {
          const itemId = `vb-bakery-${item.itemName.toLowerCase().replace(/\s+/g, '-').replace(/[()₹]/g, '')}`;
          return (
            <ItemCard
              key={`${itemId}-${index}`}
              id={itemId}
              name={item.itemName}
              kannada={item.kannadaName}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
