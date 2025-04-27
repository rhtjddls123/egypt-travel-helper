import { NextResponse } from "next/server";
import { getAudioUrl } from "google-tts-api";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");
  const lang = searchParams.get("lang");

  if (!text || !lang) {
    return NextResponse.json({ error: "No text or lang provided" }, { status: 400 });
  }

  try {
    const url = getAudioUrl(text, {
      lang: lang,
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
