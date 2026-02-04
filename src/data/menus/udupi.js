// Udupi Hotel menu data (pure JS, no React)
// Exports: DATA (sectionSlug -> items), SECTION_MAP (sectionSlug -> {english, kannada})

export const UDUPI_SECTION_MAP = {
  "south-indian-meals": { english: "SOUTH INDIAN MEALS", kannada: "ದಕ್ಷಿಣ ಭಾರತೀಯ ಊಟ" },
  "north-indian-meals": { english: "NORTH INDIAN MEALS", kannada: "ಉತ್ತರ ಭಾರತೀಯ ಊಟ" },
  "sweets": { english: "SWEETS", kannada: "" },
  "soups": { english: "SOUPS", kannada: "" },
  "raitha": { english: "RAITHA", kannada: "" },
  "salad": { english: "SALAD", kannada: "" },
  "north-indian-gravy": { english: "NORTH INDIAN GRAVY", kannada: "" },
  "more-north-indian-gravy": { english: "MORE NORTH INDIAN GRAVY", kannada: "" },
  "kadai-special": { english: "KADAI SPECIAL", kannada: "" },
  "jain-subzi-dry": { english: "JAIN SUBZI & DRY", kannada: "" },
  "papads": { english: "PAPADS", kannada: "" },
  "tandoori-starters": { english: "TANDOORI STARTERS", kannada: "" },
  "biriyani-pulav": { english: "BIRIYANI / PULAV", kannada: "" },
  "tandoori-breads": { english: "TANDOORI BREADS", kannada: "" },
  "chinese-rice": { english: "CHINESE RICE", kannada: "" },
  "dosa-tiffins": { english: "DOSA & TIFFINS", kannada: "" },
};

export const UDUPI_DATA = {
  "south-indian-meals": [
    ["South Indian Meals","ದಕ್ಷಿಣ ಭಾರತೀಯ ಊಟ",109.99],
    ["Extra Rice","ಹೆಚ್ಚುವರಿ ಅಕ್ಕಿ",49.99],
    ["Extra Curd","ಹೆಚ್ಚುವರಿ ಮೊಸರು",19.99],
  ],
  "north-indian-meals": [
    ["North Indian Meals","ಉತ್ತರ ಭಾರತೀಯ ಊಟ",159.99],
    ["Roti Curry","ರೋಟಿ ಕರೀ",109.99],
    ["Chenna Bhatura","ಚೆನ್ನಾ ಭಟೂರಾ",109.99],
    ["Extra Curry / Dal (1 Cup)","ಹೆಚ್ಚುವರಿ ಕರೀ / ದಾಲ್ (1 ಕಪ್)",29.99],
  ],
  "sweets": [
    ["Jamoon (1)","ಜಾಮೂನ್ (1)",39.99],
    ["Carrot Halwa","ಕ್ಯಾರೆಟ್ ಹಲ್ವಾ",39.99],
    ["Kashi Halwa","ಕಾಶಿ ಹಲ್ವಾ",39.99],
  ],
  "soups": [
    ["Cream of Tomato Soup","ಕ್ರೀಮ್ ಆಫ್ ಟೊಮ್ಯಾಟೋ ಸೂಪ್",99.99],
    ["Sweet Corn Soup","ಸ್ವೀಟ್ ಕಾರ್ನ್ ಸೂಪ್",109.99],
    ["Cream of Mushroom Soup","ಕ್ರೀಮ್ ಆಫ್ ಮಶ್ರೂಮ್ ಸೂಪ್",109.99],
    ["Hot and Sour Soup","ಹಾಟ್ ಅಂಡ್ ಸೌರ್ ಸೂಪ್",119.99],
    ["Veg Clear Soup","ವೆಜ್ ಕ್ಲಿಯರ್ ಸೂಪ್",109.99],
    ["Sweet Corn Veg Soup","ಸ್ವೀಟ್ ಕಾರ್ನ್ ವೆಜ್ ಸೂಪ್",119.99],
    ["Veg Manchow Soup","ವೆಜ್ ಮಂಚೌ ಸೂಪ್",119.99],
    ["Palak Soup","ಪಾಲಕ್ ಸೂಪ್",109.99],
  ],
  // ...other sections as in UdupiSection.jsx...
};
