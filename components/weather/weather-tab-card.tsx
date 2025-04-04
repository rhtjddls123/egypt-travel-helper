import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WeatherContent from "./weather-content";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const city = [
  { name: "카이로", code: "Cairo" },
  { name: "룩소르", code: "Luxor" }
];

const WeatherTabCard = () => {
  return (
    <Tabs defaultValue={city[0].code} className="w-full bg-white p-4 rounded-lg shadow-sm">
      <TabsList className="w-full p-0">
        <Select defaultValue={city[0].code}>
          <SelectTrigger className="w-full p-0 pr-2 bg-white tab-select-wrapper">
            <SelectValue placeholder="지역을 선택해주세요." />
          </SelectTrigger>
          <SelectContent>
            {city.map((city) => (
              <SelectItem key={city.code} value={city.code} className="h-8 p-0 tab-select-wrapper">
                <TabsTrigger value={city.code}>{city.name}</TabsTrigger>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </TabsList>

      {city.map((city) => (
        <WeatherContent key={city.code} value={city.code} cityName={city.name} />
      ))}
    </Tabs>
  );
};

export default WeatherTabCard;
