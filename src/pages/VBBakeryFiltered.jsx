import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function VBBakeryFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="VB Bakery" categorySlug={categorySlug} />;
}
