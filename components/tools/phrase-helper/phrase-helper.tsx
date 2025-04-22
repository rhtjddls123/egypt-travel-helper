import React from "react";
import ToolsContentWrapper from "../tools-content-wrapper";
import PhraseHelperContent from "./phrase-helper-content";

interface PhraseHelperProps {
  id: string;
}

const PhraseHelper = ({ id }: PhraseHelperProps) => {
  return (
    <>
      <ToolsContentWrapper
        id={id}
        title="이집트 회화"
        description="이집트 여행 중 유용한 아랍어 회화를 배워보세요"
        content={<PhraseHelperContent />}
        usageTitle="이집트 회화 팁"
        usageContent={
          <ul className="ml-6 list-disc space-y-2">
            <li>현지인들은 외국인이 아랍어를 시도하는 것을 매우 좋아합니다</li>
            <li>기본적인 인사말만 알아도 친절한 대우를 받을 수 있습니다</li>
            <li>발음이 어렵다면 발음 듣기 버튼을 눌러 들어보세요</li>
            <li>영어도 관광지에서는 어느 정도 통용됩니다</li>
          </ul>
        }
      />
    </>
  );
};

export default PhraseHelper;
