// Keshava Chats Filter Page
// Shows all items directly when user selects Chats filter
import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { KESHAVA_CHATS_ITEMS } from "../data/menus/keshavaChatsFilter";

export default function KeshavaChatsFilterPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
        <h2 style={{ margin: 0 }} className="page-heading">Keshava Chats - Chats</h2>
      </div>

      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {KESHAVA_CHATS_ITEMS.map((item) => {
          const itemId = `keshava-chats-${item.itemName.toLowerCase().replace(/\s+/g, '-').replace(/[+]/g, 'plus')}`;
          return (
            <ItemCard
              key={itemId}
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
