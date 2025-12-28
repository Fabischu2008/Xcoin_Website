"use client"

import { useEffect, useRef, useState } from 'react'

interface UseParallaxOptions {
  start?: number
  end?: number
  direction?: 'horizontal' | 'vertical'
  scrub?: number
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { start = 0, end = 0, direction = 'vertical', scrub = 1 } = options
  const elementRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(0)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (windowHeight + elementHeight)
      ))

      // Calculate transform value
      const range = end - start
      const value = start + (range * scrollProgress * scrub)

      if (direction === 'horizontal') {
        setTransform(value)
      } else {
        setTransform(value)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [start, end, direction, scrub])

  return {
    ref: elementRef,
    style: {
      transform: direction === 'horizontal' 
        ? `translateX(${transform}px)` 
        : `translateY(${transform}px)`
    }
  }
}

