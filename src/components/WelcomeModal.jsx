// Modern welcome overlay that appears once per session
import React, { useState, useEffect } from "react";

export default function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if welcome modal was already shown in this session
    const hasSeenWelcome = sessionStorage.getItem('welcomeModalShown');
    
    if (!hasSeenWelcome) {
      setIsVisible(true);
      sessionStorage.setItem('welcomeModalShown', 'true');
      
      // Auto-dismiss after 4 seconds
      const timer = setTimeout(() => {
        handleDismiss();
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
    }, 500); // Duration of fade-out animation
  };

  if (!isVisible) return null;

  return (
    <div className={`welcome-modal-backdrop ${isExiting ? 'fade-out' : 'fade-in'}`}>
      <div className="welcome-modal-card">
        {/* Logo */}
        <div className="welcome-logo-container">
          <svg 
            viewBox="0 0 500 360" 
            className="welcome-logo-svg"
            alt="KRN Cart Logo"
          >
            {/* Blue running figure */}
            <g fill="#4A9FBE">
              {/* Head */}
              <circle cx="175" cy="75" r="20" />
              
              {/* Body */}
              <rect x="160" y="100" width="30" height="50" rx="5" />
              
              {/* Left arm extended back */}
              <rect x="90" y="110" width="70" height="15" rx="7" transform="rotate(-30 90 117)" />
              
              {/* Right arm extended forward */}
              <rect x="190" y="100" width="60" height="12" rx="6" />
              
              {/* Left leg forward */}
              <g>
                <line x1="165" y1="150" x2="145" y2="200" strokeWidth="12" stroke="#4A9FBE" strokeLinecap="round" />
              </g>
              
              {/* Right leg back */}
              <g>
                <line x1="185" y1="150" x2="210" y2="200" strokeWidth="12" stroke="#4A9FBE" strokeLinecap="round" />
              </g>
              
              {/* Motion lines */}
              <g stroke="#4A9FBE" strokeWidth="6" strokeLinecap="round" opacity="0.6">
                <line x1="40" y1="100" x2="80" y2="100" />
                <line x1="35" y1="130" x2="85" y2="130" />
                <line x1="40" y1="160" x2="90" y2="160" />
              </g>
            </g>
            
            {/* KRN Text - Red */}
            <text 
              x="280" 
              y="150" 
              fontSize="90" 
              fontWeight="bold" 
              fill="#C41E3A"
              fontFamily="Arial, sans-serif"
            >
              KRN
            </text>
            
            {/* Cart Text - Dark Red */}
            <text 
              x="280" 
              y="230" 
              fontSize="50" 
              fontWeight="300" 
              fill="#C41E3A"
              fontFamily="Arial, sans-serif"
            >
              Cart
            </text>
          </svg>
        </div>

        {/* Welcome Text */}
        <div className="welcome-content">
          <h1 className="welcome-heading">Welcome to KRN CART</h1>
          <p className="welcome-subtitle">Order your favorite food from K R Nagar's best restaurants</p>
          
          <button 
            className="welcome-btn" 
            onClick={handleDismiss}
          >
            Explore Now
          </button>
        </div>

        {/* Skip button */}
        <button 
          className="welcome-skip-btn"
          onClick={handleDismiss}
          aria-label="Skip welcome screen"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
