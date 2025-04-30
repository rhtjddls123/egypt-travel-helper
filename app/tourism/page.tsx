import TourismInfo from "@/components/tourism/tourism-info";
import { getPlaces } from "@/utils/tourism";
import React from "react";

const TourismPage = async () => {
  const places = await getPlaces();

  return (
    <div className="space-y-6">
      <TourismInfo places={places} />
    </div>
  );
};

export default TourismPage;
