import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { TipsItemType } from "@/types/tipsType";

interface TipsAccordionProps {
  data: TipsItemType[];
}

const TipsAccordion = ({ data }: TipsAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((v) => (
        <AccordionItem key={v.id} value={v.id}>
          <AccordionTrigger className="text-base cursor-pointer">{v.title}</AccordionTrigger>
          <AccordionContent>{v.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TipsAccordion;
