import { useEffect, useState, RefObject } from "react"

/**
 * Throttled scroll hook for performance optimization
 * Uses requestAnimationFrame for smooth scrolling
 */
export function useThrottledScroll(callback: () => void, delay: number = 16) {
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          callback()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [callback, delay])
}

/**
 * Intersection Observer hook for lazy loading and visibility detection
 */
export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, options])

  return isIntersecting
}

/**
 * Hook to detect if viewport is mobile
 * Uses CSS media query for better performance
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    setIsMobile(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isMobile
}

/**
 * Hook for scroll position with throttling
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useThrottledScroll(() => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop)
  })

  return scrollPosition
}

