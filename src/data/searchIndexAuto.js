// Dynamically generate search index from the central hotels registry
// Each entry: { id, itemName, kannada, hotelName, sectionName, route }

import HOTELS from './hotelsRegistry';

function slugify(str){
  return (str||'').toString().toLowerCase().replace(/\s+/g,'-').replace(/[&+\/]/g,'and').replace(/[^a-z0-9-]/g,'');
}

const INDEX = [];

for(const hotel of HOTELS){
  const { hotelId, hotelName, menu = {}, sectionMap = {}, routePrefix } = hotel;

  const sectionKeys = Object.keys(menu || {});
  const isSingleSection = sectionKeys.length === 1;

  for(const [sectionSlug, items] of Object.entries(menu)){
    const section = sectionMap[sectionSlug] || {};
    const sectionName = section.english || (sectionSlug === 'default' || sectionSlug === '' ? '' : sectionSlug.replace(/[-_]/g,' ').replace(/\b\w/g,c=>c.toUpperCase()));
    const route = isSingleSection || sectionSlug === 'default' || sectionSlug === '' ? `/${routePrefix}` : `/${routePrefix}/${sectionSlug}`;

    for(const item of items){
      let english = '';
      let kannada = '';
      let id = '';

      if(Array.isArray(item)){
        [english, kannada] = item;
        id = `${hotelId}-${sectionSlug}-${slugify(english)}`;
      } else {
        english = item.name || item.itemName || '';
        kannada = item.kannada || '';
        id = item.id || `${hotelId}-${sectionSlug}-${slugify(english)}`;
      }

      INDEX.push({ id, itemName: english, kannada, hotelName, sectionName, route });
    }
  }
}

export default INDEX;
