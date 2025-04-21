import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

interface ExchangeResponse {
  success: boolean;
  terms: string;
  privacy: string;
  timestamp: number;
  source: string;
  quotes: {
    KRWEGP: number;
    KRWUSD: number;
    KRWJPY: number;
    KRWEUR: number;
    KRWCNY: number;
  };
}

export async function GET() {
  const res = await fetch(
    `http://api.currencylayer.com/live?access_key=${process.env.EXCHANGE_API}&currencies=EGP,USD,JPY,EUR,CNY&source=KRW&format=1`
  );
  const data = (await res.json()) as ExchangeResponse;

  if (!data.success) {
    return NextResponse.json({ message: "환율 정보 업데이트 실패" }, { status: 500 });
  }

  await setDoc(doc(db, "exchangeRates", "latest"), {
    updatedAt: new Date().toISOString(),
    KRWEGP: data.quotes.KRWEGP,
    KRWUSD: data.quotes.KRWUSD,
    KRWJPY: data.quotes.KRWJPY,
    KRWEUR: data.quotes.KRWEUR,
    KRWCNY: data.quotes.KRWCNY
  });

  return NextResponse.json({ message: "환율 정보 업데이트 성공" }, { status: 200 });
}
