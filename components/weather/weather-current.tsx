import React, { ElementType } from "react";

interface WeatherCurrentProps {
  cityName: string;
  weather: string;
  temp: string;
  Icon: ElementType;
}

const WeatherCurrent = ({ cityName, weather, temp, Icon }: WeatherCurrentProps) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">{cityName}</h3>
        <p className="text-sm text-gray-500">{weather}</p>
      </div>
      <div className="flex">
        <Icon className="w-10 h-10 mr-2 text-gold-primary" />
        <span className="text-3xl font-bold">{temp}°</span>
      </div>
    </div>
  );
};

export default WeatherCurrent;
