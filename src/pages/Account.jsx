// Account page: simple user info form with Edit / Save and privacy placeholder
import React, { useState } from "react";

export default function Account(){
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', address: '' });

  // Load saved account details from localStorage on mount
  React.useEffect(()=>{
    const name = localStorage.getItem('customerName');
    const phone = localStorage.getItem('customerPhone');
    const address = localStorage.getItem('customerAddress');
    if(name || phone || address){
      setForm({ name: name || '', phone: phone || '', address: address || '' });
    }
  }, []);

  function handleChange(e){
    setForm({...form,[e.target.name]: e.target.value});
  }

  function handleSave(){
    // Persist the account details in localStorage
    localStorage.setItem('customerName', form.name || '');
    localStorage.setItem('customerPhone', form.phone || '');
    localStorage.setItem('customerAddress', form.address || '');
    setEditing(false);
    alert('Saved');
  }

  return (
    <div>
      <h2 className="page-heading">Account</h2>

      <div className="form">
        <input className="input" name="name" value={form.name} onChange={handleChange} placeholder="Name" readOnly={!editing} />
        <input className="input" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" readOnly={!editing} />
        <textarea className="input" name="address" value={form.address} onChange={handleChange} placeholder="Address" rows={3} readOnly={!editing} />

        <div style={{display:'flex',gap:8}}>
          <button className="button secondary" onClick={()=>setEditing(!editing)}>{editing ? 'Cancel' : 'Edit'}</button>
          <button className="button" onClick={handleSave} disabled={!editing}>Save</button>
        </div>

        <div className="privacy">
          <p style={{marginTop:6}}>Your data is secure with us.<br />For any queries or support, please call:<br />📞 8660769547<br />📞 6362496287</p>
        </div>
      </div>
    </div>
  );
}
