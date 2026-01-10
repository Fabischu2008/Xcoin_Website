"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, Home, RefreshCw } from "lucide-react"
import { logger } from "@/lib/logger"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service
    logger.error("Application error", error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
          <AlertCircle className="h-10 w-10 text-destructive" />
        </div>
        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We encountered an unexpected error. Our team has been notified and is working on a fix.
        </p>
        {error.digest && (
          <p className="mt-2 text-sm text-muted-foreground">Error ID: {error.digest}</p>
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            <RefreshCw className="h-5 w-5" />
            Try again
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-all hover:bg-secondary"
          >
            <Home className="h-5 w-5" />
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}

