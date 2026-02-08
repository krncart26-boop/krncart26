import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";
import ItemCard from "../components/ItemCard";
import SectionCard from "../components/SectionCard";
import { UDUPI_BREAKFAST_SECTIONS, UDUPI_BREAKFAST_ITEMS } from "../data/menus/udupiBreakfast";
import { UDUPI_LUNCH_SECTIONS, UDUPI_LUNCH_ITEMS } from "../data/menus/udupiLunch";
import { UDUPI_SNACKS_SECTIONS, UDUPI_SNACKS_ITEMS } from "../data/menus/udupiSnacks";
import { UDUPI_JUICE_SECTIONS, UDUPI_JUICE_ITEMS } from "../data/menus/udupiJuice";
import { UDUPI_CHATS_SECTIONS, UDUPI_CHATS_ITEMS } from "../data/menus/udupiChats";

const UDUPI_ICE_CREAM_SECTIONS = [
  { english: "MILKSHAKE", kannada: "ಮಿಲ್ಕ್ ಶೇಕ್", slug: "milkshake" },
  { english: "FALOODA", kannada: "ಫಾಲೂದ", slug: "falooda" },
  { english: "ICE CREAM SUNDAE", kannada: "ಐಸ್ ಕ್ರೀಮ್ ಸುಂಡೆ", slug: "ice-cream-sundae" },
  { english: "ICE CREAM PARTY SPECIAL", kannada: "ಐಸ್ ಕ್ರೀಮ್ ಪಾರ್ಟಿ ಸ್ಪೆಷಲ್", slug: "ice-cream-party-special" }
];

const UDUPI_ICE_CREAM_SUNDAE = [
  { id: "udupi-ics-1", name: "Nutella Dry Fruit", kannada: "ನುಟೆಲ್ಲ ಡ್ರೈ ಫ್ರೂಟ್", price: 220 },
  { id: "udupi-ics-2", name: "Mexican Brownie", kannada: "ಮೆಕ್ಸಿಕನ್ ಬ್ರೌನಿ", price: 150 },
  { id: "udupi-ics-3", name: "Chocolate Fudge", kannada: "ಚಾಕೊಲೇಟ್ ಫಡ್ಜ್", price: 140 },
  { id: "udupi-ics-4", name: "Nutella Chocolate", kannada: "ನುಟೆಲ್ಲ ಚಾಕೊಲೇಟ್", price: 210 },
  { id: "udupi-ics-5", name: "Death By Chocolate", kannada: "ಡೆತ್ ಬೈ ಚಾಕೊಲೇಟ್", price: 210 },
  { id: "udupi-ics-6", name: "Nutella Brownie", kannada: "ನುಟೆಲ್ಲ ಬ್ರೌನಿ", price: 210 },
  { id: "udupi-ics-7", name: "Butterscotch Fudge", kannada: "ಬಟರ್‌ಸ್ಕಾಚ್ ಫಡ್ಜ್", price: 160 },
  { id: "udupi-ics-8", name: "Sizzler Brownie", kannada: "ಸಿজ್ಲರ್ ಬ್ರೌನಿ", price: 210 }
];

const UDUPI_ICE_CREAM_PARTY_SPECIAL = [
  { id: "udupi-icps-1", name: "Fruit Salad", kannada: "ಫ್ರೂಟ್ ಸಾಲೆಡ್", price: 100 },
  { id: "udupi-icps-2", name: "Fruit Salad With Ice Cream", kannada: "ಫ್ರೂಟ್ ಸಾಲೆಡ್ ವಿತ್ ಐಸ್ ಕ್ರೀಮ್", price: 120 },
  { id: "udupi-icps-3", name: "Gud Bud", kannada: "ಗುಡ್ ಬಡ್", price: 200 },
  { id: "udupi-icps-4", name: "Nuts Sundae", kannada: "ನಟ್ಸ್ ಸುಂಡೆ", price: 220 },
  { id: "udupi-icps-5", name: "Joker Man (Kids Special)", kannada: "ಜೋಕರ್ ಮ್ಯಾನ್ (ಕಿಡ್ಸ್ ಸ್ಪೆಷಲ್)", price: 180 },
  { id: "udupi-icps-6", name: "Spider Man (Kids Special)", kannada: "ಸ್ಪೈಡರ್ ಮ್ಯಾನ್ (ಕಿಡ್ಸ್ ಸ್ಪೆಷಲ್)", price: 180 },
  { id: "udupi-icps-7", name: "Banana Split (3 Scoop)", kannada: "ಬನಾನಾ ಸ್ಪ್ಲಿಟ್ (3 ಸ್ಕೂಪ್)", price: 220 },
  { id: "udupi-icps-8", name: "Honey Nut Crunch", kannada: "ಹನಿ ನಟ್ ಕ್ರಂಚ್", price: 200 },
  { id: "udupi-icps-9", name: "Litchi with Ice Cream", kannada: "ಲಿಚಿ ವಿತ್ ಐಸ್ ಕ್ರೀಮ್", price: 220 },
  { id: "udupi-icps-10", name: "Dry Fruits with Ice Cream", kannada: "ಡ್ರೈ ಫ್ರೂಟ್ಸ್ ವಿತ್ ಐಸ್ ಕ್ರೀಮ್", price: 230 },
  { id: "udupi-icps-11", name: "Hot Chocolate Fudge", kannada: "ಹಾಟ್ ಚಾಕೊಲೇಟ್ ಫಡ್ಜ್", price: 220 },
  { id: "udupi-icps-12", name: "Hot Chocolate with Nuts", kannada: "ಹಾಟ್ ಚಾಕೊಲೇಟ್ ವಿತ್ ನಟ್ಸ್", price: 240 },
  { id: "udupi-icps-13", name: "Titanic Special", kannada: "ಟೈಟಾನಿಕ್ ಸ್ಪೆಷಲ್", price: 230 },
  { id: "udupi-icps-14", name: "Lover Special", kannada: "ಲವರ್ ಸ್ಪೆಷಲ್", price: 250 },
  { id: "udupi-icps-15", name: "Raja Rani", kannada: "ರಾಜ ರಾಣಿ", price: 250 },
  { id: "udupi-icps-16", name: "Golden Cherry", kannada: "ಗೋಲ್ಡನ್ ಚೆರಿ", price: 250 },
  { id: "udupi-icps-17", name: "Traffic Jaam", kannada: "ಟ್ರ್ಯಾಫಿಕ್ ಜಾಮ್", price: 250 },
  { id: "udupi-icps-18", name: "My Dream", kannada: "ಮೈ ಡ್ರೀಮ್", price: 250 },
  { id: "udupi-icps-19", name: "Honey Moon Special", kannada: "ಹನಿ ಮೂನ್ ಸ್ಪೆಷಲ್", price: 250 },
  { id: "udupi-icps-20", name: "Super Six", kannada: "ಸೂಪರ್ ಸಿಕ್ಸ್", price: 270 },
  { id: "udupi-icps-21", name: "Seven Wonder", kannada: "ಸೆವೆನ್ ವಂಡರ್", price: 300 }
];

const UDUPI_MILKSHAKE = [
  { id: "udupi-ms-1", name: "Apple", kannada: "ಸೇಬು", price: 100 },
  { id: "udupi-ms-2", name: "Pomegranate", kannada: "ದಾಳಿಂಬೆ", price: 100 },
  { id: "udupi-ms-3", name: "Banana", kannada: "ಬನಾನಾ", price: 90 },
  { id: "udupi-ms-4", name: "Butter Fruit", kannada: "ಬೆಣ್ಣೆ ಫ್ರೂಟ್", price: 110 },
  { id: "udupi-ms-5", name: "Kiwi Fruit (Seasonal)", kannada: "ಕಿವಿ ಫ್ರೂಟ್", price: 110 },
  { id: "udupi-ms-6", name: "Musk Melon", kannada: "ಕಸ್ತೂರಿ ಕ್ಷೀರಸ", price: 100 },
  { id: "udupi-ms-7", name: "Sapota", kannada: "ಸಪೋಟೆ", price: 100 },
  { id: "udupi-ms-8", name: "Mango Fruit Milkshake (Seasonal)", kannada: "ಮಾವಿನ ಮಿಲ್ಕ್ ಶೇಕ್", price: 120 },
  { id: "udupi-ms-9", name: "Raagi Milkshake", kannada: "ರಾಗಿ ಮಿಲ್ಕ್ ಶೇಕ್", price: 100 },
  { id: "udupi-ms-10", name: "Cold Coffee / Cold Badam", kannada: "ಕೋಲ್ಡ್ ಕಾಫಿ / ಕೋಲ್ಡ್ ಬಾದಾಮ", price: 100 },
  { id: "udupi-ms-11", name: "Custard Apple", kannada: "ಸೀತಾಫಲ", price: 100 },
  { id: "udupi-ms-12", name: "Litchi Milkshake", kannada: "ಲಿಚಿ ಮಿಲ್ಕ್ ಶೇಕ್", price: 100 },
  { id: "udupi-ms-13", name: "Dry Fruit Milkshake", kannada: "ಡ್ರೈ ಫ್ರೂಟ್ ಮಿಲ್ಕ್ ಶೇಕ್", price: 150 },
  { id: "udupi-ms-14", name: "Dates Milkshake", kannada: "ಖಜೂರ ಮಿಲ್ಕ್ ಶೇಕ್", price: 100 },
  { id: "udupi-ms-15", name: "Anjur Milkshake", kannada: "ಅಂಜೂರ ಮಿಲ್ಕ್ ಶೇಕ್", price: 120 },
  { id: "udupi-ms-16", name: "Chocolate", kannada: "ಚಾಕೊಲೇಟ್", price: 120 },
  { id: "udupi-ms-17", name: "Vanilla", kannada: "ವನಿಲ್ಲ", price: 120 },
  { id: "udupi-ms-18", name: "Strawberry", kannada: "ಹಸುಬೆರಿ", price: 120 },
  { id: "udupi-ms-19", name: "Butterscotch", kannada: "ಬಟರ್‌ಸ್ಕಾಚ್", price: 120 },
  { id: "udupi-ms-20", name: "Pista Shake", kannada: "ಪಿಸ್ತಾ ಶೇಕ್", price: 120 },
  { id: "udupi-ms-21", name: "Black Current", kannada: "ಕಪ್ಪು ಕರಪಾಯ", price: 120 },
  { id: "udupi-ms-22", name: "Oreo Shake", kannada: "ಓರಿಯೋ ಶೇಕ್", price: 120 },
  { id: "udupi-ms-23", name: "Mango Shake", kannada: "ಮಾವಿನ ಶೇಕ್", price: 120 },
  { id: "udupi-ms-24", name: "Tutti Fruity", kannada: "ಟುಟ್ಟಿ ಫ್ರೂಟಿ", price: 120 }
];

const UDUPI_FALOODA = [
  { id: "udupi-fal-1", name: "Royal Falooda", kannada: "ರಾಯಲ್ ಫಾಲೂದಾ", price: 180 },
  { id: "udupi-fal-2", name: "Special Falooda", kannada: "ಸ್ಪೆಷಲ್ ಫಾಲೂದಾ", price: 210 },
  { id: "udupi-fal-3", name: "Kesar Falooda", kannada: "ಕೇಸರಿ ಫಾಲೂದಾ", price: 220 },
  { id: "udupi-fal-4", name: "Kulfi Falooda", kannada: "ಕುಲ್ಫಿ ಫಾಲೂದಾ", price: 230 }
];

const UDUPI_ICE_CREAM_ITEMS = {
  "ice-cream-sundae": UDUPI_ICE_CREAM_SUNDAE,
  "ice-cream-party-special": UDUPI_ICE_CREAM_PARTY_SPECIAL,
  "milkshake": UDUPI_MILKSHAKE,
  "falooda": UDUPI_FALOODA
};

export default function UdupiPalaceFiltered() {
  const { sectionSlug, categorySlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Detect category from URL path
  const isBreakfastHandler = location.pathname.includes('/breakfast/') || categorySlug === 'breakfast';
  const isLunchHandler = location.pathname.includes('/lunch/') || categorySlug === 'lunch';
  const isSnacksHandler = location.pathname.includes('/snacks/') || categorySlug === 'snacks';
  const isJuiceHandler = location.pathname.includes('/filter/juice') || categorySlug === 'juice';
  const isChatsHandler = location.pathname.includes('/filter/chats') || categorySlug === 'chats';
  const isIceCreamPath = location.pathname.includes('/ice-cream-sundaes/');
  const isIceCreamLanding = location.pathname === '/udupi-hotel/filter/ice-cream-sundaes' || location.pathname === '/udupi-hotel/ice-cream-sundaes' || categorySlug === 'ice-cream-sundaes';
  const isIceCreamDetail = sectionSlug && isIceCreamPath;

  // Handle Breakfast filter - show sections or items
  if (isBreakfastHandler) {
    // Landing page: show clickable section cards
    if (!sectionSlug) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace - Breakfast</h2>
          </div>

          <div className="section-list" style={{ marginTop: 12 }}>
            {UDUPI_BREAKFAST_SECTIONS.map(section => (
              <SectionCard
                key={section.slug}
                english={section.english}
                kannada={section.kannada}
                onClick={() => navigate(`/udupi-hotel/filter/breakfast/${section.slug}`)}
              />
            ))}
          </div>
        </div>
      );
    }

    // Section view: show items from selected section
    const section = UDUPI_BREAKFAST_SECTIONS.find(s => s.slug === sectionSlug);
    const items = UDUPI_BREAKFAST_ITEMS[sectionSlug] || [];

    if (!section) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Not Found</h2>
          </div>
          <div style={{ padding: '20px', textAlign: 'center', marginTop: '40px' }}>
            <p style={{ color: 'var(--muted)' }}>Section not found</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/udupi-hotel/filter/breakfast')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace</h2>
        </div>

        <div style={{ margin: '12px 0' }}>
          <h3 style={{ margin: '8px 0' }}>{section.english}</h3>
          <p style={{ margin: '0', fontSize: '0.9em', color: 'var(--muted)' }}>{section.kannada}</p>
        </div>

        <div className="items-list">
          {items.map(item => (
            <ItemCard
              key={`${item.itemName.toLowerCase().replace(/\s+/g, '-')}`}
              id={`udupi-breakfast-${sectionSlug}-${item.itemName.toLowerCase().replace(/\s+/g, '-')}`}
              name={item.itemName}
              kannada={item.kannadaName}
              price={item.price}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle Lunch filter - show sections or items
  if (isLunchHandler) {
    // Landing page: show clickable section cards
    if (!sectionSlug) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace - Lunch</h2>
          </div>

          <div className="section-list" style={{ marginTop: 12 }}>
            {UDUPI_LUNCH_SECTIONS.map(section => (
              <SectionCard
                key={section.slug}
                english={section.english}
                kannada={section.kannada}
                onClick={() => navigate(`/udupi-hotel/filter/lunch/${section.slug}`)}
              />
            ))}
          </div>
        </div>
      );
    }

    // Section view: show items from selected section
    const section = UDUPI_LUNCH_SECTIONS.find(s => s.slug === sectionSlug);
    const items = UDUPI_LUNCH_ITEMS[sectionSlug] || [];

    if (!section) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Not Found</h2>
          </div>
          <div style={{ padding: '20px', textAlign: 'center', marginTop: '40px' }}>
            <p style={{ color: 'var(--muted)' }}>Section not found</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/udupi-hotel/filter/lunch')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace</h2>
        </div>

        <div style={{ margin: '12px 0' }}>
          <h3 style={{ margin: '8px 0' }}>{section.english}</h3>
          <p style={{ margin: '0', fontSize: '0.9em', color: 'var(--muted)' }}>{section.kannada}</p>
        </div>

        <div className="items-list">
          {items.map(item => (
            <ItemCard
              key={`${item.itemName.toLowerCase().replace(/\s+/g, '-')}`}
              id={`udupi-lunch-${sectionSlug}-${item.itemName.toLowerCase().replace(/\s+/g, '-')}`}
              name={item.itemName}
              kannada={item.kannadaName}
              price={item.price}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle Snacks filter - show sections or items
  if (isSnacksHandler) {
    // Landing page: show clickable section cards
    if (!sectionSlug) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace - Snacks</h2>
          </div>

          <div className="section-list" style={{ marginTop: 12 }}>
            {UDUPI_SNACKS_SECTIONS.map(section => (
              <SectionCard
                key={section.slug}
                english={section.english}
                kannada={section.kannada}
                onClick={() => navigate(`/udupi-hotel/filter/snacks/${section.slug}`)}
              />
            ))}
          </div>
        </div>
      );
    }

    // Section view: show items from selected section
    const section = UDUPI_SNACKS_SECTIONS.find(s => s.slug === sectionSlug);
    const items = UDUPI_SNACKS_ITEMS[sectionSlug] || [];

    if (!section) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Not Found</h2>
          </div>
          <div style={{ padding: '20px', textAlign: 'center', marginTop: '40px' }}>
            <p style={{ color: 'var(--muted)' }}>Section not found</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/udupi-hotel/filter/snacks')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace</h2>
        </div>

        <div style={{ margin: '12px 0' }}>
          <h3 style={{ margin: '8px 0' }}>{section.english}</h3>
          <p style={{ margin: '0', fontSize: '0.9em', color: 'var(--muted)' }}>{section.kannada}</p>
        </div>

        <div className="items-list">
          {items.map(item => (
            <ItemCard
              key={`${item.itemName.toLowerCase().replace(/\s+/g, '-')}`}
              id={`udupi-snacks-${sectionSlug}-${item.itemName.toLowerCase().replace(/\s+/g, '-')}`}
              name={item.itemName}
              kannada={item.kannadaName}
              price={item.price}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle Juice filter - show sections or items
  if (isJuiceHandler) {
    // Landing page: show clickable section cards
    if (!sectionSlug) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace - Juices</h2>
          </div>

          <div className="section-list" style={{ marginTop: 12 }}>
            {UDUPI_JUICE_SECTIONS.map(section => (
              <SectionCard
                key={section.slug}
                english={section.english}
                kannada={section.kannada}
                onClick={() => navigate(`/udupi-hotel/filter/juice/${section.slug}`)}
              />
            ))}
          </div>
        </div>
      );
    }

    // Section view: show items from selected section
    const section = UDUPI_JUICE_SECTIONS.find(s => s.slug === sectionSlug);
    const items = UDUPI_JUICE_ITEMS[sectionSlug] || [];

    if (!section) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Not Found</h2>
          </div>
          <div style={{ padding: '20px', textAlign: 'center', marginTop: '40px' }}>
            <p style={{ color: 'var(--muted)' }}>Section not found</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/udupi-hotel/filter/juice')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace</h2>
        </div>

        <div style={{ margin: '12px 0' }}>
          <h3 style={{ margin: '8px 0' }}>{section.english}</h3>
          <p style={{ margin: '0', fontSize: '0.9em', color: 'var(--muted)' }}>{section.kannada}</p>
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

  // Handle Chats filter - show sections or items
  if (isChatsHandler) {
    // Landing page: show clickable section cards
    if (!sectionSlug) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace - Chats</h2>
          </div>

          <div className="section-list" style={{ marginTop: 12 }}>
            {UDUPI_CHATS_SECTIONS.map(section => (
              <SectionCard
                key={section.slug}
                english={section.english}
                kannada={section.kannada}
                onClick={() => navigate(`/udupi-hotel/filter/chats/${section.slug}`)}
              />
            ))}
          </div>
        </div>
      );
    }

    // Section view: show items from selected section
    const section = UDUPI_CHATS_SECTIONS.find(s => s.slug === sectionSlug);
    const items = UDUPI_CHATS_ITEMS[sectionSlug] || [];

    if (!section) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Not Found</h2>
          </div>
          <div style={{ padding: '20px', textAlign: 'center', marginTop: '40px' }}>
            <p style={{ color: 'var(--muted)' }}>Section not found</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="header-btn" onClick={() => navigate('/udupi-hotel/filter/chats')}>← Back</button>
          <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace</h2>
        </div>

        <div style={{ margin: '12px 0' }}>
          <h3 style={{ margin: '8px 0' }}>{section.english}</h3>
          <p style={{ margin: '0', fontSize: '0.9em', color: 'var(--muted)' }}>{section.kannada}</p>
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

  // Handle Ice Cream & Sundaes filter - show sections or coming soon message
  if (isIceCreamLanding || isIceCreamDetail) {
    // Landing page: show clickable section cards
    if (isIceCreamLanding && !sectionSlug) {
      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace - Ice Cream & Sundaes</h2>
          </div>

          <div className="section-list" style={{ marginTop: 12 }}>
            {UDUPI_ICE_CREAM_SECTIONS.map(section => (
              <SectionCard
                key={section.slug}
                english={section.english}
                kannada={section.kannada}
                onClick={() => navigate(`/udupi-hotel/ice-cream-sundaes/${section.slug}`)}
              />
            ))}
          </div>
        </div>
      );
    }

    // Detail page: show items from selected section
    if (isIceCreamDetail) {
      const section = UDUPI_ICE_CREAM_SECTIONS.find(s => s.slug === sectionSlug);
      const items = UDUPI_ICE_CREAM_ITEMS[sectionSlug] || [];
      
      if (!section) {
        return (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
              <h2 style={{ margin: 0 }} className="page-heading">Not Found</h2>
            </div>
            <div style={{ padding: '20px', textAlign: 'center', marginTop: '40px' }}>
              <p style={{ color: 'var(--muted)' }}>Section not found</p>
            </div>
          </div>
        );
      }

      return (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="header-btn" onClick={() => navigate('/udupi-hotel/ice-cream-sundaes')}>← Back</button>
            <h2 style={{ margin: 0 }} className="page-heading">Udupi Palace</h2>
          </div>

          <div style={{ margin: '12px 0' }}>
            <h3 style={{ margin: '8px 0' }}>{section.english}</h3>
            <p style={{ margin: '0', fontSize: '0.9em', color: 'var(--muted)' }}>{section.kannada}</p>
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
  }

  // For all other filters, use the generic FilteredHotelPage
  return <FilteredHotelPage hotelName="Udupi Palace" categorySlug={categorySlug} />;
}
