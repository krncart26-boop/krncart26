import React from "react";
import { useParams } from "react-router-dom";
import FilteredHotelPage from "./FilteredHotelPage";

export default function KeshavaChatsFiltered() {
  const { categorySlug } = useParams();
  return <FilteredHotelPage hotelName="Keshava Chats" categorySlug={categorySlug} />;
}
