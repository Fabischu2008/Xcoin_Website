"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface DashboardItem {
  id: number
  category: string
  title: string
  image?: string
  href: string
}

const LOGO_FILTER = 'brightness(0) saturate(100%) invert(67%) sepia(89%) saturate(1234%) hue-rotate(185deg) brightness(101%) contrast(101%)'

// Exactly 9 items per category for 3x3 grid
const dashboardItems: DashboardItem[] = [
  // Xcoin category - 9 items
  {
    id: 1,
    category: "xcoin",
    title: "Xcoin Will Replace Bitcoin",
    image: "/img/xcoin_grid/box1.jpeg",
    href: "/why-xcoin-replaces-bitcoin",
  },
  {
    id: 2,
    category: "xcoin",
    title: "Crowdfunding",
    image: "/img/xcoin_grid/crowdfunding.jpg",
    href: "/crowdfunding",
  },
  {
    id: 3,
    category: "xcoin",
    title: "The Man in the Background",
    image: "/img/xcoin_grid/box3.jpeg",
    href: "/the-man-in-the-background",
  },
  {
    id: 4,
    category: "xcoin",
    title: "What is the XXX Blockchain?",
    image: "/img/xcoin_grid/box4.jpeg",
    href: "/what-is-xxx-blockchain",
  },
  {
    id: 5,
    category: "xcoin",
    title: "Why Xcoin Is Better Than Monero, Zcash, or Bitcoin",
    image: "/img/xcoin_grid/box5.jpeg",
    href: "/why-xcoin-is-better",
  },
  {
    id: 6,
    category: "xcoin",
    title: "Optional Compliance for Audits and Taxes",
    image: "/img/xcoin_grid/compliance.jpg",
    href: "/optional-compliance",
  },
  {
    id: 7,
    category: "xcoin",
    title: "The Philosophy Behind Anonymous Finance",
    image: "/img/xcoin_grid/anonymous_finance.jpg",
    href: "/philosophy-behind-anonymous-finance",
  },
  {
    id: 8,
    category: "xcoin",
    title: "Why Quantum-Safe Cryptography Matters",
    image: "/img/xcoin_grid/quantum_safe.jpg",
    href: "/quantum-safe",
  },
  {
    id: 9,
    category: "xcoin",
    title: "Get XXX Tokens",
    image: "/img/xcoin_grid/box8.jpeg",
    href: "/what-are-xxx-tokens",
  },
  // Members category - 3 items
  {
    id: 10,
    category: "members",
    title: "Power in the Hands of the Community",
    image: "/img/members_grid/power_in_the_hands_of_the_community.jpg",
    href: "/power-in-the-hands-of-the-community",
  },
  {
    id: 11,
    category: "members",
    title: "See What's Coming",
    image: "/img/members_grid/see_whats_coming.jpg",
    href: "/see-whats-coming",
  },
  {
    id: 12,
    category: "members",
    title: "The Power of XXX DAO Members",
    image: "/img/members_grid/the_power_of_xxx_dao_members.jpg",
    href: "/the-power-of-xxx-dao-members",
  },
  // Validators category - 3 items
  {
    id: 19,
    category: "validators",
    title: "Earn Xcoin. Effortlessly.",
    image: "/img/validators_grid/earn_xcoin_effortlessly.jpg",
    href: "/validator",
  },
  {
    id: 20,
    category: "validators",
    title: "Apply to Run a SEP Node",
    image: "/img/validators_grid/apply_to_run_a_sep_node.jpg",
    href: "/validator-application",
  },
  {
    id: 21,
    category: "validators",
    title: "The Rise of the Validators",
    image: "/img/validators_grid/the_rise_of_the_validators.jpg",
    href: "/the-rise-of-validators",
  },
  // Whitepapers category - 3 items
  {
    id: 28,
    category: "whitepapers",
    title: "Every Revolution Begins with an Idea",
    image: "/img/whitepapers_grid/every_revolution_begins_with_an_idea.jpg",
    href: "/docs",
  },
  {
    id: 29,
    category: "whitepapers",
    title: "The Path to Bitcoin Replacement",
    image: "/img/whitepapers_grid/the_path_to_bitcoin_replacement.jpg",
    href: "/technology",
  },
  {
    id: 30,
    category: "whitepapers",
    title: "XXX DAO Governance Protocol",
    image: "/img/whitepapers_grid/xxx_dao_governance_protocol.jpg",
    href: "/governance",
  },
  // Learning category - 6 items
  {
    id: 37,
    category: "learning",
    title: "Core Concepts",
    image: "/img/learning_center_grid/core_concepts.jpg",
    href: "/overview",
  },
  {
    id: 38,
    category: "learning",
    title: "Cryptographic Foundations",
    image: "/img/learning_center_grid/cryptographic_foundations.jpg",
    href: "/overview",
  },
  {
    id: 39,
    category: "learning",
    title: "Technology Architecture",
    image: "/img/learning_center_grid/technology_architecture.jpg",
    href: "/overview",
  },
  {
    id: 40,
    category: "learning",
    title: "Governance DAO",
    image: "/img/learning_center_grid/governance_dao.jpg",
    href: "/overview",
  },
  {
    id: 41,
    category: "learning",
    title: "Use Cases & Benefits",
    image: "/img/learning_center_grid/use_cases_benefits.jpg",
    href: "/overview",
  },
  {
    id: 42,
    category: "learning",
    title: "Getting Involved",
    image: "/img/learning_center_grid/getting_involved.jpg",
    href: "/overview",
  },
]

const navItems = [
  { id: "xcoin", label: "Xcoin" },
  { id: "members", label: "Members" },
  { id: "validators", label: "Validators" },
  { id: "whitepapers", label: "Whitepapers" },
  { id: "learning", label: "Learning Center" },
]

const getNavButtonClasses = (isActive: boolean) =>
  `db-nav__item group flex w-full items-center justify-start gap-4 rounded-lg p-3.5 transition-all ${
    isActive
      ? "bg-accent/10 text-accent"
      : "text-muted-foreground hover:bg-secondary"
  }`

export default function DashboardSection() {
  const [activeFilter, setActiveFilter] = useState("xcoin")
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const sideRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Scroll Animation - Optimiert
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const container = containerRef.current
    const wrap = wrapperRef.current
    const search = searchRef.current
    const side = sideRef.current
    const cards = cardsRef.current?.querySelectorAll('.db-content__card')
    const contents = container?.querySelectorAll('[data-db-el]')

    if (!container || !wrap || !search || !side || !cards || !contents) return

    // Mobile Detection - auf Mobile sofort sichtbar, keine Animation
    const isMobile = window.innerWidth <= 768
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 768

    // Mobile: Direkt sichtbar, keine Animation für sofortige Sichtbarkeit
    if (isMobile) {
      gsap.set(contents, { autoAlpha: 1 })
      gsap.set([search, side], { autoAlpha: 1, z: 0 })
      gsap.set([wrap, cards], { rotateX: 0, z: 0 })
      gsap.set(container, { pointerEvents: 'auto' })
      return // Keine ScrollTrigger auf Mobile - Bilder sind sofort sichtbar
    }

    // Desktop/Tablet: Volle Animation
    gsap.set(contents, { autoAlpha: 0 })
    gsap.set(container, { pointerEvents: 'none' })

    // Scroll Intro Timeline
    const scrollIntroTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        // Tablet: Animation früher beenden
        // Desktop: Original
        end: isTablet 
          ? 'top center+=10%'  // Etwas früher als Desktop
          : 'bottom bottom+=15%',  // Original für Desktop
        scrub: true,
        refreshPriority: 1, // Wichtig für Navigation
      },
      defaults: {
        ease: 'none',
      },
    })

    scrollIntroTl
      .from(wrap, { rotateX: '20deg', z: '-20em' })
      .from(search, { z: '40em', autoAlpha: 0 }, '<')
      .from(side, { z: '35em', autoAlpha: 0 }, '<')
      .from(
        cards,
        {
          z: (i) => `${35 - i * 5}em`,
          stagger: 0.01,
        },
        '<'
      )
      // Bilder erscheinen WÄHREND der Animation ab 30%
      .to(contents, { autoAlpha: 1, duration: 0.4, stagger: 0.02 }, 0.3)
      .set(container, { pointerEvents: 'auto' }, 0.5)

    // Spezifischer Cleanup - nur diese ScrollTrigger-Instanz
    const scrollTriggerInstance = scrollIntroTl.scrollTrigger

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill()
      }
    }
  }, [])

  return (
    <section className="relative mt-8 pb-16">
      <div className="mx-auto max-w-[110rem] px-[2mm]">
        {/* Dashboard Container - wie bei Basti */}
        <div className="db-container" id="overview" ref={containerRef}>
          <div className="db-wrapper" ref={wrapperRef}>
            {/* Background Base */}
            <div className="db-base"></div>
            
            {/* Privacy is Power Button */}
            <div className="db-search" ref={searchRef}>
              <Link
                href="/community"
                aria-label="Become a member"
                className="relative inline-flex items-center justify-center gap-2 border-2 border-accent bg-accent px-11 py-2.5 sm:px-12 sm:py-3 p-reg font-semibold text-accent-foreground whitespace-nowrap transition-all hover:scale-105 dashboard-banner"
              >
                <span>Privacy is Power</span>
              </Link>
            </div>

            {/* Sidebar Navigation */}
            <div className="db-side" ref={sideRef}>
              <div className="db-side__inner">
                <div className="db-side__top">
                  <nav className="db-side__nav">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveFilter(item.id)}
                        data-filter={item.id}
                        className={getNavButtonClasses(activeFilter === item.id)}
                      >
                        <div className="db-nav__icon flex h-12 w-12 items-center justify-center">
                          <Image
                            src="/xcoin-logo.png"
                            alt={item.label}
                            width={45}
                            height={45}
                            className="animate-spin [animation-duration:10000ms] object-contain"
                            style={{ filter: LOGO_FILTER }}
                            unoptimized
                          />
                        </div>
                        <p className="text-lg font-semibold transition-colors duration-300 group-hover:text-cyan-400 sm:hidden lg:block">
                          {item.label}
                        </p>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="db-content" ref={cardsRef}>
              {dashboardItems.map((item) => (
                <div
                  key={item.id}
                  data-category={item.category}
                  data-db-el=""
                  className="db-content__card group"
                  style={{ display: item.category === activeFilter ? '' : 'none' }}
                >
                  <Link href={item.href} className="block w-full h-full">
                    <div className="db-card__visual">
                      <div className="dash-res-card__visual-before"></div>
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="dash-res-card__visual-img"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent/10 via-background to-background">
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
                            <p className="p-small text-muted-foreground capitalize">
                              {item.category}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="db-card__info">
                      <div className="db-card__info-start">
                        <p className="p-small">{item.title}</p>
                      </div>
                      <div className="db-card__info-end">
                        <div className="db-card__arrow">
                          <div className="db-card__arrow-back"></div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="db-card__arrow-svg"
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
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
