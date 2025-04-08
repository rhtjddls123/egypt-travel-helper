import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Clock, Info, MapPin, Ticket } from "lucide-react";
import TourismDetailLabel from "./tourism-detail-label";
import { TourismCardType } from "@/types/tourismType";

interface TourismCardProps {
  data: TourismCardType;
}

const TourismCard = ({ data }: TourismCardProps) => {
  return (
    <Card className="pt-0 gap-0">
      <div className="relative h-48">
        <Image src={"/dummyImg.svg"} alt={"name"} fill className="object-cover overflow-hidden" />
      </div>
      <CardHeader className="p-6 pb-2">
        <CardTitle className="text-2xl font-semibold">{data.name}</CardTitle>
        <CardDescription className="text-sm">{data.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-base space-y-2">
        <TourismDetailLabel Icon={MapPin} text={data.location} />
        <TourismDetailLabel Icon={Clock} text={data.hours} />
        <TourismDetailLabel Icon={Ticket} text={data.price} />
        <TourismDetailLabel Icon={Info} text={data.tips} className="text-sm" />
      </CardContent>
    </Card>
  );
};

export default TourismCard;
