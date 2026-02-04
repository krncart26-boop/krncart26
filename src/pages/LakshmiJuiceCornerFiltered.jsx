import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function LakshmiJuiceCornerFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Lakshmi Juice Corner" categorySlug={categorySlug} />;
}
