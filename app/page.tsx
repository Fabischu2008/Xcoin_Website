
"use client"

import { useEffect, useRef, useState, lazy, Suspense, useMemo, useCallback } from "react"
import Link from "next/link"
import Hero from "@/components/hero"

// Lazy load heavy components for better mobile performance
const DashboardSection = lazy(() => import("@/components/dashboard-section"))
const TestimonialsSection = lazy(() => import("@/components/testimonials-section"))

function renderTextWithLinks(text: string, links: Record<string, string>) {
  if (!links || Object.keys(links).length === 0) {
    return <span>{text}</span>
  }

  const parts: (string | { text: string; href: string })[] = []
  let remaining = text
  const linkEntries = Object.entries(links).sort((a, b) => b[0].length - a[0].length)

  const linkPositions: Array<{ start: number; end: number; text: string; href: string }> = []
  for (const [key, href] of linkEntries) {
    let searchIndex = 0
    while (true) {
      const index = remaining.indexOf(key, searchIndex)
      if (index === -1) break
      linkPositions.push({ start: index, end: index + key.length, text: key, href })
      searchIndex = index + 1
    }
  }

  linkPositions.sort((a, b) => a.start - b.start)

  const filteredPositions: Array<{ start: number; end: number; text: string; href: string }> = []
  for (const pos of linkPositions) {
    const overlaps = filteredPositions.some(
      (existing) => !(pos.end <= existing.start || pos.start >= existing.end)
    )
    if (!overlaps) {
      filteredPositions.push(pos)
    }
  }
  filteredPositions.sort((a, b) => a.start - b.start)

  let lastIndex = 0
  for (const pos of filteredPositions) {
    if (pos.start > lastIndex) {
      parts.push(remaining.substring(lastIndex, pos.start))
    }
    parts.push({ text: pos.text, href: pos.href })
    lastIndex = pos.end
  }
  if (lastIndex < remaining.length) {
    parts.push(remaining.substring(lastIndex))
  }

  if (parts.length === 0) {
    return <span>{text}</span>
  }

  return (
    <span>
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return <span key={index}>{part}</span>
        }
        return (
          <Link
            key={index}
            href={part.href}
            className="text-accent hover:text-accent/80 underline transition-colors"
          >
            {part.text}
          </Link>
        )
      })}
    </span>
  )
}

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleVideoClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
      modalVideoRef.current.currentTime = 0
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      return () => {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
      }
    }
  }, [])

  useEffect(() => {
    if (isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.play().catch(() => {
        // Autoplay might fail, that's okay
      })
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
          } else {
      document.body.style.overflow = ''
    }

    // Handle ESC key to close modal
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleCloseModal()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  return (
    <>
      <div 
        className="mt-12 w-full cursor-pointer group relative flex justify-center"
        onClick={handleVideoClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Video Background - Only the container scales on hover, not the video */}
        <div 
          className="relative w-full max-w-[95%] aspect-video rounded-2xl overflow-hidden bg-white/5 transition-transform duration-500 ease-out"
          style={{
            backdropFilter: 'blur(4em)',
            WebkitBackdropFilter: 'blur(4em)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <video
            ref={videoRef}
            controls={false}
            playsInline
            preload="metadata"
            poster="/xcoin-vid-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/vid/xcoin-vid.mp4" type="video/mp4" />
            <source src="/xcoin-vid-compressed.mp4" type="video/mp4" />
          </video>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="video-play-button-modern">
              <div className="play-button-inner">
                {/* Pulse Animation */}
                <div className="play-button-pulse play-button-pulse-blue"></div>
                {/* Play Icon */}
                <div className="play-button-icon play-button-icon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="6,4 20,12 6,20" fill="currentColor"></polygon>
                  </svg>
                </div>
                {/* Glow Effect */}
                <div className="play-button-glow play-button-glow-blue"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal/Lightbox */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-[10000] w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 border border-white/20 hover:border-white/40 transition-all"
            aria-label="Close video"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-white"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Video Container */}
          <div 
            className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain rounded-lg"
            >
              <source src="/vid/xcoin-vid.mp4" type="video/mp4" />
              <source src="/xcoin-vid-compressed.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  )
}

function DevelopmentImageColumn({ images, parallaxStart, parallaxEnd, scrub }: { images: string[], parallaxStart: number, parallaxEnd: number, scrub: number }) {
  const columnRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(0)

  useEffect(() => {
    const element = columnRef.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (windowHeight + elementHeight)
      ))

      const range = parallaxEnd - parallaxStart
      const value = parallaxStart + (range * scrollProgress * scrub)
      setTransform(value)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [parallaxStart, parallaxEnd, scrub])

  return (
    <div 
      ref={columnRef}
      className="flex-1 flex flex-col gap-2"
      style={{ transform: `translateY(${transform}px)` }}
    >
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square overflow-hidden rounded flex-shrink-0">
          <img 
            src={`/img/xcoin_grid/screens/${image}`}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ maxHeight: '100%' }}
          />
        </div>
      ))}
    </div>
  )
}

function DividerAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            setIsAnimated(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [isAnimated])

  return (
    <div ref={containerRef} className="mx-auto max-w-4xl pt-24 pb-24">
      <div className="flex items-center justify-center" style={{ gap: isAnimated ? '0.5rem' : '0.25rem' }}>
        {/* Left Video */}
        <div 
          className="flex-none w-10 h-10 relative rounded-full overflow-hidden transition-all duration-1200 ease-out"
          style={{ 
            transform: isAnimated ? 'translateX(0)' : 'translateX(20rem)',
            opacity: isAnimated ? 1 : 0,
          }}
        >
          <video 
            src="/vid/hero9.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Left Divider */}
        <div 
          className="h-px transition-all duration-1000 ease-out flex-1"
          style={{ 
            backgroundImage: 'linear-gradient(90deg, transparent, rgba(239, 238, 236, 0.25) 25%, rgba(239, 238, 236, 0.25) 75%, transparent)',
            transformOrigin: 'center right',
            transform: isAnimated ? 'scaleX(1)' : 'scaleX(0.1)',
            minWidth: '0',
          }}
        />
        
        {/* Logo */}
        <div className="flex-none w-12 h-12 flex items-center justify-center relative z-10">
          <img 
            src="/img/xcoin.svg" 
            alt="Xcoin" 
            className="w-full h-full object-contain animate-spin-slow"
            style={{ animationDuration: '10000ms' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-500 rounded-lg blur-lg opacity-70 -z-10" />
        </div>
        
        {/* Right Divider */}
        <div 
          className="h-px transition-all duration-1000 ease-out flex-1"
          style={{ 
            backgroundImage: 'linear-gradient(90deg, transparent, rgba(239, 238, 236, 0.25) 25%, rgba(239, 238, 236, 0.25) 75%, transparent)',
            transformOrigin: 'center left',
            transform: isAnimated ? 'scaleX(1)' : 'scaleX(0.1)',
            minWidth: '0',
          }}
        />
        
        {/* Right Video */}
        <div 
          className="flex-none w-10 h-10 relative rounded-full overflow-hidden transition-all duration-1200 ease-out"
      style={{
            transform: isAnimated ? 'translateX(0)' : 'translateX(-20rem)',
            opacity: isAnimated ? 1 : 0,
          }}
        >
          <video 
            src="/vid/hero9.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}


function QuantumIconsRow({ icons, parallaxStart, parallaxEnd, scrub }: { icons: string[], parallaxStart: number, parallaxEnd: number, scrub: number }) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(0)

  useEffect(() => {
    const element = rowRef.current
    if (!element) return

    const handleScroll = () => {
      if (!rowRef.current) return
      
      const rect = rowRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (windowHeight + elementHeight)
      ))

      // Calculate transform value - using percentage like XCoin_Basti (xPercent)
      const range = parallaxEnd - parallaxStart
      const value = parallaxStart + (range * scrollProgress * scrub)
      setTransform(value)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [parallaxStart, parallaxEnd, scrub])

  return (
    <div 
      ref={rowRef}
      className="flex gap-3"
      style={{ transform: `translateX(${transform}%)` }}
    >
      {icons.map((icon) => (
        <div key={icon} className="flex flex-col items-center pointer-events-none flex-none relative" style={{ width: '6em', height: '6em', transformStyle: 'preserve-3d' }}>
          <div className="w-full h-full rounded-lg border border-border/50 bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0" style={{ paddingTop: '100%' }}></div>
            <div className="absolute inset-0 flex items-center justify-center" style={{ marginBottom: '0.5em' }}>
              <img 
                src={`/img/crypto-icons/color/${icon}.svg`} 
                alt={icon === 'xcoin' ? 'XXX' : icon.toUpperCase()}
                className="w-6 h-6"
                loading="lazy"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center" style={{ paddingTop: '0.25em', paddingBottom: '0.75em' }}>
            <p className="eyebrow small text-muted-foreground uppercase">{icon === 'xcoin' ? 'XXX' : icon.toUpperCase()}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// Helper component for Arrow Icon
function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="50" 
      height="50" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={`text-accent opacity-0 -translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute top-[-10px] md:top-0 right-0 z-10 ${className}`}
    >
      <path d="M7 7h10v10"/>
      <path d="M7 17 17 7"/>
    </svg>
  )
}

// Helper component for Corner Brackets
function CornerBrackets() {
  return (
    <>
      <div className="absolute w-4 h-4 border-t-2 border-l-2 border-[#93c5fd]" style={{ top: '-2mm', left: '-2mm', zIndex: 10 }} />
      <div className="absolute w-4 h-4 border-b-2 border-l-2 border-[#93c5fd]" style={{ bottom: '-2mm', left: '-2mm', zIndex: 10 }} />
      <div className="absolute w-4 h-4 border-t-2 border-r-2 border-[#93c5fd]" style={{ top: '-2mm', right: '-2mm', zIndex: 10 }} />
      <div className="absolute w-4 h-4 border-b-2 border-r-2 border-[#93c5fd]" style={{ bottom: '-2mm', right: '-2mm', zIndex: 10 }} />
    </>
  )
}

// Helper component for Arrow SVG (used in community cards)
function ArrowSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="community-card__arrow-svg">
      <path d="M10 17L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 7L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CommunityImagesCard() {
  const communityItems = useMemo(() => [
    { src: "/img/xcoin_grid/community_1.jpeg", label: "Brainstorming" },
    { src: "/img/xcoin_grid/community_2.jpeg", label: "Privacy, freedom, & independence" },
    { src: "/img/xcoin_grid/community_3.jpeg", label: "Planning the Future" },
    { src: "/img/xcoin_grid/community_4.jpeg", label: "Global Decentralized Community" },
  ], [])

  // Duplicate items 3 times (no complex loop logic)
  const infiniteItems = useMemo(() => [...communityItems, ...communityItems, ...communityItems], [communityItems])
  const itemCount = communityItems.length
  
  // Start with first item in middle set
  const [selectedIndex, setSelectedIndex] = useState(itemCount)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  // Initial scroll to center first item in middle set
  useEffect(() => {
    if (scrollRef.current && !isInitialized) {
      const selectedCard = scrollRef.current.children[itemCount] as HTMLElement
      if (selectedCard) {
        const containerWidth = scrollRef.current.offsetWidth
        const cardLeft = selectedCard.offsetLeft
        const cardWidthActual = selectedCard.offsetWidth
        
        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidthActual / 2)
        
        scrollRef.current.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: 'auto'
        })
        setIsInitialized(true)
      }
    }
  }, [isInitialized, itemCount])

  // Scroll to selected index (exactly like TestimonialsSection)
  useEffect(() => {
    if (scrollRef.current && isInitialized) {
      const selectedCard = scrollRef.current.children[selectedIndex] as HTMLElement
      if (selectedCard) {
        const containerWidth = scrollRef.current.offsetWidth
        const cardLeft = selectedCard.offsetLeft
        const cardWidthActual = selectedCard.offsetWidth
        
        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidthActual / 2)
        
        scrollRef.current.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: 'smooth'
        })
      }
    }
  }, [selectedIndex, isInitialized])

  return (
    <div className="f-grid-card basics group">
      <div className="f-grid__basics">
    <div
          ref={scrollRef}
          className="flex gap-1 overflow-x-auto pt-2 pb-8 snap-x snap-mandatory"
      style={{
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          {infiniteItems.map((item, index) => {
            const isSelected = selectedIndex === index
            const distance = Math.abs(index - selectedIndex)
            const scale = isSelected ? 1 : Math.max(0.9, 1 - distance * 0.05)
            const opacity = isSelected ? 1 : 0.6
            
            const itemContent = (
              <>
                {isSelected && <CornerBrackets />}
                <div className="community-card__visual aspect-video">
                  <div className="community-card__visual-before"></div>
                  <img 
                    src={item.src} 
                    alt={item.label}
                    className="community-card__visual-img w-full h-full object-cover"
                    loading="lazy"
                  />
        </div>
                <div className="community-card__info">
                  <div className="community-card__info-start">
                    <p className="p-small">{item.label}</p>
                  </div>
                  <div className="community-card__info-end">
                    <div className="community-card__arrow">
                      <div className="community-card__arrow-back"></div>
                      <ArrowSVG />
                    </div>
                  </div>
                </div>
              </>
            )
            
            const commonProps = {
              className: "f-grid-basics__item snap-center cursor-pointer",
              style: { 
                opacity,
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                position: 'relative' as const,
                flexShrink: 0,
                transform: `scale(${scale})`,
                transformOrigin: 'center'
              }
            }
            
            return isSelected ? (
              <Link
                key={index}
                href="/community"
                {...commonProps}
                style={{ ...commonProps.style, textDecoration: 'none', display: 'block' }}
              >
                {itemContent}
              </Link>
            ) : (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                {...commonProps}
              >
                {itemContent}
              </div>
            )
          })}
        </div>
      </div>
      <div className="f-card__text">
        <h4 className="h-small">Xcoin Community</h4>
        <div className="f-card__paragraph">
          <p className="p-small text-white/55">
            Curious about what it means to be part of something different? You don't "sign up" in the traditional sense. You don't become a member of a club or platform. If you join, you become part of something bigger: a global decentralized community built for people who value privacy, freedom, and independence.
          </p>
        </div>
      </div>
    </div>
  )
}


function MatrixAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    function resizeCanvas() {
      if (!canvas) return
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix characters
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;':\",./<>?`~"
    const charArray = chars.split('')

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Array to store the y position for each column
    const drops = new Array(columns).fill(0)

    function draw() {
      if (!canvas || !ctx) return

      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)]

        // Draw the character with green color variation
        ctx.fillStyle = `hsl(${120 + Math.random() * 60}, 100%, ${50 + Math.random() * 50}%)`
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Reset drop position randomly or when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    // Animation loop
    const interval = setInterval(draw, 35)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full absolute inset-0" />
}

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Xcoin",
    description:
      "A truly private, quantum-secure, and community-governed cryptocurrency. Fixed supply of 21 million. Zero inflation. Zero-knowledge privacy by default.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://xcoin-website.vercel.app",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://xcoin-website.vercel.app"}/xcoin-logo.png`,
    sameAs: [
      // Add your social media links here when available
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
    },
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Xcoin",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://xcoin-website.vercel.app",
    description:
      "A truly private, quantum-secure, and community-governed cryptocurrency. Fixed supply of 21 million. Zero inflation. Zero-knowledge privacy by default.",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <Hero />

      {/* Why Xcoin Matters Section */}
      <section className="py-24">
        <div className="mx-auto max-w-[98vw] px-2 lg:px-3">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="h-medium mb-12">Why Xcoin Matters</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2 md:text-left">
              <p className="p-reg text-muted-foreground">
                Xcoin was built with one purpose: real, unstoppable privacy. While others follow trends, we built technology that anticipates a world where surveillance is the norm, not the exception.
              </p>
              <p className="p-reg text-muted-foreground">
                Whether you're protecting your personal freedom, operating in high-risk environments, or simply tired of being watched, Xcoin gives you silence in a world of noise.
            </p>
            </div>
          </div>

          {/* Video Player - Full Width, Almost Full Screen */}
          <div className="mt-12 w-full">
            <VideoPlayer />
          </div>
                </div>
      </section>

      {/* Dashboard Section */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
      <DashboardSection />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <TestimonialsSection />
      </Suspense>

      {/* The Future Standard for Anonymous Value Transfer */}
      <section className="py-24">
        <div className="mx-auto px-3 lg:px-4" style={{ maxWidth: '98%' }}>
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="h-medium">
              The Future Standard for Anonymous Value Transfer
            </h2>
          </div>

          <div className="f-grid mx-auto">
            {/* Development Block */}
            <Link href="/develop" className="f-grid-card components group cursor-pointer">
              <div className="f-card__text">
                <ArrowIcon />
                <h4 className="h-small">Development</h4>
                <div className="f-card__paragraph">
                  <p className="p-small text-white/55">
                    The development of Xcoin and its supporting infrastructure is underway. Much of it is pioneering work, because we are building an entirely new, privacy-first, censorship-resistant, quantum-proof financial ecosystem. This is the new future standard for anonymous value transfer. Discover the core technologies under development.
                  </p>
                </div>
              </div>
              {/* Development Images Columns with Parallax */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl opacity-20">
                <div className="flex h-full gap-2">
                  {/* Column 1 */}
                  <DevelopmentImageColumn 
                    images={['group-security-dashboard.png', 'SAsP6Lv.png', 'matrix.webp', 'php.jpg', 'programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg']}
                    parallaxStart={0}
                    parallaxEnd={-45}
                    scrub={1.25}
                  />
                  {/* Column 2 */}
                  <DevelopmentImageColumn 
                    images={['HD-wallpaper-coding-game-development-csharp-unity-technology.jpg', 'HD-wallpaper-programming-coding-language-hi-tech-and-background-den-code-programmer.jpg', 'images-1.jpg', 'images-2.jpg', 'images.jpg']}
                    parallaxStart={0}
                    parallaxEnd={-40}
                    scrub={1.5}
                  />
                  {/* Column 3 */}
                  <DevelopmentImageColumn 
                    images={['Is-Python-good-for-software-development.avif', 'IT_Engineer_Salary.avif', 'premium_photo-1720287601920-ee8c503af775.jpg', 'software-development-lifecycle-1024x682-1.webp', 'software-development-specialist.jpg']}
                    parallaxStart={0}
                    parallaxEnd={-30}
                    scrub={1.75}
                  />
                  {/* Column 4 */}
                  <DevelopmentImageColumn 
                    images={['Top-10-Blockchain-Development-Tools-For-Startups.jpg', 'top-12-cryptocurrency-tokens-by-600nw-2300861397.webp', 'Top-6-Software-Development-Methodologies.jpg', 'top-blockchain-development-companies-main.jpg', 'Comparing-10-Different-Blockchain-Development-Platforms.png']}
                    parallaxStart={0}
                    parallaxEnd={-20}
                    scrub={2}
                  />
                </div>
              </div>
            </Link>

            {/* Discover the Vision Behind Xcoin Block */}
            <Link href="/about" className="f-grid-card video group cursor-pointer">
              <div className="f-card__text">
                <ArrowIcon />
                <h4 className="h-small">
                  <span className="hidden md:inline">Discover the </span>
                  <span className="md:hidden">The </span>
                  Vision Behind Xcoin
                </h4>
                <div className="md:pr-20">
                  <p className="p-small text-white/55">
                    Xcoin is more than just a cryptocurrency. It is a movement to reclaim privacy, challenge surveillance, and reinvent digital finance from the ground up. Our whitepapers reveal the foundation of this mission. Dive into the cryptography, architecture, economic model, and governance framework that set Xcoin apart from Bitcoin, Ethereum, and Monero.
                    <span className="hidden md:inline">
                      <br/>
                      <br/>
                      Whether you are a developer, investor, researcher, or privacy advocate, these documents offer a clear blueprint for a more private, decentralized, and equitable financial future.
                </span>
              </p>
                </div>
              </div>
              {/* Browser Window Container */}
              <div className="f-grid__vid-wrap flex-1 w-full relative mt-auto">
                {/* Browser Window Controls - Three Dots */}
                <div className="system-overlay">
                  <div className="system-overlay__dot"></div>
                  <div className="system-overlay__dot" style={{ opacity: 0.55 }}></div>
                  <div className="system-overlay__dot" style={{ opacity: 0.25 }}></div>
                </div>
                {/* Matrix Animation Container */}
                <div className="vimeo-wrap w-full h-full relative">
                  <MatrixAnimation />
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 backdrop-blur-[1px]" />
                </div>
              </div>
            </Link>

            {/* Xcoin Community Block */}
            <CommunityImagesCard />

            {/* Use Cases Block */}
            <Link href="/use" className="f-grid-card snippets group cursor-pointer">
              <div className="f-card__text">
                <ArrowIcon />
                <h4 className="h-small">Use Cases</h4>
                <div className="f-card__paragraph">
                  <p className="p-small text-white/55">
                    Let's be honest: Xcoin doesn't exist yet. Not as a wallet. Not as a network. Not as something you can use today. It's still in development, being tested, hardened, prepared. So no, there are no live use cases. Not yet. But that's not the full truth.
                  </p>
                </div>
              </div>
              <div className="f-grid__snippet relative rounded-3xl overflow-hidden flex-1 min-h-0">
                <img 
                  src="/img/xcoin_grid/use-cases.jpeg" 
                  alt="Use Cases" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  style={{ maxHeight: '12em' }}
                  onError={(e) => {
                    // Image failed to load - silently handle
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>
            </Link>

            {/* Quantum-Resistant Block */}
            <div className="f-grid-card icons group cursor-pointer relative">
              <Link href="/xcoin_grid/quantum-safe" className="absolute inset-0 z-10" title="Quantum-Resistant" />
              <ArrowIcon className="z-20" />
              
              {/* Crypto Icons Grid with Parallax - Top Section */}
              <div className="f-grid__icons relative mb-6 flex-1 min-h-0" style={{ marginTop: '-1em', display: 'flex', flexFlow: 'column', gap: '1em', justifyContent: 'flex-start', alignItems: 'center', perspective: '1000px' }}>
                {/* Top Row with Parallax */}
                <div className="flex justify-center">
                  <QuantumIconsRow 
                    icons={['trx', 'bch', 'xcoin', 'doge']} 
                    parallaxStart={25} 
                    parallaxEnd={-10}
                    scrub={1}
                  />
                </div>
                {/* Bottom Row with Parallax */}
                <div className="flex justify-center">
                  <QuantumIconsRow 
                    icons={['sol', 'eth', 'btc', 'xmr', 'zec', 'dash']} 
                    parallaxStart={25} 
                    parallaxEnd={-30}
                    scrub={1}
                  />
                </div>
              </div>
              
              {/* Text Section - Bottom */}
              <div className="f-card__text relative z-0">
                <h4 className="h-small">Quantum-Resistant</h4>
                <div className="f-card__paragraph">
                  <p className="p-small text-white/55">
                    Most coins aren't prepared for quantum threats. Some are exploring upgrades. Xcoin doesn't need to, because it is built from the ground up with post-quantum cryptography. No fallback algorithms. No temporary fixes. Quantum safety isn't an add-on; it is the foundation.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Card */}
            <div className="f-grid-card full end">
              <p className="p-small text-white/55 opacity-70">And more is coming...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crowdfunding & DAO Section - Combined */}
      <CrowdfundingDAOSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Privacy is Power Section */}
      <PrivacyPowerSection />
    </>
  )
}

function PrivacyPowerSection() {
  return (
    <section className="relative py-12">
      <div className="absolute top-0 left-0 right-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-20" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="relative">
            <img 
              src="/img/xcoin.svg" 
              alt="Xcoin logo" 
              loading="lazy" 
              decoding="async" 
              className="w-32 h-32 animate-spin-slow object-contain"
              style={{ animationDuration: '10000ms' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-500 rounded-lg blur-md opacity-30" aria-hidden="true" />
          </div>
          <h2 className="h-medium md:h-large uppercase text-center">Privacy is Power.</h2>
        </div>
      </div>
    </section>
  )
}

function CrowdfundingDAOSection() {
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredTab, setHoveredTab] = useState<number | null>(null)
  const rockRef = useRef<HTMLDivElement>(null)
  const [rockTransform, setRockTransform] = useState(0)
  
  // Calculate position for sliding background - optimized with useMemo
  const backgroundPosition = useMemo(() => {
    return (hoveredTab !== null && hoveredTab !== activeTab) ? hoveredTab : activeTab
  }, [hoveredTab, activeTab])

  // Parallax scroll animation for rocks - optimized with useCallback
  const handleScroll = useCallback(() => {
    if (!rockRef.current) return
    
    const rect = rockRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const elementTop = rect.top
    const elementHeight = rect.height
    
    // Calculate scroll progress (0 to 1)
    const scrollProgress = Math.max(0, Math.min(1, 
      (windowHeight - elementTop) / (windowHeight + elementHeight)
    ))

    // Parallax movement - move slower than scroll (subtle effect)
    const value = scrollProgress * 30 - 15 // Move from -15% to 15%
    setRockTransform(value)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const tabs = [
    {
      id: 'members',
      label: 'Members',
      title: 'Members Own CREO',
      content: 'Want more than just access? Become an active part of the XXX DAO, with real influence, voting power on what comes next and Xcoins at a guaranteed low rate. Ready to unlock your role?',
      buttonText: 'Explore Members',
      buttonHref: '/community#members',
      video: '/vid/dao1.mp4',
    },
    {
      id: 'validators',
      label: 'Validators',
      title: 'Becoming a Validator',
      content: 'Want to help secure the network and get rewarded for it? Becoming a Validator means joining the core of the Xcoin ecosystem. Curious how it works? Let\'s break it down.',
      buttonText: 'More About Validators',
      buttonHref: '/community#validators',
      video: '/vid/dao2.mp4',
    },
    {
      id: 'investors',
      label: 'Investors',
      title: 'Funding the Future',
      content: 'Want more than just returns? Investing in Xcoin means early access to a fast-growing ecosystem, with real utility, real adoption, and real upside.\n\nYour capital doesn\'t fund a corporation. It powers a movement. Your support fuels privacy, autonomy, and a new digital future.',
      buttonText: 'Explore Investors',
      buttonHref: '/community#investors',
      video: '/vid/dao3.mp4',
    },
  ]

  return (
    <section className="relative py-24 pb-40 overflow-visible group">
      {/* Background Rocks - spans both sections */}
      <div 
        ref={rockRef}
        data-parallax="trigger" 
        className="rock-wrap absolute inset-0 top-[20%] z-0 w-full pointer-events-none"
      >
        <div 
          className="rock-wrap-image-container"
          style={{ transform: `translateY(${rockTransform}%)` }}
        >
          <img 
            src="/img/bg-rocks.avif" 
            alt="Decorative moody background of charcoal" 
            className="rock-wrap-image opacity-80"
            loading="lazy"
          />
          <div className="rock-wrap-overlay" />
        </div>
      </div>
      
      {/* Crowdfunding Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Text Container */}
        <div className="text-center mb-16">
          <div className="mx-auto max-w-4xl">
            {/* Heading with proper spacing */}
            <div className="relative mb-16" style={{ minHeight: '4rem' }}>
              <h2 className="h-large transition-opacity duration-500 group-hover:opacity-0">
                Crowdfunding and how it works
              </h2>
              <h2 className="h-large absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Explore the perks of joining the community
            </h2>
          </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link 
                href="/crowdfunding" 
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 text-black"
              >
                <div className="absolute inset-0 bg-[#93c5fd] rounded-lg -z-10" />
                <span className="p-reg text-black">Explore Crowdfunding</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <rect width="7" height="7" x="3" y="3" rx="1"/>
                  <rect width="7" height="7" x="14" y="3" rx="1"/>
                  <rect width="7" height="7" x="14" y="14" rx="1"/>
                  <rect width="7" height="7" x="3" y="14" rx="1"/>
                </svg>
              </Link>
              <Link 
                href="/xcoin_grid/xcoin-better" 
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 hover:border-[#93c5fd]/50 transition-all duration-300 text-white"
              >
                <span className="p-reg text-white">Why is Xcoin better?</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider with Videos and Logo - Animated */}
        <DividerAnimation />
      </div>

      {/* DAO Tabs Content */}
      <div className="mx-auto max-w-[1920px] px-6 lg:px-8 lg:pl-32 relative z-10 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr] gap-12 relative">
          {/* Left Column - Tabs and Content */}
          <div className="flex flex-col lg:max-w-[50%] dao-tab-container">
            <div className="dao-tab-container-top mb-8">
              <h3 className="text-[4.5em] font-medium leading-none mb-0.5" style={{ fontFamily: '"PP Neue Montreal", Arial, sans-serif' }}>XXX DAO</h3>
              <span className="text-xl text-white relative -top-1.5 block">(Decentralized Autonomous Organization)</span>
              
              {/* Tab Buttons - matching XCoin_Basti */}
              <div className="dao-filter-bar mt-6 mb-8 relative">
                {/* Sliding background - moves between tabs */}
                <div 
                  className="dao-tab-sliding-bg"
                  style={{
                    transform: `translateX(${backgroundPosition * 100}%)`,
                  }}
                />
                {tabs.map((tab, index) => {
                  const isActive = activeTab === index
                  const isHovered = hoveredTab === index
                  const showBorderOnly = isActive && hoveredTab !== null && !isHovered
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(index)}
                      className={`dao-filter-button ${isActive ? 'active' : ''}`}
                      onMouseEnter={() => setHoveredTab(index)}
                      onMouseLeave={() => setHoveredTab(null)}
                    >
                      <div className="p-med text-white relative z-10">{tab.label}</div>
                      {showBorderOnly && <div className="dao-tab-button-border-only" />}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Tab Content */}
            <div className="dao-tab-content-wrap flex-1">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className={`dao-tab-content-item ${
                    activeTab === index ? 'active' : ''
                  }`}
                >
                  <h4 className="h-small mb-4">{tab.title}</h4>
                  <p className="p-reg opacity-70 whitespace-pre-line">
                    {tab.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Tab Buttons */}
            <div className="dao-tab-button-wrap mt-4">
              {tabs.map((tab, index) => {
                const isActive = activeTab === index
                return (
                  <Link
                    key={tab.id}
                    href={tab.buttonHref}
                    className={`dao-button group relative items-center justify-center rounded-lg transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="dao-button-bg absolute inset-0 bg-[#93c5fd] rounded-lg -z-10 transition-transform duration-300" />
                    <span className="p-reg text-black relative z-10">{tab.buttonText}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Right Column - Video - Extends beyond screen */}
          <div className="relative h-[750px] lg:h-[800px] lg:absolute lg:left-1/2 lg:right-0 lg:top-0 lg:w-[50vw]">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeTab === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="w-full h-full rounded-lg overflow-hidden" style={{
                  boxShadow: '0 0 20px rgba(147, 197, 253, 0.3), 0 0 40px rgba(147, 197, 253, 0.2), inset 0 0 20px rgba(147, 197, 253, 0.1)'
                }}>
                  <video
                    src={tab.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
  )
}

function PricingSection() {
  const [showOverlay, setShowOverlay] = useState(false)

  return (
    <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="h-medium mb-6">This is your early access opportunity.</h2>
            <p className="p-reg text-white opacity-70">
              This is not a promo. This is not a presale for whales. This is your direct path to owning a part of the next-generation financial platform, before it launches to the world.
            </p>
          </div>
          </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Left Card - Main Price */}
          <div className="relative aspect-square rounded-2xl border border-border bg-background/50 p-12 lg:p-16 flex flex-col justify-between">
            <div className="flex flex-col items-center gap-9">
              {/* Price Header */}
              <div className="w-full">
                <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
                  <h3 className="h-price leading-none whitespace-nowrap">€100</h3>
                  <span className="h-price leading-none">/</span>
                  <div className="h-price leading-none whitespace-nowrap">XXX Token</div>
              </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-25" />
                  <div className="eyebrow">Fixed minimum price at launch, guaranteed</div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-25" />
                </div>
              </div>

              {/* Description */}
              <p className="p-small text-muted-foreground opacity-70 text-left w-full">
                The protocol is offering a one-time release of XXX Tokens. 1 XXX Token = 10 Xcoins. In addition every XXX Token grants you exclusive access to the DAO, including governance rights, voting power, proposal access, and participation in key community decisions.
              </p>

              {/* Features */}
              <div className="space-y-4 w-full text-left">
                {[
                  { title: 'Costs €100 per XXX Token', desc: 'one-time investment for 10 Xcoins' },
                  { title: 'Redeemable for 10 Xcoins at launch', desc: 'fixed exchange rate guaranteed' },
                  { title: 'Guaranteed entry price of €10 per Xcoin', desc: 'no price volatility risk before launch' },
                  { title: 'Delivered instantly to your wallet', desc: 'automatic and secure token transfer' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#1a1a1a] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <p className="p-reg font-medium mb-1">{feature.title}</p>
                      <p className="p-small opacity-70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="relative mt-8">
              <Link
                href="#"
                className="group relative inline-flex items-center justify-center w-full px-6 py-3 rounded-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[#93c5fd] rounded-lg -z-10 group-hover:bg-[#93c5fd]/90 transition-colors" />
                <span className="p-reg text-black">Get XXX Tokens now</span>
              </Link>
              <div className="absolute inset-0 bg-black/70 text-white border border-white/10 px-4 py-2 shadow-xl text-center space-y-1 cursor-not-allowed flex flex-col items-center justify-center rounded-lg">
                <span className="text-[10px] uppercase tracking-widest opacity-80">Available from</span>
                <span className="block font-semibold text-sm">XXXXXXX XX, 2025</span>
              </div>
              <p className="text-sm opacity-50 mt-5 text-center">This is the only round. No KYC. No second chances.</p>
            </div>
          </div>

          {/* Right Card - Orange Card with Overlay */}
          <div className="relative aspect-square rounded-2xl border border-border bg-[#93c5fd] p-12 lg:p-16 flex flex-col justify-between text-black">
            {/* Tag Button */}
            <button
              onClick={() => setShowOverlay(!showOverlay)}
              className="absolute top-10 left-10 z-30 flex items-center gap-2 bg-black text-white rounded-md px-2 py-1"
            >
              <div className="eyebrow text-white">explore benefits</div>
              <div className="eyebrow circle text-white">?</div>
            </button>

            {/* Main Content */}
            <div className={`flex flex-col gap-14 text-left transition-opacity duration-300 ${showOverlay ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
              <h4 className="h-small mt-8">Start Now. It's This Simple:</h4>
              
              <div className="space-y-4">
                {[
                  { num: '1', title: 'Choose your investment amount', desc: '(starting at €100 for 10 Xcoins)' },
                  { num: '2', title: 'Send crypto to the indicated wallet address' },
                  { num: '3', title: 'Receive XXX Tokens to your wallet' },
                  { num: '4', title: 'Done. You\'re in.' },
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#1a1a1a] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                      {step.num}
                    </div>
                    <div>
                      <p className="p-reg font-medium mb-1">{step.title}</p>
                      {step.desc && <p className="p-small opacity-70">{step.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <p className="p-small">
                No KYC. No account. No name needed.<br/>
                Just you, your wallet, and your stake in the future of private finance
              </p>

              <p className="p-small mb-20">
                <span className="block h-small mb-3">Ready to Act?</span>
                This sale only exists for one reason: to give you a fair shot at something most people will only hear about when it's too late. First-come, first-served. When it's gone — it's gone. When Xcoin hits exchanges, you'll either be watching… or already holding. The choice is yours.
              </p>
            </div>

            {/* Overlay Content */}
            <div className={`absolute inset-0 rounded-2xl bg-[#93c5fd] p-12 lg:p-16 flex flex-col gap-9 text-left transition-opacity duration-300 ${showOverlay ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <button
                onClick={() => setShowOverlay(false)}
                className="absolute top-10 left-10 z-30 bg-black text-white rounded-md w-6 h-6 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none" className="w-full h-full">
                  <path d="M7.02441 0.2C7.02441 0.0895426 7.11396 0 7.22441 0H8.57441C8.68487 0 8.77441 0.0895431 8.77441 0.2V13.8C8.77441 13.9105 8.68487 14 8.57441 14H7.22441C7.11396 14 7.02441 13.9105 7.02441 13.8V0.2Z" fill="currentColor" />
                  <path d="M14.6994 6.125C14.8099 6.125 14.8994 6.21454 14.8994 6.325V7.675C14.8994 7.78546 14.8099 7.875 14.6994 7.875L1.09941 7.875C0.988957 7.875 0.899414 7.78546 0.899414 6.325C0.899414 6.21454 0.988957 6.125 1.09941 6.125L14.6994 6.125Z" fill="currentColor" />
                </svg>
              </button>

              <h4 className="h-small mt-8">Why This Moment Matters.</h4>
              <p className="p-small mb-5">
                Ask yourself: What if you could go back in time and buy Bitcoin before anyone knew its name? What if you had a second chance... but this time, the technology is stronger, the mission is clearer, and the playing field is finally fair?<br/><br/>
                This is your moment to decide again, only now with a better blueprint.<br/>
                Xcoin offers:
              </p>

              <div className="space-y-4 pb-20">
                {[
                  { title: 'True privacy', desc: 'your activity, identity, and assets are invisible by default' },
                  { title: 'Quantum-proof security', desc: 'immune to future supercomputer attacks' },
                  { title: 'No mining, no inflation', desc: 'energy-efficient and economically sound' },
                  { title: 'Massive scalability', desc: '— 10,000+ transactions per second' },
                  { title: 'DAO-led', desc: 'no central control, no backdoors, no founders with veto power' },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#1a1a1a] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
          </div>
                    <div>
                      <p className="p-reg font-medium mb-1">{benefit.title}</p>
                      <p className="p-small opacity-70">{benefit.desc}</p>
        </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="relative">
              <div className="bg-black/90 backdrop-blur-xl text-white border border-white/10 px-4 py-2 shadow-xl text-center space-y-1 cursor-not-allowed">
                <span className="text-[10px] uppercase tracking-widest opacity-80">Available from</span>
                <span className="block font-semibold text-sm">XXXXXXX XX, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card - Why You'll Want to Be First */}
        <div className="rounded-2xl border border-border bg-background/50 p-12 lg:p-16">
          <div className="max-w-3xl mx-auto">
            <h4 className="h-small mb-6">Why You'll Want to Be First.</h4>
            <p className="p-reg text-muted-foreground opacity-70">
              After launch, there will be no fixed prices, no guarantees — only raw market forces. The XXX Tokens sale ends. The €10 price tag disappears. Global demand begins. Just look at history: Bitcoin launched under €1. Ethereum at a few euros. Today? Tens of thousands. Do you really think a quantum-secure, private-by-default upgrade to Bitcoin will still go for €10 once the world catches on? Probably not. And by then, your chance will be long gone.
            </p>
            </div>
          </div>
        </div>
      </section>
  )
}
