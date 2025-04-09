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
    <TabsContent value={id} className="bg-white p-4 rounded-xl">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>{content}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{usageTitle}</CardTitle>
          </CardHeader>
          <CardContent>{usageContent}</CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

export default ToolsContentWrapper;
