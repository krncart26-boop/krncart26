# Live Location Map Integration - Implementation Guide

## Overview
This implementation adds real-time geolocation and live map display to your KRN Cart application. Users can now share their exact location (latitude & longitude) with automatic address detection and interactive map visualization.

## 🎯 Features Added

### 1. **Real Geolocation Detection**
   - Uses browser's Geolocation API to detect user's precise location
   - Stores latitude, longitude, and accuracy information
   - Works on HTTPS and localhost/127.0.0.1

### 2. **Reverse Geocoding**
   - Automatically converts coordinates to human-readable addresses
   - Uses OpenStreetMap's Nominatim (free, no API key required)
   - Extracts detailed address components (street, city, state, postcode, etc.)

### 3. **Interactive Map Display**
   - Powered by Leaflet.js (open-source, lightweight)
   - Shows user location with blue marker
   - Shows delivery address with green marker
   - Calculates distance between user and restaurant
   - Map tiles from OpenStreetMap

### 4. **Delivery Feasibility Check**
   - Calculates distance from restaurant using Haversine formula
   - Shows if delivery is available (within 5 km by default)
   - Displays distance and delivery status

### 5. **Location Storage**
   - Saves complete location data to localStorage
   - Persists across sessions
   - Includes timestamp for future reference

## 📦 Dependencies Added

```json
{
  "leaflet": "^1.9.4",
  "react-leaflet": "^4.2.1"
}
```

## 🗂️ Files Created/Modified

### New Files:
1. **`src/components/LocationMap.jsx`** - Interactive map component
2. **`src/utils/locationUtils.js`** - All location utility functions
3. **`src/context/LocationContext.jsx`** - Global location state management

### Modified Files:
1. **`src/pages/Cart.jsx`** - Enhanced with map and detailed location UI
2. **`package.json`** - Added Leaflet dependencies

## 🚀 How to Use

### 1. Installation
Navigate to your project directory and install dependencies:
```bash
npm install
```

### 2. Using Map in Cart Page

The Cart page now includes:

#### Get Live Location Button
```jsx
<button onClick={useMyLocation} disabled={locationLoading}>
  {locationLoading ? '🔄 Detecting Location...' : '📍 Use My Live Location'}
</button>
```

#### Location Display
When location is detected, it shows:
- ✅ Latitude and Longitude (6 decimal places)
- ✅ Address accuracy (±Xm)
- ✅ Full formatted address (street, city, state)
- ✅ Delivery feasibility status

#### Interactive Map
```jsx
<LocationMap 
  userLocation={{ lat, lon, address }}
  deliveryLocation={{ lat, lon, address }}
  height="300px"
/>
```

### 3. Using Location Context (Optional)

For other pages needing location:

**In App.jsx:**
```jsx
import { LocationProvider } from './context/LocationContext';

<LocationProvider>
  <YourApp />
</LocationProvider>
```

**In any component:**
```jsx
import { useLocation } from '../context/LocationContext';

function MyComponent() {
  const { userLocation, setLocation, clearLocation } = useLocation();
  // Use location...
}
```

### 4. Location Data Structure

```javascript
{
  // Coordinates
  lat: 12.123456,
  lon: 76.543210,
  accuracy: 5.5,  // meters
  altitude: 650,   // meters
  heading: 45,     // degrees
  speed: 10,       // m/s
  timestamp: 1234567890000,

  // Address Components
  displayName: "Full address string",
  formattedAddress: "City, State, Country",
  houseNumber: "123",
  street: "Main Street",
  city: "Krishnarajanagara",
  state: "Karnataka",
  postcode: "571636",
  country: "India",
  landmark: "Neighborhood name",

  // Metadata
  createdAt: "2024-01-15T10:30:00Z"
}
```

## 🔒 Security & Privacy

- **HTTPS Required**: Geolocation API only works on secure contexts (HTTPS)
- **Localhost Support**: Works on localhost/127.0.0.1 for development
- **User Permission**: Browser prompts user for location permission
- **No API Keys**: Uses public Nominatim/OpenStreetMap (respects usage limits)
- **Local Storage**: All data stored locally on user's device

## 🛠️ Utility Functions

### `getUserLocation(options)`
Gets user's current position with high accuracy.
```javascript
import { getUserLocation } from '../utils/locationUtils';

const position = await getUserLocation();
// Returns: { lat, lon, accuracy, altitude, heading, speed, timestamp }
```

### `reverseGeocode(lat, lon)`
Converts coordinates to address.
```javascript
const geocoded = await reverseGeocode(lat, lon);
// Returns: { address, displayName, lat, lon, boundingbox }
```

### `formatLocationDetails(geocodedData)`
Formats address into structured components.
```javascript
const formatted = formatLocationDetails(geocoded);
// Returns: { fullAddress, formattedAddress, houseNumber, street, city, ... }
```

### `calculateDeliveryFeasibility(lat, lon, options)`
Checks if delivery is available.
```javascript
const feasibility = calculateDeliveryFeasibility(lat, lon, { maxDistanceKm: 5 });
// Returns: { distance, isDeliverable, maxDistance, message }
```

### `saveLocationToStorage(locationData)`
Saves location to localStorage.

### `getStoredLocation()`
Retrieves saved location from localStorage.

### `clearStoredLocation()`
Clears location from localStorage.

## 🎨 Styling

The implementation uses inline styles for flexibility. To customize:

1. **Map Container**: Adjust `height`, `borderRadius`, `border`
2. **Location Info Box**: Modify background colors and text
3. **Buttons**: Use existing `.button` CSS classes

## 📍 Map Center

Default restaurant location:
```javascript
{
  lat: 12.4385610,
  lon: 76.3836699,
  name: 'KRN Cart - Krishnarajanagara'
}
```

Change in [src/utils/locationUtils.js](src/utils/locationUtils.js):
```javascript
export const RESTAURANT_CENTER = {
  lat: 12.4385610,
  lon: 76.3836699,
  name: 'Your Restaurant Name'
};
```

## ⚙️ Configuration

### Delivery Radius
In Cart.jsx, change:
```javascript
{ maxDistanceKm: 5 }  // Change 5 to your desired radius
```

### Location Accuracy
In locationUtils.js:
```javascript
const defaultOptions = {
  enableHighAccuracy: true,  // High accuracy (uses GPS if available)
  timeout: 10000,            // 10 second timeout
  maximumAge: 0              // Don't use cached position
};
```

## 🐛 Troubleshooting

### "Geolocation not supported"
- Use modern browser (Chrome, Firefox, Safari, Edge)
- Make sure site is on HTTPS (or localhost for testing)

### "Permission denied"
- Check browser's location permissions in settings
- Reload page and try again
- Check if location is allowed for this website

### "Location unavailable"
- Check device's location services are enabled
- Try again in a different location
- Ensure GPS/other location methods are available

### Map not showing
- Check browser console for errors
- Verify Leaflet CSS is loaded: `leaflet/dist/leaflet.css`
- Ensure map container has valid height

### Address not found
- Nominatim rate limit hit (14 requests per second limit)
- Try again later
- Internet connection may be slow

## 📱 Demo Usage

1. Go to Cart page
2. Click "📍 Use My Live Location" button
3. Allow location permission in browser
4. See your coordinates, address, and map
5. Map shows your location with delivery feasibility
6. Proceed with order confirmation

## 🔄 Order Confirmation with Location

When confirming order, location data is included:
- Sent to WhatsApp with coordinates
- Saved in order history
- Includes accuracy and timestamp
- Stored in localStorage

## 📊 Order History Format

Orders now include location:
```javascript
{
  id: "order_1234567890",
  location: {
    latitude: 12.123456,
    longitude: 76.543210,
    accuracy: 5.5,
    address: "Full address",
    formattedAddress: "City, State",
    country: "India",
    state: "Karnataka",
    city: "Krishnarajanagara",
    postcode: "571636",
    timestamp: 1234567890000
  },
  // ... other order data
}
```

## 🌐 API References

- **Geolocation API**: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- **Leaflet.js**: [Official Docs](https://leafletjs.com/)
- **OpenStreetMap Nominatim**: [API Docs](https://nominatim.org/release-docs/latest/api/Reverse/)

## ✅ Testing Checklist

- [ ] Location button appears in Cart page
- [ ] Clicking button prompts for permission
- [ ] Coordinates display after permission
- [ ] Map shows with markers
- [ ] Distance calculation works
- [ ] Delivery feasibility shows correct status
- [ ] Address gets reverse-geocoded
- [ ] Location persists after page reload
- [ ] Order includes location coordinates
- [ ] Works on mobile (HTTPS required)

## 📝 Notes

- Location data is stored in browser's localStorage
- No location data is sent to external servers except Nominatim for geocoding
- Consider implementing backup/fallback for users who deny location permission
- For production, consider caching geocoding results to reduce API calls

