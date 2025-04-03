import Install from "@/components/pwa install/install";
import QuickTools from "@/components/quick tools/quick-tools";
import RecommendedSpots from "@/components/recommended spots/recommended-spots";
import WeatherTabCard from "@/components/weather/weather-tab-card";

export default function Home() {
  return (
    <>
      <WeatherTabCard />
      <QuickTools />
      <RecommendedSpots />
      <Install />
    </>
  );
}
