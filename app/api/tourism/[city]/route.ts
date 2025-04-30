import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(req: Request, context: { params: Promise<{ city: string }> }) {
  const city = (await context.params).city;

  try {
    let q = query(collection(db, "places"), where("city", "==", city));

    if (city === "popular") {
      q = query(collection(db, "places"), where("isPopular", "==", true));
    }

    const snapshot = await getDocs(q);

    const results = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json({ data: results });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
