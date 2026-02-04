import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function TirumalaJuiceFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Tirumala Juice" categorySlug={categorySlug} />;
}
