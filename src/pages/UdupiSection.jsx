// Udupi section placeholder: shows section title and 'Menu items will be added soon'
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function prettify(slug){
  return slug.replace(/[-_]/g,' ').replace(/\b\w/g, c => c.toUpperCase());
}

import ItemCard from "../components/ItemCard";

// Sections metadata (for display)
const SECTION_MAP = {
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

// Items dataset for Udupi Hotel (english, kannada, price)
const DATA = {
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
    ["Kashi Halwa","काशಿ ಹಲ್ವಾ",39.99],
  ],

  "soups": [
    ["Cream of Tomato Soup","ಕ್ರೀಮ್ ಆಫ್ ಟೊಮ್ಯಾಟೋ ಸೂಪ್",99.99],
    ["Sweet Corn Soup","ಸ್ವೀಟ್ ಕಾರ್ನ್ ಸೂಪ್",109.99],
    ["Cream of Mushroom Soup","ಕ್ರೀಮ್ ಆಫ್ ಮಶ್ರೂಮ್ ಸೂಪ್",109.99],
    ["Hot and Sour Soup","ಹಾಟ್ ಅಂಡ್ ಸಾರ್ ಸೂಪ್",119.99],
    ["Veg Clear Soup","ವೆಜ್ ಕ್ಲಿಯರ್ ಸೂಪ್",109.99],
    ["Sweet Corn Veg Soup","ಸ್ವೀಟ್ ಕಾರ್ನ್ ವೆಜ್ ಸೂಪ್",119.99],
    ["Veg Manchow Soup","ವೆಜ್ ಮಂಚೌ ಸೂಪ್",119.99],
    ["Palak Soup","ಪಾಲಕ್ ಸೂಪ್",109.99],
    ["Lung Fung Soup","ಲಂಗ್ ಫಂಗ್ ಸೂಪ್",129.99],
    ["Lemon Coriander Soup","ಲೆಮನ್ ಕೊರಿಯಾಂಡರ್ ಸೂಪ್",129.99],
    ["Minestrone Soup","ಮಿನೆಸ್ಟ್ರೋನ್ ಸೂಪ್",129.99],
    ["Mushroom Veg Clear Soup","ಮಶ್ರೂಮ್ ವೆಜ್ ಕ್ಲಿಯರ್ ಸೂಪ್",129.99],
    ["Talumein Soup","ತಾಲುಮೇನ್ ಸೂಪ್",129.99],
    ["French Onion Soup","ಫ್ರೆಂಚ್ ಓನಿಯನ್ ಸೂಪ್",129.99],
  ],

  "raitha": [
    ["Aloo Raitha","ಆಲೂ ರೈತಾ",89.99],
    ["Punjabi Raitha","ಪಂಜಾಬಿ ರೈತಾ",89.99],
    ["Tomato Raitha","ಟೊಮ್ಯಾಟೋ ರೈತಾ",89.99],
    ["Mix Veg Raitha","ಮಿಕ್ಸ್ ವೆಜ್ ರೈತಾ",89.99],
    ["Cucumber Raitha","ಸೌತೆಕಾಯಿ ರೈತಾ",89.99],
    ["Onion Raitha","ಈರುಳ್ಳಿ ರೈತಾ",89.99],
    ["Pineapple Raitha","ಅನಾನಸ್ ರೈತಾ",109.99],
    ["Boondi Raitha","ಬೂಂದಿ ರೈತಾ",109.99],
    ["Kashmiri Raitha","ಕಾಶ್ಮೀರಿ ರೈತಾ",129.99],
  ],

  "salad": [
    ["Onion Salad","ಈರುಳ್ಳಿ ಸಲಾಡ್",79.99],
    ["Tomato Salad","ಟೊಮ್ಯಾಟೋ ಸಲಾಡ್",79.99],
    ["Green Salad","ಗ್ರೀನ್ ಸಲಾಡ್",109.99],
    ["Cucumber Salad","ಸೌತೆಕಾಯಿ ಸಲಾಡ್",79.99],
  ],

  "north-indian-gravy": [
    ["Dal Fry","ದಾಲ್ ಫ್ರೈ",139.99],
    ["Dal Palak","ದಾಲ್ ಪಾಲಕ್",149.99],
    ["Dal Punjabi","ದಾಲ್ ಪಂಜಾಬಿ",149.99],
    ["Dal Tadka","ದಾಲ್ ತಡ್ಕಾ",149.99],
    ["Paneer Butter Masala","ಪನ್ನೀರ್ ಬಟರ್ ಮಸಾಲಾ",199.99],
    ["Shahi Paneer","ಶಾಹಿ ಪನ್ನೀರ್",199.99],
    ["Palak Paneer","ಪಾಲಕ್ ಪನ್ನೀರ್",199.99],
    ["Paneer Burji","ಪನ್ನೀರ್ ಭುರ್ಜಿ",299.99],
    ["Channa Masala","ಚನ್ನಾ ಮಸಾಲಾ",159.99],
    ["Mix Veg Curry","ಮಿಕ್ಸ್ ವೆಜ್ ಕರೀ",169.99],
    ["Kaju Masala","ಕಾಜು ಮಸಾಲಾ",269.99],
  ],

  "dosa-tiffins": [
    ["Masala Dosa","ಮಸಾಲೆ ದೋಸೆ",79.99],
    ["Set Dosa (3)","ಸೆಟ್ ದೋಸೆ (3)",79.99],
    ["Plain Dosa","ಪ್ಲೇನ್ ದೋಸೆ",69.99],
    ["Onion Dosa","ಈರುಳ್ಳಿ ದೋಸೆ",84.99],
    ["Butter Masala Dosa","ಬಟರ್ ಮಸಾಲೆ ದೋಸೆ",89.99],
    ["Rava Masala Dosa","ರವಾ ಮಸಾಲೆ ದೋಸೆ",94.99],
    ["Paper Masala Dosa","ಪೇಪರ್ ಮಸಾಲೆ ದೋಸೆ",109.99],
    ["Neer Dosa","ನೀರ್ ದೋಸೆ",89.99],
    ["Benne Dosa (2)","ಬೆಣ್ಣೆ ದೋಸೆ (2)",79.99],
  ],

  /* Filled remaining sections as requested */
  "more-north-indian-gravy": [
    ["Paneer Kolhapuri","ಪನ್ನೀರ್ ಕೊಲ್ಹಾಪುರಿ",199.99],
    ["Paneer Peshawari","ಪನ್ನೀರ್ ಪೇಶಾವರಿ",209.99],
    ["Veg Ginger Masala","ವೆಜ್ ಜಿಂಜರ್ ಮಸಾಲಾ",199.99],
    ["Veg Kolhapuri","ವೆಜ್ ಕೊಲ್ಹಾಪುರಿ",189.99],
    ["Veg Do Pyaza","ವೆಜ್ ದೋ ಪ್ಯಾಜಾ",189.99],
    ["Veg Patiala","ವೆಜ್ ಪಟಿಯಾಲಾ",209.99],
    ["Veg Kurma","ವೆಜ್ ಕುರ್ಮಾ",189.99],
    ["Veg Jaipuri","ವೆಜ್ ಜೈಪುರಿ",189.99],
    ["Veg Spanish Masala","ವೆಜ್ ಸ್ಪಾನಿಷ್ ಮಸಾಲಾ",189.99],
    ["Aloo Mutter Masala","ಆಲೂ ಮಟರ್ ಮಸಾಲಾ",189.99],
    ["Mutter Paneer Masala","ಮಟರ್ ಪನ್ನೀರ್ ಮಸಾಲಾ",219.99],
    ["Veg Makhanwala","ವೆಜ್ ಮಖನ್‌ವಾಲಾ",209.99],
    ["Malai Methi Mutter","ಮಲೈ ಮೆಂತ್ಯ ಮಟರ್",209.99],
    ["Veg Koftha","ವೆಜ್ ಕೋಫ್ತಾ",219.99],
    ["Dum Malai Koftha","ಡಂ ಮಲೈ ಕೋಫ್ತಾ",229.99],
    ["Paneer Koftha","ಪನ್ನೀರ್ ಕೋಫ್ತಾ",229.99],
    ["Dum Aloo Hyderabadi","ಡಂ ಆಲೂ ಹೈದರಾಬಾದಿ",229.99],
    ["Dum Aloo Kashmiri","ಡಂ ಆಲೂ ಕಾಶ್ಮೀರಿ",229.99],
    ["Stuffed Capsicum Masala","ಸ್ಟಫ್ಡ್ ಕ್ಯಾಪ್ಸಿಕಂ ಮಸಾಲಾ",219.99],
    ["Stuffed Tomato","ಸ್ಟಫಡ್ ಟೊಮ್ಯಾಟೋ",199.99],
    ["Veg Solapuri","ವೆಜ್ ಸೊಲಾಪುರಿ",199.99],
    ["Veg Handi Gravy","ವೆಜ್ ಹಂಡಿ ಗ್ರೇವಿ",199.99],
    ["Bendi Masala","ಬೆಂಡೆ ಮಸಾಲಾ",189.99],
    ["Veg Shahi Kurma","ವೆಜ್ ಶಾಹಿ ಕುರ್ಮಾ",199.99],
    ["Sholay Kabab Masala","ಶೋಲೆ ಕಬಾಬ್ ಮಸಾಲಾ",219.99],
  ],

  "kadai-special": [
    ["Kadai Mix Veg","ಕಡಾಯಿ ಮಿಕ್ಸ್ ವೆಜ್",189.99],
    ["Kadai Baby Corn","ಕಡಾಯಿ ಬೇಬಿ ಕಾರ್ನ್",199.99],
    ["Kadai Paneer","ಕಡಾಯಿ ಪನ್ನೀರ್",209.99],
    ["Kadai Mushroom","ಕಡಾಯಿ ಮಶ್ರೂಮ್",209.99],
    ["Kadai Kaju Masala","ಕಡಾಯಿ ಕಾಜು ಮಸಾಲಾ",269.99],
    ["Kadai Gobi Mutter","ಕಡಾಯಿ ಗೋಬಿ ಮಟರ್",199.99],
    ["Kadai Kaju Paneer Masala","ಕಡಾಯಿ ಕಾಜು ಪನ್ನೀರ್ ಮಸಾಲಾ",279.99],
    ["Kadai Punjabi Pakodi","ಕಡಾಯಿ ಪಂಜಾಬಿ ಪಕೋಡಿ",219.99],
  ],

  "jain-subzi-dry": [
    ["Paneer Butter Masala","ಪನ್ನೀರ್ ಬಟರ್ ಮಸಾಲಾ",219.99],
    ["Malai Methi Mutter","ಮಲೈ ಮೆಂತ್ಯ ಮಟರ್",219.99],
    ["Kadai Mix Veg","ಕಡಾಯಿ ಮಿಕ್ಸ್ ವೆಜ್",219.99],
    ["Kadai Paneer","ಕಡಾಯಿ ಪನ್ನೀರ್",219.99],
    ["Kaju Masala","ಕಾಜು ಮಸಾಲಾ",279.99],
    ["Kaju Paneer Masala","ಕಾಜು ಪನ್ನೀರ್ ಮಸಾಲಾ",289.99],
    ["Gobi Manchurian / Chilly","ಗೋಬಿ ಮಂಚೂರಿಯನ್ / ಚಿಲ್ಲಿ",179.99],
    ["Paneer Manchurian / Chilly","ಪನ್ನೀರ್ ಮಂಚೂರಿಯನ್ / ಚಿಲ್ಲಿ",219.99],
    ["Babycorn Manchurian / Chilly","ಬೇಬಿಕಾರ್ನ್ ಮಂಚೂರಿಯನ್ / ಚಿಲ್ಲಿ",179.99],
  ],

  "papads": [
    ["Masala Papad","ಮಸಾಲಾ ಪಾಪಡ್",59.99],
    ["Fried Papad","ಫ್ರೈಡ್ ಪಾಪಡ್",34.99],
    ["Roasted Papad","ರೋಸ್ಟೆಡ್ ಪಾಪಡ್",34.99],
  ],

  "tandoori-starters": [
    ["Paneer Tikka","ಪನ್ನೀರ್ ಟಿಕ್ಕಾ",209.99],
    ["Paneer Malai Tikka","ಪನ್ನೀರ್ ಮಲೈ ಟಿಕ್ಕಾ",229.99],
    ["Hariyali Paneer Tikka","ಹರಿಯಾಳಿ ಪನ್ನೀರ್ ಟಿಕ್ಕಾ",239.99],
    ["Veg Hariyali Kabab","ವೆಜ್ ಹರಿಯಾಳಿ ಕಬಾಬ್",229.99],
    ["Veg Sheekh Kabab","ವೆಜ್ ಶೀಕ್ ಕಬಾಬ್",229.99],
    ["Stuffed Mushroom","ಸ್ಟಫ್ಡ್ ಮಶ್ರೂಮ್",229.99],
    ["Veg Hara Bara Kabab","ವೆಜ್ ಹರಾ ಭರಾ ಕಬಾಬ್",229.99],
    ["Aloo Gobi Tandoori","ಆಲೂ ಗೋಬಿ ತಂದೂರಿ",249.99],
    ["Aloo Tikki","ಆಲೂ ಟಿಕ್ಕಿ",249.99],
    ["Kesar Malai Broccoli","ಕೇಸರ್ ಮಲೈ ಬ್ರೋಕೋಲಿ",259.99],
  ],

  "biriyani-pulav": [
    ["Veg Biriyani","ವೆಜ್ ಬಿರಿಯಾನಿ",179.99],
    ["Veg Pulav","ವೆಜ್ ಪಲಾವ್",159.99],
    ["Peas Pulav","ಪೀಸ್ ಪಲಾವ್",169.99],
    ["Corn Pulav","ಕಾರ್ನ್ ಪಲಾವ್",169.99],
    ["Kashmiri Pulav","ಕಾಶ್ಮೀರಿ ಪಲಾವ್",209.99],
    ["Palak Rice","ಪಾಲಕ್ ರೈಸ್",159.99],
    ["Paneer Biriyani","ಪನ್ನೀರ್ ಬಿರಿಯಾನಿ",199.99],
    ["Mughalai Biriyani","ಮುಘಲಾಯಿ ಬಿರಿಯಾನಿ",209.99],
    ["Hyderabadi Biriyani","ಹೈದರಾಬಾದಿ ಬಿರಿಯಾನಿ",199.99],
    ["Handi Biriyani","ಹಂಡಿ ಬಿರಿಯಾನಿ",209.99],
    ["Mushroom Biriyani","ಮಶ್ರೂಮ್ ಬಿರಿಯಾನಿ",209.99],
    ["Kaju Biriyani","ಕಾಜು ಬಿರಿಯಾನಿ",229.99],
  ],

  "tandoori-breads": [
    ["Roti","ರೋಟಿ",49.99],
    ["Butter Roti","ಬಟರ್ ರೋಟಿ",59.99],
    ["Methi Roti","ಮೆಂತ್ಯ ರೋಟಿ",59.99],
    ["Methi Butter Roti","ಮೆಂತ್ಯ ಬಟರ್ ರೋಟಿ",69.99],
    ["Pudina Roti","ಪುದೀನಾ ರೋಟಿ",59.99],
    ["Kulcha","ಕુલ್ಚಾ",59.99],
    ["Butter Kulcha","ಬಟರ್ ಕುಲ್ಚಾ",69.99],
    ["Naan","ನಾನ್",59.99],
    ["Butter Naan","ಬಟರ್ ನಾನ್",69.99],
    ["Garlic Naan","ಗಾರ್ಲಿಕ್ ನಾನ್",69.99],
    ["Butter Garlic Naan","ಬಟರ್ ಗಾರ್ಲಿಕ್ ನಾನ್",79.99],
    ["Mughlai Naan","ಮುಘಲಾಯಿ ನಾನ್",99.99],
    ["Stuffed Naan","ಸ್ಟಫ್ಡ್ ನಾನ್",89.99],
    ["Masala Kulcha","ಮಸಾಲಾ ಕುಲ್ಚಾ",89.99],
    ["Onion Kulcha","ಈರುಳ್ಳಿ ಕುಲ್ಚಾ",79.99],
    ["Plain Parota","ಪ್ಲೇನ್ ಪರೋಟಾ",69.99],
    ["Butter Parota","ಬಟರ್ ಪರೋಟಾ",74.99],
    ["Lachha Parota","ಲಚ್ಚಾ ಪರೋಟಾ",69.99],
    ["Aloo Parota with Curd","ಆಲೂ ಪರೋಟಾ (ಮೊಸರಿನೊಂದಿಗೆ)",99.99],
    ["Stuffed Parota","ಸ್ಟಫ್ಡ್ ಪರೋಟಾ",109.99],
    ["Paneer Parota","ಪನ್ನೀರ್ ಪರೋಟಾ",119.99],
    ["Onion Parota","ಈರುಳ್ಳಿ ಪರೋಟಾ",99.99],
  ],

  "chinese-rice": [
    ["Veg Fried Rice","ವೆಜ್ ಫ್ರೈಡ್ ರೈಸ್",149.99],
    ["Veg Schezwan Fried Rice","ವೆಜ್ ಶೆಜ್ವಾನ್ ಫ್ರೈಡ್ ರೈಸ್",169.99],
    ["Singapore Fried Rice","ಸಿಂಗಾಪುರ್ ಫ್ರೈಡ್ ರೈಸ್",179.99],
    ["Ghee Rice","ಘೀ ರೈಸ್",169.99],
    ["Jeera Rice","ಜೀರಾ ರೈಸ್",159.99],
    ["Baby Corn Fried Rice","ಬೇಬಿ ಕಾರ್ನ್ ಫ್ರೈಡ್ ರೈಸ್",159.99],
    ["Baby Corn Schezwan Fried Rice","ಬೇಬಿ ಕಾರ್ನ್ ಶೆಜ್ವಾನ್ ಫ್ರೈಡ್ ರೈಸ್",179.99],
    ["Mushroom Fried Rice","ಮಶ್ರೂಮ್ ಫ್ರೈಡ್ ರೈಸ್",169.99],
    ["Mushroom Schezwan Fried Rice","ಮಶ್ರೂಮ್ ಶೆಜ್ವಾನ್ ಫ್ರೈಡ್ ರೈಸ್",189.99],
    ["Paneer Fried Rice","ಪನ್ನೀರ್ ಫ್ರೈಡ್ ರೈಸ್",189.99],
    ["Paneer Schezwan Fried Rice","ಪನ್ನೀರ್ ಶೆಜ್ವಾನ್ ಫ್ರೈಡ್ ರೈಸ್",209.99],
    ["Corn Fried Rice","ಕಾರ್ನ್ ಫ್ರೈಡ್ ರೈಸ್",159.99],
    ["Paneer Mushroom Fried Rice","ಪನ್ನೀರ್ ಮಶ್ರೂಮ್ ಫ್ರೈಡ್ ರೈಸ್",209.99],
    ["Triple Fried Rice","ಟ್ರಿಪಲ್ ಫ್ರೈಡ್ ರೈಸ್",219.99],
    ["Hong Kong Fried Rice","ಹಾಂಗ್ ಕಾಂಗ್ ಫ್ರೈಡ್ ರೈಸ್",189.99],
  ],
};

export default function UdupiSection(){
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  const section = SECTION_MAP[sectionSlug] || { english: prettify(sectionSlug || 'Section') };
  const items = DATA[sectionSlug] || [];

  return (<div className="page-container">
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/udupi-hotel')}>← Back</button>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">{section.english}</h2>
          <div style={{color:'var(--muted)',marginTop:6}}>{section.kannada}</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        {items.length === 0 ? (
          <div style={{padding:12,background:'#fff',borderRadius:12,color:'var(--muted)'}}>Menu items will be added soon</div>
        ) : (
          <div style={{marginTop:16,display:'flex',flexDirection:'column',gap:12}}>
            {items.map(it => (
              <ItemCard key={it[0]} id={sectionSlug + '-' + it[0].toLowerCase().replace(/\s+/g,'-')} name={it[0]} kannada={it[1]} price={it[2]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

