// Shri Tiffany's Breakfast Menu Data
// Breakfast items organized by category

export const SHRI_TIFFANYS_BREAKFAST_ITEMS = [
  // Dosa Section
  {
    id: 'st-khali-dosa',
    itemName: 'Khali Dosa',
    kannadaName: 'ಖಾಲಿ ದೋಸೆ',
    price: 20.99,
    category: 'Dosa'
  },
  {
    id: 'st-special-khali',
    itemName: 'Special Khali Dosa',
    kannadaName: 'ಸ್ಪೆಶಲ್ ಖಾಲಿ ದೋಸೆ',
    price: 30.99,
    category: 'Dosa'
  },
  {
    id: 'st-masala-dosa',
    itemName: 'Masala Dosa',
    kannadaName: 'ಮಸಾಲೆ ದೋಸೆ',
    price: 57.99,
    category: 'Dosa'
  },
  {
    id: 'st-set-masala',
    itemName: 'Set Masala Dosa',
    kannadaName: 'ಸೆಟ್ ಮಸಾಲೆ ದೋಸೆ',
    price: 59.99,
    category: 'Dosa'
  },
  {
    id: 'st-butter-set-masala',
    itemName: 'Butter Set Masala',
    kannadaName: 'ಬೆಣ್ಣೆ ಸೆಟ್ ಮಸಾಲೆ',
    price: 68.99,
    category: 'Dosa'
  },
  {
    id: 'st-butter-masala',
    itemName: 'Butter Masala',
    kannadaName: 'ಬೆಣ್ಣೆ ಮಸಾಲೆ',
    price: 68.99,
    category: 'Dosa'
  },
  {
    id: 'st-plain-dosa',
    itemName: 'Plain Dosa',
    kannadaName: 'ಪ್ಲೇನ್ ದೋಸೆ',
    price: 52.99,
    category: 'Dosa'
  },
  {
    id: 'st-butter-plain',
    itemName: 'Butter Plain Dosa',
    kannadaName: 'ಬೆಣ್ಣೆ ಪ್ಲೇನ್ ದೋಸೆ',
    price: 62.99,
    category: 'Dosa'
  },
  {
    id: 'st-tomato-dosa',
    itemName: 'Tomato Dosa',
    kannadaName: 'ಟೊಮೋಟೋ ದೋಸೆ',
    price: 52.99,
    category: 'Dosa'
  },
  {
    id: 'st-butter-set-single',
    itemName: 'Butter Set Masala (Single)',
    kannadaName: 'ಬೆಣ್ಣೆ ಸೆಟ್ ಮಸಾಲೆ ಸಿಂಗಲ್',
    price: 37.99,
    category: 'Dosa'
  },
  {
    id: 'st-single-set',
    itemName: 'Single Set Masala',
    kannadaName: 'ಸಿಂಗಲ್ ಸೆಟ್ ಮಸಾಲೆ',
    price: 29.99,
    category: 'Dosa'
  },
  // Bath Items Section
  {
    id: 'st-rice-bath',
    itemName: 'Rice Bath',
    kannadaName: 'ರೈಸ್ ಬಾತ್',
    price: 42.99,
    category: 'Bath Items'
  },
  {
    id: 'st-bisi-bath',
    itemName: 'Bisi Bele Bath',
    kannadaName: 'ಬಿಸಿ ಬೆಲೆ ಬಾತ್',
    price: 42.99,
    category: 'Bath Items'
  },
  {
    id: 'st-pongal',
    itemName: 'Pongal',
    kannadaName: 'ಪೊಂಗಲ್',
    price: 42.99,
    category: 'Bath Items'
  },
  {
    id: 'st-kesari-bath',
    itemName: 'Kesari Bath',
    kannadaName: 'ಕೇಸರಿ ಬಾತ್',
    price: 27.99,
    category: 'Bath Items'
  },
  {
    id: 'st-khara-bath',
    itemName: 'Khara Bath',
    kannadaName: 'ಖಾರ ಬಾತ್',
    price: 27.99,
    category: 'Bath Items'
  },
  {
    id: 'st-chou-bath',
    itemName: 'Chou Chou Bath',
    kannadaName: 'ಚೌ ಚೌ ಬಾತ್',
    price: 47.99,
    category: 'Bath Items'
  },
  // Others Section
  {
    id: 'st-idli',
    itemName: 'Idli',
    kannadaName: 'ಇಡ್ಲಿ',
    price: 20.99,
    category: 'Others'
  },
  {
    id: 'st-vada',
    itemName: 'Vada',
    kannadaName: 'ವಡೆ',
    price: 26.99,
    category: 'Others'
  },
  {
    id: 'st-poori',
    itemName: 'Poori',
    kannadaName: 'ಪೂರಿ',
    price: 57.99,
    category: 'Others'
  },
  {
    id: 'st-curd-vada',
    itemName: 'Curd Vada',
    kannadaName: 'ಮೊಸರು ವಡೆ',
    price: 47.99,
    category: 'Others'
  }
];

// Organized by category for display
export const SHRI_TIFFANYS_BREAKFAST_BY_CATEGORY = {
  'Dosa': SHRI_TIFFANYS_BREAKFAST_ITEMS.filter(item => item.category === 'Dosa'),
  'Bath Items': SHRI_TIFFANYS_BREAKFAST_ITEMS.filter(item => item.category === 'Bath Items'),
  'Others': SHRI_TIFFANYS_BREAKFAST_ITEMS.filter(item => item.category === 'Others')
};
