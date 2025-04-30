import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import TipsTab from "./tips-tab";

const TipsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">이집트 여행 팁</CardTitle>
        <CardDescription>이집트 여행을 더 안전하고 즐겁게 만들어줄 유용한 정보</CardDescription>
      </CardHeader>
      <CardContent>
        <TipsTab />
      </CardContent>
    </Card>
  );
};

export default TipsCard;
