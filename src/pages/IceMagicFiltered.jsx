import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function IceMagicFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Ice Magic" categorySlug={categorySlug} />;
}
