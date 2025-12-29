"use client"

import { useEffect } from "react"

export default function RotatingFavicon() {
  useEffect(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let rotation = 0
    const rotationSpeed = (360 / 10000) * 16.67 // 360 degrees in 10 seconds at 60fps

    const updateFavicon = () => {
      if (!ctx) return
      
      ctx.clearRect(0, 0, 32, 32)
      ctx.save()
      ctx.translate(16, 16)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.translate(-16, -16)

      // Draw Xcoin logo SVG path (simplified asterisk shape)
      ctx.strokeStyle = "#93c5fd"
      ctx.fillStyle = "#93c5fd"
      ctx.lineWidth = 2
      ctx.beginPath()
      
      // Draw asterisk shape (6-pointed star)
      const centerX = 16
      const centerY = 16
      const radius = 12
      const points = 6
      
      for (let i = 0; i < points * 2; i++) {
        const angle = (i * Math.PI) / points - Math.PI / 2
        const r = i % 2 === 0 ? radius : radius * 0.5
        const x = centerX + r * Math.cos(angle)
        const y = centerY + r * Math.sin(angle)
        
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.fill()

      ctx.restore()

      // Update favicon
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement("link")
      link.type = "image/png"
      link.rel = "icon"
      link.href = canvas.toDataURL()
      if (!document.querySelector("link[rel*='icon']")) {
        document.getElementsByTagName("head")[0].appendChild(link)
      }

      rotation += rotationSpeed
      if (rotation >= 360) {
        rotation = 0
      }
    }

    const interval = setInterval(updateFavicon, 16.67) // ~60fps
    updateFavicon() // Initial render

    return () => clearInterval(interval)
  }, [])

  return null
}

