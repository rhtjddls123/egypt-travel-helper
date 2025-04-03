import { CloudRain, Droplet, Wind } from "lucide-react";
import React from "react";

interface WeatherDetailProps {
  wind: number;
  humidity: number;
  rain: { rain: number; snow: number };
}

const WeatherDetail = ({ wind, humidity, rain }: WeatherDetailProps) => {
  return (
    <>
      <div className="flex justify-between items-center text-sm mt-4">
        <div className="flex items-center">
          <Droplet className="w-4 h-4 text-gray-500 mr-1" />
          <span>습도 {humidity}%</span>
        </div>
        <div className="flex items-center ">
          <Wind className="w-4 h-4 text-gray-500 mr-1" />
          <span>바람 {wind}m/h</span>
        </div>
      </div>

      {(rain.rain > 0 || rain.snow > 0) && (
        <div className="flex justify-end items-center text-sm mt-1">
          {rain.rain && (
            <div className="flex items-center ">
              <CloudRain className="w-4 h-4 text-gray-500 mr-1" />
              <span>강수량 {rain.rain}mm</span>
            </div>
          )}
          {rain.snow && (
            <div className="flex items-center ">
              <CloudRain className="w-4 h-4 text-gray-500 mr-1" />
              <span>강수량 {rain.snow}mm</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WeatherDetail;
