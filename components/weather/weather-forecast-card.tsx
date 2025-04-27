"use client";

import { WEATHER_ICON } from "@/constants/weather";
import { ForecastWeatherType, WeatherIconCode } from "@/types/weatherType";
import { formatHour } from "@/utils/weather";
import React from "react";

interface WeatherForecastCardProps {
  data: ForecastWeatherType;
}

const WeatherForecastCard = ({ data }: WeatherForecastCardProps) => {
  let count = 0;

  return (
    <>
      {data.list.map((info) => {
        const Icon = WEATHER_ICON[info.weather[0].icon as WeatherIconCode];
        const time = formatHour(info.dt_txt || "");
        const dayLabels = ["내일", "모레", "글피", "0시"];

        return (
          <div className="flex flex-col items-center mr-4 last:mr-0" key={info.dt_txt}>
            <span className="text-xs text-gray-500">
              {time === "0시" ? dayLabels[count++] : time}
            </span>
            <Icon className="my-1 w-6 h-6 text-gold-primary" />
            <span className="text-sm font-medium">{info.main.temp.toFixed(1)}°</span>
            <span className="text-xs text-gray-500">{info.pop}%</span>
            <span className="text-xs text-gray-500">{info.rain?.["3h"] || 0}mm</span>
            <span className="text-xs text-gray-500">{info.main.humidity}%</span>
            <span className="text-xs text-gray-500">{info.wind.speed}m/s</span>
          </div>
        );
      })}
    </>
  );
};

export default WeatherForecastCard;
