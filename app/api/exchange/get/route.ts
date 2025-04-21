import { DB_TABLES } from "@/constants/db";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const docRef = doc(db, DB_TABLES.EXCHANGE_RATES, "latest");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return new Response("데이터 없음", { status: 404 });
    }

    const data = docSnap.data();
    return NextResponse.json({ exchange: data }, { status: 200 });
  } catch (error) {
    console.error("Firestore 오류:", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
