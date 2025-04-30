"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import TourismOption from "./tourism-option";
import TourismSearch from "./tourism-search";
import TourismCard from "./tourism-card";
import { PlacesIdType, TourismCardType, TourismPlaceType } from "@/types/tourismType";
import { Card } from "../ui/card";
import { fetchTourism } from "@/utils/tourism";

interface TourismInfoProps {
  places: TourismPlaceType[];
}

const TourismInfo = ({ places }: TourismInfoProps) => {
  const [select, setSelect] = useState<PlacesIdType>("popular");
  const [datas, setDatas] = useState<TourismCardType[]>([]);
  const [searchText, setSearchText] = useState("");

  async function fetchData(city: PlacesIdType) {
    const data = await fetchTourism(city);
    setDatas(data);
  }

  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchText(value);
  }

  function handleChangeSelect(id: PlacesIdType) {
    setSelect(id);
  }

  useEffect(() => {
    fetchData(select);
  }, [select]);

  const filtered = datas.filter((data) => data.name.includes(searchText));

  return (
    <>
      <div className="space-y-4">
        <TourismOption places={places} select={select} onChange={handleChangeSelect} />
        <TourismSearch onChange={handleChangeSearch} />
      </div>
      <div className="space-y-4">
        {filtered.map((data) => (
          <TourismCard key={data.id} data={data} />
        ))}
        {filtered.length === 0 && (
          <Card className="p-4 text-center">
            <p className="text-gray-500">검색 결과가 없습니다.</p>
          </Card>
        )}
      </div>
    </>
  );
};

export default TourismInfo;
