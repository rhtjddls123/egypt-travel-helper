import { WEATHER_ICON } from "@/constants/weather";

export interface WeatherType {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  dt_txt?: string;
}

export interface CurrentWeatherType extends WeatherType {
  coord: {
    lon: number;
    lat: number;
  };
  base: string;
  visibility: number;
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  rain?: { "1h": number };
  snow?: { "1h": number };
}

export type WeatherIconCode = keyof typeof WEATHER_ICON;

export interface ForecastWeatherType {
  list: ({ rain?: number; pop: number } & WeatherType)[];
}
