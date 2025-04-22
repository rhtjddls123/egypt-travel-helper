import { TabsContent } from "@radix-ui/react-tabs";
import PhraseTapContentList from "./phrase-tap-content-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PhrasesItemType } from "@/types/toolsType";

interface PhraseTapContentProps {
  id: string;
  items: PhrasesItemType[];
}

const PhraseTapContent = ({ id, items }: PhraseTapContentProps) => {
  return (
    <TabsContent value={id}>
      <ScrollArea className="h-[300px] rounded-md border">
        <ul className="divide-y">
          {items.map((item) => (
            <PhraseTapContentList item={item} key={item.korean} />
          ))}
        </ul>
      </ScrollArea>
    </TabsContent>
  );
};

export default PhraseTapContent;
