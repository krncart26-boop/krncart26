// LocationContext - Manages user location state across the app
import React, { createContext, useContext, useState, useCallback } from 'react';
import { saveLocationToStorage, getStoredLocation, clearStoredLocation } from '../utils/locationUtils';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load location from storage on mount
  React.useEffect(() => {
    const stored = getStoredLocation();
    if (stored) {
      setUserLocation(stored);
    }
  }, []);

  const setLocation = useCallback((location) => {
    setUserLocation(location);
    if (location) {
      saveLocationToStorage(location);
    }
  }, []);

  const clearLocation = useCallback(() => {
    setUserLocation(null);
    setError(null);
    clearStoredLocation();
  }, []);

  const value = {
    userLocation,
    isLoading,
    error,
    setLocation,
    setError: (err) => setError(err),
    clearLocation,
    setIsLoading: (loading) => setIsLoading(loading),
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within LocationProvider');
  }
  return context;
};
