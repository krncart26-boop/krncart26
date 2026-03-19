// List of hotels that are currently closed
export const CLOSED_HOTELS = [
  'Sri Sudarshan',
  'American Cuisine',
  'Rajkumar Panipuri'
];

export function isHotelClosed(hotelName) {
  return CLOSED_HOTELS.includes(hotelName);
}
