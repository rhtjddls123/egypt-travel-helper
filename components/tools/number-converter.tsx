import React from "react";
import { Input } from "../ui/input";
import ToolsContentWrapper from "./tools-content-wrapper";

interface NumberConverterProps {
  id: string;
}

const NumberConverter = ({ id }: NumberConverterProps) => {
  return (
    <>
      <ToolsContentWrapper
        id={id}
        title="아랍 숫자 변환기"
        description="일반 숫자를 입력하면 아랍 숫자로 변환해 드립니다"
        content={
          <div className="space-y-4">
            <div>
              <p className="mb-2 font-medium text-sm">일반 숫자 입력</p>
              <Input className="h-10" placeholder="숫자를 입력하세요 (예: 123)" />
            </div>
            <div>
              <p className="mb-2 font-medium text-sm">아랍 숫자 결과</p>
              <div className="p-3 text-2xl text-center rounded-md border bg-slate-50">
                결과가 여기에 표시됩니다
              </div>
            </div>
          </div>
        }
        usageTitle="사용 방법"
        usageContent={
          <ul className="ml-6 list-disc space-y-2">
            <li>이집트에서 아랍 숫자를 볼 때 참고하세요</li>
            <li>가격표, 시간표 등에서 자주 볼 수 있습니다</li>
            <li>숫자만 변환되며 다른 문자는 그대로 유지됩니다</li>
          </ul>
        }
      />
    </>
  );
};

export default NumberConverter;
