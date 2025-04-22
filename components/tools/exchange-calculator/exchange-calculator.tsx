import React from "react";
import ToolsContentWrapper from "../tools-content-wrapper";
import ExchangeCalculatorContent from "./exchange-calculator-content";
import { ExchangeRatesDbType } from "@/types/dbType";

interface ExchangeCalculatorProps {
  id: string;
}

const ExchangeCalculator = async ({ id }: ExchangeCalculatorProps) => {
  await fetch(`${process.env.BASE_URL}/api/exchange/set`, {
    next: { revalidate: 3600 }
  });
  const response = await fetch(`${process.env.BASE_URL}/api/exchange/get`, {
    cache: "no-store"
  });
  const rates = (await response.json()) as { exchange: ExchangeRatesDbType };

  return (
    <>
      <ToolsContentWrapper
        id={id}
        title="이집트 환율 계산기"
        description="이집트 파운드(EGP)와 다른 통화 간의 환율을 계산합니다"
        content={<ExchangeCalculatorContent exchange={rates.exchange} />}
        usageTitle="이집트 환율 팁"
        usageContent={
          <ul className="ml-6 list-disc space-y-2">
            <li>이집트에서는 현지 화폐인 이집트 파운드(EGP)를 사용합니다</li>
            <li>관광지에서는 미국 달러(USD)도 종종 받습니다</li>
            <li>소액권을 많이 준비하는 것이 좋습니다</li>
            <li>팁 문화가 있으니 소액권을 준비하세요 (보통 5-10 EGP)</li>
          </ul>
        }
      />
    </>
  );
};

export default ExchangeCalculator;
