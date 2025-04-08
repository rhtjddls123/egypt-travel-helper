"use client";

import { InputHTMLAttributes, Ref } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface TourismSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
}

const TourismSearch = ({ ...props }: TourismSearchProps) => {
  return (
    <div className="relative ">
      <Search className="absolute top-2.5 left-2.5 w-4 h-4 text-gray-500" />
      <Input
        type="search"
        className="bg-white py-2 pl-8 text-sm"
        placeholder="관광지 검색..."
        {...props}
      />
    </div>
  );
};

export default TourismSearch;
