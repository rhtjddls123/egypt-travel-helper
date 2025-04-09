import React from "react";
import { TabsList, TabsTrigger } from "../ui/tabs";
import { chunkArray } from "@/utils/utils";
import { ToolsListType } from "@/types/toolsType";

interface ToolsTabListProps {
  datas: ToolsListType[];
}

const ToolsTabList = ({ datas }: ToolsTabListProps) => {
  const chunked = chunkArray(datas, 3);

  return (
    <>
      {chunked.map((group) => (
        <TabsList key={group.map((g) => g.id).join("-")} className="w-full h-auto p-1">
          {group.map((tool) => (
            <TabsTrigger className="px-3 py-2 h-9" key={tool.id} value={tool.id}>
              {tool.name}
            </TabsTrigger>
          ))}
        </TabsList>
      ))}
    </>
  );
};

export default ToolsTabList;
