// Udupi Palace Breakfast Menu - Filter-specific items only
// Used ONLY when filter === "breakfast" for Udupi Palace

export const UDUPI_BREAKFAST_SECTIONS = [
  { slug: "dosa-items", english: "Dosa Items", kannada: "ದೋಸೆ ಪದಾರ್ಥಗಳು" },
  { slug: "idli-vada", english: "Idli & Vada", kannada: "ಇಡ್ಲಿ & ವಡೆ" },
  { slug: "bath-items", english: "Bath Items", kannada: "ಬಾತ್ ಪದಾರ್ಥಗಳು" },
  { slug: "others", english: "Others", kannada: "ಇತರೆ" },
];

export const UDUPI_BREAKFAST_ITEMS = {
  "dosa-items": [
    { itemName: "Masala Dosa", kannadaName: "ಮಸಾಲೆ ದೋಸೆ", price: 70, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Set Dosa (3)", kannadaName: "ಸೆಟ್ ದೋಸೆ (3)", price: 70, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Plain Dosa", kannadaName: "ಪ್ಲೇನ್ ದೋಸೆ", price: 60, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Onion Dosa", kannadaName: "ಈರುಳ್ಳಿ ದೋಸೆ", price: 75, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Open Butter Masala Dosa", kannadaName: "ಓಪನ್ ಬಟರ್ ಮಸಾಲೆ ದೋಸೆ", price: 80, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Rava Dosa", kannadaName: "ರವಾ ದೋಸೆ", price: 80, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Rava Masala Dosa", kannadaName: "ರವಾ ಮಸಾಲೆ ದೋಸೆ", price: 85, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Rava Onion Dosa", kannadaName: "ರವಾ ಈರುಳ್ಳಿ ದೋಸೆ", price: 90, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Rava Onion Masala Dosa", kannadaName: "ರವಾ ಈರುಳ್ಳಿ ಮಸಾಲೆ ದೋಸೆ", price: 100, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Butter Masala Dosa", kannadaName: "ಬಟರ್ ಮಸಾಲೆ ದೋಸೆ", price: 80, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Butter Plain Dosa", kannadaName: "ಬಟರ್ ಪ್ಲೇನ್ ದೋಸೆ", price: 70, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Ghee Masala Dosa", kannadaName: "ತುಪ್ಪ ಮಸಾಲೆ ದೋಸೆ", price: 80, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Paper Masala Dosa", kannadaName: "ಪೇಪರ್ ಮಸಾಲೆ ದೋಸೆ", price: 100, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Paper Plain Dosa", kannadaName: "ಪೇಪರ್ ಪ್ಲೇನ್ ದೋಸೆ", price: 90, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Neer Dosa", kannadaName: "ನೀರ್ ದೋಸೆ", price: 80, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Set Masala Dosa (2)", kannadaName: "ಸೆಟ್ ಮಸಾಲೆ ದೋಸೆ (2)", price: 70, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Butter Dosa (2)", kannadaName: "ಬೆಣ್ಣೆ ದೋಸೆ (2)", price: 70, category: "breakfast", hotel: "Udupi Palace" },
  ],
  "idli-vada": [
    { itemName: "Idli (1)", kannadaName: "ಇಡ್ಲಿ (1)", price: 20, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Idli (2)", kannadaName: "ಇಡ್ಲಿ (2)", price: 35, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Vada (1)", kannadaName: "ವಡ (1)", price: 30, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Idli (1) + Vada (1)", kannadaName: "ಇಡ್ಲಿ (1) ವಡ (1)", price: 50, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Idli (2) + Vada (1)", kannadaName: "ಇಡ್ಲಿ (2) ವಡ (1)", price: 65, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Rava Idli", kannadaName: "ರವಾ ಇಡ್ಲಿ", price: 40, category: "breakfast", hotel: "Udupi Palace" },
  ],
  "bath-items": [
    { itemName: "Rice Bath / Veg Pulao", kannadaName: "ರೈಸ್ ಬಾತ್ / ವೆಜ್ ಪಲಾವ್", price: 50, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Bisi Bele Bath / Pongal", kannadaName: "ಬಿಸಿಬೇಳೆಬಾತ್ / ಪೊಂಗಲ್", price: 50, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Shavige Bath", kannadaName: "ಶಾವಿಗೆ ಬಾತ್", price: 50, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Kesari Bath", kannadaName: "ಕೇಸರಿ ಬಾತ್", price: 35, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Khara Bath", kannadaName: "ಖಾರ ಬಾತ್", price: 35, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Chow Chow Bath", kannadaName: "ಚೌ ಚೌ ಬಾತ್", price: 70, category: "breakfast", hotel: "Udupi Palace" },
  ],
  "others": [
    { itemName: "Pakoda / Bajji", kannadaName: "ಪಕೋಡ / ಬಜ್ಜಿ", price: 40, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Poori Sagu (3)", kannadaName: "ಪೂರಿ ಸಾಗು (3)", price: 70, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Bonda Soup", kannadaName: "ಬೋಂಡಾ ಸೂಪ್", price: 40, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Mosaranna", kannadaName: "ಮೊಸರನ್ನ", price: 50, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Buns (1)", kannadaName: "ಬನ್ಸ್ (1)", price: 30, category: "breakfast", hotel: "Udupi Palace" },
    { itemName: "Curd Vada", kannadaName: "ಮೊಸರು ವಡ", price: 40, category: "breakfast", hotel: "Udupi Palace" },
  ],
};
