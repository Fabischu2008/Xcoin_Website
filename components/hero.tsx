"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Coins, Rocket } from "lucide-react"

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

    // Ensure seamless looping
    const handleTimeUpdate = () => {
      // If video is near the end (within 0.1 seconds), restart it
      if (video.duration && video.currentTime >= video.duration - 0.1) {
        video.currentTime = 0
      }
    }
    video.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      observer.disconnect()
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
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
          autoPlay
          preload="auto"
          className="hero-video"
          style={{ opacity: isLoaded ? 1 : 0 }}
        >
          <source src="/vid/city-1.mp4" type="video/mp4" />
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

            {/* Desktop Buttons - XCoin_Basti Style */}
            <div 
              className="hidden md:flex flex-col sm:flex-row gap-2 hero-buttons-container"
            >
              <Link
                href="/use"
                className="hero-button hero-button-primary"
                aria-label="How to use"
              >
                <div className="button-inner-row">
                  <p className="p-reg">How to use</p>
                  <Coins className="w-6 h-6" />
                </div>
                <div className="button-bg"></div>
              </Link>
              <Link
                href="/overview"
                className="hero-button hero-button-secondary"
                aria-label="Explore Xcoin"
              >
                <div className="button-inner-row">
                  <p className="p-reg">Explore Xcoin</p>
                  <Rocket className="w-6 h-6" />
                </div>
                <div className="button-bg is--secondary"></div>
              </Link>
            </div>

            {/* Descriptive Text */}
            <p className="hero-description">
              Xcoin isn't just another coin. It's a next-generation privacy cryptocurrency designed for total anonymity, quantum resistance, and real-world utility. The Xcoin blockchain is built on a unique foundation of cutting-edge innovations, including quantum-safe cryptography, zero-knowledge proofs, and breakthrough privacy technology. Discover the cryptographic building blocks that make Xcoin unstoppable.
            </p>
          </div>
        </div>

        {/* Mobile Buttons - XCoin_Basti Style */}
        <div className="md:hidden flex flex-col gap-4 mt-6 w-full items-center px-4">
          <Link
            href="/use"
            className="hero-button hero-button-primary w-full max-w-md mx-auto"
            aria-label="How to use"
          >
            <div className="button-inner-row">
              <p className="p-reg">How to use</p>
              <Coins className="w-6 h-6" />
            </div>
            <div className="button-bg"></div>
          </Link>
          <Link
            href="/overview"
            className="hero-button hero-button-secondary w-full max-w-md mx-auto"
            aria-label="Explore Xcoin"
          >
            <div className="button-inner-row">
              <p className="p-reg">Explore Xcoin</p>
              <Rocket className="w-6 h-6" />
            </div>
            <div className="button-bg is--secondary"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
