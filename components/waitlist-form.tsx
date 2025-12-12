"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [validationError, setValidationError] = useState("")

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError("")
    setMessage("")

    // Client-side validation
    if (!email.trim()) {
      setValidationError("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      setValidationError("Please enter a valid email address")
      return
    }

    setStatus("loading")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
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
      <div 
        className="flex items-center justify-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-6 py-4"
        role="alert"
        aria-live="polite"
      >
        <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
        <span className="text-green-500">{message}</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row" aria-label="Join waitlist form">
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          if (validationError) setValidationError("")
        }}
        placeholder="Enter your email"
        required
        aria-required="true"
        aria-invalid={status === "error" || !!validationError}
        aria-describedby={status === "error" || validationError ? "error-message" : undefined}
        className={`flex-1 rounded-full border bg-background px-6 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 ${
          validationError || status === "error" ? "border-destructive" : "border-border focus:border-accent"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className="flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            <span className="sr-only">Submitting...</span>
          </>
        ) : (
          <>
            Join Waitlist
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </>
        )}
      </button>
      {(status === "error" || validationError) && (
        <p id="error-message" className="text-sm text-destructive sm:absolute sm:mt-16" role="alert" aria-live="polite">
          {validationError || message}
        </p>
      )}
    </form>
  )
}
