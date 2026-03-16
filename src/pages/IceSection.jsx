// Ice Magic section placeholder: shows title and 'Items will be added soon'
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

// A small helper to prettify slugs into titles
function prettify(slug){
  return slug.replace(/[-_]/g,' ').replace(/\b\w/g, c => c.toUpperCase());
}

import ItemCard from "../components/ItemCard";

// Sections metadata (for display)
const SECTION_MAP = {
  "im-special-ice-cream": { english: "IM SPECIAL ICE CREAM" },
  "pastry": { english: "PASTRY" },
  "desserts": { english: "DESSERTS" },
  "falooda-special": { english: "FALOODA & SPECIAL ITEMS" },
  "fruits-custard": { english: "FRUITS & CUSTARD" },
  "special-combinations": { english: "SPECIAL COMBINATIONS" },
  "royal-sundaes": { english: "ROYAL SUNDAES" },
  "kids-zone": { english: "KIDS ZONE" },
  "chocolate-sundaes": { english: "CHOCOLATE SUNDAES" },
  "cake-with-ice-cream": { english: "CAKE WITH ICE CREAM" },
  "ice-cream-scoops": { english: "ICE CREAM SCOOPS" },
  "ice-cream-shakes": { english: "ICE CREAM SHAKES" },
  "milk-shake-with-ice-cream": { english: "MILK SHAKE WITH ICE CREAM" },
  "milk-shakes": { english: "MILK SHAKES" },
  "starters": { english: "STARTERS" },
  "veg-momos": { english: "VEG MOMOS" },
  "sandwich": { english: "SANDWICH" },
  "burger": { english: "BURGER" },
  "special-burger": { english: "SPECIAL BURGER" },
  "mojito": { english: "MOJITO" },
  "special-soda": { english: "SPECIAL SODA" },
  "fresh-juice": { english: "FRESH JUICE" },
  "smoothie": { english: "SMOOTHIE" },
  "special-lassi": { english: "SPECIAL LASSI" },
  "pizza": { english: "PIZZA" },
  "chinese": { english: "CHINESE" },
  "noodles": { english: "NOODLES" },
  "fried-rice": { english: "FRIED RICE" },
  "pasta": { english: "PASTA" },
  "shawarma": { english: "SHAWARMA" },
};

// Full items dataset for Ice Magic (english, kannada (if any), price)
const DATA = {
  "im-special-ice-cream": [
    ["Train Cassatta","",209.99],
    ["Premium Falooda","",209.99],
    ["Hot DBC with Ice Cream","",159.99],
    ["Hot Brownie with Ice Cream","",139.99],
  ],

  "pastry": [
    ["Hot Choco Lava pastry","",69.99],
    ["Caramel Dry Fruit pastry","",89.99],
    ["Black Forest pastry","",84.99],
    ["Pineapple pastry","",74.99],
    ["Chocolate Truffle pastry","",89.99],
    ["Red Velvet pastry","",99.99],
    ["Donuts pastry","",49.99],
  ],

  "desserts": [
    ["Lotus Biscoff Dessert","ಲೋಟಸ್ ಬಿಸ್ಕಾಫ್ ಮಿಠಾಯಿ",190],
    ["Kunafa Pistachio","ಕುನಾಫಾ ಪಿಸ್ತಾಚಿಓ",210],
  ],

  "falooda-special": [
    ["Falooda Queen","ಕಲೋಡಾ ಕ್ವೀನ್",119.99],
    ["Royal Falooda","ರಾಯಲ್ ಫಾಲೂಡಾ",139.99],
    ["Mango Light"," ಮ್ಯಾಂಗೋ ಲೈಟ್",149.99],
    ["Kesar Knights falooda","ಕೇಸರ್ ನೈಟ್ಸ್",149.99],
    ["Badam Corniche falooda","ಬಾದಾಮ್ ಕಾರ್ನಿಷ್",149.99],
    ["IM Special Falooda","ಐ ಎಂ ஸ್ಪெಶல் ಫಾಲೂಡா",169.99],
  ],

  "fruits-custard": [
    ["Exotic Fruits Salad","ಎಕ್ಸೋಟಿಕ್ ಫ್ರೂಟ್ಸ್ ಸಲಾಡ್",89.99],
    ["Mix Beauty","ಮಿಕ್ಸ್ ಬ್ಯೂಟಿ",129.99],
    ["Pink Berry Gudbud","ಪಿಂಕ್ ಬೆರಿ ಗುಡ್‌ಬಡ್",129.99],
    ["Dry Fruits Custard","ಡ್ರೈ ಫ್ರೂಟ್ಸ್ ಕಸ್ಟರ್ಡ್",109.99],
    ["Toffee Sneak","ಟೋಫಿ ಸ್ನೀಕ್",159.99],
  ],

  "special-combinations": [
    ["Honeymoon Dreams","ಹನಿಮೂನ್ ಡ್ರೀಮ್ಸ್",119.99],
    ["Teenage Craze","ಟೀನೇಜ್ ಕ್ರೇಜ್",129.99],
    ["Ocean Deep","ಓಶನ್ ಡೀಪ್",129.99],
    ["Pistachio","ಪಿಸ್ತಾಬಿಯೋ",129.99],
    ["Honey Nuts","ಹನಿ ನಟ್‌ಸ್",139.99],
    ["Touch Me Not","ಟಚ್ ಮೀ ನಾಟ್",129.99],
    ["Mimosa Floats","ಮಿಮೋಸಾ ಫ್ಲೋಟ್‌ಸ್",129.99],
    ["Punch Bowl","ಪಂಚ್ ಬೋಲ್",129.99],
    ["Candy Crush","ಕ್ಯಾಂಡಿ ಕ್ರಶ್",129.99],
    ["Berry Blast","ಬೆರಿ ಬ್ಲಾಸ್ಟ್",129.99],
    ["Temptation","ಟೆಂಪ್ಟೇಶನ್",139.99],
  ],

  "royal-sundaes": [
    ["Titanic Sundae","ಟೈಟಾನಿಕ್ ಸುಂಡೇ",149.99],
    ["Triangle Love","ಟ್ರಯಾಂಗಲ್ ಲವ್",159.99],
    ["Caribbean Snow Ball","ಕ್ಯಾರಿಬಿಯನ್ ಸ್ನೋ ಬಾಲ್",159.99],
    ["Island Fish","ಐಲ್ಯಾಂಡ್ ಫಿಶ್",159.99],
    ["Apple Split","ಆಪಲ್ ಸ್ಪ್ಲಿಟ್",159.99],
    ["Banana Split","ಬನಾನ ಸ್ಪ್ಲಿಟ್",159.99],
    ["Cashew Delight","ಕ್ಯಾಶ್ಯೂ ಡಿಲೈಟ್",169.99],
    ["The Great Pyramid","ದ ಗ್ರೇಟ್ ಪಿರಮಿಡ್",169.99],
  ],

  "kids-zone": [
    ["Disney Land","ಡಿಸ್ನಿ ಲ್ಯಾಂಡ್",139.99],
    ["Snow White","ಸ್ನೋ ವೈಟ್",139.99],
    ["Tom & Jerry","ಟಾಮ್ & ಜೇರಿ",139.99],
  ],

  "chocolate-sundaes": [
    ["Chocolate Fudge","ಚಾಕೊಲೇಟ್ ಫಡ್ಜ್",139.99],
    ["Chocolate Darling","ಚಾಕೊಲೇಟ್ ಡಾರ್ಲಿಂಗ್",139.99],
    ["Oreo Delight","ಓರಿಯೋ ಡಿಲೈಟ್",139.99],
    ["Kit Kat Kiss","ಕಿಟ್ ಕ್ಯಾಟ್ ಕಿಸ್",139.99],
    ["Hot Chocolate Fudge","ಹಾಟ್ ಚಾಕೊಲೇಟ್ ಫಡ್ಜ್",149.99],
    ["Choco Mellow","ಚಾಕೋ ಮೆಲ್ಲೋ",149.99],
    ["Chocolate Fantasy","ಚಾಕೊಲೇಟ್ ಫ್ಯಾಂಟಸಿ",159.99],
    ["Choco Spider","ಚಾಕೋ ಸ್ಪೈಡರ್",159.99],
    ["Hot Chocolate Fantasy","ಹಾಟ್ ಚಾಕೊಲೇಟ್ ಫ್ಯಾಂಟಸಿ",169.99],
    ["Choco Heaven","ಚಾಕೋ ಹೇವನ್",169.99],
    ["Choco Toast","ಚಾಕೊ ಟೋಸ್ಟ್",169.99],
  ],

  "cake-with-ice-cream": [
    ["French Vanilla cake-with-ice-cream","ಫ್ರೆಂಚ್ ವನಿಲ್ಲಾ",149.99],
    ["Caribbean Chocolate cake-with-ice-cream","ಕ್ಯಾರಿಬಿಯನ್ ಚಾಕೊಲೇಟ್",159.99],
    ["Pine Magic cake-with-ice-cream","ಪೈನ್ ಮಾಜಿಕ್",159.99],
    ["Black Magic cake-with-ice-cream","ಬ್ಲ್ಯಾಕ್ ಮಾಜಿಕ್",159.99],
  ],

  

  "ice-cream-shakes": [
    ["Vanilla ice-cream-shakes","",89.99],
    ["Strawberry ice-cream-shakes","",89.99],
    ["Pista ice-cream-shakes","",99.99],
    ["Mango ice-cream-shakes","",99.99],
    ["Chocolate ice-cream-shakes","",99.99],
    ["Coffee ice-cream-shakes","",99.99],
    ["Butterscotch ice-cream-shakes","",109.99],
    ["Spanish Delight ice-cream-shakes","",109.99],
    ["Black Current ice-cream-shakes","",99.99],
    ["Kesar Pista ice-cream-shakes","",99.99],
    ["Pineapple ice-cream-shakes","",99.99],
    ["Orange ice-cream-shakes","",99.99],
    ["Fig O Honey ice-cream-shakes","",109.99],
    ["Kulfi ice-cream-shakes","",109.99],
    ["Dry Fruits ice-cream-shakes","",109.99],
  ],

  "starters": [
    ["French Fries","",79.99],
    ["Peri Peri Fries","",89.99],
    ["Nuggets","",79.99],
    ["Smiley’s","",79.99],
    ["Veg Finger","",79.99],
    ["Potato Pops","",79.99],
    ["Cheesy Nuggets","",89.99],
    ["IM Special Creamy Fries","",99.99],
    ["Creamy Fries","",89.99],
  ],

  "sandwich": [
    ["Classic sandwich","",79.99],
    ["Cheesy sandwich","",89.99],
    ["Club sandwich","",109.99],
    ["Paneer sandwich","",119.99],
    ["Roasted Corn sandwich","",109.99],
    ["Mushroom sandwich","",119.99],
    ["Mexican sandwich","",109.99],
    ["Italian sandwich ","",109.99],
    ["IM Special (with fries) sandwich","",129.99],
  ],

  "burger": [
    ["Classic burger","",79.99],
    ["Cheesy burger","",89.99],
    ["Paneer Crunchy burger","",119.99],
    ["Roasted Corn burger","",109.99],
    ["Mexican burger","",109.99],
    ["Italian burger","",109.99],
  ],

  "special-burger": [
    ["Jumbo Paneer burger","",139.99],
    ["Mushroom burger","",119.99],
    ["Humburger burger","",139.99],
    ["IM Special (with fries) burger","",139.99],
  ],

  /* Added sections and items per menu (prices already include +₹10) */
  "milk-shake-with-ice-cream": [
    ["Sharjah with Chocolate","ಶಾರ್ಜಾ ಚಾಕೊಲೇಟ್",100],
    ["Coffee with Vanilla","ಕಾಫಿ ವನಿಲ್ಲಾ",100],
    ["Mango with Vanilla","ಮಾವು ವನಿಲ್ಲಾ",110],
    ["Chicku with Vanilla","ಚಿಕ್ಕು ವನಿಲ್ಲಾ",100],
    ["Dates with Vanilla","ಖರ್ಜೂರ ವನಿಲ್ಲಾ",110],
    ["Anar with Vanilla","ದಾಳಿಂಬೆ ವನಿಲ್ಲಾ",110],
    ["Apple with Vanilla","ಸೇಬು ವನಿಲ್ಲಾ",110],
    ["Anjeer with Vanilla","ಅಂಜೂರ ವನಿಲ್ಲಾ",120],
    ["Dry Fruits with Vanilla","ಡ್ರೈ ಫ್ರೂಟ್ಸ್ ವನಿಲ್ಲಾ",120],
  ],

  "milk-shakes": [
    ["Apple Shake","ಸೇಬು",80],
    ["Chicku Shake","ಚಿಕ್ಕು",80],
    ["Mango Shake","ಮಾವು",90],
    ["Sharjah Shake","ಶಾರ್ಜಾ",80],
    ["Anar Shake","ದಾಳಿಂಬೆ",90],
    ["Dates Shake","ಖರ್ಜೂರ",100],
    ["Cold Coffee Shake","ಕೋಲ್ಡ್ ಕಾಫಿ",80],
    ["Kiwi Shake","ಕಿವಿ",90],
    ["Ice Magic Special Shake","ಐಸ್ ಮ್ಯಾಜಿಕ್ ಸ್ಪೆಷಲ್",100],
    ["Papaya Shake","ಪಪ್ಪಾಯಿ",90],
    ["Cocktail Shake","ಕಾಕ್ಟೇಲ್",90],
    ["Rose Shake","ರೋಸ್",80],
    ["Butter Shake","ಬೆಣ್ಣೆ",100],
    ["Guava Shake","ನೆಲ್ಲಿಕಾಯಿ",90],
    ["Oreo Shake","ಓರಿಯೋ",90],
    ["Dry Fruits Shake","ಡ್ರೈ ಫ್ರೂಟ್ಸ್",110],
    ["Kit Kat Shake","ಕಿಟ್ ಕ್ಯಾಟ್",110],
  ],

  "veg-momos": [
    ["Steam Momos (6 pcs)","ಸ್ಟೀಮ್",110],
    ["Fried Momos (6 pcs)","ಫ್ರೈಡ್",110],
  ],

  "mojito": [
    ["Water Melon mojito","ಕಲ್ಲಂಗಡಿ",90],
    ["Mint Lemon mojito","ಮಿಂಟ್ ಲೆಮನ್",90],
    ["Blue Berry mojito","ಬ್ಲೂ ಬೆರಿ",90],
    ["Passion Fruit mojito","ಪ್ಯಾಷನ್",90],
    ["Kala Khatta mojito","ಕಾಲಾ ಖಟ್ಟ",90],
    ["Peach Ice Tea mojito","ಪೀಚ್ ಐಸ್ ಟೀ",90],
    ["Green Apple","ಗ್ರೀನ್ ಆಪಲ್",90],
  ],

  "special-soda": [
    ["Sweet Lemon Soda","ಸಿಹಿ",40],
    ["Salt Lemon Soda","ಉಪ್ಪು",40],
    ["Ginger Lemon Soda","ಜಿಂಜರ್",50],
    ["Red Lemon Soda","ರೆಡ್",60],
    ["Blue Lemon Soda","ಬ್ಲೂ",60],
    ["Mexican Soda","ಮೆಕ್ಸಿಕನ್",60],
  ],

  "fresh-juice": [
    ["Mosambi","ಸಿಹಿ ಕಿತ್ತಳೆ",60],
    ["Rich Mosambi","ರಿಚ್",80],
    ["Orange","ಕಿತ್ತಳೆ",60],
    ["Rich Orange","ರಿಚ್",80],
    ["Grapes","ದ್ರಾಕ್ಷಿ",60],
    ["Rich Grapes","ರಿಚ್",70],
    ["Pineapple","ಅನಾನಸ್",60],
    ["Water Melon","ಕಲ್ಲಂಗಡಿ",60],
    ["Mixed Fruits","ಮಿಕ್ಸ್",60],
  ],

  "smoothie": [
    ["Morning Magic smoothie","ಮಾನಿಂಗ್ ಮ್ಯಾಜಿಕ್",100],
    ["Very Berry smoothie","ವೆರಿ ಬೆರಿ",100],
  ],

  "special-lassi": [
    ["Strawberry Lassi","ಸ್ಟ್ರಾಬೆರಿ",70],
    ["Chocolate Lassi","ಚಾಕೊಲೇಟ್",80],
    ["Mango Lassi","ಮಾವು",80],
    ["Dry Fruits Lassi","ಡ್ರೈ ಫ್ರೂಟ್ಸ್",90],
  ],

  "pizza": [
    ["Classic Hot (Small) pizza","",140],
    ["Classic Hot (Medium) pizza","",170],
    ["Pineapple Cheese (Small) pizza","",160],
    ["Pineapple Cheese (Medium) pizza","",190],
    ["Double Cheesy (Small) pizza","",160],
    ["Double Cheesy (Medium) pizza","",190],
    ["Paneer Makhani (Small) pizza","",170],
    ["Paneer Makhani (Medium) pizza","",200],
    ["IM Special Pizza (Small) pizza","",190],
    ["IM Special Pizza (Medium) pizza","",220],
  ],

  "chinese": [
    ["Gobi Manchurian","",80],
    ["Paneer Manchurian","",120],
    ["Mushroom Manchurian","",120],
    ["Chilly Paneer","",130],
  ],

  "noodles": [
    ["Classic Noodles","",100],
    ["Tomato Noodles","",110],
    ["Chilly Garlic Noodles","",110],
    ["mexican chilly noodles","",130],
    ["Butter noodles","",110],
    ["Paneer chilly noodles","",130],
  ],

  "fried-rice": [
    ["Butter Fried Rice","",110],
    ["Mexican Fried Rice","",130],
    ["Shezwan Fried Rice","",120],
    ["classical fried rice","",120],
  ],

  "pasta": [
    ["Tomato Chilly Pasta","",110],
    ["White Sauce Pasta","",110],
    ["Paneer Pasta","",130],
    ["Spicy creamy pastha","",110],
    ["Garlic cheese pastha","",110],
    ["Pesto pastha","",120],
  ],

  "shawarma": [
    ["Classic Shawarma","",90],
    ["Cheesy Shawarma","",100],
    ["Mexican Shawarma","",120],
    ["Roasted corn cheese shavarma","",110],
    ["Mushroom cheesy shavarma","",120],
  ],
};

export default function IceSection(){
  const { sectionSlug } = useParams();
  const navigate = useNavigate();

  const section = SECTION_MAP[sectionSlug] || { english: prettify(sectionSlug || 'Section') };
  const items = DATA[sectionSlug] || [];

  return (<div className="page-container">
      <div style={{position:'relative',padding:'8px 0'}}>
        <button className="header-btn" style={{position:'absolute',left:0,top:6}} onClick={()=>navigate('/ice-magic')}>← Back</button>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h2 style={{margin:0}} className="page-heading">{section.english}</h2>
          <div style={{color:'var(--muted)',marginTop:6}}>{section.kannada}</div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        {items.length === 0 ? (
          <div style={{padding:12,background:'#fff',borderRadius:12,color:'var(--muted)'}}>Items will be added soon</div>
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

