import { PhrasesItemType } from "@/types/toolsType";
import React from "react";
import PhraseAudioButton from "./phrase-audio-button";

interface PhraseTapContentListProps {
  item: PhrasesItemType;
}

const PhraseTapContentList = ({ item }: PhraseTapContentListProps) => {
  return (
    <li className="p-3">
      <div className="flex justify-between">
        <div>
          <div className="font-medium">{item.korean}</div>
          <div className="text-sm text-gray-600">{item.pronunciation}</div>
        </div>
        <PhraseAudioButton text={item.arabic} />
      </div>
      <div className="mt-1 text-right font-medium text-lg">{item.arabic}</div>
    </li>
  );
};

export default PhraseTapContentList;
