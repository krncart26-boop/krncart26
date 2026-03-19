import React from "react";

export default function ClosedHotelBanner() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '24px',
      textAlign: 'center',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px'
    }}>
      <span style={{ fontSize: '32px' }}>🔒</span>
      <div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '900',
          margin: '0 0 4px 0'
        }}>
          Hotel Closed Today
        </h3>
        <p style={{
          fontSize: '14px',
          margin: '0',
          opacity: '0.9'
        }}>
          We're closed today. Please visit us tomorrow!
        </p>
      </div>
    </div>
  );
}
