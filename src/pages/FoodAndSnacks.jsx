// Food and Snacks page: shows all restaurants and food items
import React, { useState, useRef, useEffect } from "react";
import HeroBannerCarousel from "../components/HeroBannerCarousel";
import PopularDishesCarousel from "../components/PopularDishesCarousel";
import StatsCard from "../components/StatsCard";
import HotelGrid, { hotelDatabase } from "../components/HotelGrid";
import SearchResults from "../components/SearchResults";
import SEARCH_INDEX from "../data/searchIndexAuto";

const CATEGORIES = ["All", "Breakfast", "Lunch", "Evening Food", "Snacks", "Juices", "Chats", "Bakery", "Ice Cream & Sundaes"];

export default function FoodAndSnacks(){
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);
  const tabsRef = useRef(null);

  useEffect(() => {
    if(!query || query.trim().length === 0){
      setResults([]);
      return;
    }

    const q = query.trim().toLowerCase();
    // Match against itemName, kannada, hotelName, sectionName
    const matches = SEARCH_INDEX.filter(item => {
      return (
        (item.itemName && item.itemName.toLowerCase().includes(q)) ||
        (item.kannada && item.kannada.toLowerCase().includes(q)) ||
        (item.hotelName && item.hotelName.toLowerCase().includes(q)) ||
        (item.sectionName && item.sectionName.toLowerCase().includes(q))
      );
    }).slice(0, 12); // Show up to 12 results for better coverage
    setResults(matches);
  }, [query]);

  // Close results when clicking outside
  useEffect(() => {
    function onClick(e){
      if(containerRef.current && !containerRef.current.contains(e.target)){
        setResults([]);
      }
    }
    window.addEventListener('click', onClick);
    return ()=>window.removeEventListener('click', onClick);
  },[]);

  // Filter hotels based on active category
  const filteredHotels = activeCategory === 'All' 
    ? hotelDatabase 
    : hotelDatabase.filter(hotel => hotel.categories.includes(activeCategory));

  return (
    <div>
      <div style={{display:'flex',flexDirection:'column'}} ref={containerRef}>
        <div className="search-bar">
          <input
            className="search-input"
            placeholder="🔍 Search food (e.g., 'Masala Dosa')"
            aria-label="Search"
            value={query}
            onChange={e=>setQuery(e.target.value)}
          />

          {query && results.length === 0 ? (
            <div className="search-results" style={{padding:12,background:'#fff',borderRadius:12,color:'var(--muted)',marginTop:4}}>
              No matching items found
            </div>
          ) : (
            <SearchResults results={results} onClose={()=>{ setResults([]); setQuery(''); }} />
          )}
        </div>

        <HeroBannerCarousel />

        <StatsCard />

        <PopularDishesCarousel />

        <div className="category-tabs-container" ref={tabsRef}>
          <div className="category-tabs">
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <h4 style={{marginTop:3, marginBottom:2}}>Hotels</h4>
        <HotelGrid hotels={filteredHotels} activeFilter={activeCategory} />

      </div>
    </div>
  );
}
