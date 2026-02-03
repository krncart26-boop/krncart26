// Splash screen: shows welcome message for 3 seconds then navigates to Home
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash(){
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate('/home'), 3000); // 3 seconds
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="splash">
      <div className="splash-text">
        <span>Welcome to</span>
        <span style={{display:'block'}}>
          <span style={{color:'var(--sky)'}}>KRN</span>
          <span className="accent" style={{color:'var(--accent)'}}> CART</span>
        </span>
      </div>
    </div>
  );
}
