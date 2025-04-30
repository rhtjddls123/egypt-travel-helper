import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TipsAccordion from "./tips-accordion";

const data = [
  {
    tabValue: "information",
    tabTitle: "일반 정보",
    tabContent: [
      {
        id: "item-1",
        title: "여행 최적 시기",
        content:
          "이집트 여행의 최적 시기는 10월부터 4월까지입니다. 여름(5월-9월)에는 기온이 40°C 이상 올라갈 수 있어 관광하기 힘들 수 있습니다."
      },
      {
        id: "item-2",
        title: "복장",
        content:
          "이집트는 이슬람 국가이므로 어깨와 무릎을 가리는 옷을 입는 것이 좋습니다. 특히 모스크 방문 시에는 여성의 경우 머리를 가리는 스카프를 준비하세요."
      },
      {
        id: "item-3",
        title: "물",
        content:
          "수돗물을 마시지 마세요. 항상 병에 든 생수를 구매하여 마시고, 얼음이 들어간 음료도 주의하세요."
      },
      {
        id: "item-4",
        title: "팁 문화",
        content:
          "이집트에서는 '바크시시'라고 불리는 팁 문화가 있습니다. 호텔, 레스토랑, 택시 등에서 서비스를 받았을 때 소액의 팁(5-10 EGP)을 주는 것이 일반적입니다."
      }
    ]
  },
  {
    tabValue: "safety",
    tabTitle: "안전",
    tabContent: [
      {
        id: "item-1",
        title: "귀중품 관리",
        content:
          "관광지에서는 소매치기를 조심하세요. 귀중품은 호텔 금고에 보관하고, 필요한 현금만 소지하는 것이 좋습니다."
      },
      {
        id: "item-2",
        title: "택시 이용",
        content:
          "택시 이용 시 미터기 사용을 요청하거나, 탑승 전에 가격을 협상하세요. 우버나 캐럼과 같은 앱을 사용하는 것도 좋은 방법입니다."
      },
      {
        id: "item-3",
        title: "여행자 보험",
        content:
          "여행 전 반드시 여행자 보험에 가입하세요. 의료 서비스, 분실물, 여행 취소 등의 보장을 받을 수 있습니다."
      }
    ]
  },
  {
    tabValue: "culture",
    tabTitle: "문화",
    tabContent: [
      {
        id: "item-1",
        title: "라마단",
        content:
          "라마단 기간(이슬람력에 따라 매년 다름)에는 많은 레스토랑이 낮에 문을 닫고, 관광지의 운영 시간이 변경될 수 있습니다. 여행 계획 시 확인하세요."
      },
      {
        id: "item-2",
        title: "사진 촬영",
        content:
          "군사 시설, 교량, 공항 등에서의 사진 촬영은 금지되어 있습니다. 또한 현지인을 촬영할 때는 반드시 허락을 구하세요."
      },
      {
        id: "item-3",
        title: "흥정",
        content:
          "시장에서 쇼핑할 때는 흥정이 일반적입니다. 처음 제시된 가격의 50-60%에서 시작하여 협상하세요."
      }
    ]
  }
];

const TipsTab = () => {
  return (
    <Tabs defaultValue="information">
      <TabsList className="w-full">
        {data.map((v) => (
          <TabsTrigger key={v.tabValue} value={v.tabValue}>
            {v.tabTitle}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map((v) => (
        <TabsContent key={v.tabValue} value={v.tabValue}>
          <TipsAccordion data={v.tabContent} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TipsTab;
