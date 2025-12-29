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
    const rotationSpeed = 2 // degrees per frame

    const drawFavicon = () => {
      // Clear canvas
      ctx.clearRect(0, 0, 32, 32)
      
      // Save context and apply rotation
      ctx.save()
      ctx.translate(16, 16) // Move to center
      ctx.rotate((rotation * Math.PI) / 180) // Rotate
      ctx.translate(-16, -16) // Move back

      // Draw black asterisk shape
      ctx.fillStyle = "#000000"
      ctx.strokeStyle = "#000000"
      ctx.lineWidth = 2
      ctx.beginPath()
      
      const centerX = 16
      const centerY = 16
      const radius = 12
      const points = 6
      
      // Draw 6-pointed star
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

      // Update rotation
      rotation += rotationSpeed
      if (rotation >= 360) {
        rotation = 0
      }

      // Update favicon
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement
      if (link) {
        link.href = canvas.toDataURL()
      } else {
        const newLink = document.createElement("link")
        newLink.rel = "icon"
        newLink.type = "image/png"
        newLink.href = canvas.toDataURL()
        document.head.appendChild(newLink)
      }
    }

    // Start animation loop
    const intervalId = setInterval(drawFavicon, 50) // Update every 50ms (20fps)
    
    // Initial draw
    drawFavicon()

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return null
}
