import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function GET() {
  try {
    const docRef = doc(db, "cities", "name");
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      return NextResponse.json({ error: "문서 없음" }, { status: 404 });
    }

    const { cities } = snapshot.data();

    return NextResponse.json({ data: cities });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
