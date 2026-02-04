import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function GanisRestaurantFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Gani's Restaurant" categorySlug={categorySlug} />;
}
