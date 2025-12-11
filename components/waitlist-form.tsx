"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setMessage("You're on the list! We'll be in touch soon.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-6 py-4">
        <CheckCircle className="h-5 w-5 text-green-500" />
        <span className="text-green-500">{message}</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 rounded-full border border-border bg-background px-6 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90 disabled:opacity-50"
      >
        {status === "loading" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            Join Waitlist
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>
      {status === "error" && <p className="text-sm text-destructive sm:absolute sm:mt-16">{message}</p>}
    </form>
  )
}
