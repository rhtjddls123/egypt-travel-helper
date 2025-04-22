"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ExchangeRatesDbType, ExchangeRatesKeyType } from "@/types/dbType";
import { formatKrDate } from "@/utils/utils";
import React, { useEffect, useState } from "react";

const currencyMapping = {
  KRW: "한국 원(KRW)",
  EGP: "이집트 파운드(EGP)",
  USD: "미국 달러(USD)",
  EUR: "유럽 유로(EUR)",
  JPY: "일본 엔(JPY)",
  CNY: "중국 위안(CNY)"
};

type CurrencyType = keyof typeof currencyMapping;

const currencyList = Object.keys(currencyMapping) as CurrencyType[];

interface ExchangeCalculatorContentProps {
  exchange: ExchangeRatesDbType;
}

const ExchangeCalculatorContent = ({ exchange }: ExchangeCalculatorContentProps) => {
  const [sourceCurrency, setSourceCurrency] = useState<CurrencyType>("KRW");
  const [targetCurrency, setTargetCurrency] = useState<CurrencyType>("EGP");
  const [money, setMoney] = useState(0);
  const [result, setResult] = useState(0);

  const rate = calculateRate();

  function calculateRate() {
    if (sourceCurrency === targetCurrency) return 1;

    if (sourceCurrency === "KRW") {
      return Number(exchange[`KRW${targetCurrency}` as ExchangeRatesKeyType]);
    }

    if (targetCurrency === "KRW") {
      return 1 / Number(exchange[`KRW${sourceCurrency}` as ExchangeRatesKeyType]);
    }

    const rateFrom = Number(exchange[`KRW${sourceCurrency}` as ExchangeRatesKeyType]);
    const rateTo = Number(exchange[`KRW${targetCurrency}` as ExchangeRatesKeyType]);
    return rateTo / rateFrom;
  }

  useEffect(() => {
    setResult(Number(money) * rate);
  }, [money, rate, sourceCurrency, targetCurrency]);

  return (
    <>
      <div className="w-full max-w-lg space-y-4">
        <div className="flex space-x-4">
          <div className="w-full max-w-96">
            <span>금액</span>
            <Input
              placeholder="금액을 입력해주세요"
              type="number"
              value={money || ""}
              onChange={(e) => setMoney(Number(e.target.value))}
            />
          </div>
          <div>
            <span>통화</span>
            <Select
              value={sourceCurrency}
              onValueChange={(val) => setSourceCurrency(val as CurrencyType)}
            >
              <SelectTrigger className="max-w-32">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {currencyList.map((item) => (
                    <SelectItem key={item} value={item}>
                      {currencyMapping[item]}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-full max-w-96">
            <span>결과</span>
            <div className="py-1 px-3 border border-input rounded-md text-base h-9 flex items-center">
              {result.toFixed(2) || ""}
            </div>
          </div>
          <div>
            <span>변환 통화</span>
            <Select
              value={targetCurrency}
              onValueChange={(val) => setTargetCurrency(val as CurrencyType)}
            >
              <SelectTrigger className="max-w-32">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {currencyList.map((item) => (
                    <SelectItem key={item} value={item}>
                      {currencyMapping[item]}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <span className="text-gray-500 text-xs">
        환율 업데이트 시간: {formatKrDate(exchange.updatedAt)}
      </span>
    </>
  );
};

export default ExchangeCalculatorContent;
