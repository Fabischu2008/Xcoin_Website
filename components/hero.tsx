"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Eye, Rocket } from "lucide-react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // On mobile, skip video loading for faster initial load
    if (isMobile) {
      setIsLoaded(true)
      return
    }

    // Preload video metadata only on desktop
    if (videoRef.current && !isMobile) {
      // Load only metadata, not the full video
      videoRef.current.load()
      
      // Wait for metadata to be ready
      const handleLoadedMetadata = () => {
        setIsLoaded(true)
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            // Autoplay might fail, that's okay
          })
        }
      }

      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata)
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata)
        }
      }
    }
  }, [isMobile])

  return (
    <section className="relative overflow-x-hidden min-h-screen flex items-center pt-20 pb-32 lg:pb-40">
      {/* Video Background - Desktop only, static background on mobile */}
      <div className="absolute inset-0 scale-105 pointer-events-none" style={{ zIndex: -1 }}>
        {!isMobile ? (
        <video
            ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
        >
          <source src="/vid/city-1.mp4" type="video/mp4" />
          <source src="/1208-compressed.mp4" type="video/mp4" />
        </video>
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        )}
        {/* Overlay für bessere Textlesbarkeit */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        {/* Blauer Gradient wie in Xcoin_Basti */}
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-300 to-blue-300 mix-blend-multiply pointer-events-none" />
      </div>

      <div 
        className="mx-auto w-full relative z-10"
        style={{
          maxWidth: 'clamp(90rem, 90vw, 120rem)',
          paddingLeft: 'clamp(1rem, 1.5vw, 3rem)',
          paddingRight: 'clamp(1rem, 1.5vw, 3rem)',
          paddingTop: 'clamp(3rem, 5vh, 6rem)',
          paddingBottom: 'clamp(3rem, 5vh, 6rem)',
        }}
      >
        <div className="home-hero__inner relative">
          {/* Top Row: Features and Title */}
          <div 
            className="flex flex-col md:flex-row items-start"
            style={{
              gap: 'clamp(2rem, 4vw, 4.5rem)',
            }}
          >
            {/* Left Column - Both Feature Lists */}
            <div 
              className="hidden md:flex flex-shrink-0"
              style={{
                gap: 'clamp(1rem, 1.2vw, 1.5rem)',
              }}
            >
              {/* Privacy Features */}
              <div style={{ width: 'clamp(14rem, 16vw, 18rem)' }}>
                <div className="text-gray-400 mb-0.5" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>Privacy by Default</div>
                <div className="text-gray-400 mb-0.5" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>Fully Hidden Transactions</div>
                <div className="text-gray-400 mb-0.5" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>10,000+ TPS</div>
                <div className="text-gray-400 mb-0.5" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>View Keys for Audits</div>
                <div className="text-gray-400 mb-0.5" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>Energy-Efficient by Design</div>
                <div className="text-gray-400" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>Ring Signatures</div>
              </div>
              {/* Security Features */}
              <div style={{ width: 'clamp(14rem, 16vw, 18rem)' }}>
                <div className="text-gray-400 mb-0.5" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>Quantum-Safe Security</div>
                <div className="text-gray-400 mb-0.5" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>Fixed Supply: 21M Coins</div>
                <div className="text-gray-400 mb-0.5" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>DAO-Governed</div>
                <div className="text-gray-400 mb-0.5" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>Unlinkable Outputs</div>
                <div className="text-gray-400 mb-0.5" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>Untraceable Transactions</div>
                <div className="text-gray-400" style={{ fontSize: 'clamp(0.95em, 1.1vw, 1.2em)' }}>AES-512 Cascade Encryption</div>
              </div>
            </div>

            {/* Right Column - Headline, Buttons and Text */}
            <div className="flex-1" style={{ maxWidth: 'clamp(22rem, 40vw, 46rem)' }}>
              <h1 
                className="h-display text-white"
                style={{ 
                  marginBottom: 'clamp(1rem, 1.5vh, 1.5rem)',
                  fontSize: 'clamp(3.325rem, 5.7vw, 6.175rem)',
                }}
              >
                The Future of Financial Privacy Starts Here
              </h1>

              {/* Buttons - Directly under Title - Only show on desktop */}
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

              {/* Bottom Descriptive Text - Directly under Buttons, left aligned and compact */}
              <div style={{ 
                marginTop: 'clamp(1.25rem, 2vh, 2rem)',
                maxWidth: 'clamp(18rem, 32vw, 28rem)',
              }}>
                <p 
                  className="text-white text-left leading-relaxed"
                  style={{ 
                    fontSize: 'clamp(0.95rem, 1.2vw, 1.4rem)',
                  }}
                >
                  Xcoin isn't just another coin. It's a next-generation privacy cryptocurrency designed for total anonymity, quantum resistance, and real-world utility. The Xcoin blockchain is built on a unique foundation of cutting-edge innovations, including quantum-safe cryptography, zero-knowledge proofs, and breakthrough privacy technology. Discover the cryptographic building blocks that make Xcoin unstoppable.
                </p>
              </div>
            </div>
          </div>


          {/* Buttons for Mobile - Only show on mobile, after text */}
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
      </div>
    </section>
  )
}
