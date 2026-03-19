import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/grocery.css";
import GroceryHeroBanner from "../components/GroceryHeroBanner";
import UgadiBanner from "../components/UgadiBanner";
import ItemCard from "../components/ItemCard";
import pulsesAndLentils from "../data/groceryItems/pulsesAndLentils";
import spices from "../data/groceryItems/spices";
import oilsAndGhee from "../data/groceryItems/oilsAndGhee";
import flourAndSemolina from "../data/groceryItems/flourAndSemolina";
import dairyProducts from "../data/groceryItems/dairyProducts";
import masalaPackets from "../data/groceryItems/masalaPackets";
import chipsAndKurkure from "../data/groceryItems/chipsAndKurkure";
import biscuits from "../data/groceryItems/biscuits";
import chocolates from "../data/groceryItems/chocolates";
import personalCare from "../data/groceryItems/personalCare";
import dentalCare from "../data/groceryItems/dentalCare";
import hairCare from "../data/groceryItems/hairCare";
import cleaningItems from "../data/groceryItems/cleaningItems";
import poojaItems from "../data/groceryItems/poojaItems";

export default function Grocery() {
  const navigate = useNavigate();
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const groceryData = [
    {
      id: "cooking-essentials",
      title: "Cooking Essentials",
      icon: "🍳",
      subcategories: [
        { id: "pulses", name: "ಕಾಳು ಮತ್ತು ಬೇಳೆ", englishName: "Pulses & Lentils", icon: "🫘", items: pulsesAndLentils },
        { id: "spices", name: "ಮಸಾಲೆ ಪದಾರ್ಥ", englishName: "Spices", icon: "🌶️", items: spices },
        { id: "oils", name: "ಎಣ್ಣೆ ಮತ್ತು ತುಪ್ಪ", englishName: "Oil & Ghee", icon: "🫗", items: oilsAndGhee },
        { id: "flour", name: "ಹಿಟ್ಟು, ರವೆ ಮತ್ತು ಅವಲಕ್ಕಿ", englishName: "Flour & Semolina", icon: "🌾", items: flourAndSemolina },
        { id: "dairy", name: "ಹಾಲು ಮತ್ತು ಮೊಸರು", englishName: "Dairy Products", icon: "🥛", items: dairyProducts },
        { id: "masala", name: "ಮಸಾಲೆ ಪ್ಯಾಕೆಟ್", englishName: "Masala Packets", icon: "📦", items: masalaPackets }
      ]
    },
    {
      id: "tindis",
      title: "Tindis",
      icon: "�",
      subcategories: [
        { id: "chips", name: "ಚಿಪ್ಸ್ ಮತ್ತು ಕುರ್ಕುರೆ", englishName: "Chips & Kurkure", icon: "🍟", items: chipsAndKurkure },
        { id: "biscuits", name: "ಬಿಸ್ಕೆಟ್", englishName: "Biscuits", icon: "🍪", items: biscuits },
        { id: "chocolates", name: "ಚಾಕೋಲೇಟ್ ಮತ್ತು ಸಿಹಿ", englishName: "Chocolates & Sweets", icon: "🍫", items: chocolates }
      ]
    },
    {
      id: "daily-needs",
      title: "Daily Needs",
      icon: "🛁",
      subcategories: [
        { id: "personal", name: "ವೈಯಕ್ತಿಕ ಬಳಕೆ", englishName: "Personal Care", icon: "🧑🏻", items: personalCare },
        { id: "dental", name: "ಹಲ್ಲು ಸ್ವಚ್ಛತೆ", englishName: "Dental Care", icon: "🦷", items: dentalCare },
        { id: "hair", name: "ಕೂದಲು ಸಂರಕ್ಷಣೆ", englishName: "Hair Care", icon: "💇", items: hairCare },
        { id: "cleaning", name: "ಸ್ವಚ್ಛತಾ ಸಾಮಗ್ರಿಗಳು", englishName: "Cleaning Items", icon: "🧹", items: cleaningItems },
        { id: "pooja", name: "ಪೂಜಾ ಸಾಮಗ್ರಿಗಳು", englishName: "Pooja Items", icon: "🙏", items: poojaItems }
      ]
    }
  ];

  // Get all subcategories flattened
  const allSubcategories = groceryData.flatMap(section => 
    section.subcategories.map(sub => ({...sub, sectionId: section.id}))
  );

  // Get items for selected subcategory or all items
  const getDisplayItems = () => {
    if (!activeSubcategory) {
      return groceryData.flatMap(section => 
        section.subcategories.flatMap((sub, subIdx) => 
          sub.items.map((item, itemIdx) => ({
            ...item,
            subcategoryId: sub.id,
            uniqueKey: `${section.id}-${subIdx}-${itemIdx}`
          }))
        )
      );
    }
    const selected = allSubcategories.find(sub => sub.id === activeSubcategory);
    return selected ? selected.items.map((item, idx) => ({
      ...item,
      subcategoryId: selected.id,
      uniqueKey: `${selected.id}-${idx}`
    })) : [];
  };

  const displayItems = getDisplayItems();
  const selectedSubcategoryName = activeSubcategory 
    ? allSubcategories.find(sub => sub.id === activeSubcategory)?.englishName 
    : "All Products";

  return (
    <div style={{background:'#F6F8F5',minHeight:'100vh'}}>
      {/* Header */}
      <div style={{background:'#fff',padding:'16px 20px',boxShadow:'0 1px 3px rgba(0,0,0,0.08)',display:'flex',alignItems:'center',gap:'12px'}}>
        <button 
          onClick={() => navigate("/home")}
          style={{background:'transparent',border:'none',fontSize:'20px',cursor:'pointer'}}
        >
          ← Back
        </button>
        <h1 style={{margin:0,fontSize:'24px',fontWeight:'800',color:'#2E7D32'}}>🛒 Grocery</h1>
      </div>

      <div style={{maxWidth:'1200px',margin:'0 auto',padding:'24px 16px'}}>
        {/* Hero Banner */}
        <GroceryHeroBanner />

        <UgadiBanner />

        {/* Subcategory Filters */}
        <div style={{marginBottom:'32px'}}>
          <h2 style={{fontSize:'18px',fontWeight:'800',marginBottom:'16px',color:'#222'}}>Shop by Category</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(5, 1fr)',gap:'12px'}}>
            <button
              onClick={() => setActiveSubcategory(null)}
              style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                gap:'4px',
                background: activeSubcategory === null ? '#2E7D32' : '#fff',
                border: activeSubcategory === null ? '2px solid #2E7D32' : '2px solid #E8EDE6',
                borderRadius:'50%',
                width:'70px',
                height:'70px',
                cursor:'pointer',
                transition:'all 0.2s',
                fontFamily:"'Nunito', sans-serif",
                margin:'0 auto'
              }}
              onMouseEnter={(e) => {
                if(activeSubcategory !== null) {
                  e.target.style.borderColor = '#2E7D32';
                  e.target.style.background = '#F1F8F1';
                }
              }}
              onMouseLeave={(e) => {
                if(activeSubcategory !== null) {
                  e.target.style.borderColor = '#E8EDE6';
                  e.target.style.background = '#fff';
                }
              }}
              title="All Products"
            >
              <span style={{fontSize:'24px'}}>🌟</span>
              <span style={{fontSize:'10px',fontWeight:'700',color: activeSubcategory === null ? '#fff' : '#444'}}>All</span>
            </button>
            {allSubcategories.map(sub => (
              <button
                key={sub.id}
                onClick={() => setActiveSubcategory(sub.id)}
                style={{
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center',
                  justifyContent:'center',
                  gap:'4px',
                  background: activeSubcategory === sub.id ? '#2E7D32' : '#fff',
                  border: activeSubcategory === sub.id ? '2px solid #2E7D32' : '2px solid #E8EDE6',
                  borderRadius:'50%',
                  width:'70px',
                  height:'70px',
                  cursor:'pointer',
                  transition:'all 0.2s',
                  fontFamily:"'Nunito', sans-serif",
                  margin:'0 auto'
                }}
                onMouseEnter={(e) => {
                  if(activeSubcategory !== sub.id) {
                    e.target.style.borderColor = '#2E7D32';
                    e.target.style.background = '#F1F8F1';
                  }
                }}
                onMouseLeave={(e) => {
                  if(activeSubcategory !== sub.id) {
                    e.target.style.borderColor = '#E8EDE6';
                    e.target.style.background = '#fff';
                  }
                }}
                title={sub.englishName}
              >
                <span style={{fontSize:'24px'}}>{sub.icon}</span>
                <span style={{fontSize:'10px',fontWeight:'700',color: activeSubcategory === sub.id ? '#fff' : '#444',textAlign:'center',lineHeight:'1.2'}}>{sub.englishName.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div style={{marginBottom:'32px'}}>
          <h2 style={{fontSize:'18px',fontWeight:'800',marginBottom:'16px',color:'#222'}}>
            {selectedSubcategoryName} 🌱
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))',gap:'16px',width:'100%'}}>
            {displayItems.map(item => (
              <ItemCard
                key={item.uniqueKey}
                id={item.uniqueKey}
                name={item.englishName}
                kannada={item.name}
                price={item.price}
                quantity={item.quantity}
                subsection={item.subcategoryId}
              />
            ))}
          </div>
        </div>

        {/* Offers Section */}
        <div style={{marginBottom:'32px'}}>
          <h2 style={{fontSize:'18px',fontWeight:'800',marginBottom:'16px',color:'#222'}}>Special Offers 🎉</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
            <div style={{background:'linear-gradient(120deg, #388E3C, #66BB6A)',borderRadius:'16px',padding:'28px',color:'#fff',cursor:'pointer',transition:'transform 0.2s',position:'relative',overflow:'hidden'}}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <span style={{fontSize:'48px',position:'absolute',right:'20px',top:'18px',opacity:'0.35'}}>🥬</span>
              <h3 style={{fontSize:'20px',fontWeight:'900',marginBottom:'6px'}}>Fresh Essentials</h3>
              <p style={{fontSize:'13px',opacity:'0.85',marginBottom:'16px'}}>Get fresh groceries at the best prices this week!</p>
              <button style={{background:'rgba(255,255,255,0.25)',border:'2px solid rgba(255,255,255,0.5)',color:'#fff',borderRadius:'10px',padding:'8px 18px',fontSize:'13px',fontWeight:'800',cursor:'pointer',fontFamily:"'Nunito', sans-serif",transition:'0.2s'}}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.4)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.25)'}
              >
                Shop Now
              </button>
            </div>
            <div style={{background:'linear-gradient(120deg, #F57F17, #FFB300)',borderRadius:'16px',padding:'28px',color:'#fff',cursor:'pointer',transition:'transform 0.2s',position:'relative',overflow:'hidden'}}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <span style={{fontSize:'48px',position:'absolute',right:'20px',top:'18px',opacity:'0.35'}}>🥛</span>
              <h3 style={{fontSize:'20px',fontWeight:'900',marginBottom:'6px'}}>Dairy Deals</h3>
              <p style={{fontSize:'13px',opacity:'0.85',marginBottom:'16px'}}>Buy 3 items and get special discounts!</p>
              <button style={{background:'rgba(255,255,255,0.25)',border:'2px solid rgba(255,255,255,0.5)',color:'#fff',borderRadius:'10px',padding:'8px 18px',fontSize:'13px',fontWeight:'800',cursor:'pointer',fontFamily:"'Nunito', sans-serif",transition:'0.2s'}}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.4)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.25)'}
              >
                Grab Deal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
