// App root: sets up routes and layout
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Splash from "./pages/Splash";
import Categories from "./pages/Categories";
import FoodAndSnacks from "./pages/FoodAndSnacks";
import Grocery from "./pages/Grocery";
import Medicines from "./pages/Medicines";
import MedicalDisclaimer from "./pages/MedicalDisclaimer";
import MilkWater from "./pages/MilkWater";
import Hotel from "./pages/Hotel";
import KeshavaChats from "./pages/KeshavaChats";
import KRNRestaurant from "./pages/KRNRestaurant";
import AmmaManeUta from "./pages/AmmaManeUta";
import AmmaManeUtaSection from "./pages/AmmaManeUtaSection";
import SectionPlaceholder from "./pages/SectionPlaceholder";
import IceMagic from "./pages/IceMagic";
import IceSection from "./pages/IceSection";
import IceMagicLunchFilter from "./pages/IceMagicLunchFilter";
import IceMagicEveningFilter from "./pages/IceMagicEveningFilter";
import UdupiHotel from "./pages/UdupiHotel";
import UdupiSection from "./pages/UdupiSection";
import GowdaPalavCentre from "./pages/GowdaPalavCentre";
import ShriTiffanys from "./pages/ShriTiffanys";
import ShriTiffanysMorning from "./pages/ShriTiffanysMorning";
import ShriTiffanysEvening from "./pages/ShriTiffanysEvening";
import ShriHotel from "./pages/ShriHotel";
import ShriHotelMorning from "./pages/ShriHotelMorning";
import ShriHotelEvening from "./pages/ShriHotelEvening";
import TirumalaJuice from "./pages/TirumalaJuice";
import TirumalaSection from "./pages/TirumalaSection";
import Rajkumar from "./pages/Rajkumar";
import RajkumarSection from "./pages/RajkumarSection";
import VBBakery from "./pages/VBBakery";
import VBBakerySection from "./pages/VBBakerySection";
import AyyangarssCakeHouse from "./pages/AyyangarssCakeHouse";
import AyyangarssCakeHouseSection from "./pages/AyyangarssCakeHouseSection";
import GanisRestaurant from "./pages/GanisRestaurant";
import GanisLunchFilter from "./pages/GanisLunchFilter";
import SanjuGobiHouse from "./pages/SanjuGobiHouse";
import JuiceJunction from "./pages/JuiceJunction";
import JuiceSection from "./pages/JuiceSection";
import ShreeShaIndia from "./pages/ShreeShaIndia";
import ShreeShaIndiaSection from "./pages/ShreeShaIndiaSection";
import ShreeShaIndiaFiltered from "./pages/ShreeShaIndiaFiltered";
import PopularBiriyaniPalace from "./pages/PopularBiriyaniPalace";
import HarishGobiCentre from "./pages/HarishGobiCentre";
import AmericanCuisine from "./pages/AmericanCuisine";
import AmericanCuisineSection from "./pages/AmericanCuisineSection";
import AmericanCuisineFiltered from "./pages/AmericanCuisineFiltered";
import SriSudarshan from "./pages/SriSudarshan";
import SriSudarshanSection from "./pages/SriSudarshanSection";
import PunjabiKitchen from "./pages/PunjabiKitchen";
import PunjabiKitchenSection from "./pages/PunjabiKitchenSection";
import Cart from "./pages/Cart"; 
import Account from "./pages/Account";
import Help from "./pages/Help";
import OrderHistory from "./pages/OrderHistory";

// Filtered hotel pages
import UdupiPalaceFiltered from "./pages/UdupiPalaceFiltered";
import IceMagicFiltered from "./pages/IceMagicFiltered";
import IceMagicJuiceFiltered from "./pages/IceMagicJuiceFiltered";
import KRNRestaurantFiltered from "./pages/KRNRestaurantFiltered";
import ShriTiffanysFiltered from "./pages/ShriTiffanysFiltered";
import ShriHotelFiltered from "./pages/ShriHotelFiltered";
import RajkumarPanipuriFiltered from "./pages/RajkumarPanipuriFiltered";
import GowdaPalavCentreFiltered from "./pages/GowdaPalavCentreFiltered";
import VBBakeryFiltered from "./pages/VBBakeryFiltered";
import SanjuGobiBouseFiltered from "./pages/SanjuGobiBouseFiltered";
import SanjuGobiHouseChatsFilter from "./pages/SanjuGobiHouseChatsFilter";
import KeshavaChatsFiltered from "./pages/KeshavaChatsFiltered";
import TirumalaJuiceFiltered from "./pages/TirumalaJuiceFiltered";
import AyyangarssCakeHouseFiltered from "./pages/AyyangarssCakeHouseFiltered";
import LakshmiJuiceCornerFiltered from "./pages/LakshmiJuiceCornerFiltered";
import GanisRestaurantFiltered from "./pages/GanisRestaurantFiltered";
import ShreeShaCafeFiltered from "./pages/ShreeShaCafeFiltered";
import PopularBiriyaniPalaceFiltered from "./pages/PopularBiriyaniPalaceFiltered";

import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import { CartProvider } from "./context/CartContext";

export default function App() {
  const location = useLocation();

  // Hide header & bottom nav on Splash screen
  const isSplash = location.pathname === "/";

  return (
    <CartProvider>
      <div className="app-root">
        {!isSplash && <Header />}

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Categories />} />
            <Route path="/food-and-snacks" element={<FoodAndSnacks />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
            <Route path="/milk-water" element={<MilkWater />} />
            
            {/* Filtered hotel routes MUST come before generic :sectionSlug routes */}
            {/* Udupi Palace Breakfast filter with sections */}
            <Route path="/udupi-hotel/filter/breakfast/:sectionSlug" element={<UdupiPalaceFiltered />} />
            {/* Udupi Palace Lunch filter with sections */}
            <Route path="/udupi-hotel/filter/lunch/:sectionSlug" element={<UdupiPalaceFiltered />} />
            {/* Udupi Palace Snacks filter with sections */}
            <Route path="/udupi-hotel/filter/snacks/:sectionSlug" element={<UdupiPalaceFiltered />} />
            {/* Udupi Palace Juice filter with sections */}
            <Route path="/udupi-hotel/filter/juice/:sectionSlug" element={<UdupiPalaceFiltered />} />
            {/* Udupi Palace Chats filter with sections */}
            <Route path="/udupi-hotel/filter/chats/:sectionSlug" element={<UdupiPalaceFiltered />} />
            {/* Udupi Palace Ice Cream & Sundaes filter with sections */}
            <Route path="/udupi-hotel/ice-cream-sundaes/:sectionSlug" element={<UdupiPalaceFiltered />} />
            <Route path="/udupi-hotel/ice-cream-sundaes" element={<UdupiPalaceFiltered />} />
            <Route path="/udupi-hotel/filter/ice-cream-sundaes" element={<UdupiPalaceFiltered />} />
            <Route path="/udupi-hotel/filter/:categorySlug" element={<UdupiPalaceFiltered />} />
            <Route path="/ice-magic/snacks/:sectionSlug" element={<IceMagicFiltered />} />
            <Route path="/ice-magic/snacks" element={<IceMagicFiltered />} />
            <Route path="/ice-magic/ice-cream-sundaes/:sectionSlug" element={<IceMagicFiltered />} />
            <Route path="/ice-magic/ice-cream-sundaes" element={<IceMagicFiltered />} />
            <Route path="/ice-magic/filter/ice-cream-sundaes" element={<IceMagicFiltered />} />
            <Route path="/ice-magic/filter/lunch/:sectionSlug" element={<IceMagicLunchFilter />} />
            <Route path="/ice-magic/filter/lunch" element={<IceMagicLunchFilter />} />
            <Route path="/ice-magic/filter/evening-food/:sectionSlug" element={<IceMagicEveningFilter />} />
            <Route path="/ice-magic/filter/evening-food" element={<IceMagicEveningFilter />} />
            <Route path="/ice-magic/filter/evening/:sectionSlug" element={<IceMagicEveningFilter />} />
            <Route path="/ice-magic/filter/evening" element={<IceMagicEveningFilter />} />
            <Route path="/ice-magic/filter/juice/:sectionSlug" element={<IceMagicJuiceFiltered />} />
            <Route path="/ice-magic/filter/juice" element={<IceMagicJuiceFiltered />} />
            <Route path="/ice-magic/filter/:categorySlug" element={<IceMagicFiltered />} />
            {/* KRN Restaurant Snacks filter with sections */}
            <Route path="/krn-restaurant/snacks/:sectionSlug" element={<KRNRestaurantFiltered />} />
            <Route path="/krn-restaurant/filter/snacks" element={<KRNRestaurantFiltered />} />
            {/* KRN Restaurant Lunch filter with sections */}
            <Route path="/krn-restaurant/lunch/:sectionSlug" element={<KRNRestaurantFiltered />} />
            {/* KRN Restaurant Evening Food filter with sections */}
            <Route path="/krn-restaurant/filter/evening/:sectionSlug" element={<KRNRestaurantFiltered />} />
            <Route path="/krn-restaurant/filter/evening" element={<KRNRestaurantFiltered />} />
            <Route path="/krn-restaurant/filter/:categorySlug" element={<KRNRestaurantFiltered />} />
            {/* Amma Mane Uta - All category filters redirect to main items view */}
            <Route path="/amma-mane-uta/filter/lunch" element={<AmmaManeUta />} />
            <Route path="/amma-mane-uta/filter/evening-food" element={<AmmaManeUta />} />
            <Route path="/amma-mane-uta/filter/:categorySlug" element={<AmmaManeUta />} />
            {/* Shri Tiffany's Breakfast filter with sections */}
            <Route path="/shri-tiffanys/filter/breakfast/:sectionSlug" element={<ShriTiffanysFiltered />} />
            <Route path="/shri-tiffanys/filter/breakfast" element={<ShriTiffanysFiltered />} />
            <Route path="/shri-tiffanys/filter/:categorySlug" element={<ShriTiffanysFiltered />} />
            {/* Shri Tiffany's Evening Food filter with sections */}
            <Route path="/shri-tiffanys/evening/:sectionSlug" element={<ShriTiffanysFiltered />} />
            <Route path="/shri-tiffanys/filter/evening-food" element={<ShriTiffanysFiltered />} />
            {/* Shri Hotel Breakfast filter with all items directly */}
            <Route path="/shri-hotel/filter/breakfast" element={<ShriHotelFiltered />} />
            <Route path="/shri-hotel/filter/:categorySlug" element={<ShriHotelFiltered />} />
            {/* Rajkumar Chats filter with sections and landing page */}
            <Route path="/rajkumar/chats/:sectionSlug" element={<RajkumarPanipuriFiltered />} />
            <Route path="/rajkumar/filter/chats" element={<RajkumarPanipuriFiltered />} />
            <Route path="/rajkumar/filter/:categorySlug" element={<RajkumarPanipuriFiltered />} />
            <Route path="/gowda-palav-centre/filter/:categorySlug" element={<GowdaPalavCentreFiltered />} />
            {/* VB Bakery Bakery filter with all items directly */}
            <Route path="/vb-bakery/filter/bakery" element={<VBBakeryFiltered />} />
            <Route path="/vb-bakery/filter/:categorySlug" element={<VBBakeryFiltered />} />
            {/* Sanju Gobi House Chats filter with sections */}
            <Route path="/sanju-gobi-house/filter/chats/:sectionSlug" element={<SanjuGobiHouseChatsFilter />} />
            <Route path="/sanju-gobi-house/filter/chats" element={<SanjuGobiHouseChatsFilter />} />
            <Route path="/sanju-gobi-house/filter/:categorySlug" element={<SanjuGobiBouseFiltered />} />
            {/* Keshava Chats filter with all items directly */}
            <Route path="/keshava-chats/filter/chats" element={<KeshavaChatsFiltered />} />
            <Route path="/keshava-chats/filter/:categorySlug" element={<KeshavaChatsFiltered />} />
            <Route path="/tirumala-juice/filter/juices/:sectionSlug" element={<TirumalaJuiceFiltered />} />
            <Route path="/tirumala-juice/filter/:categorySlug" element={<TirumalaJuiceFiltered />} />
            <Route path="/ayyangars-cake-house/filter/:categorySlug" element={<AyyangarssCakeHouseFiltered />} />
            <Route path="/juice-junction/filter/juices/:sectionSlug" element={<LakshmiJuiceCornerFiltered />} />
            <Route path="/juice-junction/filter/:categorySlug" element={<LakshmiJuiceCornerFiltered />} />
            {/* Gani's Restaurant Lunch filter with sections */}
            <Route path="/ganis-restaurant/filter/lunch/:sectionSlug" element={<GanisLunchFilter />} />
            <Route path="/ganis-restaurant/filter/lunch" element={<GanisLunchFilter />} />
            {/* Gani's Restaurant ALL filter with sections */}
            <Route path="/ganis-restaurant/filter/all/:sectionSlug" element={<GanisRestaurantFiltered />} />
            <Route path="/ganis-restaurant/filter/:categorySlug" element={<GanisRestaurantFiltered />} />
            <Route path="/shreesha-india/filter/:categorySlug" element={<ShreeShaCafeFiltered />} />
            {/* ShreeSha Café Snacks filter with sections */}
            <Route path="/shreesha-cafe/snacks/:sectionSlug" element={<ShreeShaIndiaFiltered />} />
            <Route path="/shreesha-cafe/snacks" element={<ShreeShaIndiaFiltered />} />
            {/* ShreeSha Café Juice filter with sections */}
            <Route path="/shreesha-cafe/juice/:sectionSlug" element={<ShreeShaIndiaFiltered />} />
            <Route path="/shreesha-cafe/juice" element={<ShreeShaIndiaFiltered />} />
            <Route path="/shreesha-cafe/:sectionSlug" element={<ShreeShaIndiaFiltered />} />
            <Route path="/shreesha-cafe/filter/:categorySlug" element={<ShreeShaIndiaFiltered />} />
            
            {/* Regular hotel routes with their sections */}
            <Route path="/keshava-chats" element={<KeshavaChats />} />
            <Route path="/krn-restaurant" element={<KRNRestaurant />} />
            <Route path="/krn-restaurant/:sectionSlug" element={<SectionPlaceholder />} />
            <Route path="/amma-mane-uta" element={<AmmaManeUta />} />
            <Route path="/amma-mane-uta/:sectionSlug" element={<AmmaManeUtaSection />} />
            <Route path="/ice-magic" element={<IceMagic />} />
            <Route path="/ice-magic/:sectionSlug" element={<IceSection />} />
            <Route path="/udupi-hotel" element={<UdupiHotel />} />
            <Route path="/udupi-hotel/:sectionSlug" element={<UdupiSection />} />
            <Route path="/gowda-palav-centre" element={<GowdaPalavCentre />} />
            <Route path="/shri-tiffanys" element={<ShriTiffanys />} />
            <Route path="/shri-tiffanys/morning" element={<ShriTiffanysMorning />} />
            <Route path="/shri-tiffanys/evening" element={<ShriTiffanysEvening />} />
            <Route path="/shri-hotel" element={<ShriHotel />} />
            <Route path="/shri-hotel/morning" element={<ShriHotelMorning />} />
            <Route path="/shri-hotel/evening" element={<ShriHotelEvening />} />
            <Route path="/tirumala-juice" element={<TirumalaJuice />} />
            <Route path="/tirumala-juice/:sectionSlug" element={<TirumalaSection />} />
            <Route path="/rajkumar" element={<Rajkumar />} />
            <Route path="/rajkumar/:sectionSlug" element={<RajkumarSection />} />
            <Route path="/vb-bakery" element={<VBBakery />} />
            <Route path="/vb-bakery/:sectionSlug" element={<VBBakerySection />} />
            <Route path="/ayyangars-cake-house" element={<AyyangarssCakeHouse />} />
            <Route path="/ayyangars-cake-house/:sectionSlug" element={<AyyangarssCakeHouseSection />} />
            <Route path="/ganis-restaurant" element={<GanisRestaurant />} />
            <Route path="/sanju-gobi-house" element={<SanjuGobiHouse />} />
            <Route path="/harish-gobi-centre" element={<HarishGobiCentre />} />
            <Route path="/american-cuisine" element={<AmericanCuisine />} />
            <Route path="/american-cuisine/filter/:categorySlug" element={<AmericanCuisineFiltered />} />
            <Route path="/american-cuisine/:sectionSlug" element={<AmericanCuisineSection />} />
            <Route path="/sri-sudarshan" element={<SriSudarshan />} />
            <Route path="/sri-sudarshan/:sectionSlug" element={<SriSudarshanSection />} />
            <Route path="/punjabi-hotel" element={<PunjabiKitchen />} />
            <Route path="/punjabi-hotel/:sectionSlug" element={<PunjabiKitchenSection />} />
            <Route path="/juice-junction" element={<JuiceJunction />} />
            <Route path="/juice-junction/:sectionSlug" element={<JuiceSection />} />
            <Route path="/shreesha-india" element={<ShreeShaIndia />} />
            <Route path="/shreesha-india/:sectionSlug" element={<ShreeShaIndiaSection />} />
            <Route path="/shreesha-cafe" element={<ShreeShaIndiaFiltered />} />
            <Route path="/popular-biriyani-palace" element={<PopularBiriyaniPalace />} />
            <Route path="/popular-biriyani-palace/filter/:categorySlug" element={<PopularBiriyaniPalaceFiltered />} />
            
            <Route path="/hotel/:hotelName" element={<Hotel />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/help" element={<Help />} />
            <Route path="/account" element={<Account />} />
            <Route path="/order-history" element={<OrderHistory />} />
          </Routes>
        </main>

        {!isSplash && <BottomNav />}
      </div>
    </CartProvider>
  );
}
