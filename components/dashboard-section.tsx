"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface DashboardItem {
  id: number
  category: string
  title: string
  image?: string
  href: string
}

// Exactly 9 items per category for 3x3 grid
const dashboardItems: DashboardItem[] = [
  // Xcoin category - 9 items
  {
    id: 1,
    category: "xcoin",
    title: "Xcoin Will Replace Bitcoin",
    image: "/xcoin_grid/xcoin_will_replace_bitcoin.jpeg",
    href: "/why-xcoin-replaces-bitcoin",
  },
  {
    id: 2,
    category: "xcoin",
    title: "Crowdfunding",
    image: "/xcoin_grid/crowdfunding.jpg",
    href: "/tokenomics",
  },
  {
    id: 3,
    category: "xcoin",
    title: "The Man in the Background",
    image: "/xcoin_grid/the_man_in_the_background.jpeg",
    href: "/community",
  },
  {
    id: 4,
    category: "xcoin",
    title: "What is the XXX Blockchain?",
    image: "/xcoin_grid/xxx_blockchain.jpeg",
    href: "/technology",
  },
  {
    id: 5,
    category: "xcoin",
    title: "Why Xcoin Is Better Than Monero, Zcash, or Bitcoin",
    image: "/xcoin_grid/xcoin_is_better.jpeg",
    href: "/technology",
  },
  {
    id: 6,
    category: "xcoin",
    title: "Optional Compliance for Audits and Taxes",
    image: "/xcoin_grid/compliance.jpg",
    href: "/privacy",
  },
  {
    id: 7,
    category: "xcoin",
    title: "The Philosophy Behind Anonymous Finance",
    image: "/xcoin_grid/anonymous_finance.jpg",
    href: "/privacy",
  },
  {
    id: 8,
    category: "xcoin",
    title: "Why Quantum-Safe Cryptography Matters",
    image: "/xcoin_grid/quantum_safe.jpg",
    href: "/quantum-safe",
  },
  {
    id: 9,
    category: "xcoin",
    title: "Get XXX Tokens",
    image: "/xcoin_grid/get_xxx.jpeg",
    href: "/tokenomics",
  },
  // Members category - 9 items
  {
    id: 10,
    category: "members",
    title: "Power in the Hands of the Community",
    image: "/members_grid/power_in_the_hands_of_the_community.jpg",
    href: "/member",
  },
  {
    id: 11,
    category: "members",
    title: "See What's Coming",
    image: "/members_grid/see_whats_coming.jpg",
    href: "/roadmap",
  },
  {
    id: 12,
    category: "members",
    title: "The Power of XXX DAO Members",
    image: "/members_grid/the_power_of_xxx_dao_members.jpg",
    href: "/governance",
  },
  {
    id: 13,
    category: "members",
    title: "Join the Revolution",
    image: "/members_grid/xcoin_privacy_is_power.jpeg",
    href: "/member",
  },
  {
    id: 14,
    category: "members",
    title: "Community Governance",
    image: "/members_grid/xcoin_businessman.jpeg",
    href: "/governance",
  },
  {
    id: 15,
    category: "members",
    title: "Early Access Benefits",
    image: "/members_grid/empty_tile.jpg",
    href: "/member",
  },
  {
    id: 16,
    category: "members",
    title: "DAO Participation",
    image: "/members_grid/empty_tile.jpg",
    href: "/governance",
  },
  {
    id: 17,
    category: "members",
    title: "Exclusive Updates",
    image: "/members_grid/empty_tile.jpg",
    href: "/member",
  },
  {
    id: 18,
    category: "members",
    title: "Community Events",
    image: "/members_grid/empty_tile.jpg",
    href: "/community",
  },
  // Validators category - 9 items
  {
    id: 19,
    category: "validators",
    title: "Earn Xcoin. Effortlessly.",
    image: "/validators_grid/earn_xcoin_effortlessly.jpg",
    href: "/validator",
  },
  {
    id: 20,
    category: "validators",
    title: "Apply to Run a SEP Node",
    image: "/validators_grid/apply_to_run_a_sep_node.jpg",
    href: "/validator",
  },
  {
    id: 21,
    category: "validators",
    title: "The Rise of the Validators",
    image: "/validators_grid/the_rise_of_the_validators.jpg",
    href: "/network",
  },
  {
    id: 22,
    category: "validators",
    title: "Validator Setup Guide",
    image: "/validators_grid/empty_tile.jpg",
    href: "/validator",
  },
  {
    id: 23,
    category: "validators",
    title: "Transaction Fee Rewards",
    image: "/validators_grid/empty_tile.jpg",
    href: "/validator",
  },
  {
    id: 24,
    category: "validators",
    title: "Network Security",
    image: "/validators_grid/empty_tile.jpg",
    href: "/network",
  },
  {
    id: 25,
    category: "validators",
    title: "Hardware Requirements",
    image: "/validators_grid/empty_tile.jpg",
    href: "/validator",
  },
  {
    id: 26,
    category: "validators",
    title: "Validator Economics",
    image: "/validators_grid/empty_tile.jpg",
    href: "/validator",
  },
  {
    id: 27,
    category: "validators",
    title: "Decentralized Validation",
    image: "/validators_grid/empty_tile.jpg",
    href: "/network",
  },
  // Whitepapers category - 9 items
  {
    id: 28,
    category: "whitepapers",
    title: "Every Revolution Begins with an Idea",
    image: "/whitepapers_grid/every_revolution_begins_with_an_idea.jpg",
    href: "/docs",
  },
  {
    id: 29,
    category: "whitepapers",
    title: "The Path to Bitcoin Replacement",
    image: "/whitepapers_grid/the_path_to_bitcoin_replacement.jpg",
    href: "/technology",
  },
  {
    id: 30,
    category: "whitepapers",
    title: "XXX DAO Governance Protocol",
    image: "/whitepapers_grid/xxx_dao_governance_protocol.jpg",
    href: "/governance",
  },
  {
    id: 31,
    category: "whitepapers",
    title: "DAG Architecture Deep Dive",
    image: "/whitepapers_grid/pdf.png",
    href: "/technology",
  },
  {
    id: 32,
    category: "whitepapers",
    title: "Privacy by Design",
    image: "/whitepapers_grid/pdf.png",
    href: "/privacy",
  },
  {
    id: 33,
    category: "whitepapers",
    title: "Tokenomics Explained",
    image: "/whitepapers_grid/pdf.png",
    href: "/tokenomics",
  },
  {
    id: 34,
    category: "whitepapers",
    title: "Network Security Model",
    image: "/whitepapers_grid/world.png",
    href: "/network",
  },
  {
    id: 35,
    category: "whitepapers",
    title: "Scalability Solutions",
    image: "/whitepapers_grid/pdf.png",
    href: "/scalability",
  },
  {
    id: 36,
    category: "whitepapers",
    title: "Quantum Resistance",
    image: "/whitepapers_grid/pdf.png",
    href: "/quantum-safe",
  },
  // Learning category - 9 items
  {
    id: 37,
    category: "learning",
    title: "DAG Architecture",
    image: "/learning_center_grid/technology_architecture.jpg",
    href: "/learning/dag",
  },
  {
    id: 38,
    category: "learning",
    title: "Zero-Knowledge Privacy",
    image: "/learning_center_grid/cryptographic_foundations.jpg",
    href: "/learning/zero-knowledge-privacy",
  },
  {
    id: 39,
    category: "learning",
    title: "Post-Quantum Cryptography",
    image: "/learning_center_grid/cryptographic_foundations.jpg",
    href: "/learning/post-quantum-cryptography",
  },
  {
    id: 40,
    category: "learning",
    title: "zk-STARKs Explained",
    image: "/learning_center_grid/core_concepts.jpg",
    href: "/learning/zk-starks",
  },
  {
    id: 41,
    category: "learning",
    title: "XXX DAO Governance",
    image: "/learning_center_grid/governance_dao.jpg",
    href: "/learning/xxx-dao",
  },
  {
    id: 42,
    category: "learning",
    title: "Validator Network",
    image: "/learning_center_grid/getting_involved.jpg",
    href: "/learning/validator-network",
  },
  {
    id: 43,
    category: "learning",
    title: "Fixed Supply Economics",
    image: "/learning_center_grid/use_cases_benefits.jpg",
    href: "/learning/fixed-supply",
  },
  {
    id: 44,
    category: "learning",
    title: "Stealth Addresses",
    image: "/learning_center_grid/core_concepts.jpg",
    href: "/learning/stealth-addresses",
  },
  {
    id: 45,
    category: "learning",
    title: "Parallel Validation",
    image: "/learning_center_grid/technology_architecture.jpg",
    href: "/learning/parallel-validation",
  },
]

const navItems = [
  { id: "xcoin", label: "Xcoin" },
  { id: "members", label: "Members" },
  { id: "validators", label: "Validators" },
  { id: "whitepapers", label: "Whitepapers" },
  { id: "learning", label: "Learning Center" },
]

export default function DashboardSection() {
  const [activeFilter, setActiveFilter] = useState("xcoin")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [prevFilter, setPrevFilter] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const filteredItems = dashboardItems.filter((item) => item.category === activeFilter).slice(0, 9)
  const [displayItems, setDisplayItems] = useState<DashboardItem[]>([])

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Initialize displayItems on mount
  useEffect(() => {
    if (displayItems.length === 0 && filteredItems.length > 0) {
      setDisplayItems(filteredItems)
      setPrevFilter(activeFilter)
    }
  }, [filteredItems, displayItems.length, activeFilter])

  // Handle filter change with exit/enter animations
  useEffect(() => {
    if (prevFilter === null) {
      // Initial load - skip animation
      return
    }

    if (prevFilter === activeFilter || isAnimating) return

    setIsAnimating(true)
    setPrevFilter(activeFilter)
    
    // Exit animation
    setDisplayItems([])
    
    setTimeout(() => {
      // Enter animation
      setDisplayItems(filteredItems)
      setTimeout(() => {
        setIsAnimating(false)
      }, 100)
    }, 300)
  }, [activeFilter, filteredItems, isAnimating, prevFilter])

  // Scroll-based animation progress
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate when section starts entering viewport
      const sectionTop = rect.top
      const sectionHeight = rect.height
      
      // Animation range: adjusted for mobile (shorter range)
      const mobileCheck = window.innerWidth < 1024
      const animationStart = mobileCheck ? windowHeight * 0.7 : windowHeight * 0.8
      const animationEnd = mobileCheck ? windowHeight * 0.3 : windowHeight * 0.2
      
      // Calculate progress (0 to 1)
      let progress = 0
      
      if (sectionTop < animationStart && sectionTop > animationEnd) {
        // Section is in animation range
        progress = 1 - (sectionTop - animationEnd) / (animationStart - animationEnd)
        progress = Math.max(0, Math.min(1, progress)) // Clamp between 0 and 1
      } else if (sectionTop <= animationEnd) {
        // Section is fully visible
        progress = 1
      } else {
        // Section hasn't reached animation start
        progress = 0
      }
      
      setScrollProgress(progress)
    }

    // Initial calculation
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative mt-12 pb-24">
      <style jsx>{`
        .db-nav__item:hover {
          background-color: #1f1f1f !important;
        }
        .db-nav__item:hover .db-nav__icon {
          color: #93c5fd !important;
        }
        .db-nav__item:hover p {
          color: #93c5fd !important;
        }

        .db-content__card {
          background: transparent !important;
          border: none !important;
          outline: none !important;
          position: relative !important;
        }

        .db-content__card img {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          background: transparent !important;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
          transform-style: preserve-3d !important;
        }

        .db-card__visual,
        .dash-res-card__visual-before {
          background: transparent !important;
          background-color: transparent !important;
        }

        .db-content__card[data-category="learning"],
        .db-content__card[data-category="learning"] *,
        .db-content__card[data-category="learning"] *::before,
        .db-content__card[data-category="learning"] *::after {
          background: transparent !important;
          background-color: transparent !important;
          background-image: none !important;
          box-shadow: none !important;
        }

        .db-content__card[data-category="whitepapers"] {
          background: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }

        .db-content__card:hover {
          transform: scale(1.05) !important;
          z-index: 10 !important;
        }

        .db-content__card:hover img {
          transform: rotateY(180deg) scaleX(-1) !important;
        }

        .db-content__card,
        .db-content__card a,
        .db-side,
        .db-nav__item,
        .db-search {
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-150px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-150px);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(150px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(150px);
          }
        }

        @keyframes fadeInFromBack {
          from {
            opacity: 0;
            transform: translateZ(-200px) scale(0.5) translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateZ(0) scale(1) translateY(0);
          }
        }

        @keyframes fadeOutToBack {
          from {
            opacity: 1;
            transform: translateZ(0) scale(1) translateY(0);
          }
          to {
            opacity: 0;
            transform: translateZ(-200px) scale(0.5) translateY(50px);
          }
        }

        .card-exit {
          animation: fadeOutDown 0.3s ease-in forwards;
        }

        .scroll-animated {
          transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(126, 238, 254, 0.3), 0 0 40px rgba(126, 238, 254, 0.2), 0 0 60px rgba(126, 238, 254, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(126, 238, 254, 0.5), 0 0 60px rgba(126, 238, 254, 0.3), 0 0 90px rgba(126, 238, 254, 0.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .privacy-button {
          position: relative;
          overflow: hidden;
          animation: glow 3s ease-in-out infinite, float 4s ease-in-out infinite;
        }

        .privacy-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        .privacy-button:hover {
          animation: glow 1s ease-in-out infinite, float 2s ease-in-out infinite;
          transform: scale(1.05);
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .card-delay-0 {
          animation-delay: 0s;
        }
        .card-delay-1 {
          animation-delay: 0.1s;
        }
        .card-delay-2 {
          animation-delay: 0.2s;
        }
        .card-delay-3 {
          animation-delay: 0.3s;
        }
        .card-delay-4 {
          animation-delay: 0.4s;
        }
        .card-delay-5 {
          animation-delay: 0.5s;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Privacy is Power Banner - Right Aligned, Blue, Square, Closer to Cards */}
          <div
            className="mb-4 flex justify-end scroll-animated sm:mb-6"
            style={{
              opacity: scrollProgress,
              transform: `translateX(${(1 - scrollProgress) * (isMobile ? 0 : 150)}px) translateY(${(1 - scrollProgress) * (isMobile ? 10 : 20)}px) scale(${0.8 + scrollProgress * 0.2})`,
            }}
          >
            <div className="privacy-button relative inline-flex items-center gap-2 border-2 border-accent bg-accent px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-accent-foreground whitespace-nowrap">
              <span className="relative z-10">Privacy is Power</span>
            </div>
          </div>

          <div className="flex flex-row gap-2 sm:gap-4 lg:gap-8">
            {/* Sidebar Navigation - Slides in from left (Desktop & Mobile) */}
            <aside className="w-16 sm:w-20 flex-shrink-0 lg:w-64">
              <div className="sticky top-24 lg:top-32">
                {/* Mobile: Current Category Indicator */}
                <div className="mb-4 lg:hidden">
                  <div 
                    className="rounded-lg border border-accent/30 bg-accent/10 px-2.5 py-1.5 text-center scroll-animated"
              style={{
                opacity: scrollProgress,
                      transform: `translateX(${(1 - scrollProgress) * (isMobile ? 0 : -150)}px) translateY(${(1 - scrollProgress) * (isMobile ? 15 : 30)}px) scale(${0.9 + scrollProgress * 0.1})`,
              }}
            >
                    <p className="text-[10px] font-semibold text-accent capitalize leading-tight">
                      {navItems.find((item) => item.id === activeFilter)?.label || "Xcoin"}
                    </p>
                  </div>
                </div>
                
                <nav className="space-y-3 lg:space-y-1">
                  {navItems.map((item, index) => {
                    // Anpassung: Animation startet früher und endet früher, damit alle Items rechtzeitig fertig sind
                    const delay = index * 0.12
                    const duration = 0.4
                    const itemProgress = Math.max(0, Math.min(1, (scrollProgress - delay) / duration))
                    const translateX = (1 - itemProgress) * -150
                    const scale = 0.7 + itemProgress * 0.3
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveFilter(item.id)}
                        className={`db-nav__item group flex w-full items-center justify-center rounded-lg p-3 transition-all lg:justify-start lg:gap-3 lg:px-4 lg:py-3 ${
                          activeFilter === item.id
                            ? "bg-accent/10 text-accent"
                            : "text-muted-foreground hover:bg-secondary"
                        }`}
                        style={{
                          opacity: itemProgress,
                          transform: `translateX(${translateX}px) scale(${scale})`,
                        }}
                        title={item.label}
                      >
                      <div className="db-nav__icon flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12 lg:h-10 lg:w-10">
                        <div className="relative h-8 w-8 sm:h-10 sm:w-10 lg:h-6 lg:w-6">
                          <Image
                            src="/xcoin-logo.png"
                            alt={item.label}
                            width={40}
                            height={40}
                            className="animate-spin [animation-duration:10000ms] object-contain"
                          />
                        </div>
                      </div>
                      <p className="hidden text-xs font-semibold transition-colors duration-300 group-hover:text-cyan-400 lg:block lg:text-base">
                        {item.label}
                      </p>
                    </button>
                    )
                  })}
                </nav>
              </div>
            </aside>

            {/* Content Grid - Cards stacked vertically on mobile, 3x3 grid on desktop */}
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-6 w-full overflow-visible">
                {displayItems.length === 0 && filteredItems.length > 0
                  ? filteredItems.map((item, index) => (
                      <div
                        key={`placeholder-${item.id}`}
                        data-category={item.category}
                        className="db-content__card group opacity-0"
                      >
                        <div className="db-card__visual relative aspect-video overflow-hidden rounded-xl border border-border bg-card" />
                        <div className="db-card__info mt-4 h-5 bg-transparent" />
                      </div>
                    ))
                  : displayItems.map((item, index) => {
                      // All cards animate together from bottom, no staggering
                      // Adjust animation intensity for mobile
                      const cardProgress = Math.max(0, Math.min(1, scrollProgress / (isMobile ? 0.6 : 0.5)))
                      // Smooth easing function for more natural movement
                      const easedProgress = cardProgress < 0.5 
                        ? 2 * cardProgress * cardProgress 
                        : 1 - Math.pow(-2 * cardProgress + 2, 3) / 2
                      const scale = isMobile ? (0.6 + easedProgress * 0.4) : (0.4 + easedProgress * 0.6)
                      const translateZ = isMobile ? (-150 + easedProgress * 150) : (-250 + easedProgress * 250)
                      const translateY = isMobile ? ((1 - easedProgress) * 60) : ((1 - easedProgress) * 100)
                      const rotateY = isMobile ? ((1 - easedProgress) * 8) : ((1 - easedProgress) * 15)
                      const blur = isMobile ? ((1 - easedProgress) * 3) : ((1 - easedProgress) * 5)
                      
                      return (
                      <div
                        key={item.id}
                        data-category={item.category}
                        className="db-content__card group scroll-animated"
                        style={{
                          opacity: Math.max(0.1, easedProgress), // Ensure minimum visibility
                          transform: `translateZ(${translateZ}px) scale(${scale}) translateY(${translateY}px) rotateY(${rotateY}deg)`,
                          filter: `blur(${blur}px)`,
                          pointerEvents: easedProgress > 0.3 ? 'auto' : 'none', // Enable clicks when visible
                        }}
                      >
                        <Link href={item.href} className="block h-full w-full max-w-full">
                          <div className="db-card__visual relative w-full max-w-full overflow-hidden rounded-xl border border-border bg-card">
                            <div className="dash-res-card__visual-before absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                            <div className="relative aspect-video w-full max-w-full flex items-center justify-center bg-gradient-to-br from-accent/10 via-background to-background">
                              {item.image ? (
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover max-w-full"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  unoptimized={true}
                                  priority={index < 3}
                                />
                              ) : (
                                <div className="text-center">
                                  <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                                    <Image
                                      src="/xcoin-logo.png"
                                      alt="Xcoin"
                                      width={32}
                                      height={32}
                                      className="object-contain"
                                    />
                                  </div>
                                  <p className="text-xs font-medium text-muted-foreground capitalize">
                                    {item.category}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="db-card__info mt-4 flex items-center justify-between">
                            <p className="text-sm font-medium leading-tight">{item.title}</p>
                            <div className="db-card__arrow ml-4 flex h-6 w-6 shrink-0 items-center justify-center text-muted-foreground transition-colors group-hover:text-accent">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-full w-full"
                              >
                                <path
                                  d="M10 17L15 12"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10 7L15 12"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </div>
                      )
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

