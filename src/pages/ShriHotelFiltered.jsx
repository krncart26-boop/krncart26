import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function ShriHotelFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Shri Hotel" categorySlug={categorySlug} />;
}
