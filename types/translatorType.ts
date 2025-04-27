import { languageList } from "@/components/tools/translator/translator-content";

export type languageListItemType = (typeof languageList)[number];

export type TtsLanguageCodeType =
  | "ar"
  | "ko"
  | "en"
  | "ja"
  | "zh-CN"
  | "zh-TW"
  | "fr"
  | "de"
  | "es"
  | "ru"
  | "tr"
  | "hi"
  | "pt"
  | "it";
