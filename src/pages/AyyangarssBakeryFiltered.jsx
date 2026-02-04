import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function AyyangarssBakeryFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Ayyangars Bakery" categorySlug={categorySlug} />;
}
