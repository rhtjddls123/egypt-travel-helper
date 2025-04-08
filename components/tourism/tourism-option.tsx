import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { PlacesIdType, TourismPlaceType } from "@/types/tourismType";

interface TourismOptionProps {
  select: PlacesIdType;
  places: readonly TourismPlaceType[];
  onChange: (id: PlacesIdType) => void;
}

const TourismOption = ({ select, places, onChange }: TourismOptionProps) => {
  return (
    <Select defaultValue={select} onValueChange={onChange}>
      <SelectTrigger className="w-full bg-white text-sm">
        <SelectValue placeholder="지역을 선택해주세요." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {places.map((place) => (
            <SelectItem key={place.id} value={place.id}>
              {place.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default TourismOption;
