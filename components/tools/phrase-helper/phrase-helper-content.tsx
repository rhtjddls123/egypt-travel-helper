import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhraseTapContent from "./phrase-tap-content";

const PHRASE_TAB_LIST = [
  { id: "greeting", name: "인사" },
  { id: "shopping", name: "쇼핑" },
  { id: "transportation", name: "교통" }
];

const PHRASE_ITEMS = [
  {
    id: "greeting",
    items: [
      { korean: "안녕하세요", arabic: "السلام عليكم", pronunciation: "아쌀라무 알라이쿰" },
      { korean: "감사합니다", arabic: "شكرا", pronunciation: "슈크란" },
      { korean: "미안합니다", arabic: "آسف", pronunciation: "아씨프" },
      { korean: "안녕히 계세요", arabic: "مع السلامة", pronunciation: "마아 앗쌀라마" }
    ]
  },
  {
    id: "shopping",
    items: [
      { korean: "얼마예요?", arabic: "بكم هذا؟", pronunciation: "비캄 하자?" },
      { korean: "너무 비싸요", arabic: "هذا غالي جدا", pronunciation: "하자 갈리 지단" },
      { korean: "깎아주세요", arabic: "ممكن تخفيض؟", pronunciation: "뭄킨 타크피드?" },
      { korean: "살게요", arabic: "سأشتري هذا", pronunciation: "사아쉬타리 하자" }
    ]
  },
  {
    id: "transportation",
    items: [
      { korean: "택시를 타고 싶어요", arabic: "أريد تاكسي", pronunciation: "우리두 탁시" },
      {
        korean: "여기에 세워주세요",
        arabic: "توقف هنا من فضلك",
        pronunciation: "타와까프 후나 민 파들릭"
      },
      { korean: "얼마예요?", arabic: "كم التكلفة؟", pronunciation: "캄 앗타클루파?" },
      {
        korean: "이 주소로 가주세요",
        arabic: "خذني إلى هذا العنوان",
        pronunciation: "쿠드니 일라 하자 알아운완"
      }
    ]
  }
];

const PhraseHelperContent = () => {
  return (
    <>
      <Tabs defaultValue={PHRASE_TAB_LIST[0].id} className="w-full">
        <TabsList className="w-full h-auto p-1">
          {PHRASE_TAB_LIST.map((item) => (
            <TabsTrigger className="py-1.5 px-3" key={item.id} value={item.id}>
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {PHRASE_ITEMS.map((item) => (
          <PhraseTapContent key={item.id} id={item.id} items={item.items} />
        ))}
      </Tabs>
    </>
  );
};

export default PhraseHelperContent;
