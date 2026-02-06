// Splash screen: shows modern welcome with logo for 3 seconds then navigates to Home
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
      <div className="splash-container">
        {/* Brand Heading */}
        <h1 className="splash-heading">KRN CART</h1>

        {/* Company Tagline */}
        <p className="splash-tagline">We Care, We Deliver</p>
      </div>
    </div>
  );
}
