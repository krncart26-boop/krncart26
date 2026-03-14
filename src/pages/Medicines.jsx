import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/medicines.css";
import MedicinesHeroBanner from "../components/MedicinesHeroBanner";

export default function Medicines() {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    const message = "I want to order medicines. I will share the related information now.";
    const phoneNumber = "8660769547";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="medicines-container">
      <div className="medicines-header">
        <button 
          className="medicines-back-btn"
          onClick={() => navigate("/home")}
        >
          ← Back
        </button>
        <h1>💊 Medicines</h1>
      </div>

      <MedicinesHeroBanner />

      <div className="medicines-content">
        <h2>Steps to Order Medicines</h2>
        <p className="medicines-subtitle">ಔಷಧಿ ಆರ್ಡರ್ ಮಾಡುವ ಕ್ರಮಗಳು</p>

        <div className="medicines-steps">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Click on Continue button</h3>
              <p>Continue ಬಟನ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ</p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Send medicine or prescription photo</h3>
              <p>ದಯವಿಟ್ಟು ಔಷಧಿ ಅಥವಾ ಡಾಕ್ಟರ್ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಫೋಟೋ ಕಳುಹಿಸಿ</p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Type detailed medicine information</h3>
              <p>ಔಷಧಿಗಳ ವಿವರಗಳನ್ನು ಟೈಪ್ ಮಾಡಿ (ಹೆಸರು, ಪ್ರಮಾಣ ಇತ್ಯಾದಿ)</p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Order confirmation by call</h3>
              <p>ನಮ್ಮ ಕಂಪನಿಯಿಂದ ಕರೆ ಮಾಡಿ ನಿಮ್ಮ ಆರ್ಡರ್ ದೃಢೀಕರಿಸಲಾಗುತ್ತದೆ</p>
            </div>
          </div>
        </div>

        <div className="medicines-notes">
          <h3>📋 Important Notes / ಸೂಚನೆ:</h3>
          <div className="note-item">
            <span className="note-icon">⚕️</span>
            <div>
              <strong>Prescription medicines require valid doctor prescription</strong>
              <p>ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಔಷಧಿಗಳಿಗೆ ಮಾನ್ಯ ಡಾಕ್ಟರ್ ಚೀಟಿ ಅಗತ್ಯ</p>
            </div>
          </div>
          <div className="note-item">
            <span className="note-icon">📞</span>
            <div>
              <strong>Keep your phone reachable for confirmation</strong>
              <p>ದಯವಿಟ್ಟು ಕರೆಗಾಗಿ ನಿಮ್ಮ ಫೋನ್ ಲಭ್ಯವಾಗಿರಲಿ</p>
            </div>
          </div>
        </div>

        <button
          className="medicines-continue-button"
          onClick={handleContinueClick}
        >
          Continue
        </button>

        <button
          className="medicines-disclaimer-button"
          onClick={() => navigate("/medical-disclaimer")}
        >
          📋 Read Medical Disclaimer
        </button>
      </div>
    </div>
  );
}
