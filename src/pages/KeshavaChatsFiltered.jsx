import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import ItemCard from "../components/ItemCard";
import { KESHAVA_CHATS_ITEMS } from "../data/menus/keshavaChatsFilter";

export default function KeshavaChatsFiltered() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  // Handle Chats filter - show all items directly (no sections)
  if (categorySlug === 'chats') {
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

  // For all other filters, use the generic FilteredHotelPage
  return <FilteredHotelPage hotelName="Keshava Chats" categorySlug={categorySlug} />;
}
