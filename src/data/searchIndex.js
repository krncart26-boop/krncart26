// Centralized search index for menu items
// Each entry: { id, itemName, hotelName, sectionName, route }

const INDEX = [
  // Ice Magic (representative subset)
  { id: 'ice-vanilla', itemName: 'Vanilla', hotelName: 'Ice Magic', sectionName: 'Ice Cream Scoops', route: '/ice-magic/ice-cream-scoops' },
  { id: 'ice-str', itemName: 'Strawberry', hotelName: 'Ice Magic', sectionName: 'Ice Cream Scoops', route: '/ice-magic/ice-cream-scoops' },
  { id: 'ice-milk-shake-vanilla', itemName: 'Vanilla Milk Shake', hotelName: 'Ice Magic', sectionName: 'Milk Shakes', route: '/ice-magic/milk-shakes' },

  // KRN Restaurant (representative subset)
  { id: 'krn-paneer-manchurian', itemName: 'Paneer Manchurian', hotelName: 'KRN Restaurant', sectionName: 'Veg Starters', route: '/krn-restaurant/veg-starters' },
  { id: 'krn-chicken-manchurian', itemName: 'Chicken Manchurian', hotelName: 'KRN Restaurant', sectionName: 'Chicken Starters', route: '/krn-restaurant/chicken-starters' },
  { id: 'krn-chicken-biryani', itemName: 'Chicken Biryani', hotelName: 'KRN Restaurant', sectionName: 'Naty Style', route: '/krn-restaurant/naty-style' },

  // Udupi Hotel (representative subset)
  { id: 'udupi-masala-dosa', itemName: 'Masala Dosa', hotelName: 'Udupi Hotel', sectionName: 'Dosa & Tiffins', route: '/udupi-hotel/dosa-tiffins' },
  { id: 'udupi-south-meals', itemName: 'South Indian Meals', hotelName: 'Udupi Hotel', sectionName: 'South Indian Meals', route: '/udupi-hotel/south-indian-meals' },

  // Shri Hotel (morning / evening)
  { id: 'shri-idli', itemName: 'Idli', hotelName: "Shri Hotel", sectionName: 'Morning', route: '/shri-hotel/morning' },
  { id: 'shri-masala-dosa', itemName: 'Masala Dosa', hotelName: "Shri Hotel", sectionName: 'Morning', route: '/shri-hotel/morning' },
  { id: 'shri-onion-dosa', itemName: 'Onion Dosa', hotelName: "Shri Hotel", sectionName: 'Evening', route: '/shri-hotel/evening' },

  // Shri Tiffany's
  { id: 'tiff-kesari', itemName: 'Kesari Bath', hotelName: "Shri Tiffany's", sectionName: 'Morning', route: '/shri-tiffanys/morning' },
  { id: 'tiff-chow', itemName: 'Chow Chow Bath', hotelName: "Shri Tiffany's", sectionName: 'Morning', route: '/shri-tiffanys/morning' },

  // Sanju Gobi House
  { id: 'sanju-cabbage-manchurian', itemName: 'Cabbage Manchurian (Full)', hotelName: 'Sanju Gobi House', sectionName: 'Gobi Items', route: '/sanju-gobi-house' },
  { id: 'sanju-mushroom-manch', itemName: 'Mushroom Manchurian', hotelName: 'Sanju Gobi House', sectionName: 'Gobi Items', route: '/sanju-gobi-house' },

  // Rajkumar
  { id: 'raj-gobi-1plate', itemName: 'Gobi (1 Plate)', hotelName: 'Rajkumar (Chats)', sectionName: 'Gobi Items', route: '/rajkumar/gobi' },
  { id: 'raj-noddles', itemName: 'Noodles', hotelName: 'Rajkumar (Chats)', sectionName: 'Gobi Items', route: '/rajkumar/gobi' },

  // Tirumala Juice Centre
  { id: 'tiru-mosambi', itemName: 'Mosambi', hotelName: 'Tirumala Juice', sectionName: 'Fresh Juice', route: '/tirumala-juice/fresh-juice' },
  { id: 'tiru-vanilla-shake', itemName: 'Vanilla Milk Shake', hotelName: 'Tirumala Juice', sectionName: 'Milk Shakes', route: '/tirumala-juice/milk-shakes' },

  // Keshava Chats
  { id: 'kesh-masala', itemName: 'Masala', hotelName: 'Keshava Chats', sectionName: 'Menu', route: '/keshava-chats' },
  { id: 'kesh-panipuri', itemName: 'Panipuri', hotelName: 'Keshava Chats', sectionName: 'Menu', route: '/keshava-chats' },
  { id: 'kesh-dahi-poori', itemName: 'Dahi Poori', hotelName: 'Keshava Chats', sectionName: 'Menu', route: '/keshava-chats' },
  { id: 'kesh-samosa-masala', itemName: 'Samosa Masala', hotelName: 'Keshava Chats', sectionName: 'Menu', route: '/keshava-chats' },
  { id: 'kesh-bhel-poori', itemName: 'Bhel Poori', hotelName: 'Keshava Chats', sectionName: 'Menu', route: '/keshava-chats' },
  { id: 'kesh-sev-poori', itemName: 'Sev Poori', hotelName: 'Keshava Chats', sectionName: 'Menu', route: '/keshava-chats' },
  { id: 'kesh-sukha-poori', itemName: 'Sukha Poori', hotelName: 'Keshava Chats', sectionName: 'Menu', route: '/keshava-chats' },
  { id: 'kesh-samosa-sweet-chutney', itemName: 'Samosa + Sweet Chutney', hotelName: 'Keshava Chats', sectionName: 'Menu', route: '/keshava-chats' },

  // Juice Junction
  { id: 'juice-grapes', itemName: 'Grapes Juice', hotelName: 'Juice Junction', sectionName: 'Juices', route: '/juice-junction/juices' },
  { id: 'juice-musk-melon', itemName: 'Musk Melon Juice', hotelName: 'Juice Junction', sectionName: 'Juices', route: '/juice-junction/juices' },
  { id: 'juice-pineapple', itemName: 'Pineapple Juice', hotelName: 'Juice Junction', sectionName: 'Juices', route: '/juice-junction/juices' },
  { id: 'juice-mosambi', itemName: 'Mosambi Juice', hotelName: 'Juice Junction', sectionName: 'Juices', route: '/juice-junction/juices' },
  { id: 'juice-orange', itemName: 'Orange Juice', hotelName: 'Juice Junction', sectionName: 'Juices', route: '/juice-junction/juices' },
  { id: 'juice-carrot-beet', itemName: 'Carrot & Beetroot Juice', hotelName: 'Juice Junction', sectionName: 'Juices', route: '/juice-junction/juices' },
  { id: 'juice-lemon', itemName: 'Lemon Juice', hotelName: 'Juice Junction', sectionName: 'Juices', route: '/juice-junction/juices' },

  // Juice Junction - SODA
  { id: 'juice-lemon-salt', itemName: 'Lemon Salt', hotelName: 'Juice Junction', sectionName: 'Soda', route: '/juice-junction/soda' },
  { id: 'juice-lemon-sweet', itemName: 'Lemon Sweet', hotelName: 'Juice Junction', sectionName: 'Soda', route: '/juice-junction/soda' },
  { id: 'juice-herale-kayi-salt', itemName: 'Herale Kayi Salt', hotelName: 'Juice Junction', sectionName: 'Soda', route: '/juice-junction/soda' },
  { id: 'juice-herale-kayi-sweet', itemName: 'Herale Kayi Sweet', hotelName: 'Juice Junction', sectionName: 'Soda', route: '/juice-junction/soda' },

  // Juice Junction - MILK SHAKE
  { id: 'juice-apple-milkshake', itemName: 'Apple Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-pomegranate-milkshake', itemName: 'Pomegranate Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-sapota-milkshake', itemName: 'Sapota Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-strawberry-milkshake', itemName: 'Strawberry Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-protein-milkshake', itemName: 'Protein Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-oreo-milkshake', itemName: 'Oreo Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-cold-coffee', itemName: 'Cold Coffee', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-karbuja-musk-melon-milkshake', itemName: 'Karbuja / Musk Melon Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-dry-fruit-milkshake', itemName: 'Dry Fruit Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-chocolate-milkshake', itemName: 'Chocolate Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-boost-milkshake', itemName: 'Boost Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-vanilla-milkshake', itemName: 'Vanilla Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-black-current-milkshake', itemName: 'Black Current Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },
  { id: 'juice-anjoora-milkshake', itemName: 'Anjoora Milkshake', hotelName: 'Juice Junction', sectionName: 'Milk Shake', route: '/juice-junction/milk-shake' },


  // Additional representative entries
  { id: 'krn-paneer-butter-masala', itemName: 'Paneer Butter Masala', hotelName: 'KRN Restaurant', sectionName: 'Indian Gravies', route: '/krn-restaurant/indian-gravies' },
  { id: 'udupi-plain-dosa', itemName: 'Plain Dosa', hotelName: 'Udupi Hotel', sectionName: 'Dosa & Tiffins', route: '/udupi-hotel/dosa-tiffins' },
  { id: 'sanju-gobi-dry', itemName: 'Gobi Dry', hotelName: 'Sanju Gobi House', sectionName: 'Gobi Items', route: '/sanju-gobi-house' },
];

export default INDEX;
