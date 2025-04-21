"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { hieroglyphMap, HieroglyphOption } from "./glyph-converter-content";

interface GlyphSelectorProps {
  processedChars: string[];
  setResult: Dispatch<SetStateAction<HieroglyphOption[]>>;
  setResultMode: (mode: boolean) => void;
  onReset: () => void;
}

const GlyphSelector = ({
  processedChars,
  setResultMode,
  setResult,
  onReset
}: GlyphSelectorProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  function getCurrentOptions(): HieroglyphOption[] {
    const currentChar = processedChars[currentStep].toLowerCase();
    return hieroglyphMap[currentChar] || [{ symbol: "?", meaning: "알 수 없음" }];
  }

  function handlePrev() {
    setCurrentStep((pre) => pre - 1);
    setResult((prev) => prev.slice(0, -1));
  }

  function handleSelect(option: HieroglyphOption) {
    setResult((prev) => [...prev, option]);

    if (currentStep + 1 === processedChars.length) {
      setResultMode(true);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  }

  function handleReset() {
    onReset();
    setCurrentStep(0);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">
          {currentStep + 1}/{processedChars.length}: {`"${processedChars[currentStep]}"`}선택
        </h3>
        <div className="space-x-2">
          {currentStep > 0 && (
            <Button variant="outline" size="sm" onClick={handlePrev}>
              이전
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={handleReset}>
            취소
          </Button>
        </div>
      </div>

      <div className="p-4 border rounded-md bg-slate-50">
        <RadioGroup defaultValue="comfortable">
          {getCurrentOptions().map((option, idx) => (
            <div
              key={`${option}-${idx}`}
              className="flex items-center space-x-4 p-2 hover:bg-yellow-100 rounded-md"
            >
              <RadioGroupItem
                value={`${option}-${idx}`}
                id={`${option}-${idx}`}
                onClick={() => handleSelect(option)}
              />
              <Label htmlFor={`${option}-${idx}`} className="grow cursor-pointer">
                <div className="w-full flex items-center justify-between">
                  <span className="text-3xl">{option.symbol}</span>
                  <span className="text-sm text-gray-600">{option.meaning || "의미 없음"}</span>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="text-center text-sm text-gray-500">
        {processedChars.length}개의 문자 중 {currentStep + 1}번째 처리 중...
      </div>
    </div>
  );
};

export default GlyphSelector;
