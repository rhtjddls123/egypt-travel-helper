import { PlacesIdType, TourismCardType, TourismPlaceType } from "@/types/tourismType";

export async function getPlaces() {
  const data = await fetch(`${process.env.BASE_URL}/api/tourism/places`, { cache: "no-cache" });

  if (!data.ok) throw new Error((await data.json()).error);

  const place = (await data.json()) as { data: TourismPlaceType[] };
  return place.data;
}

export async function fetchTourism(city: PlacesIdType) {
  const res = await fetch(`/api/tourism/${city}`);
  const json = (await res.json()) as { data: TourismCardType[] };
  return json.data;
}
