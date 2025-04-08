import React, { ElementType } from "react";

interface TourismDetailLabelProps {
  Icon: ElementType;
  text: string;
  className?: string;
}

const TourismDetailLabel = ({ Icon, text, className }: TourismDetailLabelProps) => {
  return (
    <div className="flex gap-2">
      <div className="flex justify-center items-center">
        <Icon className="w-4 h-4 text-gray-500" />
      </div>
      <p className={className}>{text}</p>
    </div>
  );
};

export default TourismDetailLabel;
