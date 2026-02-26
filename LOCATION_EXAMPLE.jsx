// Example: How to use Location in other pages
// This file serves as a reference for implementing location features in other pages

import React from 'react';
import LocationMap from '../components/LocationMap';
import { useLocation } from '../context/LocationContext';
import { 
  getUserLocation, 
  calculateDeliveryFeasibility 
} from '../utils/locationUtils';

export default function LocationExample() {
  // Option 1: Using the Location Context (Recommended for global state)
  const { userLocation, setLocation, isLoading, error } = useLocation();

  // Option 2: Using local state with utility functions
  const [delivery, setDelivery] = React.useState(null);

  const handleGetLocation = async () => {
    try {
      const position = await getUserLocation();
      setLocation(position);
      
      // Check delivery feasibility
      const feasibility = calculateDeliveryFeasibility(
        position.lat,
        position.lon,
        { maxDistanceKm: 5 }
      );
      setDelivery(feasibility);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Location Feature Example</h3>

      {/* Button to get location */}
      <button 
        onClick={handleGetLocation}
        disabled={isLoading}
      >
        {isLoading ? 'Getting Location...' : 'Get My Location'}
      </button>

      {/* Error display */}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {/* Location info display */}
      {userLocation && (
        <div>
          <h4>Your Location:</h4>
          <p>Latitude: {userLocation.lat.toFixed(6)}</p>
          <p>Longitude: {userLocation.lon.toFixed(6)}</p>
          <p>Address: {userLocation.formattedAddress}</p>
          
          {/* Show map */}
          <LocationMap
            userLocation={{
              lat: userLocation.lat,
              lon: userLocation.lon,
              address: userLocation.formattedAddress
            }}
            height="400px"
          />

          {/* Delivery info */}
          {delivery && (
            <div>
              <p>{delivery.message}</p>
              <p>Distance: {delivery.distance.toFixed(2)} km</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
