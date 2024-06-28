import { sendEmail } from "@/util/mailHandler";
// import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, subject, message, title } = await req.json();

  const emailSent = await sendEmail({
    email,
    subject,
    message,
    title,
  });
  if (emailSent) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
