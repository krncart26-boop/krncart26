// Grid of hotel circular cards. Clicking navigates to a placeholder hotel page.
import React from "react";
import HotelCard from "./HotelCard";
import { useNavigate } from "react-router-dom";

const hotelDatabase = [
  { name: "Udupi Palace", categories: ["Breakfast", "Lunch", "Juices", "Snacks", "Chats"] },
  { name: "Ice Magic", categories: ["Juices", "Snacks"] },
  { name: "KRN Restaurant", categories: ["Lunch", "Evening Food", "Snacks"] },
  { name: "Shri Tiffany's", categories: ["Breakfast", "Evening Food"] },
  { name: "Shri Hotel", categories: ["Breakfast", "Evening Food"] },
  { name: "Rajkumar Panipuri", categories: ["Chats"] },
  { name: "Gowda Palav Centre", categories: ["Lunch"] },
  { name: "VB Bakery", categories: ["Bakery"] },
  { name: "Sanju Gobi House", categories: ["Chats"] },
  { name: "Keshava Chats", categories: ["Chats"] },
  { name: "Tirumala Juice", categories: ["Juices"] },
  { name: "Ayyangars Bakery", categories: ["Bakery"] },
  { name: "Lakshmi Juice Corner", categories: ["Juices"] },
  { name: "Gani's Restaurant", categories: ["Lunch"] },
  { name: "ShreeSha cafe", categories: ["Juices", "Snacks"] },
];

// Helper to convert hotel name to route slug
function getHotelRoute(hotelName) {
  switch(hotelName) {
    case 'Keshava Chats': return '/keshava-chats';
    case 'KRN Restaurant': return '/krn-restaurant';
    case 'Ice Magic': return '/ice-magic';
    case 'Gowda Palav Centre': return '/gowda-palav-centre';
    case "Shri Tiffany's": return '/shri-tiffanys';
    case 'Shri Hotel': return '/shri-hotel';
    case 'Tirumala Juice': return '/tirumala-juice';
    case 'Sanju Gobi House': return '/sanju-gobi-house';
    case 'VB Bakery': return '/vb-bakery';
    case 'Rajkumar Panipuri': return '/rajkumar';
    case "Gani's Restaurant": return '/ganis-restaurant';
    case 'ShreeSha India': return '/shreesha-india';
    case 'ShreeSha cafe': return '/shreesha-cafe';
    case 'Lakshmi Juice Corner': return '/juice-junction';
    case 'Udupi Hotel':
    case 'Udupi Palace': return '/udupi-hotel';
    case 'Ayyangars Bakery': return '/ayyangars-bakery';
    default: return `/hotel/${encodeURIComponent(hotelName)}`;
  }
}

// Helper to convert category name to slug
function getCategorySlug(category) {
  return category.toLowerCase().replace(/\s+/g, '-');
}

export default function HotelGrid({ hotels, activeFilter = 'All' }){
  const navigate = useNavigate();
  const displayHotels = hotels || hotelDatabase;

  const handleHotelClick = (hotelName) => {
    const baseRoute = getHotelRoute(hotelName);
    
    // Ayyangars Bakery always shows filtered page with coming soon banner
    if (hotelName === 'Ayyangars Bakery') {
      navigate(`${baseRoute}/filter/bakery`);
      return;
    }
    
    // If "All" filter is active, navigate to the full hotel menu
    if (activeFilter === 'All') {
      navigate(baseRoute);
    } else {
      // If a category filter is active, navigate to the filtered page
      const categorySlug = getCategorySlug(activeFilter);
      navigate(`${baseRoute}/filter/${categorySlug}`);
    }
  };

  return (
    <div className="hotel-grid">
      {displayHotels.map((hotel)=>{
        const h = typeof hotel === 'string' ? hotel : hotel.name;
        return (
          <HotelCard key={h} name={h} onClick={() => handleHotelClick(h)} />
        );
      })}
    </div>
  );
}

export { hotelDatabase };
