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
      {
        korean: "안녕하세요",
        arabic: "مرحبا",
        pronunciation: "마르하반",
        description: "친구나 아는 사람에게 가볍게 인사할 때 사용."
      },
      {
        korean: "안녕하세요 (포멀)",
        arabic: "السلام عليكم",
        pronunciation: "앗살라무 알라이쿰",
        description: "정중하고 예의 있게 인사할 때 (특히 공식적인 자리나 처음 만날 때) 사용."
      },
      {
        korean: "감사합니다",
        arabic: "شكرا",
        pronunciation: "슈크란",
        description: "고마움을 표현할 때 사용."
      },
      {
        korean: "미안합니다",
        arabic: "آسف",
        pronunciation: "아씨프",
        description: "사과할 때 정중하게 사용하는 표현."
      },
      {
        korean: "안녕히 계세요",
        arabic: "مع السلامة",
        pronunciation: "마아 앗쌀라마",
        description: "헤어질 때 작별 인사로 사용."
      }
    ]
  },
  {
    id: "shopping",
    items: [
      {
        korean: "얼마예요?",
        arabic: "بكم هذا؟",
        pronunciation: "비캄 하자?",
        description: "물건 가격을 물어볼 때 사용."
      },
      {
        korean: "너무 비싸요",
        arabic: "هذا غالي جدا",
        pronunciation: "하자 갈리 지단",
        description: "가격이 비쌀 때 불만을 표현할 때 사용."
      },
      {
        korean: "깎아주세요",
        arabic: "ممكن تخفيض؟",
        pronunciation: "뭄킨 타크피드?",
        description: "가격 흥정하거나 할인 요청할 때 사용."
      },
      {
        korean: "살게요",
        arabic: "سأشتري هذا",
        pronunciation: "사아쉬타리 하자",
        description: "구매 의사를 표현할 때 사용."
      }
    ]
  },
  {
    id: "transportation",
    items: [
      {
        korean: "택시를 타고 싶어요",
        arabic: "أريد تاكسي",
        pronunciation: "우리두 탁시",
        description: "택시를 부르고 싶을 때 사용."
      },
      {
        korean: "여기에 세워주세요",
        arabic: "توقف هنا من فضلك",
        pronunciation: "타와까프 후나 민 파들릭",
        description: "택시나 차를 원하는 위치에 세워달라고 할 때 사용."
      },
      {
        korean: "얼마예요?",
        arabic: "كم التكلفة؟",
        pronunciation: "캄 앗타클루파?",
        description: "교통비(요금)를 물어볼 때 사용."
      },
      {
        korean: "이 주소로 가주세요",
        arabic: "خذني إلى هذا العنوان",
        pronunciation: "쿠드니 일라 하자 알아운완",
        description: "택시 기사에게 목적지 주소를 보여주고 갈 때 사용."
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
