// Cart page: lists cart items with breakdown and controls
import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart(){
  const { cartItems, count, totals, updateItemQty, removeItem, clearCart, computeItemBreakdown } = useCart();
  const [address, setAddress] = React.useState('');
  const [coords, setCoords] = React.useState(null);
  const [locationLoading, setLocationLoading] = React.useState(false);
  const [locationError, setLocationError] = React.useState(null);

  // Saved account details (if any)
  const [savedCustomerName, setSavedCustomerName] = React.useState('');
  const [savedCustomerPhone, setSavedCustomerPhone] = React.useState('');
  const [savedCustomerAddress, setSavedCustomerAddress] = React.useState('');

  // Load saved account details on mount and pre-fill address if available
  React.useEffect(()=>{
    const n = localStorage.getItem('customerName') || '';
    const p = localStorage.getItem('customerPhone') || '';
    const a = localStorage.getItem('customerAddress') || '';
    if(n) setSavedCustomerName(n);
    if(p) setSavedCustomerPhone(p);
    if(a) setSavedCustomerAddress(a);

    // Pre-fill delivery address only if cart address is currently empty
    if(a && !address){ setAddress(a); }
  }, []);

  // Derived final address and contact for validation
  const finalAddressPreview = address || savedCustomerAddress;
  const hasContactInfo = Boolean(savedCustomerName && savedCustomerPhone);

  // Center point (C9QM+GWF, Krishnarajanagara) approx coords
  const CENTER = { lat: 12.4385610, lon: 76.3836699 };

  function toRad(value){ return value * Math.PI / 180; }
  function haversineDistanceKm(lat1, lon1, lat2, lon2){
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  function useMyLocation(){
    if(!navigator.geolocation){ setLocationError('Geolocation not supported'); return; }
    setLocationLoading(true); setLocationError(null);
    navigator.geolocation.getCurrentPosition(async pos => {
      const lat = pos.coords.latitude; const lon = pos.coords.longitude;
      setCoords({ lat, lon });
        // Reverse geocode using Nominatim to auto-fill address
      try{
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&accept-language=en`;
        const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
        if(res.ok){
          const data = await res.json();
          const display = data.display_name || `${lat}, ${lon}`;
          setAddress(display);
        } else {
          setLocationError('Reverse geocode failed');
        }
      }catch(e){
        setLocationError('Reverse geocode failed');
      } finally {
        setLocationLoading(false);
      }
    }, err => {
      setLocationError(err.message || 'Failed to get location');
      setLocationLoading(false);
    }, { enableHighAccuracy: true, timeout: 10000 });
  }

  // Delivery charge: ₹20 if subtotal < 100, otherwise free
  const deliveryCharge = React.useMemo(()=>{
    if(!totals || typeof totals.subtotal === 'undefined') return 0;
    return totals.subtotal < 100 ? 20 : 0;
  }, [totals]);

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
      return `- ${i.name} | ${i.hotelName || 'Unknown'} | Qty: ${i.qty} | Price: ₹${lineTotal}`;
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
      return `${idx+1}. ${i.name}\n   Hotel: ${i.hotelName || 'Unknown'}\n   Qty: ${i.qty}   Price: ₹${itemPrice}\n   Parcel Charge: ₹${parcelCharge}`;
    }).join('\n\n');

    const subtotalNum = Number(totals.subtotal || 0);
    const gstNum = Number((subtotalNum * 0.05).toFixed(2));
    const platformFeeNum = Number((subtotalNum * 0.02).toFixed(2));
    const deliveryNum = subtotalNum < 100 ? 20 : 0;
    const grandTotalNum = Number((subtotalNum + gstNum + platformFeeNum + deliveryNum).toFixed(2));

    const finalMsg = `🌟 KRN Cart — Order Confirmation 🌟\n\nOrder Date: ${dateStr}    Order Time: ${timeStr}\n\n👤 Customer Details\nName: ${name}\nPhone: ${phone}\nAddress: ${finalAddress}\n\n📋 Order Details\n${itemsBlocks}\n\n💰 Bill Summary\nSubtotal: ₹${subtotalNum.toFixed(2)}\nGST (5%): ₹${gstNum.toFixed(2)}\nPlatform Fee (2%): ₹${platformFeeNum.toFixed(2)}\nDelivery Charge: ₹${deliveryNum.toFixed(2)}\n\nTOTAL: ₹${grandTotalNum.toFixed(2)}\n\n✨ Freshness Delivered — Enjoy your meal! 🍽️\nOrder again at: https://krncart.com`;

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
            return { id: i.id, name: i.name, qty: i.qty, base: Number((i.basePrice * i.qty).toFixed(2)), parcelRate: br.parcelRate, parcelFee: br.parcelFee, lineTotal: br.total };
          }),
          totals: {
            base: Number(totals.base),
            parcelFee: Number(totals.parcelFee),
            gst: Number(totals.gst),
            platformFee: Number(totals.platformFee),
            delivery: Number(deliveryCharge),
            grandTotal: Number((totals.total + deliveryCharge).toFixed(2)),
          },
          coords: coords || null,
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
                    <div style={{fontSize:13,color:'var(--muted)'}}>Hotel: <strong style={{color:'#111827'}}>{item.hotelName || 'Unknown'}</strong></div>
                    <div>Base: <strong>₹{breakdown.base.toFixed(2)}</strong></div>
                    <div>Parcel Charge (@ ₹{breakdown.parcelRate.toFixed(2)}): <strong>₹{breakdown.parcelFee.toFixed(2)}</strong></div>
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
              <div>GST (5%)</div>
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
              <label style={{fontWeight:700}}>Delivery Address</label>
              <textarea value={address} onChange={e=>setAddress(e.target.value)} placeholder="Enter delivery address" style={{padding:10,borderRadius:10,border:'1px solid #e5e7eb'}} rows={3} />

              <div style={{display:'flex',gap:8}}>
                <button className="button" onClick={useMyLocation} disabled={locationLoading} style={{flex:1}}>{locationLoading ? 'Detecting...' : 'Use My Live Location'}</button>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  {locationError && <div style={{fontSize:13,color:'red'}}>{locationError}</div>}
                </div>
              </div>

              {/* Delivery notice: show only when delivery charge applies (subtotal < 100) */}
              {deliveryCharge > 0 && (
                <div className="delivery-notice" style={{padding:12,background:'#fff7ed',border:'1px solid #ffedd5',borderRadius:10,color:'#92400e'}}>
                  <strong>⚠️ Delivery Notice:</strong> Orders below ₹100 will have ₹20 delivery charge. Add more items to get FREE delivery.
                </div>
              )}

              <div style={{display:'flex',gap:8}}>
                <button type="button" className="button" style={{flex:1}} onClick={confirmOrder}>Confirm Order</button>
                <button className="button secondary" style={{flex:1}} onClick={()=>alert('Save for later (placeholder)')}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
