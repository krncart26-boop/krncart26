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

  // For all other filters, use the generic FilteredHotelPage
  return <FilteredHotelPage hotelName="Udupi Palace" categorySlug={categorySlug} />;
}
