"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function BackButton({ fallbackHref }: { fallbackHref?: string }) {
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else if (fallbackHref) {
      router.push(fallbackHref)
    } else {
      router.push("/")
    }
  }

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back</span>
    </button>
  )
}

