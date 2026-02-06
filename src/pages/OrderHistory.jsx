// Order History placeholder page
import React from "react";

export default function OrderHistory(){
  const [orders, setOrders] = React.useState([]);

  React.useEffect(()=>{
    try{
      const arr = JSON.parse(localStorage.getItem('orderHistory') || '[]');
      setOrders(arr);
    }catch(e){
      setOrders([]);
    }
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
                      <div>{it.name} x {it.qty} — Parcel ₹{it.parcelRate.toFixed(2)} each → ₹{it.parcelFee.toFixed(2)}</div>
                      {it.hotelName && <div style={{fontSize:12,color:'var(--muted)',marginLeft:16}}>{it.hotelName}{it.subsection && ` > ${it.subsection}`}</div>}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{marginTop:8}}>
                <div>Item Total: ₹{Number(o.totals.base).toFixed(2)}</div>
                <div>Parcel Charges: ₹{Number(o.totals.parcelFee).toFixed(2)}</div>
                <div>GST (5%): ₹{Number(o.totals.gst).toFixed(2)}</div>
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
