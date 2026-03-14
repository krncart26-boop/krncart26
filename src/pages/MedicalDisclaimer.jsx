import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/medicines.css";

export default function MedicalDisclaimer() {
  const navigate = useNavigate();

  return (
    <div className="medicines-container">
      <div className="medicines-header">
        <button 
          className="medicines-back-btn"
          onClick={() => navigate("/medicines")}
        >
          ← Back
        </button>
        <h1>Medical Disclaimer</h1>
      </div>

      <div className="disclaimer-content">
        <div className="disclaimer-section">
          <h2>Medical Disclaimer</h2>
          
          <div className="disclaimer-text">
            <p>
              The information provided on this website is for general informational purposes only. 
              We do not provide medical advice, diagnosis, or treatment.
            </p>

            <p>
              All medicines and healthcare products sold on this platform should be used only as 
              directed by a qualified medical practitioner. Customers are advised to consult a doctor 
              or pharmacist before purchasing or using any medicine.
            </p>

            <p>
              Prescription medicines will only be dispensed after verification of a valid prescription 
              from a registered medical practitioner.
            </p>

            <p>
              We do not guarantee that the information on this website is complete, accurate, or up to date. 
              Product images are for representation purposes only. Always read the product label, warnings, 
              and instructions before use.
            </p>

            <p>
              We are not responsible for any side effects, allergic reactions, misuse, self-medication, 
              or damages resulting from the use of products purchased from this website.
            </p>

            <p>
              Our services are not intended for emergency medical situations. In case of emergency, 
              please contact your doctor or nearest hospital immediately.
            </p>

            <p>
              By purchasing medicines from this website, you agree that you are using the products 
              at your own risk and responsibility.
            </p>
          </div>
        </div>

        <div className="disclaimer-section kannada-section">
          <h2>ವೈದ್ಯಕೀಯ ನಿರಾಕರಣೆ (Medical Disclaimer)</h2>
          
          <div className="disclaimer-text">
            <p>
              ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ನೀಡಿರುವ ಮಾಹಿತಿಯು ಸಾಮಾನ್ಯ ಮಾಹಿತಿ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರವಾಗಿದೆ. 
              ನಾವು ವೈದ್ಯಕೀಯ ಸಲಹೆ, ರೋಗನಿರ್ಣಯ ಅಥವಾ ಚಿಕಿತ್ಸೆ ನೀಡುವುದಿಲ್ಲ.
            </p>

            <p>
              ಈ ವೇದಿಕೆಯಲ್ಲಿ ಮಾರಾಟವಾಗುವ ಎಲ್ಲಾ ಔಷಧಿ ಮತ್ತು ಆರೋಗ್ಯ ಉತ್ಪನ್ನಗಳನ್ನು ಅರ್ಹ ವೈದ್ಯರ ಸಲಹೆಯಂತೆ 
              ಮಾತ್ರ ಬಳಸಬೇಕು. ಯಾವುದೇ ಔಷಧಿಯನ್ನು ಖರೀದಿಸುವ ಅಥವಾ ಬಳಸುವ ಮೊದಲು ವೈದ್ಯರು ಅಥವಾ 
              ಫಾರ್ಮಸಿಸ್ಟ್ ಅವರನ್ನು ಸಂಪರ್ಕಿಸುವುದು ಗ್ರಾಹಕರ ಜವಾಬ್ದಾರಿ.
            </p>

            <p>
              ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅಗತ್ಯವಿರುವ ಔಷಧಿಗಳನ್ನು ನೋಂದಾಯಿತ ವೈದ್ಯರಿಂದ ನೀಡಲಾದ ಮಾನ್ಯ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ 
              ಪರಿಶೀಲನೆಯ ನಂತರ ಮಾತ್ರ ನೀಡಲಾಗುತ್ತದೆ.
            </p>

            <p>
              ಈ ವೆಬ್‌ಸೈಟ್‌ನ ಮಾಹಿತಿಯು ಸಂಪೂರ್ಣ, ನಿಖರ ಅಥವಾ ನವೀಕರಿತವಾಗಿದೆ ಎಂದು ನಾವು ಖಚಿತಪಡಿಸುವುದಿಲ್ಲ. 
              ಉತ್ಪನ್ನಗಳ ಚಿತ್ರಗಳು ಕೇವಲ ಸೂಚನಾ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ. ಬಳಸುವ ಮೊದಲು ಉತ್ಪನ್ನದ ಲೇಬಲ್, 
              ಎಚ್ಚರಿಕೆ ಮತ್ತು ಸೂಚನೆಗಳನ್ನು ಓದಿ.
            </p>

            <p>
              ನಮ್ಮಿಂದ ಖರೀದಿಸಿದ ಉತ್ಪನ್ನಗಳ ಬಳಕೆಯಿಂದ ಉಂಟಾಗುವ ಯಾವುದೇ ಪಾರ್ಶ್ವ ಪರಿಣಾಮಗಳು, ಅಲರ್ಜಿಗಳು, 
              ತಪ್ಪು ಬಳಕೆ, ಸ್ವಯಂ ಔಷಧೋಪಚಾರ ಅಥವಾ ಹಾನಿಗಳಿಗೆ ನಾವು ಜವಾಬ್ದಾರರಾಗುವುದಿಲ್ಲ.
            </p>

            <p>
              ನಮ್ಮ ಸೇವೆಗಳು ತುರ್ತು ವೈದ್ಯಕೀಯ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಅಲ್ಲ. ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ದಯವಿಟ್ಟು 
              ನಿಮ್ಮ ವೈದ್ಯರನ್ನು ಅಥವಾ ಸಮೀಪದ ಆಸ್ಪತ್ರೆಗೆ ಸಂಪರ್ಕಿಸಿ.
            </p>

            <p>
              ಈ ವೆಬ್‌ಸೈಟ್‌ನಿಂದ ಔಷಧಿಗಳನ್ನು ಖರೀದಿಸುವ ಮೂಲಕ, ನೀವು ನಿಮ್ಮ ಸ್ವಂತ ಜವಾಬ್ದಾರಿಯಲ್ಲಿ 
              ಉತ್ಪನ್ನಗಳನ್ನು ಬಳಸಲು ಒಪ್ಪುತ್ತೀರಿ.
            </p>
          </div>
        </div>

        <button
          className="disclaimer-back-button"
          onClick={() => navigate("/medicines")}
        >
          ← Back to Medicines
        </button>
      </div>
    </div>
  );
}
