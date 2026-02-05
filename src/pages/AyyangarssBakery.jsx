import React from "react";
import { useNavigate } from "react-router-dom";

export default function AyyangarssBakery() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button className="header-btn" onClick={() => navigate('/home')}>← Back</button>
        <h2 style={{ margin: 0 }} className="page-heading">Ayyangars Bakery</h2>
      </div>

      {/* Coming Soon banner */}
      <div className="coming-soon-page">
        <div className="coming-soon-banner">
          <div className="coming-soon-title">Coming Soon</div>
          <div className="coming-soon-quote">Something delicious is baking for you!</div>
        </div>
      </div>
    </div>
  );
}
