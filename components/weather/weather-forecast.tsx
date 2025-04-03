import { WEATHER_ICON } from "@/constants/weather";
import { WeatherIconCode } from "@/types/weatherType";
import { formatHour, getWeekWeather } from "@/utils/weather";
import React from "react";

interface WeatherForecastProps {
  cityName: string;
}

const WeatherForecast = async ({ cityName }: WeatherForecastProps) => {
  const data = await getWeekWeather(cityName);
  let count = 0;

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
          {data.map((info) => {
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
                <span className="text-xs text-gray-500">{info.rain || 0}mm</span>
                <span className="text-xs text-gray-500">{info.main.humidity}%</span>
                <span className="text-xs text-gray-500">{info.wind.speed}m/s</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
