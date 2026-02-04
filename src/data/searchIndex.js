// Centralized search index for menu items
// Each entry: { id, itemName, hotelName, sectionName, route }



import { ICE_MAGIC_DATA, ICE_MAGIC_SECTION_MAP } from './menus/iceMagic';
import { UDUPI_DATA, UDUPI_SECTION_MAP } from './menus/udupi';
import { KESHAVA_ITEMS } from './menus/keshavaChats';
import { JUICE_DATA, JUICE_SECTION_MAP } from './menus/juiceJunction';
import { SANJU_ITEMS } from './menus/sanjuGobiHouse';
import { RAJKUMAR_DATA, RAJKUMAR_SECTION_MAP } from './menus/rajkumar';
import { SHRI_MORNING_ITEMS } from './menus/shriHotelMorning';
import { SHRI_EVENING_ITEMS } from './menus/shriHotelEvening';
import { SHRI_TIFFANYS_MORNING_ITEMS } from './menus/shriTiffanysMorning';
import { VB_DATA, VB_SECTION_MAP } from './menus/vbBakery';


function buildSectionIndex({
  data,
  sectionMap,
  hotelName,
  routePrefix,
  idPrefix,
  itemFields = ['name', 'kannada', 'price'],
}) {
  const index = [];
  for (const [sectionSlug, items] of Object.entries(data)) {
    const section = sectionMap[sectionSlug] || { english: sectionSlug };
    const sectionName = section.english;
    const route = `/${routePrefix}/${sectionSlug}`;
    for (const item of items) {
      // item can be array or object
      let english, kannada, price;
      if (Array.isArray(item)) {
        [english, kannada, price] = item;
      } else {
        english = item[itemFields[0]];
        kannada = item[itemFields[1]];
        price = item[itemFields[2]];
      }
      index.push({
        id: `${idPrefix}-${sectionSlug}-${(english||'').toLowerCase().replace(/\s+/g, '-')}`,
        itemName: english,
        kannada,
        hotelName,
        sectionName,
        route,
      });
    }
  }
  return index;
}

function buildSimpleItemIndex({ items, hotelName, sectionName, routePrefix, idPrefix, itemFields = ['name', 'kannada', 'price'] }) {
  return items.map(item => {
    let english, kannada, price, id;
    if (Array.isArray(item)) {
      [english, kannada, price] = item;
      id = `${idPrefix}-${(english||'').toLowerCase().replace(/\s+/g, '-')}`;
    } else {
      english = item[itemFields[0]];
      kannada = item[itemFields[1]];
      price = item[itemFields[2]];
      id = item.id || `${idPrefix}-${(english||'').toLowerCase().replace(/\s+/g, '-')}`;
    }
    return {
      id,
      itemName: english,
      kannada,
      hotelName,
      sectionName,
      route: `/${routePrefix}`,
    };
  });
}



const INDEX = [
  // Ice Magic
  ...buildSectionIndex({
    data: ICE_MAGIC_DATA,
    sectionMap: ICE_MAGIC_SECTION_MAP,
    hotelName: 'Ice Magic',
    routePrefix: 'ice-magic',
    idPrefix: 'ice',
  }),
  // Udupi
  ...buildSectionIndex({
    data: UDUPI_DATA,
    sectionMap: UDUPI_SECTION_MAP,
    hotelName: 'Udupi Hotel',
    routePrefix: 'udupi-hotel',
    idPrefix: 'udupi',
  }),
  // Keshava Chats
  ...buildSimpleItemIndex({
    items: KESHAVA_ITEMS,
    hotelName: 'Keshava Chats',
    sectionName: 'Chats',
    routePrefix: 'keshava-chats',
    idPrefix: 'keshava',
  }),
  // Lakshmi Juice Corner
  ...buildSectionIndex({
    data: JUICE_DATA,
    sectionMap: JUICE_SECTION_MAP,
    hotelName: 'Lakshmi Juice Corner',
    routePrefix: 'juice-junction',
    idPrefix: 'juice',
  }),
  // Sanju Gobi House
  ...buildSimpleItemIndex({
    items: SANJU_ITEMS,
    hotelName: 'Sanju Gobi House',
    sectionName: 'Gobi Items',
    routePrefix: 'sanju-gobi-house',
    idPrefix: 'sanju',
  }),
  // Rajkumar
  ...buildSectionIndex({
    data: RAJKUMAR_DATA,
    sectionMap: RAJKUMAR_SECTION_MAP,
    hotelName: 'Rajkumar',
    routePrefix: 'rajkumar',
    idPrefix: 'rajkumar',
  }),
  // Shri Hotel Morning
  ...buildSimpleItemIndex({
    items: SHRI_MORNING_ITEMS,
    hotelName: 'Shri Hotel',
    sectionName: 'Morning',
    routePrefix: 'shri-hotel-morning',
    idPrefix: 'shri-morning',
  }),
  // Shri Hotel Evening
  ...buildSimpleItemIndex({
    items: SHRI_EVENING_ITEMS,
    hotelName: 'Shri Hotel',
    sectionName: 'Evening',
    routePrefix: 'shri-hotel-evening',
    idPrefix: 'shri-evening',
  }),
  // Shri Tiffany's Morning
  ...buildSimpleItemIndex({
    items: SHRI_TIFFANYS_MORNING_ITEMS,
    hotelName: "Shri Tiffany's",
    sectionName: 'Morning',
    routePrefix: 'shri-tiffanys-morning',
    idPrefix: 'tiffanys-morning',
  }),
  // VB Bakery
  ...buildSectionIndex({
    data: VB_DATA,
    sectionMap: VB_SECTION_MAP,
    hotelName: 'VB Bakery',
    routePrefix: 'vb-bakery',
    idPrefix: 'vb',
  }),
];

export default INDEX;
