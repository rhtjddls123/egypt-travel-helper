"use client";

import { Button } from "@/components/ui/button";
import { Copy, Volume } from "lucide-react";
import React, { ChangeEvent, useState } from "react";
import TranslatorBox from "./translator-box";
import { languageListItemType } from "@/types/translatorType";
import LanguageChangeButton from "./language-change-button";

export const languageList = [
  { id: "Arabic", code: "ar", korean: "아랍어" },
  { id: "Korean", code: "ko", korean: "한국어" },
  { id: "English", code: "en", korean: "영어" },
  { id: "Japanese", code: "ja", korean: "일본어" },
  { id: "Chinese (Simplified)", code: "zh-Hans", korean: "중국어 (간체)" },
  { id: "Chinese (Traditional)", code: "zh-Hant", korean: "중국어 (번체)" },
  { id: "French", code: "fr", korean: "프랑스어" },
  { id: "German", code: "de", korean: "독일어" },
  { id: "Spanish", code: "es", korean: "스페인어" },
  { id: "Russian", code: "ru", korean: "러시아어" },
  { id: "Turkish", code: "tr", korean: "터키어" },
  { id: "Hindi", code: "hi", korean: "힌디어" },
  { id: "Portuguese", code: "pt", korean: "포르투갈어" },
  { id: "Italian", code: "it", korean: "이탈리아어" }
] as const;

const TranslatorContent = () => {
  const [to, setTo] = useState<languageListItemType["code"]>("ar");
  const [from, setFrom] = useState<languageListItemType["code"]>("ko");

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function handleLanguageChange() {
    const prevTo = to;
    const prevFrom = from;
    const prevText = text;
    const prevResult = result;

    setTo(prevFrom);
    setFrom(prevTo);
    setText(prevResult);
    setResult(prevText);
  }

  function handleTo(code: languageListItemType["code"]) {
    setTo(code);
  }

  function handleFrom(code: languageListItemType["code"]) {
    setFrom(code);
  }

  function handleTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  async function translate() {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, text })
    });

    if (!res.ok) throw new Error("Translation failed");

    const data = await res.json();

    setResult(data.translatedText);
  }

  return (
    <div className="space-y-4">
      <TranslatorBox
        mode="input"
        languageList={languageList}
        selectedLanguage={from}
        placeholder="번역할 문장을 입력하세요"
        buttons={
          <Button variant="ghost" size="icon" title="복사하기">
            <Copy className="h-4 w-4" />
          </Button>
        }
        value={text}
        onTextChange={handleTextChange}
        onSelectorChange={handleFrom}
      />

      <LanguageChangeButton onClick={handleLanguageChange} />

      <TranslatorBox
        mode="result"
        languageList={languageList}
        selectedLanguage={to}
        placeholder="번역된 내용이 여기에 표시됩니다"
        textdirection={from === "ar" ? "rtl" : undefined}
        buttons={
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon" title="발음 듣기">
              <Volume className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" title="복사하기">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        }
        value={result}
        onSelectorChange={handleTo}
      />

      <Button
        onClick={translate}
        className="w-full bg-gold-primary hover:bg-gold-primary/90 cursor-pointer"
      >
        번역하기
      </Button>
    </div>
  );
};

export default TranslatorContent;
