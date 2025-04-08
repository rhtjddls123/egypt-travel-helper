"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import TourismOption from "./tourism-option";
import TourismSearch from "./tourism-search";
import TourismCard from "./tourism-card";
import { PlacesIdType, TourismCardType } from "@/types/tourismType";
import { Card } from "../ui/card";

const sampleData = {
  popular: [
    {
      id: 1,
      name: "기자 피라미드",
      description:
        "세계 7대 불가사의 중 하나인 기자의 대피라미드는 이집트에서 가장 유명한 관광지입니다.",
      location: "기자",
      hours: "오전 8시 - 오후 5시",
      price: "성인 240 EGP, 학생 120 EGP",
      image: "/placeholder.svg?height=200&width=300",
      tips: "이른 아침이나 늦은 오후에 방문하면 더 시원하고 혼잡하지 않습니다."
    },
    {
      id: 2,
      name: "이집트 박물관",
      description:
        "카이로에 위치한 이집트 박물관은 세계에서 가장 중요한 이집트 유물 컬렉션을 보유하고 있습니다.",
      location: "카이로",
      hours: "오전 9시 - 오후 5시",
      price: "성인 200 EGP, 학생 100 EGP",
      image: "/placeholder.svg?height=200&width=300",
      tips: "투탕카멘의 황금 마스크는 반드시 봐야 할 전시품입니다."
    },
    {
      id: 3,
      name: "룩소르 신전",
      description: "룩소르 신전은 고대 테베의 중심부에 위치한 거대한 고대 이집트 사원 단지입니다.",
      location: "룩소르",
      hours: "오전 6시 - 오후 9시",
      price: "성인 160 EGP, 학생 80 EGP",
      image: "/placeholder.svg?height=200&width=300",
      tips: "밤에 조명이 켜진 신전을 보는 것도 매우 아름답습니다."
    }
  ],
  cairo: [
    {
      id: 4,
      name: "칸 엘-칼릴리 시장",
      description: "카이로의 유명한 시장으로 향신료, 보석, 기념품 등을 판매합니다.",
      location: "카이로",
      hours: "오전 9시 - 오후 11시",
      price: "무료 입장",
      image: "/placeholder.svg?height=200&width=300",
      tips: "흥정은 필수! 처음 제시된 가격의 50-60%로 시작하세요."
    },
    {
      id: 5,
      name: "살라딘 성채",
      description: "12세기에 지어진 이 성채는 카이로의 역사적인 랜드마크입니다.",
      location: "카이로",
      hours: "오전 8시 - 오후 5시",
      price: "성인 100 EGP",
      image: "/placeholder.svg?height=200&width=300",
      tips: "성채에서 카이로의 전경을 볼 수 있는 전망대가 있습니다."
    }
  ],
  luxor: [
    {
      id: 6,
      name: "왕가의 계곡",
      description: "고대 이집트 파라오들의 무덤이 있는 유명한 고고학 유적지입니다.",
      location: "룩소르",
      hours: "오전 6시 - 오후 5시",
      price: "성인 240 EGP",
      image: "/placeholder.svg?height=200&width=300",
      tips: "투탕카멘의 무덤을 보려면 별도의 입장권이 필요합니다."
    },
    {
      id: 7,
      name: "카르낙 신전",
      description: "고대 이집트에서 가장 중요한 종교 센터 중 하나였던 거대한 신전 단지입니다.",
      location: "룩소르",
      hours: "오전 6시 - 오후 5:30",
      price: "성인 150 EGP",
      image: "/placeholder.svg?height=200&width=300",
      tips: "밤에 진행되는 소리와 빛 쇼는 놓치지 마세요."
    }
  ],
  alexandria: [
    {
      id: 8,
      name: "알렉산드리아 도서관",
      description: "고대 알렉산드리아 도서관을 기념하여 지어진 현대적인 도서관입니다.",
      location: "알렉산드리아",
      hours: "오전 10시 - 오후 7시",
      price: "성인 70 EGP",
      image: "/placeholder.svg?height=200&width=300",
      tips: "도서관 내부의 전시회와 박물관도 함께 관람하세요."
    },
    {
      id: 9,
      name: "콤 엘-슈카파 지하묘지",
      description: "로마 시대의 영향을 받은 고대 이집트 지하 묘지입니다.",
      location: "알렉산드리아",
      hours: "오전 9시 - 오후 5시",
      price: "성인 80 EGP",
      image: "/placeholder.svg?height=200&width=300",
      tips: "지하에 위치해 있어 더운 날씨에도 시원하게 관람할 수 있습니다."
    }
  ],
  aswan: [
    {
      id: 10,
      name: "아부심벨 신전",
      description: "람세스 2세가 건설한 웅장한 신전으로, 나일강 댐 건설로 인해 이전되었습니다.",
      location: "아스완",
      hours: "오전 7시 - 오후 4시",
      price: "성인 240 EGP",
      image: "/placeholder.svg?height=200&width=300",
      tips: "일출 시간에 방문하면 신전 내부가 햇빛으로 밝혀지는 장관을 볼 수 있습니다."
    },
    {
      id: 11,
      name: "필레 신전",
      description: "나일강의 작은 섬에 위치한 이시스 여신을 위한 신전입니다.",
      location: "아스완",
      hours: "오전 7시 - 오후 5시",
      price: "성인 180 EGP",
      image: "/placeholder.svg?height=200&width=300",
      tips: "저녁에 진행되는 소리와 빛 쇼를 관람하세요."
    }
  ]
};

export const PLACES = [
  { id: "popular", name: "인기 관광지" },
  { id: "cairo", name: "카이로" },
  { id: "luxor", name: "룩소르" },
  { id: "alexandria", name: "알렉산드리아" },
  { id: "aswan", name: "아스완" }
] as const;

const TourismInfo = () => {
  const [select, setSelect] = useState<PlacesIdType>(PLACES[0].id);
  const [datas, setDatas] = useState<TourismCardType[]>(sampleData.popular);

  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setDatas(sampleData[select].filter((data) => data.name.includes(e.target.value)));
  }

  function handleChangeSelect(id: PlacesIdType) {
    setSelect(id);
  }

  useEffect(() => {
    setDatas(sampleData[select]);
  }, [select]);

  return (
    <>
      <div className="space-y-4">
        <TourismOption places={PLACES} select={select} onChange={handleChangeSelect} />
        <TourismSearch onChange={handleChangeSearch} />
      </div>
      <div className="space-y-4">
        {datas.map((data) => (
          <TourismCard key={data.id} data={data} />
        ))}
        {datas.length === 0 && (
          <Card className="p-4 text-center">
            <p className="text-gray-500">검색 결과가 없습니다.</p>
          </Card>
        )}
      </div>
    </>
  );
};

export default TourismInfo;
