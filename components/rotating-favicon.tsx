"use client"

import { useEffect } from "react"

export default function RotatingFavicon() {
  useEffect(() => {
    // Create a canvas to draw the rotating logo
    const canvas = document.createElement("canvas")
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create link element for favicon
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
    if (!link) {
      link = document.createElement("link")
      link.rel = "icon"
      document.getElementsByTagName("head")[0].appendChild(link)
    }

    // Load the logo image
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = "/img/xcoin.svg"

    let rotation = 0
    const rotationSpeed = 0.36 // degrees per frame (360 degrees / 10000ms * 16.67ms per frame)

    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.translate(-canvas.width / 2, -canvas.height / 2)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      ctx.restore()

      rotation += rotationSpeed
      if (rotation >= 360) rotation = 0

      // Update favicon
      link.href = canvas.toDataURL()

      requestAnimationFrame(animate)
    }

    img.onload = () => {
      animate()
    }

    // Fallback: if image fails to load, use static favicon
    img.onerror = () => {
      link.href = "/favicon.ico"
    }
  }, [])

  return null
}

