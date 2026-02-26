// Cart page: lists cart items with breakdown and controls
import React from "react";
import { useCart } from "../context/CartContext";
import LocationMap from "../components/LocationMap";
import { 
  getUserLocation, 
  reverseGeocode, 
  formatLocationDetails,
  saveLocationToStorage,
  getStoredLocation,
  calculateDeliveryFeasibility,
  RESTAURANT_CENTER
} from "../utils/locationUtils";

export default function Cart(){
  const { cartItems, count, totals, updateItemQty, removeItem, clearCart, computeItemBreakdown } = useCart();
  const [address, setAddress] = React.useState('');
  const [userLocationData, setUserLocationData] = React.useState(null);
  const [deliveryLocationData, setDeliveryLocationData] = React.useState(null);
  const [locationLoading, setLocationLoading] = React.useState(false);
  const [locationError, setLocationError] = React.useState(null);
  const [showMap, setShowMap] = React.useState(false);
  const [deliveryFeasibility, setDeliveryFeasibility] = React.useState(null);

  // Saved account details (if any)
  const [savedCustomerName, setSavedCustomerName] = React.useState('');
  const [savedCustomerPhone, setSavedCustomerPhone] = React.useState('');
  const [savedCustomerAddress, setSavedCustomerAddress] = React.useState('');

  // Load saved account details and location on mount
  React.useEffect(()=>{
    const n = localStorage.getItem('customerName') || '';
    const p = localStorage.getItem('customerPhone') || '';
    const a = localStorage.getItem('customerAddress') || '';
    if(n) setSavedCustomerName(n);
    if(p) setSavedCustomerPhone(p);
    if(a) setSavedCustomerAddress(a);

    // Try to load stored location
    const storedLocation = getStoredLocation();
    if(storedLocation && storedLocation.lat && storedLocation.lon){
      // Ensure lat/lon are numbers
      const validLocation = {
        ...storedLocation,
        lat: parseFloat(storedLocation.lat),
        lon: parseFloat(storedLocation.lon),
        accuracy: storedLocation.accuracy ? parseFloat(storedLocation.accuracy) : null
      };
      setUserLocationData(validLocation);
      if(validLocation.formattedAddress){
        setAddress(validLocation.formattedAddress);
      }
    }

    // Pre-fill delivery address only if cart address is currently empty
    if(a && !address){ setAddress(a); }
  }, []);

  // Calculate delivery feasibility when user location changes
  React.useEffect(()=>{
    if(userLocationData?.lat && userLocationData?.lon){
      const feasibility = calculateDeliveryFeasibility(
        Number(userLocationData.lat), 
        Number(userLocationData.lon),
        { maxDistanceKm: 5 }
      );
      setDeliveryFeasibility(feasibility);
    }
  }, [userLocationData]);

  // Derived final address and contact for validation
  const finalAddressPreview = address || savedCustomerAddress;
  const hasContactInfo = Boolean(savedCustomerName && savedCustomerPhone);

  // Detect location with status
  const useMyLocation = async () => {
    setLocationLoading(true);
    setLocationError(null);
    
    try{
      // Get current position
      const position = await getUserLocation();
      
      // Reverse geocode to get address details
      const geocoded = await reverseGeocode(position.lat, position.lon);
      const formatted = formatLocationDetails(geocoded);
      
      // Store the full location data - ensure numeric values
      const fullLocationData = {
        ...position,
        ...geocoded,
        ...formatted,
        lat: Number(position.lat),
        lon: Number(position.lon),
        accuracy: position.accuracy ? Number(position.accuracy) : null
      };
      
      setUserLocationData(fullLocationData);
      setAddress(formatted.formattedAddress || geocoded.displayName);
      
      // Save to localStorage
      saveLocationToStorage(fullLocationData);

      // Create delivery location marker (show on map)
      if(geocoded){
        setDeliveryLocationData({
          lat: Number(geocoded.lat),
          lon: Number(geocoded.lon),
          address: geocoded.displayName
        });
      }

      setShowMap(true);
    }catch(error){
      setLocationError(error.message);
    }finally{
      setLocationLoading(false);
    }
  };

  // Delivery charge: use item-specific delivery charge if available, otherwise apply default logic (₹20 if subtotal < 100, else free)
  const deliveryCharge = React.useMemo(()=>{
    // If items have custom delivery charges, return the sum (already calculated in totals)
    if(cartItems.some(item => item.deliveryCharge !== undefined)){
      return totals.deliveryFee || 0;
    }
    // Otherwise use default logic
    if(!totals || typeof totals.subtotal === 'undefined') return 0;
    return totals.subtotal < 100 ? 20 : 0;
  }, [totals, cartItems]);

  function confirmOrder(){
    // Force redirect behavior per request: do not block for missing fields. Only block if cart is empty.
    if(!cartItems || cartItems.length === 0){
      alert('Your cart is empty');
      return;
    }

    // Fallbacks for missing customer details/address
    const savedNameRaw = localStorage.getItem('customerName') || '';
    const savedPhoneRaw = localStorage.getItem('customerPhone') || '';
    const savedAddr = localStorage.getItem('customerAddress') || '';

    const name = savedNameRaw || 'Guest';
    const phone = savedPhoneRaw || 'Not provided';
    const finalAddress = address || savedAddr || 'Will be shared on call';

    // Build minimal order details lines
    const itemsLines = cartItems.map(i => {
      const lineTotal = (i.basePrice * i.qty).toFixed(2);
      return `- ${i.name} | ${i.hotelName || 'Unknown'}${i.subsection ? ' > ' + i.subsection : ''} | Qty: ${i.qty} | Price: ₹${lineTotal}`;
    }).join('\n');

    const total = (totals.total + deliveryCharge).toFixed(2);

    const message = `🌟 KRN Cart — Order Confirmation 🌟\n\nCustomer Name: ${name}\nPhone: ${phone}\nAddress: ${finalAddress}\n\nOrder Details:\n${itemsLines}\n\nTotal: ₹${total}\n\nOrder again at:\nhttps://krncart.com`;



    // Build WhatsApp message in the exact required format
    const now = new Date();
    const dd = String(now.getDate()).padStart(2,'0');
    const mm = String(now.getMonth()+1).padStart(2,'0');
    const yyyy = now.getFullYear();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hh = hours % 12 || 12;
    const dateStr = `${dd}/${mm}/${yyyy}`;
    const timeStr = `${hh}:${minutes} ${ampm}`;

    // Prepare items block per strict format (no extra markup)
    const itemsBlocks = cartItems.map((i, idx) => {
      const br = computeItemBreakdown(i);
      const itemPrice = (i.basePrice).toFixed(2);
      const parcelCharge = br.parcelRate.toFixed(2);
      return `${idx+1}. ${i.name}\n   Hotel: ${i.hotelName || 'Unknown'}${i.subsection ? ' > ' + i.subsection : ''}\n   Qty: ${i.qty}   Price: ₹${itemPrice}\n   Parcel Charge: ₹${parcelCharge}`;
    }).join('\n\n');

    const subtotalNum = Number(totals.subtotal || 0);
    const gstNum = Number((subtotalNum * 0.03).toFixed(2));
    const platformFeeNum = Number((subtotalNum * 0.02).toFixed(2));
    const deliveryNum = Number(deliveryCharge || 0);
    const grandTotalNum = Number((subtotalNum + gstNum + platformFeeNum + deliveryNum).toFixed(2));

    // Include location coordinates if available
    const locationInfo = userLocationData && userLocationData.lat && userLocationData.lon
      ? `\n📍 Delivery Coordinates: ${Number(userLocationData.lat).toFixed(6)}, ${Number(userLocationData.lon).toFixed(6)}`
      : '';

    const finalMsg = `🌟🌟KRN Cart — Order Confirmation🌟🌟\n\nOrder Date: ${dateStr}    Order Time: ${timeStr}\n\n👤 Customer Details\nName: ${name}\nPhone: ${phone}\nAddress: ${finalAddress}${locationInfo}\n\n📋 Order Details\n${itemsBlocks}\n\n💰 Bill Summary\nSubtotal: ₹${subtotalNum.toFixed(2)}\nService Charge (3%): ₹${gstNum.toFixed(2)}\nPlatform Fee (2%): ₹${platformFeeNum.toFixed(2)}\nDelivery Charge: ₹${deliveryNum.toFixed(2)}\n\nTOTAL: ₹${grandTotalNum.toFixed(2)}\n\n✨ Freshness Delivered — Enjoy your meal! 🍽️\nOrder again at: https://krncart.com`;

    // Redirect using exact method (open in new tab with encoded message)
    window.open("https://wa.me/8660769547?text=" + encodeURIComponent(finalMsg), '_blank');

    // After redirect, save order and clear cart (delayed to avoid interfering with popup gesture)
    setTimeout(()=>{
      try{
        const order = {
          id: `order_${Date.now()}`,
          createdAt: new Date().toISOString(),
          customerName: name,
          customerPhone: phone,
          customerAddress: finalAddress,
          items: cartItems.map(i => {
            const br = computeItemBreakdown(i);
            return { id: i.id, name: i.name, qty: i.qty, base: Number((i.basePrice * i.qty).toFixed(2)), parcelRate: br.parcelRate, parcelFee: br.parcelFee, lineTotal: br.total, hotelName: i.hotelName, subsection: i.subsection };
          }),
          totals: {
            base: Number(totals.base),
            parcelFee: Number(totals.parcelFee),
            gst: Number(totals.gst),
            platformFee: Number(totals.platformFee),
            delivery: Number(deliveryCharge),
            grandTotal: Number((totals.total + deliveryCharge).toFixed(2)),
          },
          location: userLocationData ? {
            latitude: userLocationData.lat,
            longitude: userLocationData.lon,
            accuracy: userLocationData.accuracy,
            address: userLocationData.displayName || userLocationData.formattedAddress,
            formattedAddress: userLocationData.formattedAddress,
            country: userLocationData.country,
            state: userLocationData.state,
            city: userLocationData.city,
            postcode: userLocationData.postcode,
            timestamp: userLocationData.timestamp
          } : null,
        };
        const old = JSON.parse(localStorage.getItem('orderHistory') || '[]');
        old.unshift(order);
        localStorage.setItem('orderHistory', JSON.stringify(old));
      }catch(e){
        console.error('Failed to save order to history', e);
      }

      // Clear cart after saving
      clearCart();
    }, 1000);
  }

  return (
    <div>
      <h2 className="page-heading">Your Cart</h2>

      {count === 0 ? (
        <div className="empty">
          <div style={{fontSize:40}}>🛒</div>
          <p style={{marginTop:8}}>Your cart is empty</p>
        </div>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {cartItems.map(item => {
            const breakdown = computeItemBreakdown(item);
            return (
              <div key={item.id} className="cart-item" style={{padding:12,borderRadius:12,background:'#fff',boxShadow:'0 1px 3px rgba(2,6,23,0.04)',display:'flex',flexDirection:'column',gap:8}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <div style={{fontWeight:700}}>{item.name}</div>
                  <div style={{fontSize:16,fontWeight:700}}>Qty: {item.qty}</div>
                </div>

                <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
                  <div style={{minWidth:160}}>
                    <div style={{fontSize:13,color:'var(--muted)'}}>Hotel: <strong style={{color:'#111827'}}>{item.hotelName || 'Unknown'}</strong>{item.subsection && <span>{' > '}<strong style={{color:'#111827'}}>{item.subsection}</strong></span>}</div>
                    <div>Base: <strong>₹{breakdown.base.toFixed(2)}</strong></div>
                    <div>Parcel Charge (@ ₹{breakdown.parcelRate.toFixed(2)}): <strong>₹{breakdown.parcelFee.toFixed(2)}</strong></div>
                    {breakdown.deliveryFee > 0 && <div>Delivery Charge (@ ₹{breakdown.deliveryRate.toFixed(2)}): <strong>₹{breakdown.deliveryFee.toFixed(2)}</strong></div>}
                    <div style={{marginTop:6}}>Line Total: <strong>₹{breakdown.total.toFixed(2)}</strong></div>
                  </div>

                  <div style={{marginLeft:'auto',display:'flex',flexDirection:'column',gap:8,alignItems:'flex-end'}}>
                    <div style={{display:'flex',gap:8}}>
                      <button className="qty-btn" onClick={()=>updateItemQty(item.id, item.qty - 1)}>-</button>
                      <button className="qty-btn" onClick={()=>updateItemQty(item.id, item.qty + 1)}>+</button>
                    </div>

                    <button className="button secondary" onClick={()=>removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            );
          })}

          <div style={{padding:12,borderRadius:12,background:'#fff',boxShadow:'0 1px 3px rgba(2,6,23,0.04)'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div style={{fontWeight:700}}>Items Subtotal</div>
              <div style={{fontWeight:700}}>₹{totals.base.toFixed(2)}</div>
            </div>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>Parcel Charges</div>
              <div>₹{totals.parcelFee.toFixed(2)}</div>
            </div>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>Service Charge (3%)</div>
              <div>₹{totals.gst.toFixed(2)}</div>
            </div>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>Platform Fee (2%)</div>
              <div>₹{totals.platformFee.toFixed(2)}</div>
            </div>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>Delivery Charges</div>
              <div>₹{deliveryCharge.toFixed(2)}</div>
            </div>

            <hr style={{margin:'12px 0',borderColor:'#f1f5f9'}} />

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:18,fontWeight:800}}>
              <div>Grand Total</div>
              <div>₹{(totals.total + deliveryCharge).toFixed(2)}</div>
            </div>

            <div style={{marginTop:12, display:'flex',flexDirection:'column',gap:8}}>
              <label style={{fontWeight:700}}>📍 Delivery Location</label>
              
              {/* User Location Info */}
              {userLocationData && (
                <div style={{padding:12,borderRadius:10,background:'#ecfdf5',border:'1px solid #d1fae5'}}>
                  <div style={{fontWeight:600,color:'#065f46',marginBottom:8}}>✅ Your Location Detected</div>
                  <div style={{fontSize:13,color:'#047857',lineHeight:'1.6'}}>
                    {userLocationData.lat && <div><strong>Latitude:</strong> {Number(userLocationData.lat).toFixed(6)}</div>}
                    {userLocationData.lon && <div><strong>Longitude:</strong> {Number(userLocationData.lon).toFixed(6)}</div>}
                    {userLocationData.accuracy && <div><strong>Accuracy:</strong> ±{Number(userLocationData.accuracy).toFixed(1)}m</div>}
                    {userLocationData.formattedAddress && <div style={{marginTop:6}}><strong>Address:</strong><br/>{userLocationData.formattedAddress}</div>}
                    {userLocationData.city && <div style={{marginTop:4}}><strong>City:</strong> {userLocationData.city}{userLocationData.state && `, ${userLocationData.state}`}</div>}
                  </div>
                  
                  {/* Delivery Feasibility */}
                  {deliveryFeasibility && (
                    <div style={{marginTop:10,padding:8,borderRadius:8,background:'rgba(255,255,255,0.7)'}}>
                      <div style={{color: deliveryFeasibility.isDeliverable ? '#065f46' : '#7c2d12'}}>
                        {deliveryFeasibility.message}
                      </div>
                      <div style={{fontSize:12,marginTop:4,color:'#555'}}>
                        Distance from restaurant: {deliveryFeasibility.distance.toFixed(2)} km
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Live Location Map */}
              {showMap && userLocationData && userLocationData.lat && userLocationData.lon && (
                <div style={{marginTop:8}}>
                  <div style={{fontSize:13,fontWeight:600,marginBottom:6,color:'#666'}}>📌 Live Location Map</div>
                  <LocationMap 
                    userLocation={{
                      lat: Number(userLocationData.lat),
                      lon: Number(userLocationData.lon),
                      address: userLocationData.formattedAddress
                    }}
                    deliveryLocation={{
                      lat: Number(userLocationData.lat),
                      lon: Number(userLocationData.lon),
                      address: userLocationData.formattedAddress
                    }}
                    height="300px"
                  />
                </div>
              )}

              {/* Address Textarea */}
              <textarea 
                value={address} 
                onChange={e=>setAddress(e.target.value)} 
                placeholder="Your complete delivery address will appear here after location detection..." 
                style={{padding:10,borderRadius:10,border:'1px solid #e5e7eb',fontSize:14}} 
                rows={3} 
              />

              {/* Location Action Buttons */}
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                <button 
                  className="button" 
                  onClick={useMyLocation} 
                  disabled={locationLoading}
                  style={{flex:1, minWidth:'180px'}}
                >
                  {locationLoading ? '🔄 Detecting Location...' : '📍 Use My Live Location'}
                </button>
                {userLocationData && (
                  <button 
                    className="button secondary" 
                    onClick={() => {
                      setUserLocationData(null);
                      setAddress('');
                      setShowMap(false);
                      setLocationError(null);
                    }}
                    style={{flex:1, minWidth:'120px'}}
                  >
                    Clear Location
                  </button>
                )}
              </div>

              {/* Error Messages */}
              {locationError && (
                <div style={{padding:10,borderRadius:10,background:'#fef2f2',border:'1px solid #fecaca',color:'#991b1b',fontSize:13}}>
                  ⚠️ {locationError}
                </div>
              )}

              {/* Delivery notice: show only when delivery charge applies (subtotal < 100) */}
              {deliveryCharge > 0 && (
                <div className="delivery-notice" style={{padding:12,background:'#fff7ed',border:'1px solid #ffedd5',borderRadius:10,color:'#92400e'}}>
                  <strong>⚠️ Delivery Notice:</strong> Orders below ₹100 will have ₹20 delivery charge. Add more items to get FREE delivery.
                </div>
              )}

              {/* Confirm Order Buttons */}
              <div style={{display:'flex',gap:8}}>
                <button type="button" className="button" style={{flex:1}} onClick={confirmOrder}>✅ Confirm Order</button>
                <button className="button secondary" style={{flex:1}} onClick={()=>alert('Save for later (placeholder)')}>💾 Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
