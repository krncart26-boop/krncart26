import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function GowdaPalavCentreFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Gowda Palav Centre" categorySlug={categorySlug} />;
}
