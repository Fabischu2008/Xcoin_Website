import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    // In a real implementation, you would:
    // 1. Validate the email more thoroughly
    // 2. Store it in a database (Supabase, Neon, etc.)
    // 3. Send a confirmation email
    // 4. Add to your email marketing service

    console.log(`New waitlist signup: ${email}`)

    return NextResponse.json({ message: "Successfully joined the waitlist!" }, { status: 200 })
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
