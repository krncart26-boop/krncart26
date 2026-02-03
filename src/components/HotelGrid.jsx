// Grid of hotel circular cards. Clicking navigates to a placeholder hotel page.
import React from "react";
import HotelCard from "./HotelCard";
import { useNavigate } from "react-router-dom";

const hotels = [
  "Udupi Palace",
  "Ice Magic",
  "KRN Restaurant",
  "Shri Tiffany's",
  "Shri Hotel",
  "Rajkumar Panipuri",
  "Gowda Palav Centre",
  "VB Bakery",
  "Sanju Gobi House",
  "Keshava Chats",
  "Tirumala Juice",
  "Ayyangars Bakery",
  "Juice Junction",
  "Gani’s Restaurant",
];

export default function HotelGrid(){
  const navigate = useNavigate();

  return (
    <div className="hotel-grid">
      {hotels.map((h)=> (
        // Navigate to special pages when available
        <HotelCard key={h} name={h} onClick={()=>navigate(
          h === 'Keshava Chats' ? '/keshava-chats' :
          h === 'KRN Restaurant' ? '/krn-restaurant' :
          h === 'Ice Magic' ? '/ice-magic' :
          h === 'Gowda Palav Centre' ? '/gowda-palav-centre' :
          h === "Shri Tiffany's" ? '/shri-tiffanys' :
          h === 'Shri Hotel' ? '/shri-hotel' :
          h === 'Tirumala Juice' ? '/tirumala-juice' :
          h === 'Sanju Gobi House' ? '/sanju-gobi-house' :
          h === 'VB Bakery' ? '/vb-bakery' :
          h === 'Rajkumar Panipuri' ? '/rajkumar' :
          h === 'Gani’s Restaurant' ? '/ganis-restaurant' :
          h === 'Juice Junction' ? '/juice-junction' :
          (h === 'Udupi Hotel' || h === 'Udupi Palace') ? '/udupi-hotel' :
          `/hotel/${encodeURIComponent(h)}`
        )} />
      ))}


    </div>
  );
}
