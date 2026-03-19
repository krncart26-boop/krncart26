import React, { useState, useEffect } from "react";

export default function UgadiBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if banner should be visible
    const now = new Date();
    const removeTime = new Date(2026, 2, 20, 4, 30, 0); // March 20, 2026 at 4:30 AM
    
    if (now >= removeTime) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FDB833 100%)',
      borderRadius: '16px',
      padding: '24px',
      marginBottom: '24px',
      textAlign: 'center',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        left: '-20px',
        fontSize: '80px',
        opacity: '0.1'
      }}>🎉</div>
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-20px',
        fontSize: '80px',
        opacity: '0.1'
      }}>🎊</div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '900',
          margin: '0 0 8px 0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          🌸 Happy Ugadi! 🌸
        </h2>
        <p style={{
          fontSize: '16px',
          fontWeight: '600',
          margin: '0 0 12px 0',
          opacity: '0.95'
        }}>
          Wishing you a prosperous and joyful new year!
        </p>
        <p style={{
          fontSize: '14px',
          margin: '0',
          opacity: '0.85'
        }}>
          Celebrate with delicious food from your favorite restaurants 🍲
        </p>
      </div>
    </div>
  );
}
