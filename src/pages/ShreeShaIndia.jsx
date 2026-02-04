// ShreeSha India page: shows list of categories
import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../components/SectionCard";

// Categories in the order specified
const CATEGORIES = [
  { english: "Sandwiches", slug: "sandwiches" },
  { english: "Pasta", slug: "pasta" },
  { english: "Milkshakes", slug: "milkshakes" },
  { english: "Fresh Fruit Juice", slug: "fresh-fruit-juice" },
  { english: "Mojitos", slug: "mojitos" },
  { english: "Corn Special", slug: "corn-special" },
  { english: "Cafe Special", slug: "cafe-special" },
  { english: "Ice Creams", slug: "ice-creams" },
  { english: "Combos Specials", slug: "combos-specials" },
  { english: "Cold Coffee", slug: "cold-coffee" },
];

export default function ShreeShaIndia(){
  const navigate = useNavigate();

  return (
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button className="header-btn" onClick={()=>navigate('/home')}>← Back</button>
        <h2 style={{margin:0}} className="page-heading">ShreeSha India</h2>
      </div>

      <div className="section-list">
        {CATEGORIES.map(cat => (
          <SectionCard
            key={cat.slug}
            english={cat.english}
            kannada=""
            onClick={()=>navigate(`/shreesha-india/${cat.slug}`)}
          />
        ))}
      </div>
    </div>
  );
}
