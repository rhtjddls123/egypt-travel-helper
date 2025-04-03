import React from "react";
import SectionWrapper from "../section-wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../ui/carousel";
import Link from "next/link";
import RecommendedSpotsCard from "./recommended-spots-card";

const attractions = [
  {
    id: 1,
    name: "피라미드",
    location: "기자",
    image: "/dummyImg.svg",
    href: "/tourism/pyramids"
  },
  {
    id: 2,
    name: "스핑크스",
    location: "기자",
    image: "/dummyImg.svg",
    href: "/tourism/sphinx"
  },
  {
    id: 3,
    name: "이집트 박물관",
    location: "카이로",
    image: "/dummyImg.svg",
    href: "/tourism/museum"
  },
  {
    id: 4,
    name: "룩소르 신전",
    location: "룩소르",
    image: "/dummyImg.svg",
    href: "/tourism/luxor"
  },
  {
    id: 5,
    name: "아부심벨 신전",
    location: "아스완",
    image: "/dummyImg.svg",
    href: "/tourism/abu-simbel"
  }
];

const RecommendedSpots = () => {
  return (
    <SectionWrapper title="추천 관광지" href="/tourism">
      <Carousel className="w-full">
        <CarouselContent>
          {attractions.map((attraction) => (
            <CarouselItem key={attraction.id} className="md:basis-1/2 lg:basis-1/3">
              <Link href={attraction.href}>
                <RecommendedSpotsCard {...attraction} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 cursor-pointer" />
        <CarouselNext className="right-2 cursor-pointer" />
      </Carousel>
    </SectionWrapper>
  );
};

export default RecommendedSpots;
