import { NextRequest, NextResponse } from "next/server";

const AZURE_TRANSLATOR_ENDPOINT =
  "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0";
const AZURE_TRANSLATOR_KEY = process.env.AZURE_TRANSLATOR_KEY;
const AZURE_TRANSLATOR_REGION = process.env.AZURE_TRANSLATOR_REGION;

export async function POST(req: NextRequest) {
  const { text, to, from } = await req.json();

  if (!text || !to || !from) {
    return NextResponse.json(
      { message: "Missing 'text' or 'to' or 'from' parameter" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`${AZURE_TRANSLATOR_ENDPOINT}&to=${to}&from=${from}`, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": AZURE_TRANSLATOR_KEY!,
        "Ocp-Apim-Subscription-Region": AZURE_TRANSLATOR_REGION!,
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{ Text: text }])
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.error?.message || "Translation error" },
        { status: response.status }
      );
    }

    const translatedText = data[0]?.translations[0]?.text;

    return NextResponse.json({ translatedText });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
