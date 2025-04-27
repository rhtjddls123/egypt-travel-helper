import { NextResponse } from "next/server";
import { getAudioUrl } from "google-tts-api";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");

  if (!text) {
    return NextResponse.json({ error: "No text provided" }, { status: 400 });
  }

  try {
    const url = getAudioUrl(text, {
      lang: "ar",
      slow: false,
      host: "https://translate.google.com"
    });
    const audioRes = await fetch(url);
    const arrayBuffer = await audioRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Response(buffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": buffer.length.toString(),
        "Cache-Control": "no-store"
      }
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
