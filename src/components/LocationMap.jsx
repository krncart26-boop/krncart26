// Live Location Map Component - Shows user's location and delivery address on map
import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function LocationMap({ userLocation, deliveryLocation, height = '400px', onLocationSelect = null }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const userMarker = useRef(null);
  const deliveryMarker = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Restaurant center point (Krishnarajanagara)
  const RESTAURANT_LAT = 12.4385610;
  const RESTAURANT_LON = 76.3836699;

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    const defaultLat = userLocation?.lat || RESTAURANT_LAT;
    const defaultLon = userLocation?.lon || RESTAURANT_LON;

    map.current = L.map(mapContainer.current).setView([defaultLat, defaultLon], 15);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current);

    setMapLoaded(true);

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  // Update user location marker
  useEffect(() => {
    if (!mapLoaded || !map.current || !userLocation) return;

    if (userMarker.current) {
      map.current.removeLayer(userMarker.current);
    }

    const blueIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    userMarker.current = L.marker([userLocation.lat, userLocation.lon], {
      icon: blueIcon,
      title: 'Your Location'
    })
      .bindPopup(`<strong>📍 Your Location</strong><br/>Lat: ${userLocation.lat.toFixed(6)}<br/>Lon: ${userLocation.lon.toFixed(6)}<br/>${userLocation.address || 'Location detected'}`)
      .addTo(map.current);

    if (!deliveryLocation) {
      map.current.setView([userLocation.lat, userLocation.lon], 15);
    }
  }, [userLocation, mapLoaded]);

  // Update delivery location marker
  useEffect(() => {
    if (!mapLoaded || !map.current || !deliveryLocation) return;

    if (deliveryMarker.current) {
      map.current.removeLayer(deliveryMarker.current);
    }

    const greenIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    deliveryMarker.current = L.marker([deliveryLocation.lat, deliveryLocation.lon], {
      icon: greenIcon,
      title: 'Delivery Address'
    })
      .bindPopup(`<strong>🏠 Delivery Address</strong><br/>Lat: ${deliveryLocation.lat.toFixed(6)}<br/>Lon: ${deliveryLocation.lon.toFixed(6)}<br/>${deliveryLocation.address || 'Delivery location'}`)
      .addTo(map.current);

    // Fit both markers in view if user location exists
    if (userMarker.current) {
      const group = L.featureGroup([userMarker.current, deliveryMarker.current]);
      map.current.fitBounds(group.getBounds(), { padding: [50, 50] });
    } else {
      map.current.setView([deliveryLocation.lat, deliveryLocation.lon], 15);
    }
  }, [deliveryLocation, mapLoaded]);

  // Handle map click for delivery location selection
  useEffect(() => {
    if (!mapLoaded || !map.current || !onLocationSelect) return;

    const handleMapClick = (e) => {
      onLocationSelect({
        lat: e.latlng.lat,
        lon: e.latlng.lng
      });
    };

    map.current.on('click', handleMapClick);

    return () => {
      if (map.current) {
        map.current.off('click', handleMapClick);
      }
    };
  }, [mapLoaded, onLocationSelect]);

  return (
    <div 
      ref={mapContainer} 
      style={{
        width: '100%',
        height: height,
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(2, 6, 23, 0.04)'
      }}
    />
  );
}
