import { PLACES } from "@/components/tourism/tourism-info";

export interface TourismCardType {
  id: number;
  name: string;
  description: string;
  location: string;
  hours: string;
  price: string;
  image: string;
  tips: string;
}

export interface TourismPlaceType {
  id: PlacesIdType;
  name: string;
}

export type PlacesIdType = (typeof PLACES)[number]["id"];
