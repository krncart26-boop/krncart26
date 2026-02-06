import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import SectionCard from "../components/SectionCard";
import ItemCard from "../components/ItemCard";

const SNACKS_SECTIONS = [
  { english: "Starters", kannada: "ಸ್ಟಾರ್ಟರ್ಸ್", slug: "starters" },
  { english: "Veg Momos", kannada: "ವೆಜ್ ಮೋಮೋ", slug: "veg-momos" },
  { english: "Sandwich", kannada: "ಸ್ಯಾಂಡ್ವಿಚ್", slug: "sandwich" },
  { english: "Burger", kannada: "ಬರ್ಗರ್", slug: "burger" },
  { english: "Special Burger", kannada: "ಸ್ಪೆಷಲ್ ಬರ್ಗರ್", slug: "special-burger" },
  { english: "Pizza", kannada: "ಪಿಜ್ಜಾ", slug: "pizza" },
  { english: "Chinese", kannada: "ಚೀನೀ", slug: "chinese" },
  { english: "Noodles", kannada: "ನೂಡಲ್ಸ್", slug: "noodles" },
  { english: "Fried Rice", kannada: "ಫ್ರೇಡ್ ರೈಸ್", slug: "fried-rice" },
  { english: "Pasta", kannada: "ಪಾಸ್ತಾ", slug: "pasta" },
  { english: "Shawarma", kannada: "ಶವರ್ಮ", slug: "shawarma" },
];

const IM_STARTERS = [
  { id: "im-fries", name: "French Fries", kannada: "ಫ್ರೆಂಚ್ ಫ್ರೈಸ್", price: 79.99 },
  { id: "im-peri-fries", name: "Peri Peri Fries", kannada: "ಪೆರಿ ಪೆರಿ ಫ್ರೈಸ್", price: 89.99 },
  { id: "im-nuggets", name: "Nuggets", kannada: "ನಗೆಟ್ಸ್", price: 79.99 },
  { id: "im-smileys", name: "Smiley's", kannada: "ಸ್ಮೈಲಿಸ್", price: 79.99 },
  { id: "im-veg-finger", name: "Veg Finger", kannada: "ವೆಜ್ ಫಿಂಗರ್", price: 79.99 },
  { id: "im-potato-pops", name: "Potato Pops", kannada: "ಪೊಟೆಟೊ ಪಾಪ್ಸ್", price: 79.99 },
  { id: "im-cheesy-nuggets", name: "Cheesy Nuggets", kannada: "ಚೀಸಿ ನಗೆಟ್ಸ್", price: 89.99 },
  { id: "im-creamy-special", name: "IM Special Creamy Fries", kannada: "ಸ್ಪೆಷಲ್ ಕ್ರಿಮಿ ಫ್ರೈಸ್", price: 99.99 },
  { id: "im-creamy-fries", name: "Creamy Fries", kannada: "ಕ್ರಿಮಿ ಫ್ರೈಸ್", price: 89.99 }
];

const IM_VEG_MOMOS = [
  { id: "im-momos-steam", name: "Steam Momos (6 pcs)", kannada: "ಸ್ಟೀಮ್ ಮೋಮೋ", price: 110 },
  { id: "im-momos-fried", name: "Fried Momos (6 pcs)", kannada: "ಫ್ರೈಡ್ ಮೋಮೋ", price: 110 }
];

const IM_SANDWICH = [
  { id: "im-sandwich-classic", name: "Classic", kannada: "ಕ್ಲಾಸಿಕ್", price: 79.99 },
  { id: "im-sandwich-cheesy", name: "Cheesy", kannada: "ಚೀಸಿ", price: 89.99 },
  { id: "im-sandwich-club", name: "Club", kannada: "ಕ್ಲಬ್", price: 109.99 },
  { id: "im-sandwich-paneer", name: "Paneer", kannada: "ಪನೀರ್", price: 119.99 },
  { id: "im-sandwich-corn", name: "Roasted Corn", kannada: "ರೋಸ್ಟೆಡ್ ಕಾರ್ನ್", price: 109.99 },
  { id: "im-sandwich-mushroom", name: "Mushroom", kannada: "ಮಶ್ರೂಮ್", price: 119.99 },
  { id: "im-sandwich-mexican", name: "Mexican", kannada: "ಮೆಕ್ಸಿಕನ್", price: 109.99 },
  { id: "im-sandwich-italian", name: "Italian", kannada: "ಇಟಾಲಿಯನ್", price: 109.99 },
  { id: "im-sandwich-special", name: "IM Special (with fries)", kannada: "ಸ್ಪೆಷಲ್ (ಫ್ರೈಸ್ ಸಹ)", price: 129.99 }
];

const IM_BURGER = [
  { id: "im-burger-classic", name: "Classic", kannada: "ಕ್ಲಾಸಿಕ್", price: 79.99 },
  { id: "im-burger-cheesy", name: "Cheesy", kannada: "ಚೀಸಿ", price: 89.99 },
  { id: "im-burger-paneer", name: "Paneer Crunchy", kannada: "ಪನೀರ್ ಕ್ರಂಚಿ", price: 119.99 },
  { id: "im-burger-corn", name: "Roasted Corn", kannada: "ರೋಸ್ಟೆಡ್ ಕಾರ್ನ್", price: 109.99 },
  { id: "im-burger-mexican", name: "Mexican", kannada: "ಮೆಕ್ಸಿಕನ್", price: 109.99 },
  { id: "im-burger-italian", name: "Italian", kannada: "ಇಟಾಲಿಯನ್", price: 109.99 }
];

const IM_SPECIAL_BURGER = [
  { id: "im-special-paneer", name: "Jumbo Paneer", kannada: "ಜುಂಬೋ ಪನೀರ್", price: 139.99 },
  { id: "im-special-mushroom", name: "Mushroom", kannada: "ಮಶ್ರೂಮ್", price: 119.99 },
  { id: "im-special-humburger", name: "Humburger", kannada: "ಹಾಂಬರ್ಗರ್", price: 139.99 },
  { id: "im-special-fries", name: "IM Special (with fries)", kannada: "ಸ್ಪೆಷಲ್ (ಫ್ರೈಸ್ ಸಹ)", price: 139.99 }
];

const IM_PIZZA = [
  { id: "im-pizza-classic-s", name: "Classic Hot (Small)", kannada: "ಕ್ಲಾಸಿಕ್ (ಸಣ್ಣ)", price: 140 },
  { id: "im-pizza-classic-m", name: "Classic Hot (Medium)", kannada: "ಕ್ಲಾಸಿಕ್ (ಮಿಡಿಯಂ)", price: 170 },
  { id: "im-pizza-pineapple-s", name: "Pineapple Cheese (Small)", kannada: "ಪೈನಾಪಲ್ (ಸಣ್ಣ)", price: 160 },
  { id: "im-pizza-pineapple-m", name: "Pineapple Cheese (Medium)", kannada: "ಪೈನಾಪಲ್ (ಮಿಡಿಯಂ)", price: 190 },
  { id: "im-pizza-double-s", name: "Double Cheesy (Small)", kannada: "ಡಬಲ್ ಚೀಸಿ (ಸಣ್ಣ)", price: 160 },
  { id: "im-pizza-double-m", name: "Double Cheesy (Medium)", kannada: "ಡಬಲ್ ಚೀಸಿ (ಮಿಡಿಯಂ)", price: 190 },
  { id: "im-pizza-paneer-s", name: "Paneer Makhani (Small)", kannada: "ಪನೀರ್ (ಸಣ್ಣ)", price: 170 },
  { id: "im-pizza-paneer-m", name: "Paneer Makhani (Medium)", kannada: "ಪನೀರ್ (ಮಿಡಿಯಂ)", price: 200 },
  { id: "im-pizza-special-s", name: "IM Special Pizza (Small)", kannada: "ಸ್ಪೆಷಲ್ (ಸಣ್ಣ)", price: 190 },
  { id: "im-pizza-special-m", name: "IM Special Pizza (Medium)", kannada: "ಸ್ಪೆಷಲ್ (ಮಿಡಿಯಂ)", price: 220 }
];

const IM_CHINESE = [
  { id: "im-gobi-manchu", name: "Gobi Manchurian", kannada: "ಗೋಬಿ ಮಂಚುರಿಯನ್", price: 80 },
  { id: "im-paneer-manchu", name: "Paneer Manchurian", kannada: "ಪನೀರ್ ಮಂಚುರಿಯನ್", price: 120 },
  { id: "im-mushroom-manchu", name: "Mushroom Manchurian", kannada: "ಮಶ್ರೂಮ್ ಮಂಚುರಿಯನ್", price: 120 },
  { id: "im-chilli-paneer", name: "Chilly Paneer", kannada: "ಚಿಲ್ಲಿ ಪನೀರ್", price: 130 }
];

const IM_NOODLES = [
  { id: "im-noodles-veg", name: "Veg Noodles", kannada: "ವೆಜ್ ನೂಡಲ್ಸ್", price: 110 },
  { id: "im-noodles-hakka", name: "Hakka Noodles", kannada: "ಹಕ್ಕಾ ನೂಡಲ್ಸ್", price: 120 },
  { id: "im-noodles-schezwan", name: "Schezwan Noodles", kannada: "ಶೆಜುವಾನ್ ನೂಡಲ್ಸ್", price: 120 }
];

const IM_FRIED_RICE = [
  { id: "im-butter-rice", name: "Butter Fried Rice", kannada: "ಬೆಣ್ಣೆ ಫ್ರೈಡ್ ರೈಸ್", price: 110 },
  { id: "im-mexican-rice", name: "Mexican Fried Rice", kannada: "ಮೆಕ್ಸಿಕನ್ ಫ್ರೈಡ್ ರೈಸ್", price: 130 },
  { id: "im-schezwan-rice", name: "Shezwan Fried Rice", kannada: "ಶೆಜುವಾನ್ ಫ್ರೈಡ್ ರೈಸ್", price: 120 }
];

const IM_PASTA = [
  { id: "im-pasta-tomato", name: "Tomato Chilly Pasta", kannada: "ಟೊಮೋಟೊ ಪಾಸ್ತಾ", price: 110 },
  { id: "im-pasta-white", name: "White Sauce Pasta", kannada: "ವೈಟ್ ಸಾಸ್ ಪಾಸ್ತಾ", price: 110 },
  { id: "im-pasta-paneer", name: "Paneer Pasta", kannada: "ಪನೀರ್ ಪಾಸ್ತಾ", price: 130 }
];

const IM_SHAWARMA = [
  { id: "im-shawarma-veg", name: "Veg Shawarma", kannada: "ವೆಜ್ ಶವರ್ಮ", price: 110 },
  { id: "im-shawarma-paneer", name: "Paneer Shawarma", kannada: "ಪನೀರ್ ಶವರ್ಮ", price: 130 }
];

const SNACKS_ITEMS = {
  "starters": IM_STARTERS,
  "veg-momos": IM_VEG_MOMOS,
  "sandwich": IM_SANDWICH,
  "burger": IM_BURGER,
  "special-burger": IM_SPECIAL_BURGER,
  "pizza": IM_PIZZA,
  "chinese": IM_CHINESE,
  "noodles": IM_NOODLES,
  "fried-rice": IM_FRIED_RICE,
  "pasta": IM_PASTA,
  "shawarma": IM_SHAWARMA,
};

export default function IceMagicFiltered() {
  const { sectionSlug, categorySlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Detect path type
  const isSnacksPath = location.pathname.includes('/snacks/');
  const isSnacksLanding = location.pathname === '/ice-magic/snacks' || categorySlug === 'snacks';
  const isSnacksDetail = sectionSlug && isSnacksPath;

  // Handle snacks detail page (/ice-magic/snacks/:sectionSlug)
  if (isSnacksDetail) {
    const section = SNACKS_SECTIONS.find(s => s.slug === sectionSlug);
    const items = SNACKS_ITEMS[sectionSlug] || [];

    if (!section) {
      return <FilteredHotelPage hotelName="Ice Magic" categorySlug="snacks" />;
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/ice-magic/snacks')}>← Back</button>
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

  // Handle snacks landing page (/ice-magic/snacks)
  if (isSnacksLanding) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Ice Magic</h2>
        </div>

        <div className="section-list">
          {SNACKS_SECTIONS.map(s => (
            <SectionCard
              key={s.slug}
              english={s.english}
              kannada={s.kannada}
              onClick={() => navigate(`/ice-magic/snacks/${s.slug}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // For other filters (Juices, etc.), use generic FilteredHotelPage
  return <FilteredHotelPage hotelName="Ice Magic" categorySlug={categorySlug} />;
}
