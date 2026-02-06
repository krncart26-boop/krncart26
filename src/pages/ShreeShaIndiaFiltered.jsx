import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import SectionCard from "../components/SectionCard";
import ItemCard from "../components/ItemCard";

// All filter categories
const ALL_CATEGORIES = [
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

// Snacks filter sections
const SNACKS_SECTIONS = [
  { english: "Sandwiches", kannada: "ಸ್ಯಾಂಡ್ವಿಚ್", slug: "sandwiches" },
  { english: "Pasta", kannada: "ಪಾಸ್ತಾ", slug: "pasta" },
  { english: "Corn Special", kannada: "ಕಾರ್ನ್ ವಿಶೇಷ", slug: "corn-special" },
  { english: "Cafe Special", kannada: "ಕೋಶ್ ವಿಶೇಷ", slug: "cafe-special" },
  { english: "Combos Special", kannada: "ಕಾಂಬೋ ವಿಶೇಷ", slug: "combos-special" },
];

// Snacks-specific items
const SHREESHA_SANDWICHES = [
  { id: "sc-veg-sandwich", name: "Veg Sandwich / Burger", kannada: "ವೆಜ್ ಸ್ಯಾಂಡ್ವಿಚ್", price: 61 },
  { id: "sc-veg-cheese-sandwich", name: "Veg Cheese Sandwich / Burger", kannada: "ವೆಜ್ ಚೀಸ್ ಸ್ಯಾಂಡ್ವಿಚ್", price: 71 },
  { id: "sc-corn-sandwich", name: "Corn Sandwich / Burger", kannada: "ಕಾರ್ನ್ ಸ್ಯಾಂಡ್ವಿಚ್", price: 61 },
  { id: "sc-cheese-corn-sandwich", name: "Cheese Corn Sandwich / Burger", kannada: "ಚೀಸ್ ಕಾರ್ನ್ ಸ್ಯಾಂಡ್ವಿಚ್", price: 71 }
];

const SHREESHA_PASTA = [
  { id: "sc-veg-maggi", name: "Veg Maggi", kannada: "ವೆಜ್ ಮ್ಯಾಗಿ", price: 51 },
  { id: "sc-veg-cheese-maggi", name: "Veg Cheese Maggi / Pasta", kannada: "ವೆಜ್ ಚೀಸ್ ಮ್ಯಾಗಿ", price: 61 },
  { id: "sc-corn-maggi", name: "Corn Maggi", kannada: "ಕಾರ್ನ್ ಮ್ಯಾಗಿ", price: 51 },
  { id: "sc-cheese-corn-pasta", name: "Cheese Corn Maggi / Pasta", kannada: "ಚೀಸ್ ಕಾರ್ನ್ ಮ್ಯಾಗಿ", price: 61 }
];

const SHREESHA_CORN_SPECIAL = [
  { id: "sc-lemon-tandoori", name: "Lemon & Chilli Tandoori Corn", kannada: "ನಿಂಬೆ ಮಿರಿ ತಂದೂರಿ ಕಾರ್ನ್", price: 51 },
  { id: "sc-chat-tandoori", name: "Chat Masala Tandoori Corn", kannada: "ಚಾಟ್ ಮಸಾಲೆ ತಂದೂರಿ ಕಾರ್ನ್", price: 51 },
  { id: "sc-periperi-tandoori", name: "Peri Peri Tandoori Corn", kannada: "ಪೆರಿ ಪೆರಿ ತಂದೂರಿ ಕಾರ್ನ್", price: 51 },
  { id: "sc-periperi-small", name: "Peri Peri Sweet Corn Masala - Small", kannada: "ಪೆರಿ ಪೆರಿ ಸ್ವೀಟ್ ಕಾರ್ನ್ - ಸಣ್ಣ", price: 41 },
  { id: "sc-periperi-large", name: "Peri Peri Sweet Corn Masala - Large", kannada: "ಪೆರಿ ಪೆರಿ ಸ್ವೀಟ್ ಕಾರ್ನ್ - ದೊಡ್ಡ", price: 51 },
  { id: "sc-chat-small", name: "Chat Masala Sweet Corn Masala - Small", kannada: "ಚಾಟ್ ಮಸಾಲೆ ಸ್ವೀಟ್ ಕಾರ್ನ್ - ಸಣ್ಣ", price: 41 },
  { id: "sc-chat-large", name: "Chat Masala Sweet Corn Masala - Large", kannada: "ಚಾಟ್ ಮಸಾಲೆ ಸ್ವೀಟ್ ಕಾರ್ನ್ - ದೊಡ್ಡ", price: 51 },
  { id: "sc-lemon-small", name: "Lemon & Chilli Sweet Corn Masala - Small", kannada: "ನಿಂಬೆ ಮಿರಿ ಸ್ವೀಟ್ ಕಾರ್ನ್ - ಸಣ್ಣ", price: 41 },
  { id: "sc-lemon-large", name: "Lemon & Chilli Sweet Corn Masala - Large", kannada: "ನಿಂಬೆ ಮಿರಿ ಸ್ವೀಟ್ ಕಾರ್ನ್ - ದೊಡ್ಡ", price: 51 },
  { id: "sc-crispy-periperi", name: "Peri Peri Crispy Corn", kannada: "ಪೆರಿ ಪೆರಿ ಕ್ರಿಸ್ಪಿ ಕಾರ್ನ್", price: 51 },
  { id: "sc-crispy-chat", name: "Chat Masala Crispy Corn", kannada: "ಚಾಟ್ ಮಸಾಲೆ ಕ್ರಿಸ್ಪಿ ಕಾರ್ನ್", price: 51 },
  { id: "sc-crispy-cheese", name: "Cheese Sauce Crispy Corn", kannada: "ಚೀಸ್ ಸಾಸ್ ಕ್ರಿಸ್ಪಿ ಕಾರ್ನ್", price: 51 },
  { id: "sc-pakoda-small", name: "Small Corn Pakoda (5 pcs)", kannada: "ಸಣ್ಣ ಕಾರ್ನ್ ಪಕೋಡೆ (5)", price: 51 },
  { id: "sc-pakoda-medium", name: "Medium Corn Pakoda (7 pcs)", kannada: "ಮಧ್ಯ ಕಾರ್ನ್ ಪಕೋಡೆ (7)", price: 61 },
  { id: "sc-pakoda-large", name: "Large Corn Pakoda (10 pcs)", kannada: "ದೊಡ್ಡ ಕಾರ್ನ್ ಪಕೋಡೆ (10)", price: 71 },
  { id: "sc-bhel-periperi", name: "Peri Peri Corn Bhel", kannada: "ಪೆರಿ ಪೆರಿ ಕಾರ್ನ್ ಭೆಲ್", price: 51 },
  { id: "sc-bhel-chat", name: "Chat Masala Corn Bhel", kannada: "ಚಾಟ್ ಮಸಾಲೆ ಕಾರ್ನ್ ಭೆಲ್", price: 51 },
  { id: "sc-bhel-lemon", name: "Lemon & Chilli Corn Bhel", kannada: "ನಿಂಬೆ ಮಿರಿ ಕಾರ್ನ್ ಭೆಲ್", price: 51 }
];

const SHREESHA_CAFE_SPECIAL = [
  { id: "sc-periperi-fries-half", name: "Peri Peri Fries - Half", kannada: "ಪೆರಿ ಪೆರಿ ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ - ಅರ್ಧ", price: 51 },
  { id: "sc-periperi-fries-full", name: "Peri Peri Fries - Full", kannada: "ಪೆರಿ ಪೆರಿ ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ - ಪೂರ್ಣ", price: 81 },
  { id: "sc-salted-fries-half", name: "Salted Fries - Half", kannada: "ಉಪ್ಪಿನ ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ - ಅರ್ಧ", price: 51 },
  { id: "sc-salted-fries-full", name: "Salted Fries - Full", kannada: "ಉಪ್ಪಿನ ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ - ಪೂರ್ಣ", price: 81 },
  { id: "sc-masala-fries-half", name: "Masala Fries - Half", kannada: "ಮಸಾಲೆ ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ - ಅರ್ಧ", price: 51 },
  { id: "sc-masala-fries-full", name: "Masala Fries - Full", kannada: "ಮಸಾಲೆ ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ - ಪೂರ್ಣ", price: 81 },
  { id: "sc-vada-pav", name: "Vada Pav", kannada: "ವಡೆ ಪಾವ್", price: 37 },
  { id: "sc-cheese-vada-pav", name: "Cheese Vada Pav", kannada: "ಚೀಸ್ ವಡೆ ಪಾವ್", price: 47 },
  { id: "sc-veg-roll", name: "Veg Roll (2)", kannada: "ವೆಜ್ ರೋಲ್ (2)", price: 61 },
  { id: "sc-cheese-veg-roll", name: "Cheese Veg Roll (2)", kannada: "ಚೀಸ್ ವೆಜ್ ರೋಲ್ (2)", price: 51 },
  { id: "sc-crispy-paneer-roll", name: "Crispy Paneer Roll", kannada: "ಕ್ರಿಸ್ಪಿ ಪನೀರ್ ರೋಲ್", price: 61 },
  { id: "sc-corn-cheese-nuggets", name: "Corn Cheese Nuggets", kannada: "ಕಾರ್ನ್ ಚೀಸ್ ನಗೆಟ್ಸ್", price: 71 },
  { id: "sc-corn-cheese-momos", name: "Corn Cheese Momos", kannada: "ಕಾರ್ನ್ ಚೀಸ್ ಮೋಮೋ", price: 81 },
  { id: "sc-veg-cutlet", name: "Veg Cutlet (2)", kannada: "ವೆಜ್ ಕಟ್ಲೆಟ್ (2)", price: 61 },
  { id: "sc-pav-bhaji", name: "Pav Bhaji", kannada: "ಪಾವ್ ಭಾಜಾ", price: 62 },
  { id: "sc-popcorn-periperi", name: "Peri Peri PVR Popcorn", kannada: "ಪೆರಿ ಪೆರಿ ಪಾಪ್ಕಾರ್ನ್", price: 32 },
  { id: "sc-popcorn-cheese", name: "Mexican Cheese PVR Popcorn", kannada: "ಮೆಕ್ಸಿಕನ್ ಚೀಸ್ ಪಾಪ್ಕಾರ್ನ್", price: 32 },
  { id: "sc-popcorn-salted", name: "Salted PVR Popcorn", kannada: "ಉಪ್ಪಿನ ಪಾಪ್ಕಾರ್ನ್", price: 32 }
];

const SHREESHA_COMBOS = [
  { id: "sc-combo-juice", name: "Sandwich & Burger + Any Fresh Juice", kannada: "ಸ್ಯಾಂಡ್ವಿಚ್ + ಸಿ ತಾಜೆ ರಸ", price: 151 },
  { id: "sc-combo-fries-ice", name: "French Fries + Sandwich + Ice Cream Scoop", kannada: "ಫ್ರೆಂಚ್ ಫ್ರೈಸ್ + ಸ್ಯಾಂಡ್ವಿಚ್ + ಐಸ್ ಕ್ರೀಮ್", price: 151 },
  { id: "sc-combo-corn-pakoda", name: "Sandwich & Burger + Corn Pakoda (5 pcs)", kannada: "ಸ್ಯಾಂಡ್ವಿಚ್ + ಕಾರ್ನ್ ಪಕೋಡೆ", price: 151 }
];

const SNACKS_ITEMS = {
  "sandwiches": SHREESHA_SANDWICHES,
  "pasta": SHREESHA_PASTA,
  "corn-special": SHREESHA_CORN_SPECIAL,
  "cafe-special": SHREESHA_CAFE_SPECIAL,
  "combos-special": SHREESHA_COMBOS,
};

export default function ShreeShaIndiaFiltered() {
  const { sectionSlug, categorySlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Detect path type
  const isSnacksPath = location.pathname.includes('/snacks/');
  const isSnacksLanding = location.pathname === '/shreesha-cafe/snacks' || categorySlug === 'snacks';
  const isSnacksFilterDetail = sectionSlug && isSnacksPath;
  const isAllFilter = location.pathname === '/shreesha-cafe';
  const isAllSubsection = location.pathname.match(/^\/shreesha-cafe\/[^\/]+$/) && sectionSlug && !isSnacksPath;

  // Handle snacks detail page (/shreesha-cafe/snacks/:sectionSlug)
  if (isSnacksFilterDetail) {
    const section = SNACKS_SECTIONS.find(s => s.slug === sectionSlug);
    const items = SNACKS_ITEMS[sectionSlug] || [];

    if (!section) {
      return <FilteredHotelPage hotelName="ShreeSha cafe" categorySlug="snacks" />;
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/shreesha-cafe/snacks')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">{section.english}</h2>
        </div>

        <div className="items-list">
          {items.map(item => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              kannada={item.kannada}
              price={item.price}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle snacks landing page (/shreesha-cafe/snacks or /shreesha-cafe/filter/snacks)
  if (isSnacksLanding) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">ShreeSha cafe</h2>
        </div>

        <div className="section-list">
          {SNACKS_SECTIONS.map(s => (
            <SectionCard
              key={s.slug}
              english={s.english}
              kannada={s.kannada}
              onClick={() => navigate(`/shreesha-cafe/snacks/${s.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle all filter - show all categories
  if (isAllFilter) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">ShreeSha cafe</h2>
        </div>

        <div className="section-list">
          {ALL_CATEGORIES.map(cat => (
            <SectionCard
              key={cat.slug}
              english={cat.english}
              kannada=""
              onClick={() => navigate(`/shreesha-cafe/${cat.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle all filter subsection (/shreesha-cafe/:sectionSlug) - delegate to section handler
  if (isAllSubsection && sectionSlug) {
    navigate(`/shreesha-india/${sectionSlug}`);
    return null;
  }

  // Default fallback
  return <FilteredHotelPage hotelName="ShreeSha cafe" categorySlug="snacks" />;
}
