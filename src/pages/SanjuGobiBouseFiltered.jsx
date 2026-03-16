import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function SanjuGobiBouseFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Sanju Gobi House" categorySlug={categorySlug} />;
}


