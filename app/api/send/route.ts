import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not defined");
    }

    const data = await resend.emails.send({
      from: "ShinCode_Dev <onboarding@resend.dev>",
      to: ["shincodeinc@gmail.com"], // 実際のメールアドレスに更新
      subject: `[お問い合わせ] ${subject} - ${name}様より`,
      text: `
名前: ${name}
メールアドレス: ${email}
件名: ${subject}

メッセージ:
${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    // エラーの詳細をログに出力
    console.error("Resend API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
