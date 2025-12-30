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
    <section className="relative overflow-x-hidden min-h-screen flex items-center pt-20">
      {/* Video Background - Desktop only, static background on mobile */}
      <div className="absolute inset-0 scale-110 pointer-events-none" style={{ zIndex: -1 }}>
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-20 relative z-10">
        <div className="home-hero__inner relative">
          {/* Top Row: Features and Title */}
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            {/* Left Column - Both Feature Lists */}
            <div className="hidden md:flex flex-shrink-0 gap-6 -ml-4">
              {/* Privacy Features */}
              <div className="w-56">
                <div className="text-gray-400 p-reg">Privacy by Default</div>
                <div className="text-gray-400 p-reg">Fully Hidden Transactions</div>
                <div className="text-gray-400 p-reg">10,000+ TPS</div>
                <div className="text-gray-400 p-reg">View Keys for Audits</div>
                <div className="text-gray-400 p-reg">Energy-Efficient by Design</div>
                <div className="text-gray-400 p-reg">Ring Signatures</div>
              </div>
              {/* Security Features */}
              <div className="w-56">
                <div className="text-gray-400 p-reg">Quantum-Safe Security</div>
                <div className="text-gray-400 p-reg">Fixed Supply: 21M Coins</div>
                <div className="text-gray-400 p-reg">DAO-Governed</div>
                <div className="text-gray-400 p-reg">Unlinkable Outputs</div>
                <div className="text-gray-400 p-reg">Untraceable Transactions</div>
                <div className="text-gray-400 p-reg">AES-512 Cascade Encryption</div>
              </div>
            </div>

            {/* Right Column - Headline, Buttons and Text */}
            <div className="flex-1">
              <h1 className="h-display text-white max-w-3xl">
                The Future of Financial Privacy Starts Here
              </h1>
              
              {/* Buttons - Directly under Title - Only show on desktop */}
              <div className="hidden md:flex flex-col sm:flex-row gap-4 mt-4">
                <Link
                  href="/use"
                  className="relative flex items-center justify-center gap-2 rounded px-6 py-3 p-reg font-semibold text-black transition-all overflow-hidden"
                >
                  <div className="flex items-center gap-2 relative z-10">
                    <Eye className="h-5 w-5" />
                    <span>How to use</span>
                  </div>
                  <div className="absolute inset-0 bg-[#93c5fd] rounded -z-10 transition-transform duration-300 hover:scale-95" />
                </Link>
                <Link
                  href="/overview"
                  className="relative flex items-center justify-center gap-2 rounded px-6 py-3 p-reg font-semibold text-white transition-all overflow-hidden backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 relative z-10">
                    <Rocket className="h-5 w-5" />
                    <span>Explore Xcoin</span>
                  </div>
                  <div className="absolute inset-0 bg-[#efeeec26] rounded -z-10 transition-transform duration-300 hover:scale-95 backdrop-blur-md" />
                </Link>
              </div>

              {/* Bottom Descriptive Text - Directly under Buttons, left aligned */}
              <div className="mt-6 max-w-2xl">
                <p className="p-reg text-white text-left px-4 md:px-0">
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
