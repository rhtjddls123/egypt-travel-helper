import { getWeekWeather } from "@/utils/weather";
import React from "react";
import WeatherForecastCard from "./weather-forecast-card";

interface WeatherForecastProps {
  cityName: string;
}

const WeatherForecast = async ({ cityName }: WeatherForecastProps) => {
  const data = await getWeekWeather(cityName);

  return (
    <div className="mt-4 pt-4 border-t">
      <div className="flex">
        <div className="flex flex-col shrink-0 justify-end mr-1 text-xs text-gray-500 pb-1">
          <span>강수 확률</span>
          <span>강수량</span>
          <span>습도</span>
          <span>바람</span>
        </div>
        <div className="flex horizontal-scroll">
          <WeatherForecastCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
