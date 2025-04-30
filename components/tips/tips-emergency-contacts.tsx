import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const data = [
  { title: "범죄신고", number: "122" },
  { title: "구급차", number: "19885 / 123 / 2574-3237" },
  { title: "관광 경찰", number: "126" },
  { title: "교통 경찰", number: "128" },
  { title: "화재 신고", number: "180(2391-9364)" },
  { title: "한국 대사관", number: "+20-2-3761-1234~7" }
];

const TipsEmergencyContacts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">긴급 연락처</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2">
          {data.map((v) => (
            <li className="flex justify-between" key={v.title}>
              <span>{v.title}</span>
              <span>{v.number}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TipsEmergencyContacts;
