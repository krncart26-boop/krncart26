// Ice Magic Evening Food Menu Data
// Same items as snacks filter - all sections and items

export const IM_EVENING_SECTIONS = [
  { english: "Desserts", kannada: "ಮಿಠಾಯಿ", slug: "desserts" },
  { english: "Starters", kannada: "ಸ್ಟಾರ್ಟರ್ಸ್", slug: "starters" },
  { english: "Veg Momos", kannada: "ವೆಜ್ ಮೋಮೋ", slug: "veg-momos" },
  { english: "Sandwich", kannada: "ಸ್ಯಾಂಡ್ವಿಚ್", slug: "sandwich" },
  { english: "Burger", kannada: "ಬರ್ಗರ್", slug: "burger" },
  { english: "Special Burger", kannada: "ಸ್ಪೆಷಲ್ ಬರ್ಗರ್", slug: "special-burger" },
  { english: "Pizza", kannada: "ಪಿಜ್ಜಾ", slug: "pizza" },
  { english: "Chinese", kannada: "ಚೀನೀ", slug: "chinese" },
  { english: "Noodles", kannada: "ನೂಡಲ್ಸ್", slug: "noodles" },
  { english: "Fried Rice", kannada: "ಫ್ರೇಡ್ ರೈಸ್", slug: "fried-rice" },
  { english: "Pasta", kannada: "ಪಾಸ್ತಾ", slug: "pasta" },
  { english: "Shawarma", kannada: "ಶವರ್ಮ", slug: "shawarma" },
];

export const IM_EVENING_ITEMS = {
  "starters": [
    { id: "im-fries", name: "French Fries", kannada: "ಫ್ರೆಂಚ್ ಫ್ರೈಸ್", price: 79.99 },
    { id: "im-peri-fries", name: "Peri Peri Fries", kannada: "ಪೆರಿ ಪೆರಿ ಫ್ರೈಸ್", price: 89.99 },
    { id: "im-nuggets", name: "Nuggets", kannada: "ನಗೆಟ್ಸ್", price: 79.99 },
    { id: "im-smileys", name: "Smiley's", kannada: "ಸ್ಮೈಲಿಸ್", price: 79.99 },
    { id: "im-veg-finger", name: "Veg Finger", kannada: "ವೆಜ್ ಫಿಂಗರ್", price: 79.99 },
    { id: "im-potato-pops", name: "Potato Pops", kannada: "ಪೊಟೆಟೊ ಪಾಪ್ಸ್", price: 79.99 },
    { id: "im-cheesy-nuggets", name: "Cheesy Nuggets", kannada: "ಚೀಸಿ ನಗೆಟ್ಸ್", price: 89.99 },
    { id: "im-creamy-special", name: "IM Special Creamy Fries", kannada: "ಸ್ಪೆಷಲ್ ಕ್ರಿಮಿ ಫ್ರೈಸ್", price: 99.99 },
    { id: "im-creamy-fries", name: "Creamy Fries", kannada: "ಕ್ರಿಮಿ ಫ್ರೈಸ್", price: 89.99 }
  ],
  "desserts": [
    { id: "im-dessert-lotus", name: "Lotus Biscoff Dessert", kannada: "ಲೋಟಸ್ ಬಿಸ್ಕಾಫ್ ಮಿಠಾಯಿ", price: 190 },
    { id: "im-dessert-kunafa", name: "Kunafa Pistachio", kannada: "ಕುನಾಫಾ ಪಿಸ್ತಾಚಿಓ", price: 210 }
  ],
  "veg-momos": [
    { id: "im-momos-steam", name: "Steam Momos (6 pcs)", kannada: "ಸ್ಟೀಮ್ ಮೋಮೋ", price: 110 },
    { id: "im-momos-fried", name: "Fried Momos (6 pcs)", kannada: "ಫ್ರೈಡ್ ಮೋಮೋ", price: 110 }
  ],
  "sandwich": [
    { id: "im-sandwich-classic", name: "Classic sandwitch", kannada: "ಕ್ಲಾಸಿಕ್", price: 79.99 },
    { id: "im-sandwich-cheesy", name: "Cheesy sandwitch", kannada: "ಚೀಸಿ", price: 89.99 },
    { id: "im-sandwich-club", name: "Club sandwitch", kannada: "ಕ್ಲಬ್", price: 109.99 },
    { id: "im-sandwich-paneer", name: "Paneer SANDWICH", kannada: "ಪನೀರ್", price: 119.99 },
    { id: "im-sandwich-corn", name: "Roasted Corn SANDWICH", kannada: "ರೋಸ್ಟೆಡ್ ಕಾರ್ನ್", price: 109.99 },
    { id: "im-sandwich-mushroom", name: "Mushroom SANDWICH", kannada: "ಮಶ್ರೂಮ್", price: 119.99 },
    { id: "im-sandwich-mexican", name: "Mexican SANDWICH", kannada: "ಮೆಕ್ಸಿಕನ್", price: 109.99 },
    { id: "im-sandwich-italian", name: "Italian SANDWICH", kannada: "ಇಟಾಲಿಯನ್", price: 109.99 },
    { id: "im-sandwich-special", name: "IM Special (with fries) SANDWICH", kannada: "ಸ್ಪೆಷಲ್ (ಫ್ರೈಸ್ ಸಹ)", price: 129.99 }
  ],
  "burger": [
    { id: "im-burger-classic", name: "Classic BURGER", kannada: "ಕ್ಲಾಸಿಕ್", price: 79.99 },
    { id: "im-burger-cheesy", name: "Cheesy BURGER", kannada: "ಚೀಸಿ", price: 89.99 },
    { id: "im-burger-paneer", name: "Paneer Crunchy BURGER", kannada: "ಪನೀರ್ ಕ್ರಂಚಿ", price: 119.99 },
    { id: "im-burger-corn", name: "Roasted Corn BURGER", kannada: "ರೋಸ್ಟೆಡ್ ಕಾರ್ನ್", price: 109.99 },
    { id: "im-burger-mexican", name: "Mexican BURGER", kannada: "ಮೆಕ್ಸಿಕನ್", price: 109.99 },
    { id: "im-burger-italian", name: "Italian BURGER", kannada: "ಇಟಾಲಿಯನ್", price: 109.99 }
  ],
  "special-burger": [
    { id: "im-special-paneer", name: "Jumbo Paneer BURGER", kannada: "ಜುಂಬೋ ಪನೀರ್", price: 139.99 },
    { id: "im-special-mushroom", name: "Mushroom", kannada: "ಮಶ್ರೂಮ್", price: 119.99 },
    { id: "im-special-humburger", name: "Humburger BURGER", kannada: "ಹಾಂಬರ್ಗರ್", price: 139.99 },
    { id: "im-special-fries", name: "IM Special (with fries) BURGER", kannada: "ಸ್ಪೆಷಲ್ (ಫ್ರೈಸ್ ಸಹ)", price: 139.99 }
  ],
  "pizza": [
    { id: "im-pizza-classic-s", name: "Classic Hot (Small) PIZZA", kannada: "ಕ್ಲಾಸಿಕ್ (ಸಣ್ಣ)", price: 140 },
    { id: "im-pizza-classic-m", name: "Classic Hot (Medium) PIZZA", kannada: "ಕ್ಲಾಸಿಕ್ (ಮಿಡಿಯಂ)", price: 170 },
    { id: "im-pizza-pineapple-s", name: "Pineapple Cheese (Small) PIZZA", kannada: "ಪೈನಾಪಲ್ (ಸಣ್ಣ)", price: 160 },
    { id: "im-pizza-pineapple-m", name: "Pineapple Cheese (Medium) PIZZA", kannada: "ಪೈನಾಪಲ್ (ಮಿಡಿಯಂ)", price: 190 },
    { id: "im-pizza-double-s", name: "Double Cheesy (Small) PIZZA", kannada: "ಡಬಲ್ ಚೀಸಿ (ಸಣ್ಣ)", price: 160 },
    { id: "im-pizza-double-m", name: "Double Cheesy (Medium) PIZZA", kannada: "ಡಬಲ್ ಚೀಸಿ (ಮಿಡಿಯಂ)", price: 190 },
    { id: "im-pizza-paneer-s", name: "Paneer Makhani (Small) PIZZA", kannada: "ಪನೀರ್ (ಸಣ್ಣ)", price: 170 },
    { id: "im-pizza-paneer-m", name: "Paneer Makhani (Medium) PIZZA", kannada: "ಪನೀರ್ (ಮಿಡಿಯಂ)", price: 200 },
    { id: "im-pizza-special-s", name: "IM Special Pizza (Small) PIZZA", kannada: "ಸ್ಪೆಷಲ್ (ಸಣ್ಣ)", price: 190 },
    { id: "im-pizza-special-m", name: "IM Special Pizza (Medium)", kannada: "ಸ್ಪೆಷಲ್ (ಮಿಡಿಯಂ)", price: 220 }
  ],
  "chinese": [
    { id: "im-gobi-manchu", name: "Gobi Manchurian", kannada: "ಗೋಬಿ ಮಂಚುರಿಯನ್", price: 80 },
    { id: "im-paneer-manchu", name: "Paneer Manchurian", kannada: "ಪನೀರ್ ಮಂಚುರಿಯನ್", price: 120 },
    { id: "im-mushroom-manchu", name: "Mushroom Manchurian", kannada: "ಮಶ್ರೂಮ್ ಮಂಚುರಿಯನ್", price: 120 },
    { id: "im-chilli-paneer", name: "Chilly Paneer", kannada: "ಚಿಲ್ಲಿ ಪನೀರ್", price: 130 },
    { id: "im-bbq-paneer", name: "BBQ Paneer", kannada: "ಬಿಬಿಕ್ಯೂ ಪನೀರ್", price: 130 },
    { id: "im-babycorn-chilly", name: "Babycorn Chilly", kannada: "ಬೇಬಿಕಾರ್ನ್ ಚಿಲ್ಲಿ", price: 110 },
    { id: "im-paneer-kabab", name: "Paneer Kabab", kannada: "ಪನೀರ್ ಕಬಾಬ್", price: 120 },
    { id: "im-mushroom-kabab", name: "Mushroom Kabab", kannada: "ಮಶ್ರೂಮ್ ಕಬಾಬ್", price: 120 }
  ],
  "noodles": [
    { id: "im-classic-noodles", name: "Classic Noodles", kannada: "ಕ್ಲಾಸಿಕ್ ನೂಡಲ್ಸ್", price: 100 },
    { id: "im-tomato-noodles", name: "Tomato Noodles", kannada: "ಟೊಮಾಟೋ ನೂಡಲ್ಸ್", price: 110 },
    { id: "im-chilly-garlic-noodles", name: "Chilly Garlic Noodles", kannada: "ಚಿಲ್ಲಿ ಗಾರ್ಲಿಕ್ ನೂಡಲ್ಸ್", price: 110 },
    { id: "im-mexican-chilly-noodles", name: "Mexican Chilly Noodles", kannada: "ಮೆಕ್ಸಿಕನ್ ಚಿಲ್ಲಿ ನೂಡಲ್ಸ್", price: 130 },
    { id: "im-butter-noodles", name: "Butter Noodles", kannada: "ಬಟರ್ ನೂಡಲ್ಸ್", price: 110 },
    { id: "im-paneer-chilly-noodles", name: "Paneer Chilly Noodles", kannada: "ಪನೀರ್ ಚಿಲ್ಲಿ ನೂಡಲ್ಸ್", price: 130 }
  ],
  "fried-rice": [
    { id: "im-butter-rice", name: "Butter Fried Rice", kannada: "ಬೆಣ್ಣೆ ಫ್ರೈಡ್ ರೈಸ್", price: 110 },
    { id: "im-mexican-rice", name: "Mexican Fried Rice", kannada: "ಮೆಕ್ಸಿಕನ್ ಫ್ರೈಡ್ ರೈಸ್", price: 130 },
    { id: "im-schezwan-rice", name: "Shezwan Fried Rice", kannada: "ಶೆಜುವಾನ್ ಫ್ರೈಡ್ ರೈಸ್", price: 120 },
    { id: "im-classic-rice", name: "Classic Fried Rice", kannada: "ಕ್ಲಾಸಿಕ್ ಫ್ರೈಡ್ ರೈಸ್", price: 120 }
  ],
  "pasta": [
    { id: "im-pasta-tomato", name: "Tomato Chilly Pasta", kannada: "ಟೊಮೋಟೊ ಪಾಸ್ತಾ", price: 110 },
    { id: "im-pasta-white", name: "White Sauce Pasta", kannada: "ವೈಟ್ ಸಾಸ್ ಪಾಸ್ತಾ", price: 110 },
    { id: "im-pasta-paneer", name: "Paneer Pasta", kannada: "ಪನೀರ್ ಪಾಸ್ತಾ", price: 130 },
    { id: "im-pasta-spicy-creamy", name: "Spicy Creamy Pasta", kannada: "ಸ್ಪೈಸಿ ಕ್ರೀಮಿ ಪಾಸ್ತಾ", price: 110 },
    { id: "im-pasta-garlic-cheese", name: "Garlic Cheese Pasta", kannada: "ಗಾರ್ಲಿಕ್ ಚೀಸ್ ಪಾಸ್ತಾ", price: 110 },
    { id: "im-pasta-pesto", name: "Pesto Pasta", kannada: "ಪೆಸ್ಟೋ ಪಾಸ್ತಾ", price: 120 }
  ],
  "shawarma": [
    { id: "im-shawarma-veg", name: "Veg Shawarma", kannada: "ವೆಜ್ ಶವರ್ಮ", price: 110 },
    { id: "im-shawarma-paneer", name: "Paneer Shawarma", kannada: "ಪನೀರ್ ಶವರ್ಮ", price: 130 },
    { id: "im-shawarma-classic", name: "Classic Shawarma", kannada: "ಕ್ಲಾಸಿಕ್ ಶವರ್ಮ", price: 90 },
    { id: "im-shawarma-cheese", name: "Cheese Shawarma", kannada: "ಚೀಸ್ ಶವರ್ಮ", price: 100 },
    { id: "im-shawarma-roasted-corn", name: "Roasted Corn Cheese Shawarma", kannada: "ರೋಸ್ಟೆಡ್ ಕಾರ್ನ್ ಚೀಸ್ ಶವರ್ಮ", price: 110 },
    { id: "im-shawarma-mexican", name: "Mexican Shawarma", kannada: "ಮೆಕ್ಸಿಕನ್ ಶವರ್ಮ", price: 120 },
    { id: "im-shawarma-mushroom-cheese", name: "Mushroom Cheese Shawarma", kannada: "ಮಶ್ರೂಮ್ ಚೀಸ್ ಶವರ್ಮ", price: 120 }
  ]
};
