import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { ScrollArea } from "../../ui/scroll-area";
import { Button } from "../../ui/button";
import { HieroglyphOption } from "./glyph-converter-content";

interface GlyphResultProps {
  result: HieroglyphOption[];
  processedChars: string[];
  onReset: () => void;
}

const GlyphResult = ({ processedChars, result, onReset }: GlyphResultProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">변환 결과</h3>
        <Button variant="outline" size="sm" onClick={onReset}>
          다시 시작
        </Button>
      </div>
      <Tabs defaultValue="hieroglyph">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="hieroglyph">상형문자</TabsTrigger>
          <TabsTrigger value="details">상세정보</TabsTrigger>
        </TabsList>
        <TabsContent value="hieroglyph">
          <div className="p-6 text-center border rounded-md bg-slate-50">
            <div className="text-4xl break-words whitespace-normal overflow-auto max-h-64">
              {result.map((item, index) => (
                <span key={`${item}-${index}`} className="mx-1">
                  {item.symbol}
                </span>
              ))}
            </div>
            <div className="mt-2 text-sm text-gray-700 break-words whitespace-normal overflow-auto max-h-64">
              {processedChars.join("").toUpperCase()} 의 상형문자 표현
            </div>
          </div>
        </TabsContent>
        <TabsContent value="details">
          <ScrollArea className="h-[200px] rounded-md border">
            <div className="p-4">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-slate-50 text-xs ">
                    <th className="text-center p-2 whitespace-nowrap">원본</th>
                    <th className="text-center p-2 whitespace-nowrap">상형문자</th>
                    <th className="text-center p-2 whitespace-nowrap">의미</th>
                  </tr>
                </thead>
                <tbody>
                  {processedChars.map((char, index) => (
                    <tr key={`${char}-${index}`} className="border-t">
                      <td className="p-2 font-medium text-center">{char.toUpperCase()}</td>
                      <td className="p-2 text-2xl text-center">{result[index]?.symbol || "?"}</td>
                      <td className="p-2 text-sm text-gray-600 text-center">
                        {result[index]?.meaning || "알 수 없음"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GlyphResult;
