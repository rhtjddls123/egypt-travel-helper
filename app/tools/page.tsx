import ToolsTab from "@/components/tools/tools-tab";
import React from "react";

interface ToolsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ToolsPage = async ({ searchParams }: ToolsPageProps) => {
  const params = (await searchParams) ?? {};
  const tab = typeof params.tab === "string" ? params.tab : "number";

  return (
    <>
      <ToolsTab defaultTab={tab} />
    </>
  );
};

export default ToolsPage;
