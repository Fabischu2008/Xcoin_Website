"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-9xl font-bold text-accent">404</h1>
        <h2 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl">
          Page not found
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            <Home className="h-5 w-5" />
            Go back home
          </Link>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-all hover:bg-secondary"
          >
            <ArrowLeft className="h-5 w-5" />
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

