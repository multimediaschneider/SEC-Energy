import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { firstName, lastName, company, email, phone, message, to } = await req.json();

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: to,
      subject: "Neue Kontaktanfrage",
      text: `
        Name: ${firstName} ${lastName}
        ${company ? `Firma: ${company}` : ''}
        ${email ? `E-Mail: ${email}` : ''}
        ${phone ? `Telefon: ${phone}` : ''}
        ${message ? `Nachricht: ${message}` : ''}
      `,
      html: `
        <h1>Neue Kontaktanfrage</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ''}
        ${email ? `<p><strong>E-Mail:</strong> ${email}</p>` : ''}
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${message ? `<p><strong>Nachricht:</strong> ${message}</p>` : ''}
      `,
    });

    return NextResponse.json(
      { message: "E-Mail erfolgreich gesendet" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    return NextResponse.json(
      { message: "Fehler beim Senden der E-Mail" },
      { status: 500 }
    );
  }
}