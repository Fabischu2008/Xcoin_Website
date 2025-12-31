"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Eye, Rocket } from "lucide-react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Optimiertes Video-Loading mit Intersection Observer
    const video = videoRef.current
    if (!video) return

    // Skip video on mobile (detected via CSS media query)
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (isMobile) {
      setIsLoaded(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.load()
            const handleLoadedMetadata = () => {
              setIsLoaded(true)
              video.play().catch(() => {})
            }
            video.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true })
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero-section">
      {/* Video Background */}
      <div className="hero-video-container">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          className="hero-video"
          style={{ opacity: isLoaded ? 1 : 0 }}
        >
          <source src="/vid/city-1.mp4" type="video/mp4" />
          <source src="/1208-compressed.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-gradient" />
      </div>

      <div className="hero-content">
        <div className="hero-inner">
          {/* Feature Lists - Desktop only */}
          <div className="hero-features">
            <div className="hero-feature-column">
              <div className="hero-feature-item">Privacy by Default</div>
              <div className="hero-feature-item">Fully Hidden Transactions</div>
              <div className="hero-feature-item">10,000+ TPS</div>
              <div className="hero-feature-item">View Keys for Audits</div>
              <div className="hero-feature-item">Energy-Efficient by Design</div>
              <div className="hero-feature-item">Ring Signatures</div>
            </div>
            <div className="hero-feature-column">
              <div className="hero-feature-item">Quantum-Safe Security</div>
              <div className="hero-feature-item">Fixed Supply: 21M Coins</div>
              <div className="hero-feature-item">DAO-Governed</div>
              <div className="hero-feature-item">Unlinkable Outputs</div>
              <div className="hero-feature-item">Untraceable Transactions</div>
              <div className="hero-feature-item">AES-512 Cascade Encryption</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="hero-main">
            <h1 className="hero-title">
              The Future of Financial Privacy Starts Here
            </h1>

            {/* Desktop Buttons - Original inline styles */}
            <div 
              className="hidden md:flex flex-col sm:flex-row"
              style={{
                gap: 'clamp(0.5rem, 0.8vw, 1rem)',
                marginTop: 'clamp(1rem, 1.5vh, 1.5rem)',
              }}
            >
              <Link
                href="/use"
                className="relative flex items-center justify-center gap-2 rounded font-semibold text-black transition-all overflow-hidden"
                style={{
                  paddingLeft: 'clamp(1.5rem, 2vw, 3rem)',
                  paddingRight: 'clamp(1.5rem, 2vw, 3rem)',
                  paddingTop: 'clamp(0.875rem, 1.3vh, 1.375rem)',
                  paddingBottom: 'clamp(0.875rem, 1.3vh, 1.375rem)',
                  fontSize: 'clamp(0.9375rem, 1.2vw, 1.1875rem)',
                }}
              >
                <div className="flex items-center gap-2 relative z-10">
                  <Eye style={{ width: 'clamp(1.25rem, 1.5vw, 1.625rem)', height: 'clamp(1.25rem, 1.5vw, 1.625rem)' }} />
                  <span>How to use</span>
                </div>
                <div className="absolute inset-0 bg-[#93c5fd] rounded -z-10 transition-transform duration-300 hover:scale-95" />
              </Link>
              <Link
                href="/overview"
                className="relative flex items-center justify-center gap-2 rounded font-semibold text-white transition-all overflow-hidden backdrop-blur-sm"
                style={{
                  paddingLeft: 'clamp(1.5rem, 2vw, 3rem)',
                  paddingRight: 'clamp(1.5rem, 2vw, 3rem)',
                  paddingTop: 'clamp(0.875rem, 1.3vh, 1.375rem)',
                  paddingBottom: 'clamp(0.875rem, 1.3vh, 1.375rem)',
                  fontSize: 'clamp(0.9375rem, 1.2vw, 1.1875rem)',
                }}
              >
                <div className="flex items-center gap-2 relative z-10">
                  <Rocket style={{ width: 'clamp(1.25rem, 1.5vw, 1.625rem)', height: 'clamp(1.25rem, 1.5vw, 1.625rem)' }} />
                  <span>Explore Xcoin</span>
                </div>
                <div className="absolute inset-0 bg-[#efeeec26] rounded -z-10 transition-transform duration-300 hover:scale-95 backdrop-blur-md" />
              </Link>
            </div>

            {/* Descriptive Text */}
            <p className="hero-description">
              Xcoin isn't just another coin. It's a next-generation privacy cryptocurrency designed for total anonymity, quantum resistance, and real-world utility. The Xcoin blockchain is built on a unique foundation of cutting-edge innovations, including quantum-safe cryptography, zero-knowledge proofs, and breakthrough privacy technology. Discover the cryptographic building blocks that make Xcoin unstoppable.
            </p>
          </div>
        </div>

        {/* Mobile Buttons - Original inline styles */}
        <div className="md:hidden flex flex-col gap-4 mt-6 w-full">
          <Link
            href="/use"
            className="relative flex items-center justify-center gap-2 rounded px-6 py-3 p-small font-semibold text-black transition-all overflow-hidden w-full"
          >
            <div className="flex items-center gap-2 relative z-10">
              <Eye className="h-4 w-4" />
              <span>How to use</span>
            </div>
            <div className="absolute inset-0 bg-[#93c5fd] rounded -z-10 transition-transform duration-300 hover:scale-95" />
          </Link>
          <Link
            href="/overview"
            className="relative flex items-center justify-center gap-2 rounded px-6 py-3 p-small font-semibold text-white transition-all overflow-hidden backdrop-blur-sm w-full"
          >
            <div className="flex items-center gap-2 relative z-10">
              <Rocket className="h-4 w-4" />
              <span>Explore Xcoin</span>
            </div>
            <div className="absolute inset-0 bg-[#efeeec26] rounded -z-10 transition-transform duration-300 hover:scale-95 backdrop-blur-md" />
          </Link>
        </div>
      </div>
    </section>
  )
}
