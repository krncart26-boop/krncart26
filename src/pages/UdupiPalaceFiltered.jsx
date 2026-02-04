import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function UdupiPalaceFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Udupi Palace" categorySlug={categorySlug} />;
}
