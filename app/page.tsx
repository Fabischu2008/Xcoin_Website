"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Hero from "@/components/hero"
import DashboardSection from "@/components/dashboard-section"
import TestimonialsSection from "@/components/testimonials-section"
import { useParallax } from "@/lib/useParallax"

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
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
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

  return (
    <div 
      className="mt-12 w-full cursor-pointer group relative flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      {/* Video Background with Hover Effect - Like XCoin_Basti */}
      <div 
        className={`relative w-full max-w-[95%] aspect-[1.6] rounded-2xl overflow-hidden transition-all duration-300 ${
          isHovered ? 'bg-white/10' : 'bg-white/5'
        }`}
        style={{
          backdropFilter: 'blur(4em)',
          WebkitBackdropFilter: 'blur(4em)',
        }}
      >
        <video
          ref={videoRef}
          controls={false}
          playsInline
          preload="none"
          poster="/xcoin-vid-poster.jpg"
          className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        >
          <source src="/xcoin-vid-compressed.mp4" type="video/mp4" />
        </video>
        
        {/* Play Button Overlay (when paused) - Like XCoin_Basti */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`video-play-button-modern ${isHovered ? 'play-button-hover' : ''}`}>
              <div className="play-button-inner">
                {/* Pulse Animation */}
                <div className={`play-button-pulse ${isHovered ? 'play-button-pulse-blue' : ''}`}></div>
                {/* Play Icon */}
                <div className={`play-button-icon ${isHovered ? 'play-button-icon-blue' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="6,4 20,12 6,20" fill="currentColor"></polygon>
                  </svg>
                </div>
                {/* Glow Effect */}
                <div className={`play-button-glow ${isHovered ? 'play-button-glow-blue' : ''}`}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
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
        <div key={index} className="relative aspect-square overflow-hidden rounded">
          <img 
            src={`/img/xcoin_grid/screens/${image}`}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
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
      const element = rowRef.current
      if (!element) return
      
      const rect = element.getBoundingClientRect()
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
      <DashboardSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* The Future Standard for Anonymous Value Transfer */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="h-medium">
              The Future Standard for Anonymous Value Transfer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Development Block */}
            <Link href="/develop" className="md:col-span-2 rounded-2xl border border-border bg-background p-8 lg:p-10 relative group cursor-pointer hover:border-accent/50 transition-all overflow-hidden h-[26em] flex flex-col">
              <div className="flex items-start justify-between mb-6 relative z-10">
                <h3 className="h-small">Development</h3>
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
                  className="text-accent opacity-0 -translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 z-10"
                >
                  <path d="M7 7h10v10"/>
                  <path d="M7 17 17 7"/>
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-muted-foreground p-small">
                  The development of Xcoin and its supporting infrastructure is underway. Much of it is pioneering work, because we are building an entirely new, privacy-first, censorship-resistant, quantum-proof financial ecosystem. This is the new future standard for anonymous value transfer. Discover the core technologies under development.
                </p>
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
            <Link href="/about" className="md:col-span-2 rounded-2xl border border-border bg-background p-8 lg:p-10 relative group cursor-pointer hover:border-accent/50 transition-all overflow-hidden h-[26em] flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <h3 className="h-small">
                  <span className="hidden md:inline">Discover the </span>
                  <span className="md:hidden">The </span>
                  Vision Behind Xcoin
                </h3>
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
                  className="text-accent opacity-0 -translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 z-10"
                >
                  <path d="M7 7h10v10"/>
                  <path d="M7 17 17 7"/>
                </svg>
              </div>
              <div className="md:pr-20">
                <p className="text-muted-foreground p-small mb-4">
                  Xcoin is more than just a cryptocurrency. It is a movement to reclaim privacy, challenge surveillance, and reinvent digital finance from the ground up. Our whitepapers reveal the foundation of this mission. Dive into the cryptography, architecture, economic model, and governance framework that set Xcoin apart from Bitcoin, Ethereum, and Monero.
                </p>
                <p className="text-muted-foreground p-small hidden md:block">
                  Whether you are a developer, investor, researcher, or privacy advocate, these documents offer a clear blueprint for a more private, decentralized, and equitable financial future.
                </p>
              </div>
              {/* Matrix Animation Container */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <MatrixAnimation />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 backdrop-blur-[1px]" />
              </div>
            </Link>

            {/* Xcoin Community Block */}
            <div className="md:col-span-1 rounded-2xl border border-border bg-background p-6 relative group h-[26em] flex flex-col">
              {/* Community Images Slider - Like XCoin_Basti */}
              <div className="flex gap-2 overflow-x-auto pb-4 -mx-6 px-6 mb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {[
                  { src: "/img/xcoin_grid/community_1.jpeg", label: "Brainstorming" },
                  { src: "/img/xcoin_grid/community_2.jpeg", label: "Privacy, freedom, & independence" },
                  { src: "/img/xcoin_grid/community_3.jpeg", label: "Planning the Future" },
                  { src: "/img/xcoin_grid/community_4.jpeg", label: "Global Decentralized Community" },
                ].map((item, index) => (
                  <div key={index} className="flex-shrink-0 relative">
                    <div className="relative w-[70px] aspect-square rounded overflow-hidden border border-border bg-[#0e0e0e]">
                      <img 
                        src={item.src} 
                        alt={item.label}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          console.error('Image failed to load:', item.src);
                        }}
                      />
                    </div>
                    <div className="mt-2 w-[70px]">
                      <div className="flex items-center justify-between">
                        <p className="p-small text-muted-foreground leading-tight flex-1">{item.label}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground flex-shrink-0 ml-1">
                          <path d="M10 17L15 12"/>
                          <path d="M10 7L15 12"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <h3 className="h-small mb-3">Xcoin Community</h3>
                <p className="text-muted-foreground p-small">
                  Curious about what it means to be part of something different? You don't "sign up" in the traditional sense. You don't become a member of a club or platform. If you join, you become part of something bigger: a global decentralized community built for people who value privacy, freedom, and independence.
                </p>
              </div>
            </div>

            {/* Use Cases Block - Breiter wie im Original */}
            <Link href="/use" className="md:col-span-2 rounded-2xl border border-border bg-background p-8 lg:p-10 relative group cursor-pointer hover:border-accent/50 transition-all overflow-hidden h-[26em] flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <h3 className="h-small">Use Cases</h3>
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
                  className="text-accent opacity-0 -translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 right-0 z-10"
                >
                  <path d="M7 7h10v10"/>
                  <path d="M7 17 17 7"/>
                </svg>
              </div>
              <p className="text-muted-foreground p-small mb-6">
                Let's be honest: Xcoin doesn't exist yet. Not as a wallet. Not as a network. Not as something you can use today. It's still in development, being tested, hardened, prepared. So no, there are no live use cases. Not yet. But that's not the full truth.
              </p>
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-0 mx-auto w-[calc(100%-2rem)]">
                <img 
                  src="/img/xcoin_grid/use-cases.jpeg" 
                  alt="Use Cases" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Use cases image failed to load');
                  }}
                />
              </div>
            </Link>

            {/* Quantum-Resistant Block - Like XCoin_Basti */}
            <div className="md:col-span-1 lg:col-span-1 rounded-2xl border border-border bg-background p-8 lg:p-10 relative group h-[26em] flex flex-col">
              <Link href="/xcoin_grid/quantum-safe" className="absolute inset-0 z-10" title="Quantum-Resistant" />
              
              {/* Crypto Icons Grid with Parallax - Top Section - Like XCoin_Basti */}
              <div className="relative mb-6 flex-1 min-h-0 -mt-4" style={{ perspective: '1000px' }}>
                <div className="relative h-full overflow-hidden flex flex-col gap-4">
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
              </div>
              
              {/* Text Section - Bottom */}
              <div className="relative z-0 mt-auto">
                <h3 className="h-small mb-3">Quantum-Resistant</h3>
                <p className="text-muted-foreground p-small">
                  Most coins aren't prepared for quantum threats. Some are exploring upgrades. Xcoin doesn't need to, because it is built from the ground up with post-quantum cryptography. No fallback algorithms. No temporary fixes. Quantum safety isn't an add-on; it is the foundation.
                </p>
              </div>
            </div>

            {/* Final Card */}
            <div className="md:col-span-2 lg:col-span-4 rounded-2xl border border-border bg-background p-8 lg:p-10 flex items-center justify-center">
              <p className="text-muted-foreground p-small opacity-70">And more is coming...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
