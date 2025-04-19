import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface HieroglyphOption {
  symbol: string;
  meaning?: string;
}

interface HieroglyphMapping {
  [key: string]: HieroglyphOption[];
}

const hieroglyphMap: HieroglyphMapping = {
  a: [{ symbol: "𓄿", meaning: "Powerful Strong person" }],
  b: [{ symbol: "𓃀", meaning: "Traveling every Where" }],
  c: [{ symbol: "𓎡", meaning: "full of good qualities" }],
  d: [{ symbol: "𓂧", meaning: "Friendly & Helpful" }],
  e: [{ symbol: "𓇋", meaning: "Fair & Just" }],
  f: [{ symbol: "𓆑", meaning: "Clever person" }],
  g: [{ symbol: "𓎼", meaning: "Stable" }],
  h: [
    { symbol: "𓎛", meaning: "Diplomatic Person" },
    { symbol: "𓉔", meaning: "Diplomatic Person" }
  ],
  i: [{ symbol: "𓏭", meaning: "Like the Straight way" }],
  j: [{ symbol: "𓆓", meaning: "Intelligent & Bossy" }],
  k: [{ symbol: "𓎡", meaning: "full of good qualities" }],
  l: [{ symbol: "𓃭", meaning: "Controlling & Bossy" }],
  m: [{ symbol: "𓅓", meaning: "Wise Persone" }],
  n: [
    { symbol: "𓈖", meaning: "Flexible" },
    { symbol: "𓋔", meaning: "Flexible" }
  ],
  o: [{ symbol: "𓍯", meaning: "Funny & adventurous" }],
  p: [{ symbol: "𓊪", meaning: "Creative Person" }],
  q: [{ symbol: "𓏘", meaning: "???" }],
  r: [{ symbol: "𓂋", meaning: "Talk too much" }],
  s: [
    { symbol: "𓋴", meaning: "Independent One" },
    { symbol: "𓊃", meaning: "Independent One" }
  ],
  t: [{ symbol: "𓏏", meaning: "Eats too much" }],
  u: [{ symbol: "𓅱", meaning: "Like children Stubbom" }],
  v: [{ symbol: "𓆑", meaning: "Clever person" }],
  w: [{ symbol: "𓅱", meaning: "Like children Stubbom" }],
  x: [{ symbol: "𓎡", meaning: "full of good qualities" }],
  y: [{ symbol: "𓇋𓇋", meaning: "Fair & justful" }],
  z: [{ symbol: "𓊃", meaning: "Close Link to family" }],
  ch: [{ symbol: "𓄡", meaning: "CH 소리" }],
  sh: [{ symbol: "𓈚", meaning: "SH 소리" }],
  th: [{ symbol: "𓍿", meaning: "TH 소리" }],
  kh: [{ symbol: "𓐍", meaning: "KH 소리" }],
  symbol: [
    { symbol: "𓋹", meaning: "long Life" },
    { symbol: "𓆣", meaning: "Good Luck" },
    { symbol: "𓂀", meaning: "Protection" }
  ]
};

const GlyphConverterContent = () => {
  return (
    <div>
      <p className="mb-2 font-medium text-sm">이름 또는 이니셜 입력</p>
      <div className="flex gap-2">
        <Input className="h-10" placeholder="영문으로 입력하세요 (예: ALEX)" />
        <Button className="h-10 px-4 py-2 bg-gold-primary text-white hover:bg-gold-primary/90 cursor-pointer">
          변환
        </Button>
      </div>

      <Card className="mt-4 rounded-md">
        <CardContent>
          <h4 className="font-medium mb-2">변환안내</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
            <li>영문 알파벳을 이집트 상형문자로 변환합니다.</li>
            <li>CH, SH, TH, KH와 같은 특수 조합은 자동으로 인식됩니다.</li>
            <li>일부 문자는 여러 상형문자 옵션이 있어 선택할 수 있습니다.</li>
            <li>{"상단의 '가이드' 버튼을 클릭하여 상형문자 기준 표를 확인하세요."}</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default GlyphConverterContent;
