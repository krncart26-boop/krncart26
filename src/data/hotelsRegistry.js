// Central registry of hotels and their exported menu data
// Each hotel entry must provide: hotelId, hotelName, menu (sectionSlug -> items[]), optional sectionMap, routePrefix

import * as IceMagic from '../pages/IceMagic';
import * as UdupiHotel from '../pages/UdupiHotel';
import * as KeshavaChats from '../pages/KeshavaChats';
import * as JuiceJunction from '../pages/JuiceJunction';
import * as SanjuGobiHouse from '../pages/SanjuGobiHouse';
import * as Rajkumar from '../pages/Rajkumar';
import * as ShriHotel from '../pages/ShriHotel';
import * as ShriTiffanys from '../pages/ShriTiffanys';
import * as VBBakery from '../pages/VBBakery';
import * as TirumalaJuice from '../pages/TirumalaJuice';

const HOTELS = [
  {
    hotelId: IceMagic.hotelId || 'ice-magic',
    hotelName: IceMagic.hotelName || 'Ice Magic',
    menu: IceMagic.menu || {},
    sectionMap: IceMagic.sectionMap || {},
    routePrefix: IceMagic.routePrefix || 'ice-magic',
  },
  {
    hotelId: UdupiHotel.hotelId || 'udupi-hotel',
    hotelName: UdupiHotel.hotelName || 'Udupi Hotel',
    menu: UdupiHotel.menu || {},
    sectionMap: UdupiHotel.sectionMap || {},
    routePrefix: UdupiHotel.routePrefix || 'udupi-hotel',
  },
  {
    hotelId: KeshavaChats.hotelId || 'keshava-chats',
    hotelName: KeshavaChats.hotelName || 'Keshava Chats',
    menu: KeshavaChats.menu || {},
    sectionMap: KeshavaChats.sectionMap || {},
    routePrefix: KeshavaChats.routePrefix || 'keshava-chats',
  },
  {
    hotelId: JuiceJunction.hotelId || 'juice-junction',
    hotelName: JuiceJunction.hotelName || 'Lakshmi Juice Corner',
    menu: JuiceJunction.menu || {},
    sectionMap: JuiceJunction.sectionMap || {},
    routePrefix: JuiceJunction.routePrefix || 'juice-junction',
  },
  {
    hotelId: SanjuGobiHouse.hotelId || 'sanju-gobi-house',
    hotelName: SanjuGobiHouse.hotelName || 'Sanju Gobi House',
    menu: SanjuGobiHouse.menu || {},
    sectionMap: SanjuGobiHouse.sectionMap || {},
    routePrefix: SanjuGobiHouse.routePrefix || 'sanju-gobi-house',
  },
  {
    hotelId: Rajkumar.hotelId || 'rajkumar',
    hotelName: Rajkumar.hotelName || 'Rajkumar',
    menu: Rajkumar.menu || {},
    sectionMap: Rajkumar.sectionMap || {},
    routePrefix: Rajkumar.routePrefix || 'rajkumar',
  },
  {
    hotelId: ShriHotel.hotelId || 'shri-hotel',
    hotelName: ShriHotel.hotelName || 'Shri Hotel',
    menu: ShriHotel.menu || {},
    sectionMap: ShriHotel.sectionMap || {},
    routePrefix: ShriHotel.routePrefix || 'shri-hotel',
  },
  {
    hotelId: ShriTiffanys.hotelId || 'shri-tiffanys',
    hotelName: ShriTiffanys.hotelName || "Shri Tiffany's",
    menu: ShriTiffanys.menu || {},
    sectionMap: ShriTiffanys.sectionMap || {},
    routePrefix: ShriTiffanys.routePrefix || 'shri-tiffanys',
  },
  {
    hotelId: VBBakery.hotelId || 'vb-bakery',
    hotelName: VBBakery.hotelName || 'VB Bakery',
    menu: VBBakery.menu || {},
    sectionMap: VBBakery.sectionMap || {},
    routePrefix: VBBakery.routePrefix || 'vb-bakery',
  },
  {
    hotelId: TirumalaJuice.hotelId || 'tirumala-juice',
    hotelName: TirumalaJuice.hotelName || 'Tirumala Juice Centre',
    menu: TirumalaJuice.menu || {},
    sectionMap: TirumalaJuice.sectionMap || {},
    routePrefix: TirumalaJuice.routePrefix || 'tirumala-juice',
  },
];

export default HOTELS;