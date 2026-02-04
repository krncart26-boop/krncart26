import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function ShriTiffanysFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Shri Tiffany's" categorySlug={categorySlug} />;
}
