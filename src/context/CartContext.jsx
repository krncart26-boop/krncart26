// Cart context: holds full cart state (items + utility methods)
// Includes: addToCart, updateItemQty, removeItem, totals and count
import React, { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export function CartProvider({ children }){
  // cartItems: array of { id, name, basePrice, qty }
  const [cartItems, setCartItems] = useState([]);

  // Helper: compute current count as sum of quantities
  const count = useMemo(()=>cartItems.reduce((s,i)=>s + i.qty, 0), [cartItems]);

  // Add item to cart (or increase qty if exists)
  function addToCart(item, qty = 1){
    setCartItems(prev => {
      // Create a unique key combining id, hotelName, and subsection
      const itemKey = `${item.id}|${item.hotelName}|${item.subsection || ''}`;
      const existing = prev.find(p => {
        const pKey = `${p.id}|${p.hotelName}|${p.subsection || ''}`;
        return pKey === itemKey;
      });
      if(existing){
        return prev.map(p => {
          const pKey = `${p.id}|${p.hotelName}|${p.subsection || ''}`;
          return pKey === itemKey ? { ...p, qty: p.qty + qty } : p;
        });
      }
      return [...prev, { ...item, qty }];
    });
  }

  // Update quantity for an item (if qty <= 0, remove it)
  function updateItemQty(id, qty){
    setCartItems(prev => {
      if(qty <= 0) return prev.filter(p => p.id !== id);
      return prev.map(p => p.id === id ? { ...p, qty } : p);
    });
  }

  // Remove item from cart
  function removeItem(id){
    setCartItems(prev => prev.filter(p => p.id !== id));
  }

  // Pricing helpers per item
  function getParcelRate(hotelName){
    // Grocery items have no per-item parcel charge (handled at order level)
    if(hotelName === 'Grocery Store') return 0;
    
    const rates = {
      'VB Bakery': 1.99,
      'Ice Magic': 9.99,
      'Udupi Hotel': 9.99,
      'KRN Restaurant': 9.99,
      'Gowda Palav Centre': 9.99,
      'Tirumala Juice': 5.99,
      'Shri Hotel': 2.50,
      "Shri Tiffany's": 2.50,
      'Rajkumar Panipuri': 1.99,
      'Sanju Gobi House': 2.50,
      'Keshava Chats': 1.99,
      'Harish Gobi Centre': 1.99,
      'Lakshmi Juice Corner': 10.00,
      'ShreeSha India': 7.99,
      "Gani's Restaurant": 9.99,
      "Ayyangars Bakery": 1.99,
      "Ayyangars Cake House": 1.99,
    };
    return rates[hotelName] ?? 10; // default to 10 for other hotels
  }

  function computeItemBreakdown(item){
    // Keep paise precision and return two-decimal numbers
    const base = Number((item.basePrice * item.qty).toFixed(2));
    // Use item-specific parcel charge if available, otherwise use hotel-based rate
    const parcelRate = item.parcelCharge !== undefined ? item.parcelCharge : Number(getParcelRate(item.hotelName).toFixed(2));
    const parcelFee = Number((parcelRate * item.qty).toFixed(2));
    // Use item-specific delivery charge if available, otherwise use default logic (₹20 if subtotal < 100, else free)
    const deliveryRate = item.deliveryCharge !== undefined ? item.deliveryCharge : 0;
    const deliveryFee = Number((deliveryRate * item.qty).toFixed(2));
    // Note: GST and platform fee are order-level (calculated in totals)
    const total = Number((base + parcelFee + deliveryFee).toFixed(2));
    return { base, parcelRate, parcelFee, deliveryRate, deliveryFee, total };
  }

  // Helper: check if any items are from Amma Mane Uta
  function isAmmaManeUtaOrder(){
    return cartItems.length > 0 && cartItems.some(item => item.hotelName === 'Amma Mane Uta');
  }

  // Cart totals
  const totals = useMemo(()=>{
    const baseRaw = cartItems.reduce((s,i)=>s + i.basePrice * i.qty, 0);
    const base = Number(baseRaw.toFixed(2));
    const parcelRaw = cartItems.reduce((s,i)=>{
      // Use item-specific parcel charge if available, otherwise use hotel-based rate
      const rate = i.parcelCharge !== undefined ? i.parcelCharge : getParcelRate(i.hotelName);
      return s + rate * i.qty;
    }, 0);
    
    // Add 5rs parcel charge if there are grocery items (per order, not per item)
    const hasGrocery = cartItems.some(item => item.hotelName === 'Grocery Store');
    const groceryParcelCharge = hasGrocery ? 5 : 0;
    
    const parcelFee = Number((parcelRaw + groceryParcelCharge).toFixed(2));

    // Note: Delivery fees are handled at the UI level (in Cart.jsx), not included in subtotal here
    // This avoids double-counting when delivery charge is added in the UI

    const subtotal = Number((base + parcelFee).toFixed(2));
    const gst = Number((subtotal * 0.03).toFixed(2));
    const platformFee = Number((subtotal * 0.02).toFixed(2));

    const total = Number((subtotal + gst + platformFee).toFixed(2));
    // deliveryFee is kept for reference but not included in subtotal
    const deliveryFee = isAmmaManeUtaOrder() ? 15 : 0;
    return { base, parcelFee, deliveryFee, subtotal, gst, platformFee, total };
  }, [cartItems]);
  function clearCart(){ setCartItems([]); }

  const value = {
    cartItems,
    count,
    totals,
    addToCart,
    updateItemQty,
    removeItem,
    clearCart,
    computeItemBreakdown,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(){
  return useContext(CartContext);
}
