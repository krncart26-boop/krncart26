// Stats card showing key metrics: hotels count, rating, and delivery time
import React from "react";

export default function StatsCard() {
  const stats = [
    { icon: "🏪", label: "20+ Hotels", value: "Variety" },
    { icon: "⭐", label: "4.8 Stars", value: "Rating" },
    { icon: "🚚", label: "25 Min", value: "Avg Delivery" },
  ];

  return (
    <div className="stats-card-container">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-item">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-label">{stat.label}</div>
          <div className="stat-value">{stat.value}</div>
        </div>
      ))}
    </div>
  );
}
