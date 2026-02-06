import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import ItemCard from "../components/ItemCard";
import { VB_BAKERY_ITEMS } from "../data/menus/vbBakeryFilter";

export default function VBBakeryFiltered() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if this is the bakery filter by path or categorySlug
  const isBakeryHandler = location.pathname.includes('/filter/bakery') || categorySlug === 'bakery';

  console.log('🔍 VBBakeryFiltered Debug:', {
    categorySlug,
    pathname: location.pathname,
    isBakeryHandler,
    VB_BAKERY_ITEMS_length: VB_BAKERY_ITEMS.length
  });

  // Handle Bakery filter - show all items directly (no sections)
  if (isBakeryHandler) {
    console.log('✅ Bakery filter detected!', { items_count: VB_BAKERY_ITEMS.length });
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

  // For all other filters, use the generic FilteredHotelPage
  return <FilteredHotelPage hotelName="VB Bakery" categorySlug={categorySlug} />;
}
