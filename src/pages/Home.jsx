// Home page: header provided by Header component; includes search, hero card, and hotels grid
import React, { useState, useRef, useEffect } from "react";
import HeroCard from "../components/HeroCard";
import HotelGrid from "../components/HotelGrid";
import SearchResults from "../components/SearchResults";
import SEARCH_INDEX from "../data/searchIndex";

export default function Home(){
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if(!query || query.trim().length === 0){
      setResults([]);
      return;
    }

    const q = query.trim().toLowerCase();

    // Simple substring match against itemName (case-insensitive)
    const matches = SEARCH_INDEX.filter(item => item.itemName.toLowerCase().includes(q)).slice(0, 8);
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

  return (
    <div>
      <div style={{display:'flex',flexDirection:'column'}} ref={containerRef}>
        <div className="search-bar">
          <input
            className="search-input"
            placeholder="Search food (e.g., 'Masala Dosa')"
            aria-label="Search"
            value={query}
            onChange={e=>setQuery(e.target.value)}
          />

          <SearchResults results={results} onClose={()=>{ setResults([]); setQuery(''); }} />
        </div>

        <HeroCard />

        <h4 style={{marginTop:18, marginBottom:6}}>Hotels</h4>
        <HotelGrid />

      </div>
    </div>
  );
}
