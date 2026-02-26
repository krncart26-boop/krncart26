// Location utility functions for geolocation and address formatting

// Constants
export const RESTAURANT_CENTER = {
  lat: 12.4385610,
  lon: 76.3836699,
  name: 'KRN Cart - Krishnarajanagara'
};

/**
 * Convert degrees to radians
 */
export function toRad(value) {
  return value * Math.PI / 180;
}

/**
 * Calculate distance between two coordinates using Haversine formula
 * Returns distance in kilometers
 */
export function haversineDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Reverse geocode coordinates to get address using Nominatim (OpenStreetMap)
 * Returns { address, displayName, components }
 */
export async function reverseGeocode(lat, lon) {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&accept-language=en&zoom=18&addressdetails=1`;
    const response = await fetch(url, { 
      headers: { 'Accept': 'application/json' },
      mode: 'cors'
    });
    
    if (!response.ok) {
      throw new Error('Reverse geocoding failed');
    }
    
    const data = await response.json();
    return {
      address: data.address || {},
      displayName: data.display_name || `${lat.toFixed(6)}, ${lon.toFixed(6)}`,
      lat: data.lat,
      lon: data.lon,
      boundingbox: data.boundingbox
    };
  } catch (error) {
    console.error('Reverse geocoding error:', error);
    return {
      address: {},
      displayName: `${lat.toFixed(6)}, ${lon.toFixed(6)}`,
      lat: lat,
      lon: lon,
      error: error.message
    };
  }
}

/**
 * Format location details for display
 */
export function formatLocationDetails(geocodedData) {
  const addr = geocodedData.address || {};
  const parts = [];
  
  if (addr.house_number || addr.road) {
    parts.push(`${addr.house_number || ''} ${addr.road || ''}`.trim());
  }
  if (addr.neighbourhood) parts.push(addr.neighbourhood);
  if (addr.suburb) parts.push(addr.suburb);
  if (addr.city) parts.push(addr.city);
  if (addr.state) parts.push(addr.state);
  if (addr.postcode) parts.push(addr.postcode);
  
  return {
    fullAddress: geocodedData.displayName,
    formattedAddress: parts.filter(p => p).join(', '),
    houseNumber: addr.house_number,
    street: addr.road,
    city: addr.city,
    state: addr.state,
    postcode: addr.postcode,
    country: addr.country,
    landmark: addr.neighbourhood || addr.suburb
  };
}

/**
 * Get user's current location with geolocation API
 */
export async function getUserLocation(options = {}) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported on this browser'));
      return;
    }

    const isSecure = window.location.protocol === 'https:' || 
                     window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1';
    
    if (!isSecure && window.location.protocol !== 'file:') {
      reject(new Error('Requires HTTPS for security. Use localhost or HTTPS URL.'));
      return;
    }

    const defaultOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          accuracy: position.coords.accuracy,
          altitude: position.coords.altitude,
          altitudeAccuracy: position.coords.altitudeAccuracy,
          heading: position.coords.heading,
          speed: position.coords.speed,
          timestamp: position.timestamp
        });
      },
      (error) => {
        let message = 'Unknown geolocation error';
        switch (error.code) {
          case 1:
            message = 'Location permission denied. Please enable location in browser settings.';
            break;
          case 2:
            message = 'Location unavailable. Check device location services.';
            break;
          case 3:
            message = 'Location request timeout. Please try again.';
            break;
          default:
            message = error.message || 'Failed to get location';
        }
        reject(new Error(message));
      },
      { ...defaultOptions, ...options }
    );
  });
}

/**
 * Save location details to localStorage
 */
export function saveLocationToStorage(locationData) {
  try {
    const stored = {
      timestamp: new Date().toISOString(),
      ...locationData
    };
    localStorage.setItem('userLocation', JSON.stringify(stored));
    return true;
  } catch (error) {
    console.error('Failed to save location:', error);
    return false;
  }
}

/**
 * Get saved location from localStorage
 */
export function getStoredLocation() {
  try {
    const stored = localStorage.getItem('userLocation');
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Failed to retrieve location:', error);
    return null;
  }
}

/**
 * Clear saved location from localStorage
 */
export function clearStoredLocation() {
  try {
    localStorage.removeItem('userLocation');
    return true;
  } catch (error) {
    console.error('Failed to clear location:', error);
    return false;
  }
}

/**
 * Format location for display in UI
 */
export function formatAddressForDisplay(geocoded) {
  if (!geocoded) return '';
  const addr = geocoded.address || {};
  
  const mainParts = [
    addr.road && `${addr.house_number || ''} ${addr.road}`.trim(),
    addr.neighbourhood,
    addr.suburb
  ].filter(Boolean);
  
  const cityParts = [
    addr.city,
    addr.state,
    addr.postcode
  ].filter(Boolean);
  
  return [
    mainParts.join(', '),
    cityParts.join(', ')
  ].filter(Boolean).join('\n');
}

/**
 * Calculate delivery feasibility
 */
export function calculateDeliveryFeasibility(userLat, userLon, options = {}) {
  const maxDistance = options.maxDistanceKm || 5;
  const distance = haversineDistanceKm(
    userLat,
    userLon,
    RESTAURANT_CENTER.lat,
    RESTAURANT_CENTER.lon
  );
  
  return {
    distance: distance,
    isDeliverable: distance <= maxDistance,
    maxDistance: maxDistance,
    message: distance <= maxDistance 
      ? `✅ Delivery available (${distance.toFixed(2)} km away)`
      : `❌ Outside delivery area (${distance.toFixed(2)} km away)`
  };
}
