import { Button } from "@/components/ui/button";
import { ArrowRightLeft } from "lucide-react";
import React, { ButtonHTMLAttributes } from "react";

const LanguageChangeButton = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="flex justify-center">
      <Button variant="outline" size="icon" {...props}>
        <ArrowRightLeft className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default LanguageChangeButton;
