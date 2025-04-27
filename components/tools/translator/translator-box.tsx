"use client";

import { Textarea } from "@/components/ui/textarea";
import React, { ChangeEvent, ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { languageListItemType } from "@/types/translatorType";

interface BaseTranslatorBoxProps {
  selectedLanguage: languageListItemType["code"];
  languageList: readonly languageListItemType[];
  buttons: ReactNode;
  placeholder: string;
  textdirection?: "rtl";
  value: string;
  onSelectorChange: (code: languageListItemType["code"]) => void;
}

interface InputModeProps extends BaseTranslatorBoxProps {
  mode: "input";
  onTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void; // 필수
}

interface ResultModeProps extends BaseTranslatorBoxProps {
  mode: "result";
  onTextChange?: never;
}

export type TranslatorBoxProps = InputModeProps | ResultModeProps;

const TranslatorBox = ({
  mode,
  selectedLanguage,
  languageList,
  buttons,
  placeholder,
  textdirection,
  value,
  onTextChange,
  onSelectorChange
}: TranslatorBoxProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Select value={selectedLanguage} onValueChange={onSelectorChange}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {languageList.map((item) => (
              <SelectItem key={item.id} value={item.code}>
                {item.korean}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {buttons}
      </div>
      {mode === "input" && (
        <Textarea
          placeholder={placeholder}
          rows={4}
          dir={textdirection}
          value={value}
          onChange={onTextChange}
        />
      )}
      {mode === "result" && (
        <div className="flex min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] md:text-sm">
          {value || <p className="text-muted-foreground">{placeholder}</p>}
        </div>
      )}
    </div>
  );
};

export default TranslatorBox;
