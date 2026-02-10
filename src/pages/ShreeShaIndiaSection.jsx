// ShreeSha India section page: lists items for the requested section
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";

// Section metadata
const SECTION_MAP = {
  "sandwiches": { english: "Sandwiches" },
  "pasta": { english: "Pasta" },
  "milkshakes": { english: "Milkshakes" },
  "fresh-fruit-juice": { english: "Fresh Fruit Juice" },
  "mojitos": { english: "Mojitos" },
  "corn-special": { english: "Corn Special" },
  "cafe-special": { english: "Cafe Special" },
  "ice-creams": { english: "Ice Creams" },
  "combos-specials": { english: "Combos Specials" },
  "cold-coffee": { english: "Cold Coffee" },
};

// Items dataset for each section (english, kannada, price)
const DATA = {
  "sandwiches": [
    ["Veg Sandwich / Burger", "", 61],
    ["Veg Cheese Sandwich / Burger", "", 71],
    ["Corn Sandwich / Burger", "", 61],
    ["Cheese Corn Sandwich / Burger", "", 71],
  ],

  "pasta": [
    ["Veg Maggi", "", 51],
    ["Veg Cheese Maggi / Pasta", "", 61],
    ["Corn Maggi", "", 51],
    ["Cheese Corn Maggi / Pasta", "", 61],
  ],

  "milkshakes": [
    ["Chikko Milk Shake", "", 71],
    ["Pomegranate Milk Shake", "", 71],
    ["Chocolate Milk Shake", "", 71],
    ["Apple Milk Shake", "", 71],
    ["Cold Boost", "", 71],
    ["Mango Milk Shake", "", 71],
    ["Strawberry Milk Shake", "", 71],
    ["Oreo Milk Shake", "", 81],
    ["Kit Kat Milk Shake", "", 81],
    ["Butterscotch Milk Shake", "", 81],
  ],

  "fresh-fruit-juice": [
    ["Lemon Juice", "", 22],
    ["Watermelon Juice", "", 27],
    ["Mosambi Juice", "", 31],
    ["Pineapple Juice", "", 41],
    ["Chikko Juice", "", 41],
    ["Muskmelon Juice", "", 41],
    ["Apple Juice", "", 51],
    ["Pomegranate Juice", "", 51],
    ["Orange Juice", "", 41],
  ],

  "mojitos": [
    ["Blue Lime", "", 51],
    ["Watermelon", "", 51],
    ["Pineapple", "", 51],
    ["Pomegranate", "", 61],
    ["Kacha Mango", "", 61],
    ["Pulse", "", 61],
    ["Chill Mango", "", 61],
  ],

  "corn-special": [
    ["Lemon & Chilli Tandoori Corn", "", 51],
    ["Chat Masala Tandoori Corn", "", 51],
    ["Peri Peri Tandoori Corn", "", 51],
    ["Peri Peri Sweet Corn Masala - Small", "", 41],
    ["Peri Peri Sweet Corn Masala - Large", "", 51],
    ["Chat Masala Sweet Corn Masala - Small", "", 41],
    ["Chat Masala Sweet Corn Masala - Large", "", 51],
    ["Lemon & Chilli Sweet Corn Masala - Small", "", 41],
    ["Lemon & Chilli Sweet Corn Masala - Large", "", 51],
    ["Peri Peri Crispy Corn", "", 51],
    ["Chat Masala Crispy Corn", "", 51],
    ["Cheese Sauce Crispy Corn", "", 51],
    ["Small Corn Pakoda (5 pcs)", "", 51],
    ["Medium Corn Pakoda (7 pcs)", "", 61],
    ["Large Corn Pakoda (10 pcs)", "", 71],
    ["Peri Peri Corn Bhel", "", 51],
    ["Chat Masala Corn Bhel", "", 51],
    ["Lemon & Chilli Corn Bhel", "", 51],
  ],

  "cafe-special": [
    ["Peri Peri Fries - Half", "", 51],
    ["Peri Peri Fries - Full", "", 81],
    ["Salted Fries - Half", "", 51],
    ["Salted Fries - Full", "", 81],
    ["Masala Fries - Half", "", 51],
    ["Masala Fries - Full", "", 81],
    ["Veg Roll (2)", "", 61],
    ["Cheese Veg Roll (2)", "", 51],
    ["Crispy Paneer Roll", "", 61],
    ["Corn Cheese Nuggets", "", 71],
    ["Corn Cheese Momos", "", 81],
    ["Veg Cutlet (2)", "", 61],
    ["Peri Peri PVR Popcorn", "", 32],
    ["Mexican Cheese PVR Popcorn", "", 32],
    ["Salted PVR Popcorn", "", 32],
  ],

  "combos-specials": [
    ["Sandwich & Burger + Any Fresh Juice", "", 151],
    ["French Fries + Sandwich + Ice Cream Scoop", "", 151],
    ["Sandwich & Burger + Corn Pakoda (5 pcs)", "", 151],
  ],

  "cold-coffee": [
    ["Vanilla Cold Coffee", "", 77],
    ["Butterscotch Cold Coffee", "", 81],
    ["Classic Cold Coffee", "", 81],
    ["Continental Cold Coffee", "", 81],
  ],
};

export default function ShreeShaIndiaSection(){
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  const section = SECTION_MAP[sectionSlug];
  const items = DATA[sectionSlug] || [];

  if(!section){
    return (
      <div>
        <button className="header-btn" onClick={()=>navigate(-1)}>← Back</button>
        <h2 className="page-heading">Section not found</h2>
      </div>
    );
  }

  return (
    <div>
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate(-1)}>← Back</button>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">{section.english}</h2>
        </div>
      </div>

      <div style={{marginTop:12}}>
        {items.length === 0 ? (
          <div style={{padding:12,background:'#fff',borderRadius:12,color:'var(--muted)'}}>Menu items will be added soon</div>
        ) : (
          <div style={{marginTop:16,display:'flex',flexDirection:'column',gap:12}}>
            {items.map(it => (
              <ItemCard key={it[0]} id={sectionSlug + '-' + it[0].toLowerCase().replace(/\s+/g,'-')} name={it[0]} kannada={it[1]} price={it[2]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
