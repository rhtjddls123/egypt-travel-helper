import React from "react";
import { TabsContent } from "../ui/tabs";
import WeatherCurrent from "./weather-current";
import WeatherDetail from "./weather-detail";
import WeatherForecast from "./weather-forecast";
import { getCurrentWeather } from "@/utils/weather";
import { WEATHER_ICON } from "@/constants/weather";
import { WeatherIconCode } from "@/types/weatherType";

interface WeatherContentProps {
  cityName: string;
  value: string;
}

const WeatherContent = async ({ cityName, value }: WeatherContentProps) => {
  const weatherCurrentData = await getCurrentWeather(value);
  const { temp, humidity } = weatherCurrentData.main;
  const { description } = weatherCurrentData.weather[0];
  const icon = weatherCurrentData.weather[0].icon as WeatherIconCode;
  const { speed } = weatherCurrentData.wind;
  const rain = {
    rain: weatherCurrentData.rain?.["1h"] || 0,
    snow: weatherCurrentData.snow?.["1h"] || 0
  };

  const currentWeatherIcon = WEATHER_ICON[icon];
  const time = new Date();

  return (
    <TabsContent value={value}>
      <div className="pt-4">
        <WeatherCurrent
          cityName={cityName}
          temp={temp.toFixed(1)}
          weather={description}
          Icon={currentWeatherIcon}
        />
        <WeatherDetail humidity={humidity} wind={speed} rain={rain} />
        <WeatherForecast cityName={cityName} />
        {time.toString()}
      </div>
    </TabsContent>
  );
};

export default WeatherContent;
