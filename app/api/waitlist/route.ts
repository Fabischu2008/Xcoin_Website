import { NextResponse } from "next/server"

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_MAX_REQUESTS = 5
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000 // 15 minutes

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  record.count++
  return true
}

function getClientIdentifier(request: Request): string {
  // In production, use a more reliable method (IP + User-Agent, or API key)
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0] : "unknown"
  return ip
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    const trimmedEmail = email.trim().toLowerCase()

    if (!validateEmail(trimmedEmail)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    // Rate limiting
    const clientId = getClientIdentifier(request)
    if (!checkRateLimit(clientId)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    // In a real implementation, you would:
    // 1. Store it in a database (Supabase, Neon, etc.)
    // 2. Send a confirmation email
    // 3. Add to your email marketing service

    return NextResponse.json({ message: "Successfully joined the waitlist!" }, { status: 200 })
  } catch (error) {
    // Log error in production logging service (e.g., Sentry, LogRocket)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
