import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function ShreeShaCafeFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="ShreeSha cafe" categorySlug={categorySlug} />;
}

