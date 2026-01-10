import { NextRequest, NextResponse } from "next/server"
import { logger } from "@/lib/logger"

// TODO: Später mit Datenbank verbinden
// - E-Mails in Datenbank speichern
// - E-Mail-Benachrichtigung senden
// - Validierung erweitern
// - Rate Limiting hinzufügen
// - Spam-Filter implementieren

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Email-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // TODO: Hier später:
    // 1. Daten in Datenbank speichern (z.B. PostgreSQL, MySQL, MongoDB)
    //    Beispiel mit Prisma:
    //    await prisma.contact.create({
    //      data: {
    //        name,
    //        email,
    //        message,
    //        createdAt: new Date()
    //      }
    //    })
    //
    // 2. E-Mail senden (z.B. mit Nodemailer, SendGrid, Resend)
    //    Beispiel mit Resend:
    //    await resend.emails.send({
    //      from: 'contact@xcoin.ws',
    //      to: 'info@xcoin.ws',
    //      subject: `New Contact Form Submission from ${name}`,
    //      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
    //    })
    //
    // 3. Optional: Captcha-Validierung
    //    const captchaValid = await validateCaptcha(captchaToken)
    //    if (!captchaValid) {
    //      return NextResponse.json({ error: "Invalid captcha" }, { status: 400 })
    //    }
    //
    // 4. Optional: Rate Limiting (z.B. mit @upstash/ratelimit)
    //    const rateLimit = await ratelimit.limit(identifier)
    //    if (!rateLimit.success) {
    //      return NextResponse.json({ error: "Too many requests" }, { status: 429 })
    //    }

    // Logging für jetzt (später durch Datenbank ersetzen)
    logger.info("Contact form submission", { name, email, message })

    return NextResponse.json(
      { message: "Message received successfully" },
      { status: 200 }
    )
  } catch (error) {
    logger.error("Error processing contact form", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
