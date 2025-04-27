import { Calculator, Coins, Languages, Type } from "lucide-react";
import QuickToolsCard from "./quick-tools-card";
import SectionWrapper from "../section-wrapper";

const QuickTools = () => {
  return (
    <SectionWrapper title="빠른 도구" href="/tools">
      <div className="grid grid-cols-4 gap-2">
        <QuickToolsCard
          href="/tools?tab=number"
          title="숫자 변환"
          Icon={Type}
          color="bg-blue-100 text-blue-600"
        />
        <QuickToolsCard
          href="/tools?tab=exchange"
          title="환율 계산"
          Icon={Calculator}
          color="bg-green-100 text-green-600"
        />
        <QuickToolsCard
          href="/tools?tab=glyph"
          title="상형문자"
          Icon={Coins}
          color="bg-amber-100 text-amber-600"
        />
        <QuickToolsCard
          href="/tools?tab=translate"
          title="번역기"
          Icon={Languages}
          color="bg-purple-100 text-purple-600"
        />
      </div>
    </SectionWrapper>
  );
};

export default QuickTools;
