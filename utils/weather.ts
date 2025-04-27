import { CurrentWeatherType, ForecastWeatherType } from "@/types/weatherType";

type LocationData = {
  name: string;
  local_names?: {
    [key: string]: string;
  };
  lat: number;
  lon: number;
  country: string;
  state?: string;
};

async function getCoordinates(city: string) {
  const api = process.env.WEATHER_API;
  const data = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api}`,
    { cache: "no-cache" }
  );

  const resData = (await data.json()) as LocationData[];
  const egyptData = resData.find((v) => v.country === "EG");
  const coordinates = { lon: egyptData?.lon, lat: egyptData?.lat };

  return coordinates;
}

export async function getCurrentWeather(city: string) {
  const api = process.env.WEATHER_API;
  const { lat, lon } = await getCoordinates(city);

  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&units=metric&appid=${api}`,
    { cache: "no-cache" }
  );

  const currentWeatherData = (await data.json()) as CurrentWeatherType;
  return currentWeatherData;
}

export async function getWeekWeather(city: string) {
  const api = process.env.WEATHER_API;
  const { lat, lon } = await getCoordinates(city);

  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=kr&units=metric&appid=${api}`,
    { cache: "no-cache" }
  );

  const resData = (await data.json()) as ForecastWeatherType;
  return resData;
}

export function formatHour(dateTime: string) {
  const dateObj = new Date(dateTime.replace(" ", "T"));
  return `${dateObj.getHours()}시`;
}
