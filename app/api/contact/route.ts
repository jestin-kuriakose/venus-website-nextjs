import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
New contact form submission from Venus International website:

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}
${phone ? `Phone: ${phone}` : ""}
Subject: ${subject}

Message:
${message}

---
This message was sent from the Venus International contact form.
    `.trim();

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Venus International <noreply@venusintlkwt.com>",
      to: ["info@venusintlkwt.com"],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: emailContent,
    });

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
