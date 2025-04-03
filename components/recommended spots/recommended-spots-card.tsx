import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface RecommendedSpotsCardProps {
  image: string | StaticImport;
  name: string;
  location: string;
}

const RecommendedSpotsCard = ({ image, name, location }: RecommendedSpotsCardProps) => {
  return (
    <Card className="relative h-40 p-3 bg-gradient-to-t from-black/70 to-transparent">
      <Image
        src={image}
        alt={name}
        fill
        sizes="w-full h-full"
        className="object-cover overflow-hidden rounded-xl -z-10"
      />
      <div className="h-full flex flex-col justify-end">
        <h3 className="text-white font-bold">{name}</h3>
        <p className="text-white/80 text-sm">{location}</p>
      </div>
    </Card>
  );
};

export default RecommendedSpotsCard;
