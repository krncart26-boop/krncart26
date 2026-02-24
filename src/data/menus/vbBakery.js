// VB Bakery menu data (pure JS, no React)
// Exports: DATA (sectionSlug -> items), SECTION_MAP (sectionSlug -> {english, kannada})

export const VB_SECTION_MAP = {
  "bakery-sweets": { english: "BAKERY & SWEETS", kannada: "" },
  "cakes-snacks": { english: "CAKES / SNACKS (WEIGHT-BASED)", kannada: "" },
  "mixtures": { english: "MIXTURES", kannada: "" },
  "cool-drinks": { english: "COOL DRINKS", kannada: "" },
  "chocolates": { english: "CHOCOLATES", kannada: "" },
  "ice-cream": { english: "ICE CREAM", kannada: "" },
};

export const VB_DATA = {
  "bakery-sweets": [
    ["Chocolate Cake half", "ಚಾಕ್ಲೇಟ್ ಕೇಕ್", 17.99],
    ["Chocolate Cake full", "ಚಾಕ್ಲೇಟ್ ಕೇಕ್", 22.99],
    ["Hani Cake", "ಹನಿ ಕೇಕ್", 12.99],
    ["Jam Roll Cake", "ಜ್ಯಾಂ ರೋಲ್ ಕೇಕ್", 12.99],
    ["Cream Cake", "ಕ್ರೀಮ್ ಕೇಕ್", 17.99],
    ["Dil Pasand (1 pc)", "ದಿಲ್ ಪಸಂದ್", 17.99],
    ["Dil Pasand (Full)", "ದಿಲ್ ಪಸಂದ್", 59.99],
    ["Bread Roast", "ಬ್ರೆಡ್ ರೋಸ್ಟ್", 17.99],
    ["Cream Biscuit", "ಕ್ರೀಮ್ ಬಿಸ್ಕಟ್", 22.99],
    ["Khara Biscuit (100 gm)", "ಕಾರ ಬಿಸ್ಕಟ್", 32.99],
    ["Kobbari Biscuit (100 gm)", "ಕೊಬ್ಬರಿ ಬಿಸ್ಕಟ್", 32.99],
    ["Benne Biscuit (100 gm)", "ಬೆಣ್ಣೆ ಬಿಸ್ಕಟ್", 32.99],
    ["Donut", "ಡೋನಟ್", 22.99],
    ["Bread", "ಬ್ರೆಡ್", 32.99],
    ["Rusk", "ರಸ್ಕ್", 42.99],
    ["Apple Cake", "ಆಪಲ್ ಕೇಕ್", 7.99],
    ["Bun (3 pcs)", "ಬನ್", 12.99],
    ["Puff (Egg)", "ಪಫ್ (ಎಗ್)", 22.99],
    ["Puff (Veg)", "ಪಫ್ (ವೆಜ್)", 22.99],
    ["Puff Full Egg", "ಫುಲ್ ಎಗ್ ಪಫ್", 27.99],
    ["Cream Bun", "ಕ್ರೀಮ್ ಬನ್", 12.99],
    ["Jam Bun", "ಜ್ಯಾಂ ಬನ್", 12.99],
    ["Khara Bun", "ಕಾರ ಬನ್", 17.99],
    ["Jamun (2 pcs)", "ಜಾಮೂನ್", 22.99],
    ["Barfi (250 gm)", "ಬರ್ಫಿ", 102.99],
    ["Champakali", "ಚಂಪಕಾಲಿ", 22.22],
    ["Dates Burfi (250 gm)", "ಡೇಟ್ಸ್ ಬರ್ಫಿ", 102.99],
    ["Cream Roll", "ಕ್ರೀಮ್ ರೋಲ್", 17.99],
  ],
  // ...other sections as in VBBakerySection.jsx...
};
