"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote: "As someone who's worked in cryptographic research for over a decade, I've rarely seen a project so thoughtfully built from the ground up. Xcoin's quantum-first design is not just forward-thinking — it's essential.",
    name: "Dr. Lena Hoffman",
    title: "Cryptography Lecturer",
    avatar: "/img/avatars/1.webp"
  },
  {
    quote: "What excites me most about Xcoin is the balance between uncompromising privacy and regulatory foresight. View keys are a game-changer for responsible adoption.",
    name: "Michael Tran",
    title: "Compliance Consultant",
    avatar: "/img/avatars/2.webp"
  },
  {
    quote: "I've been following privacy coins for years, and Xcoin is the first one that truly addresses the weaknesses of Monero and Zcash. It's rare to see this level of innovation before launch.",
    name: "Darius Grant",
    title: "Open-Source Developer & Privacy Advocate",
    avatar: "/img/avatars/3.webp"
  },
  {
    quote: "Xcoin feels like the next logical step in crypto evolution — built for what's coming, not just what's here. The DAG + zk-Rollup combo is exactly the kind of scalability we need.",
    name: "Merry Jackson",
    title: "Blockchain Infrastructure Engineer",
    avatar: "/img/avatars/4.webp"
  },
  {
    quote: "I can't wait for Xcoin to launch. This is what the entire crypto world has been waiting for — and I'm glad I got in early.",
    name: "Marco Delano",
    title: "Professional Crypto Trader",
    avatar: "/img/avatars/5.webp"
  },
  {
    quote: "Most coins talk about values. Xcoin backs it up with real code and zero hype. It's quiet, serious, and focused — and that's why I trust it.",
    name: "Jessy Jović",
    title: "Former Bitcoin Miner",
    avatar: "/img/avatars/6.webp"
  },
  {
    quote: "The DAO model behind Xcoin gives me real hope that we're finally moving toward true community control. No big tech, no backdoors — just privacy.",
    name: "Norah Vázquez",
    title: "Governance Specialist",
    avatar: "/img/avatars/7.webp"
  },
  {
    quote: "Honestly, I'm not a developer or crypto expert. But I read the whitepaper and finally felt like someone's building for people like me — private, simple, and safe by default.",
    name: "Stephanie Cho",
    title: "Freelance Designer",
    avatar: "/img/avatars/8.webp"
  },
  {
    quote: "Xcoin's architecture reads like a wishlist of what Bitcoin should have evolved into. It's rare to see this level of technical maturity before mainnet.",
    name: "Claire Dubois",
    title: "Distributed Systems Engineer",
    avatar: "/img/avatars/9.webp"
  },
  {
    quote: "To me, Xcoin represents more than tech — it's a political statement. Financial freedom shouldn't require permission. This project actually gets that.",
    name: "Luise Ortega",
    title: "Human Rights Activist",
    avatar: "/img/avatars/10.webp"
  }
]

export default function TestimonialsSection() {
  const [selectedIndex, setSelectedIndex] = useState(4) // Start with Marco Delano (index 4)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // IntersectionObserver für Visibility - Auto-advance nur wenn sichtbar
  useEffect(() => {
    if (!scrollRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(scrollRef.current)

    return () => observer.disconnect()
  }, [])

  // Auto-advance every 4 seconds - nur wenn sichtbar
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isVisible])

  useEffect(() => {
    if (scrollRef.current && !isInitialized) {
      // Initial scroll to center Marco Delano
      const selectedCard = scrollRef.current.children[4] as HTMLElement
      if (selectedCard) {
        const containerWidth = scrollRef.current.offsetWidth
        const cardLeft = selectedCard.offsetLeft
        const cardWidthActual = selectedCard.offsetWidth
        
        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidthActual / 2)
        
        scrollRef.current.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: 'auto' // Use 'auto' for initial load to avoid animation
        })
        setIsInitialized(true)
      }
    }
  }, [isInitialized])

  useEffect(() => {
    if (scrollRef.current && isInitialized) {
      const cardWidth = 420 // Card width (updated)
      const gap = 24 // Gap between cards (gap-6 = 1.5rem = 24px)
      const containerWidth = scrollRef.current.offsetWidth
      const cardWithGap = cardWidth + gap
      
      // Get the selected card element
      const selectedCard = scrollRef.current.children[selectedIndex] as HTMLElement
      if (selectedCard) {
        // Get the position of the card relative to the scroll container
        const cardLeft = selectedCard.offsetLeft
        const cardWidthActual = selectedCard.offsetWidth
        
        // Calculate scroll position to center the card
        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidthActual / 2)
        
        scrollRef.current.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: 'smooth'
        })
      } else {
        // Fallback to simple calculation
        const scrollPosition = selectedIndex * cardWithGap - (containerWidth / 2 - cardWidth / 2)
        scrollRef.current.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: 'smooth'
        })
      }
    }
  }, [selectedIndex, isInitialized])

  return (
    <section className="section py-24 bg-background w-full">
      <div className="w-full px-0">
        {/* Main Quote */}
        <div className="text-center mb-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="h-medium text-white mb-4">
              "A privacy coin that finally gets it right.
              <br />
              Technically elegant,{" "}
              <span className="bg-[#93c5fd] text-black px-2">practically invisible</span>."
            </h3>
            <span className="p-small text-white/50 relative top-5 block" style={{ fontSize: '0.875em', lineHeight: '1.3' }}>
              – Independent Crypto Auditor
            </span>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-border max-w-2xl mx-auto" />

          {/* Trusted By Section */}
          <div className="flex flex-col gap-4">
            <p className="p-reg text-muted-foreground" style={{ fontSize: '1em', lineHeight: '1.4' }}>Trusted by:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex flex-col items-center gap-2 transition-all ${
                    selectedIndex === index ? "opacity-100" : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <div className={`rounded-full p-1 w-[60px] h-[60px] overflow-hidden ${selectedIndex === index ? "ring-2 ring-white" : ""}`}>
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover w-full h-full"
                      unoptimized
                    />
                  </div>
                  <p className={`eyebrow small ${selectedIndex === index ? "text-white" : "text-white/50"}`} style={{ fontSize: '0.75em', fontFamily: '"RM Mono", monospace', fontWeight: 400, lineHeight: 1, textTransform: 'uppercase' }}>
                    {testimonial.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

            {/* Testimonials Horizontal Scroll */}
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-4 snap-x snap-mandatory testimonials-section-scroll"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none'
              }}
            >
          {testimonials.map((testimonial, index) => {
            const isSelected = selectedIndex === index
            const distance = Math.abs(index - selectedIndex)
            
            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`
                  testimonial-item flex-shrink-0 w-[420px] relative transition-all cursor-pointer snap-center
                  ${isSelected 
                    ? "scale-100 opacity-100" 
                    : "scale-95 opacity-40 hover:opacity-60"
                  }
                `}
                style={{ 
                  transform: isSelected ? 'scale(1)' : `scale(${1 - distance * 0.05})`,
                  opacity: isSelected ? 1 : 0.45,
                  scrollSnapAlign: 'center',
                  backgroundColor: isSelected ? 'rgba(239, 238, 236, 0.1)' : 'rgba(239, 238, 236, 0.06)',
                  border: '1px solid hsl(var(--border))', // WICHTIG: Border wie bei Community
                  borderRadius: '16px', // WICHTIG: 1rem = 16px (wie bei Community rounded-2xl)
                  overflow: 'visible',
                  paddingTop: '2rem',
                  paddingBottom: '2rem',
                  paddingLeft: '1.75rem',
                  paddingRight: '1.75rem',
                  minHeight: '20rem'
                }}
              >
                {/* Corner Brackets - Only show for selected testimonial - wie im Dashboard */}
                {isSelected && (
                  <>
                    {/* Corner Brackets - Top Left */}
                    <div className="absolute w-4 h-4 border-t-2 border-l-2 border-[#93c5fd]" style={{ top: '-2mm', left: '-2mm', zIndex: 10 }} />
                    {/* Corner Brackets - Bottom Left */}
                    <div className="absolute w-4 h-4 border-b-2 border-l-2 border-[#93c5fd]" style={{ bottom: '-2mm', left: '-2mm', zIndex: 10 }} />
                    {/* Corner Brackets - Top Right */}
                    <div className="absolute w-4 h-4 border-t-2 border-r-2 border-[#93c5fd]" style={{ top: '-2mm', right: '-2mm', zIndex: 10 }} />
                    {/* Corner Brackets - Bottom Right */}
                    <div className="absolute w-4 h-4 border-b-2 border-r-2 border-[#93c5fd]" style={{ bottom: '-2mm', right: '-2mm', zIndex: 10 }} />
                  </>
                )}
                
                <p className="text-white mb-6" style={{ fontSize: '1.125em', lineHeight: '1.4' }}>{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-full h-full"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="text-white uppercase tracking-wide" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75em', fontWeight: 400, lineHeight: 1 }}>{testimonial.name}</h4>
                    <p className="text-white/50 mt-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75em', fontWeight: 400, lineHeight: 1 }}>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

