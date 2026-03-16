// Order History placeholder page
import React from "react";

// Haversine formula to calculate distance between two coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// KR Nagar centre point
const KR_NAGAR_LAT = 12.435772;
const KR_NAGAR_LON = 76.383817;
const SERVICE_RADIUS_KM = 15;

export default function OrderHistory(){
  const [orders, setOrders] = React.useState([]);
  const [liveLocation, setLiveLocation] = React.useState(null);
  const [locationError, setLocationError] = React.useState(null);
  const [isWithinServiceArea, setIsWithinServiceArea] = React.useState(false);
  const [distance, setDistance] = React.useState(null);
  const [loadingLocation, setLoadingLocation] = React.useState(true);

  React.useEffect(()=>{
    try{
      const arr = JSON.parse(localStorage.getItem('orderHistory') || '[]');
      setOrders(arr);
    }catch(e){
      setOrders([]);
    }
  }, []);

  // Initialize geolocation on component mount
  React.useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Live location not supported on this device.");
      setLoadingLocation(false);
      return;
    }

    // Get user's current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;

        setLiveLocation({
          latitude: userLat,
          longitude: userLon,
          timestamp: new Date().toLocaleTimeString()
        });

        // Calculate distance from KR Nagar centre
        const calculatedDistance = calculateDistance(
          userLat,
          userLon,
          KR_NAGAR_LAT,
          KR_NAGAR_LON
        );

        setDistance(calculatedDistance);
        setIsWithinServiceArea(calculatedDistance <= SERVICE_RADIUS_KM);
        setLocationError(null);
        setLoadingLocation(false);
      },
      (error) => {
        // Handle geolocation errors
        if (error.code === error.PERMISSION_DENIED) {
          setLocationError("Location permission denied. Enable location to track your order.");
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setLocationError("Location information unavailable.");
        } else if (error.code === error.TIMEOUT) {
          setLocationError("Location request timed out.");
        } else {
          setLocationError("Unable to retrieve location.");
        }
        setLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );

    // Watch position for continuous tracking (optional real-time updates)
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;

        setLiveLocation({
          latitude: userLat,
          longitude: userLon,
          timestamp: new Date().toLocaleTimeString()
        });

        const calculatedDistance = calculateDistance(
          userLat,
          userLon,
          KR_NAGAR_LAT,
          KR_NAGAR_LON
        );

        setDistance(calculatedDistance);
        setIsWithinServiceArea(calculatedDistance <= SERVICE_RADIUS_KM);
      },
      (error) => {
        console.warn("Watch position error:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );

    // Cleanup watch on unmount
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  function clearAllOrders(){
    if(window.confirm('Are you sure you want to clear all order history? This cannot be undone.')){
      localStorage.removeItem('orderHistory');
      setOrders([]);
    }
  }

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <h2 className="page-heading" style={{margin:0}}>Order History</h2>
        {orders.length > 0 && (
          <button 
            onClick={clearAllOrders}
            style={{
              background:'transparent',
              color:'var(--accent)',
              border:'1px solid var(--accent)',
              padding:'6px 12px',
              borderRadius:'8px',
              fontWeight:600,
              fontSize:'13px',
              cursor:'pointer',
              transition:'all 0.18s'
            }}
            onMouseEnter={e => e.target.style.background = 'rgba(211,47,47,0.08)'}
            onMouseLeave={e => e.target.style.background = 'transparent'}
          >
            Clear All
          </button>
        )}
      </div>

      {/* Live Location Tracking Status */}
      {orders.length > 0 && (
        <div style={{
          marginBottom: 16,
          padding: 12,
          borderRadius: 8,
          border: '1px solid #e0e0e0',
          backgroundColor: '#f9f9f9'
        }}>
          {loadingLocation ? (
            <div style={{color: '#666', fontSize: 13}}>
              📍 Detecting your location...
            </div>
          ) : locationError ? (
            <div style={{
              color: '#d32f2f',
              fontSize: 13,
              fontWeight: 500
            }}>
              ❌ {locationError}
            </div>
          ) : isWithinServiceArea ? (
            <div>
              <div style={{
                color: '#2e7d32',
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 4
              }}>
                📍 Live location detected – Order is within service area
              </div>
              {liveLocation && distance !== null && (
                <div style={{
                  fontSize: 12,
                  color: '#666',
                  marginTop: 4
                }}>
                  <div>📌 Your Location: {liveLocation.latitude.toFixed(4)}°N, {liveLocation.longitude.toFixed(4)}°E</div>
                  <div>📏 Distance from K R Nagar: {distance.toFixed(2)} km</div>
                  <div>🕐 Last updated: {liveLocation.timestamp}</div>
                </div>
              )}
            </div>
          ) : (
            <div style={{
              color: '#d32f2f',
              fontSize: 13,
              fontWeight: 500
            }}>
              ❌ Live tracking available only within 15 km of K R Nagar
              {distance !== null && (
                <div style={{fontSize: 12, marginTop: 4}}>
                  Current distance: {distance.toFixed(2)} km
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {orders.length === 0 ? (
        <p style={{color:'var(--muted)'}}>No orders yet — this page will list past orders in the future.</p>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {orders.map(o => (
            <div key={o.id} style={{padding:12,borderRadius:10,background:'#fff',boxShadow:'0 1px 3px rgba(2,6,23,0.04)'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{fontWeight:700}}>{new Date(o.createdAt).toLocaleString()}</div>
                <div style={{fontSize:13,color:'var(--muted)'}}>{o.customerName || 'Guest'}</div>
              </div>

              <div style={{marginTop:8,fontSize:14}}>
                <div><strong>Phone:</strong> {o.customerPhone || 'N/A'}</div>
                <div><strong>Address:</strong> {o.customerAddress}</div>
              </div>

              <div style={{marginTop:8}}>
                <strong>Items</strong>
                <ul>
                  {o.items.map(it => (
                    <li key={it.id}>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <div>{it.name}</div>
                        <div style={{fontWeight:700,background:'#e3f2fd',padding:'4px 8px',borderRadius:'6px',fontSize:'13px'}}>Qty: {it.qty}</div>
                      </div>
                      {it.productQuantity && <div style={{fontSize:12,color:'var(--muted)',marginTop:4}}>Size: {it.productQuantity}</div>}
                      <div style={{fontSize:12,color:'var(--muted)',marginLeft:0,marginTop:4}}>
                        Parcel ₹{it.parcelRate.toFixed(2)} each → ₹{it.parcelFee.toFixed(2)}
                      </div>
                      <div style={{fontSize:12,color:'var(--muted)',marginLeft:0}}>
                        {it.hotelName && <span>{it.hotelName}</span>}
                        {it.subsection && <span>{' > '}{it.subsection}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{marginTop:8}}>
                <div>Item Total: ₹{Number(o.totals.base).toFixed(2)}</div>
                <div>Parcel Charges: ₹{Number(o.totals.parcelFee).toFixed(2)}</div>
                <div>Service Charge (3%): ₹{Number(o.totals.gst).toFixed(2)}</div>
                <div>Platform Fee (2%): ₹{Number(o.totals.platformFee).toFixed(2)}</div>
                <div>Delivery: ₹{Number(o.totals.delivery).toFixed(2)}</div>
                <div style={{fontWeight:800,marginTop:4}}>Grand Total: ₹{Number(o.totals.grandTotal).toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
