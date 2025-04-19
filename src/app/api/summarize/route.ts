import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  if (!text) {
    return NextResponse.json(
      { error: "No input text provided." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch("https://api.together.xyz/inference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3-8b-chat-hf",
        prompt: `Summarize this content clearly:\n\n${text}\n\nSummary:`,
        max_tokens: 300,
        temperature: 0.5,
      }),
    });

    const data = await response.json();
    const summary =
      data.output || data.choices?.[0]?.text || "No summary generated.";

    return NextResponse.json({ summary });
  } catch (error) {
    console.error("AI Summarization Error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
