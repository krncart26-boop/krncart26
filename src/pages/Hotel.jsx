// Placeholder hotel page. Shows the hotel name as a heading.
import React from "react";
import { useParams } from "react-router-dom";

export default function Hotel(){
  const { hotelName } = useParams();
  const name = decodeURIComponent(hotelName || '');

  // Only Ayyangars Bakery and Juice Junction show the temporary Coming Soon page
  const isComingSoon = name === 'Ayyangars Bakery' || name === 'Juice Junction';

  // Choose a friendly quote per hotel (easy to change later)
  const quote = name === 'Ayyangars Bakery'
    ? 'Something delicious is baking for you!'
    : 'Fresh flavours are on the way 🍽️';

  return (
    <div>
      <h2 className="page-heading">{name}</h2>

      {isComingSoon ? (
        <div className="coming-soon-page">
          <div className="coming-soon-banner">
            <div className="coming-soon-title">Coming Soon</div>
            <div className="coming-soon-quote">{quote}</div>
          </div>
        </div>
      ) : (
        <>
          <p style={{color:'var(--muted)'}}>This is a placeholder page for <strong>{name}</strong>. Food items will be added later.</p>
        </>
      )}
    </div>
  );
}
