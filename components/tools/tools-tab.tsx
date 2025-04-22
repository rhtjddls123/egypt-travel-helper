import { Tabs } from "@/components/ui/tabs";
import ToolsTabList from "./tools-tab-list";
import NumberConverter from "./number-converter/number-converter";
import GlyphConverter from "./glyph-converter/glyph-converter";
import ExchangeCalculator from "./exchange-calculator/exchange-calculator";

const TOOLS_TAB_LIST = [
  { id: "number", name: "숫자 변환", Component: NumberConverter },
  { id: "glyph", name: "상형문자", Component: GlyphConverter },
  { id: "exchange", name: "환율 계산", Component: ExchangeCalculator }
];

const ToolsTab = () => {
  return (
    <Tabs defaultValue="number" className="w-full block">
      <ToolsTabList datas={TOOLS_TAB_LIST} />

      {TOOLS_TAB_LIST.map(({ id, Component }) => (
        <Component key={id} id={id} />
      ))}
    </Tabs>
  );
};

export default ToolsTab;
