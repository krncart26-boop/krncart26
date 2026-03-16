import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import ItemCard from "../components/ItemCard";
import { SHRI_HOTEL_BREAKFAST_ITEMS } from "../data/menus/shriHotelBreakfastFilter";

const EVENING_ITEMS = [
  { id: "sh-e-onion-dosa", name: "Onion Dosa", kannada: "ಈರುಳ್ಳಿ ದೋಸೆ", price: 62.99 },
  { id: "sh-e-khali-dosa", name: "Khali Dosa(2)", kannada: "ಖಾಲಿ ದೋಸೆ", price: 39.99 },
  { id: "sh-e-special-khali", name: "Special Khali Dosa", kannada: "ಸ್ಪೆಷಲ್ ಖಾಲಿ ದೋಸೆ", price: 30.99 },
  { id: "sh-e-masala-dosa", name: "Masala Dosa", kannada: "ಮಸಾಲೆ ದೋಸೆ", price: 57.99 },
  { id: "sh-e-set-masala", name: "Set Masala Dosa", kannada: "ಸೆಟ್ ಮಸಾಲೆ ದೋಸೆ", price: 59.99 },
  { id: "sh-e-butter-set", name: "Butter Set Masala", kannada: "ಬೆಣ್ಣೆ ಸೆಟ್ ಮಸಾಲೆ", price: 68.99 },
  { id: "sh-e-butter-masala", name: "Butter Masala", kannada: "ಬೆಣ್ಣೆ ಮಸಾಲೆ", price: 68.99 },
  { id: "sh-e-plain-dosa", name: "Plain Dosa", kannada: "ಪ್ಲೇನ್ ದೋಸೆ", price: 52.99 },
  { id: "sh-e-butter-plain", name: "Butter Plain Dosa", kannada: "ಬೆಣ್ಣೆ ಪ್ಲೇನ್ ದೋಸೆ", price: 62.99 },
  { id: "sh-e-poori", name: "Poori", kannada: "ಪೂರಿ", price: 57.99 },
  { id: "sh-e-shavige-bath", name: "Shavige Bath", kannada: "ಶಾವಿಗೆ ಬಾತ್", price: 52.99 },
  { id: "sh-e-bajji", name: "Bajji", kannada: "ಬಜ್ಜಿ", price: 26.99 },
  { id: "sh-e-rava-idli", name: "Rava Idli", kannada: "ರವೆ ಇಡ್ಲಿ", price: 30.99 },
  { id: "sh-e-bonda-soup", name: "Bonda Soup", kannada: "ಬೋಂಡಾ ಸೂಪ್", price: 32.99 },
  { id: "sh-e-sweet", name: "Sweet", kannada: "ಸಿಹಿ", price: 27.99 },
  { id: "sh-e-curd-vada", name: "Curd Vada", kannada: "ಮೊಸರು ವಡೆ", price: 47.99 },
  { id: "sh-e-tomato-dosa", name: "Tomato Dosa", kannada: "ಟೊಮೋಟೊ ದೋಸೆ", price: 52.99 },
  { id: "sh-e-butter-set-single", name: "Butter Set Masala (Single)", kannada: "ಬೆಣ್ಣೆ ಸೆಟ್ ಮಸಾಲೆ ಸಿಂಗಲ್", price: 37.99 },
  { id: "sh-e-single-set", name: "Single Set Masala", kannada: "ಸಿಂಗಲ್ ಸೆಟ್ ಮಸಾಲೆ", price: 29.99 }
];

export default function ShriHotelFiltered() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current path is breakfast-related
  const isBreakfastHandler = location.pathname.includes('/filter/breakfast') || categorySlug === 'breakfast';

  // Handle Breakfast filter - show all items
  if (isBreakfastHandler) {
    return (<div className="page-container">
        <div style={{position:'relative',padding:'8px 0'}}>
          <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/shri-hotel')}>← Back</button>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h2 style={{margin:0}} className="page-heading">Shri Hotel</h2>
          </div>
        </div>

        <div style={{marginTop:12}}>
          <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:12}}>
            {SHRI_HOTEL_BREAKFAST_ITEMS.map(it => (
              <ItemCard key={it.id} id={it.id} name={it.name} kannada={it.kannada} price={it.price} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Handle Evening Food filter - show all items
  if (categorySlug === 'evening-food') {
    return (<div className="page-container">
        <div style={{position:'relative',padding:'8px 0'}}>
          <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/shri-hotel')}>← Back</button>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h2 style={{margin:0}} className="page-heading">Shri Hotel</h2>
            <div style={{color:'var(--muted)',marginTop:6}}>Evening • 3:15 PM – 7:45 PM</div>
          </div>
        </div>

        <div style={{marginTop:12}}>
          <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:12}}>
            {EVENING_ITEMS.map(it => (
              <ItemCard key={it.id} id={it.id} name={it.name} kannada={it.kannada} price={it.price} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For all other filters, use the generic FilteredHotelPage
  return <FilteredHotelPage hotelName="Shri Hotel" categorySlug={categorySlug} />;
}


