import React from "react";
import ToolsContentWrapper from "../tools-content-wrapper";
import TranslatorContent from "./translator-content";

interface TranslatorProps {
  id: string;
}

const Translator = ({ id }: TranslatorProps) => {
  return (
    <>
      <ToolsContentWrapper
        id={id}
        title="번역기"
        description="선택한 언어를 다른 언어로 번역합니다"
        content={<TranslatorContent />}
        usageTitle="번역기 사용 팁"
        usageContent={
          <ul className="ml-6 list-disc space-y-2">
            <li>간단한 문장이나 단어를 번역하는 데 유용합니다</li>
            <li>아랍어는 오른쪽에서 왼쪽으로 읽습니다</li>
            <li>발음 듣기 버튼을 눌러 정확한 발음을 들어보세요</li>
          </ul>
        }
      />
    </>
  );
};

export default Translator;
