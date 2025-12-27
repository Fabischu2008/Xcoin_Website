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
  const [selectedIndex, setSelectedIndex] = useState(7) // Start with Stephanie Cho (index 7)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 380 // Card width
      const gap = 24 // Gap between cards (gap-6 = 1.5rem = 24px)
      const containerWidth = scrollRef.current.offsetWidth
      const cardWithGap = cardWidth + gap
      
      // Calculate scroll position to center the selected card
      const scrollPosition = selectedIndex * cardWithGap - (containerWidth / 2 - cardWidth / 2)
      
      scrollRef.current.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      })
    }
  }, [selectedIndex])

  return (
    <section className="section py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Quote */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-medium text-4xl md:text-6xl text-white mb-4">
              "A privacy coin that finally gets it right.
              <br />
              Technically elegant,{" "}
              <span className="bg-[#93c5fd] text-black px-2">practically invisible</span>."
            </h3>
            <span className="text-sm text-white/50 relative top-5 block">
              – Independent Crypto Auditor
            </span>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-border max-w-2xl mx-auto" />

          {/* Trusted By Section */}
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground">Trusted by:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex flex-col items-center gap-2 transition-all ${
                    selectedIndex === index ? "opacity-100" : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <div className={`rounded-full p-1 ${selectedIndex === index ? "ring-2 ring-white" : ""}`}>
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p className={`text-xs ${selectedIndex === index ? "text-white" : "text-white/50"}`}>
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
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory testimonials-section-scroll"
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
                  testimonial-item flex-shrink-0 w-[380px] p-6 relative transition-all cursor-pointer snap-center
                  ${isSelected 
                    ? "scale-100 opacity-100" 
                    : "scale-95 opacity-40 hover:opacity-60"
                  }
                `}
                style={{ 
                  transform: isSelected ? 'scale(1)' : `scale(${1 - distance * 0.05})`,
                  opacity: isSelected ? 1 : Math.max(0.3, 1 - distance * 0.2),
                  scrollSnapAlign: 'center'
                }}
              >
                {/* Corner Brackets - Top Left */}
                <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${isSelected ? 'border-[#93c5fd]' : 'border-white/20'}`} />
                {/* Corner Brackets - Bottom Left */}
                <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${isSelected ? 'border-[#93c5fd]' : 'border-white/20'}`} />
                {/* Corner Brackets - Top Right */}
                <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${isSelected ? 'border-[#93c5fd]' : 'border-white/20'}`} />
                {/* Corner Brackets - Bottom Right */}
                <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${isSelected ? 'border-[#93c5fd]' : 'border-white/20'}`} />
                
                <p className="text-white mb-6 leading-relaxed text-sm">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">{testimonial.name}</h4>
                    <p className="text-xs text-white/50 uppercase tracking-wide mt-1">{testimonial.title}</p>
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

