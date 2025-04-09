import { Tabs } from "@/components/ui/tabs";
import ToolsTabList from "./tools-tab-list";
import NumberConverter from "./number-converter";

const TOOLS_TAB_LIST = [{ id: "number", name: "숫자 변환", Component: NumberConverter }];

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
