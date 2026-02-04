import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FAQs = {
  "Orders & Delivery": [
    {
      q: "How do I place an order?",
      a: "Browse hotels, select items, add to cart, and proceed to checkout. You can choose your delivery address and payment method."
    },
    {
      q: "What are your delivery hours?",
      a: "We deliver from 7:00 AM to 9:30 PM daily across K R Nagar."
    },
    {
      q: "How long does delivery take?",
      a: "Typical delivery time is 30-45 minutes depending on your location and order volume."
    },
    {
      q: "Can I cancel my order?",
      a: "Yes, you can cancel before the restaurant starts preparing. Contact us immediately at 8660769547."
    },
    {
      q: "How do I track my order?",
      a: "You can track your order status in the Order History section in your Account."
    }
  ],
  "Payments": [
    {
      q: "What payment methods do you accept?",
      a: "We accept Cash on Delivery, UPI, Credit/Debit Cards, and all major payment wallets."
    },
    {
      q: "Is it safe to pay online?",
      a: "Yes, all online transactions are encrypted and secure. We use industry-standard security protocols."
    },
    {
      q: "Can I pay cash on delivery?",
      a: "Yes, Cash on Delivery is available for most areas in K R Nagar."
    },
    {
      q: "How do I get a refund?",
      a: "Refunds are processed within 3-5 business days. Contact support at krncart26@gmail.com with your order details."
    }
  ],
  "Account & Login": [
    {
      q: "How do I create an account?",
      a: "Simply download the app and sign up with your phone number and basic details."
    },
    {
      q: "I forgot my password, what should I do?",
      a: "Click on 'Forgot Password' on the login screen and follow the instructions sent to your registered email."
    },
    {
      q: "How do I update my profile?",
      a: "Go to Account section and edit your personal details, address, and preferences."
    }
  ],
  "Food & Menu": [
    {
      q: "How can I see the full menu?",
      a: "Browse any restaurant to see their complete menu with all available items and prices."
    },
    {
      q: "Do you have vegetarian options?",
      a: "Yes, most restaurants offer vegetarian items. You can filter by vegetarian options in the menu."
    },
    {
      q: "Can I customize my order?",
      a: "Yes, many items can be customized. Check the item details for available customizations."
    },
    {
      q: "Are allergen details available?",
      a: "Contact us directly at 8660769547 for detailed allergen information about specific items."
    }
  ],
  "Issues & Complaints": [
    {
      q: "My order is delayed, what should I do?",
      a: "Please call us at 8660769547 or 6362496287 for immediate assistance."
    },
    {
      q: "I received the wrong order",
      a: "Contact us immediately with your order details. We'll resolve it and provide a replacement."
    },
    {
      q: "Food quality issue",
      a: "We take quality seriously. Please contact us with photos of the issue at krncart26@gmail.com or call 8660769547."
    },
    {
      q: "How do I report a problem?",
      a: "Use the Help page to contact us or go to Account > Order History and report an issue for that order."
    }
  ]
};

export default function Help(){
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState({});

  const toggleFAQ = (category, index) => {
    const key = `${category}-${index}`;
    setExpanded(prev => ({...prev, [key]: !prev[key]}));
  };

  return (
    <div className="help-page">
      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:20}}>
        <button className="header-btn" onClick={()=>navigate(-1)}>← Back</button>
        <h1 style={{margin:0}} className="page-heading">Help & Support</h1>
      </div>

      {/* Contact Section */}
      <div className="help-section contact-section">
        <h2 className="help-section-title">Contact Us</h2>
        
        <div className="contact-cards">
          <div className="contact-card phone-card">
            <div className="contact-icon">📞</div>
            <div className="contact-label">Call Us</div>
            <a href="tel:8660769547" className="contact-link">8660769547</a>
            <a href="tel:6362496287" className="contact-link">6362496287</a>
          </div>

          <div className="contact-card email-card">
            <div className="contact-icon">📧</div>
            <div className="contact-label">Email Us</div>
            <a href="mailto:krncart26@gmail.com" className="contact-link">krncart26@gmail.com</a>
          </div>
        </div>

        <div className="operating-hours">
          <h3>Operating Hours</h3>
          <p>7:00 AM - 9:30 PM (Daily)</p>
          <p style={{fontSize:'14px',color:'var(--muted)',marginTop:'8px'}}>Delivery available across K R Nagar</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="help-section quick-actions-section">
        <h2 className="help-section-title">Quick Actions</h2>
        
        <div className="quick-actions">
          <a href="tel:8660769547" className="quick-action-btn">
            <div>📞</div>
            <div>Call Support</div>
          </a>

          <a href="mailto:krncart26@gmail.com" className="quick-action-btn">
            <div>📧</div>
            <div>Email Support</div>
          </a>

          <button onClick={()=>navigate('/order-history')} className="quick-action-btn">
            <div>📋</div>
            <div>Order History</div>
          </button>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="help-section faqs-section">
        <h2 className="help-section-title">Frequently Asked Questions</h2>

        {Object.entries(FAQs).map(([category, questions]) => (
          <div key={category} className="faq-category">
            <h3 className="faq-category-title">{category}</h3>

            <div className="faqs-list">
              {questions.map((faq, idx) => {
                const key = `${category}-${idx}`;
                const isExpanded = expanded[key];

                return (
                  <div key={idx} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(category, idx)}
                    >
                      <span className="faq-q-text">{faq.q}</span>
                      <span className={`faq-toggle ${isExpanded ? 'open' : ''}`}>▼</span>
                    </button>

                    {isExpanded && (
                      <div className="faq-answer">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="help-section about-section">
        <h2 className="help-section-title">About KRN CART</h2>
        <div className="about-content">
          <p>
            KRN CART is your one-stop solution for quick and reliable food delivery in K R Nagar. We partner with the best restaurants to bring you fresh, delicious food right to your doorstep.
          </p>
          <p>
            Our mission is to provide fast, affordable, and convenient food delivery service with excellent customer support.
          </p>
          <p>
            <strong>Service Area:</strong> K R Nagar<br/>
            <strong>Delivery Time:</strong> 7:00 AM - 9:30 PM
          </p>
        </div>
      </div>
    </div>
  );
}
