import React, { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { TabsContent } from "../ui/tabs";

interface ToolsContentWrapperProps {
  title: ReactNode;
  description?: ReactNode;
  content: ReactNode;
  usageTitle?: ReactNode;
  usageContent?: ReactNode;
  id: string;
}

const ToolsContentWrapper = ({
  id,
  title,
  description,
  content,
  usageTitle,
  usageContent
}: ToolsContentWrapperProps) => {
  return (
    <TabsContent value={id} className="bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </CardHeader>
          <CardContent>{content}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">{usageTitle}</CardTitle>
          </CardHeader>
          <CardContent>{usageContent}</CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

export default ToolsContentWrapper;
