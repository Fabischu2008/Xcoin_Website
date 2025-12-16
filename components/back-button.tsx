"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import clsx from "clsx"

interface BackButtonProps {
  fallbackHref?: string
  className?: string
  variant?: "default" | "outline" | "ghost" | "prominent"
  position?: "top" | "bottom"
}

export default function BackButton({ 
  fallbackHref, 
  className = "",
  variant,
  position = "top"
}: BackButtonProps) {
  const router = useRouter()

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back()
    } else if (fallbackHref) {
      router.push(fallbackHref)
    } else {
      router.push("/")
    }
  }

  // Wenn keine Variante angegeben, verwende automatisch basierend auf Position
  const effectiveVariant = variant || (position === "bottom" ? "prominent" : "ghost")

  const baseStyles = "inline-flex items-center gap-2 font-medium transition-all duration-200 z-10"
  
  // Absolute Positionierung - außen, nimmt keinen Platz ein
  // Auf mobilen Geräten weiter oben, damit er nicht mitten im Bild ist
  // Bottom Button: Auf mobilen Geräten am Ende des Containers positioniert
  const positionStyles = {
    top: "absolute left-4 sm:left-6 lg:left-8 top-20 sm:top-24 lg:top-32",
    bottom: "absolute left-4 sm:left-6 lg:left-8 bottom-4 sm:bottom-20 lg:bottom-24"
  }
  
  const variantStyles = {
    ghost: "text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg px-4 py-2",
    default: "rounded-full bg-accent px-6 py-3 text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl",
    outline: "rounded-full border-2 border-accent bg-transparent px-6 py-3 text-accent hover:bg-accent hover:text-accent-foreground",
    prominent: "rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 hover:shadow-xl"
  }

  const iconSize = effectiveVariant === "prominent" || effectiveVariant === "default" ? "h-5 w-5" : "h-4 w-4"

  return (
    <button
      onClick={handleBack}
      className={clsx(baseStyles, variantStyles[effectiveVariant], positionStyles[position], className)}
      aria-label="Go back"
    >
      <ArrowLeft className={iconSize} />
      <span>Back</span>
    </button>
  )
}

