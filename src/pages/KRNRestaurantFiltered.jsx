import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function KRNRestaurantFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="KRN Restaurant" categorySlug={categorySlug} />;
}
