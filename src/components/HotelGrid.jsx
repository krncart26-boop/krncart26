// Grid of hotel circular cards. Clicking navigates to a placeholder hotel page.
import React from "react";
import { useNavigate } from "react-router-dom";

const hotelDatabase = [
  { name: "Udupi Palace", categories: ["Breakfast", "Lunch", "Juices", "Snacks", "Chats", "Ice Cream & Sundaes"] },
  { name: "Ice Magic", categories: ["Juices", "Snacks", "Ice Cream & Sundaes"] },
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
  { name: "Popular Biriyani Palace", categories: ["Lunch", "Evening Food"] },
];

// Color palette for each hotel
const hotelColors = {
  "Udupi Palace": "#6BB6D6",
  "Ice Magic": "#C9B1D0",
  "KRN Restaurant": "#E4B5A0",
  "Shri Tiffany's": "#E8B4C8",
  "Shri Hotel": "#B5E7B8",
  "Rajkumar Panipuri": "#F0E4A8",
  "Gowda Palav Centre": "#E8A8A8",
  "VB Bakery": "#A8D0E8",
  "Sanju Gobi House": "#E8C4B8",
  "Keshava Chats": "#D8B5E8",
  "Tirumala Juice": "#D0E8A8",
  "Ayyangars Bakery": "#E8D0B8",
  "Lakshmi Juice Corner": "#A8E8D8",
  "Gani's Restaurant": "#E0D8B0",
  "ShreeSha cafe": "#E8B8D0",
  "Popular Biriyani Palace": "#E8B8C4",
};

// Get first letter or icon for hotel
function getHotelIcon(hotelName) {
  const icons = {
    "Udupi Palace": "🍛",
    "Ice Magic": "🍦",
    "KRN Restaurant": "🍗",
    "Shri Tiffany's": "☕",
    "Shri Hotel": "🍳",
    "Rajkumar Panipuri": "🫔",
    "Gowda Palav Centre": "🍚",
    "VB Bakery": "🍰",
    "Sanju Gobi House": "🫘",
    "Keshava Chats": "🥘",
    "Tirumala Juice": "🧃",
    "Ayyangars Bakery": "🥖",
    "Lakshmi Juice Corner": "🍹",
    "Gani's Restaurant": "🍲",
    "ShreeSha cafe": "🥤",
    "Popular Biriyani Palace": "🍛",
  };
  return icons[hotelName] || hotelName.charAt(0).toUpperCase();
}

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
    case 'Popular Biriyani Palace': return '/popular-biriyani-palace';
    default: return `/hotel/${encodeURIComponent(hotelName)}`;
  }
}

// Helper to convert category name to slug
function getCategorySlug(category) {
  return category.toLowerCase().replace(/[\s&]/g, '-').replace(/-+/g, '-');
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
    <div className="hotel-grid-new">
      {displayHotels.map((hotel)=>{
        const h = typeof hotel === 'string' ? hotel : hotel.name;
        const bgColor = hotelColors[h] || "#E0E0E0";
        const icon = getHotelIcon(h);
        
        return (
          <div key={h} className="hotel-badge-wrapper">
            <button
              className="hotel-badge"
              style={{ backgroundColor: bgColor }}
              onClick={() => handleHotelClick(h)}
              title={h}
            >
              <span className="hotel-badge-icon">{icon}</span>
            </button>
            <div className="hotel-badge-name">{h}</div>
          </div>
        );
      })}
    </div>
  );
}

export { hotelDatabase };
