import React from "react";
import ToolsContentWrapper from "./tools-content-wrapper";

import GlyphConverterInfoModal from "./glyph-converter-info-modal";
import GlyphConverterContent from "./glyph-converter-content";

interface GlyphConverterProps {
  id: string;
}

const GlyphConverter = ({ id }: GlyphConverterProps) => {
  return (
    <ToolsContentWrapper
      id={id}
      title="이니셜 상형문자 변환기"
      description="이름이나 이니셜을 입력하면 이집트 상형문자로 변환해 드립니다"
      modal={<GlyphConverterInfoModal />}
      content={<GlyphConverterContent />}
      usageTitle="상형문자 악세사리"
      usageContent={
        <>
          <p className="mb-4">
            이집트에서는 이름이나 이니셜을 상형문자로 새긴 악세사리를 많이 판매합니다. 이 변환기를
            통해 미리 확인해보세요!
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>각 상형문자는 고유한 의미를 가지고 있습니다</li>
            <li>악세사리 구매 전에 의미를 확인하면 더 특별한 기념품이 됩니다</li>
            <li>상형문자는 약 5,000년의 역사를 가진 이집트의 고대 문자입니다</li>
          </ul>
        </>
      }
    />
  );
};

export default GlyphConverter;
