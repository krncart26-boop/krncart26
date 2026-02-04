import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function RajkumarPanipuriFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Rajkumar Panipuri" categorySlug={categorySlug} />;
}
