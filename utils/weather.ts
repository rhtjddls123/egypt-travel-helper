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

export function filterForecastData(data: ForecastWeatherType["list"], timeZone: string) {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone }));

  const fourDaysLater = new Date();

  fourDaysLater.setDate(now.getDate() + 4);
  fourDaysLater.setHours(0, 0, 0, 1);

  return data.filter((entry) => {
    if (entry.dt_txt) {
      const entryDate = new Date(entry.dt_txt);
      return entryDate > now && entryDate < fourDaysLater;
    }
    return false;
  });
}

export function formatHour(dateTime: string) {
  const dateObj = new Date(dateTime.replace(" ", "T"));
  return `${dateObj.getHours()}시`;
}
