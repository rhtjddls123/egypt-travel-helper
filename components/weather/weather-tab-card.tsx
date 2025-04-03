import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WeatherContent from "./weather-content";
import { getWeekWeather } from "@/utils/weather";

const city = [
  { name: "카이로", code: "Cairo" },
  { name: "룩소르", code: "Luxor" }
];

const WeatherTabCard = () => {
  getWeekWeather("Luxor");
  return (
    <Tabs defaultValue={city[0].code} className="w-full bg-white p-4 rounded-lg shadow-sm">
      <TabsList className="w-full">
        {city.map((city) => (
          <TabsTrigger key={city.code} value={city.code}>
            {city.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {city.map((city) => (
        <WeatherContent key={city.code} value={city.code} cityName={city.name} />
      ))}
    </Tabs>
  );
};

export default WeatherTabCard;
