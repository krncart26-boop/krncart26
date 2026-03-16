import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { AMERICAN_CUISINE_DATA } from "../data/menus/americanCuisine";

export default function AmericanCuisineFiltered() {
  const navigate = useNavigate();

  // Combine all items from all sections
  const allItems = [];
  Object.values(AMERICAN_CUISINE_DATA).forEach(section => {
    section.forEach(item => {
      allItems.push(item);
    });
  });

  return (<div className="page-container">
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">American Cuisine - Snacks</h2>
      </div>

      <div className="items-grid" style={{marginTop:12}}>
        {allItems.length > 0 ? (
          allItems.map((item, idx) => (
            <ItemCard
              key={idx}
              name={item[0]}
              description={item[1]}
              price={item[2]}
              hotelId="american-cuisine"
            />
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
}

