"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

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

export default function DashboardSection() {
  const [activeFilter, setActiveFilter] = useState("xcoin")

  const filteredItems = dashboardItems.filter((item) => item.category === activeFilter).slice(0, 9)

  return (
    <section className="relative mt-12 pb-24">
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
          transform: scale(1.1) !important;
          z-index: 10 !important;
        }

        .db-content__card:hover img {
          transform: rotateY(180deg) scaleX(-1) !important;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative border border-border rounded-2xl p-6 sm:p-8">
          {/* Privacy is Power Button */}
          <div className="mb-6 flex justify-end">
            <Link
              href="/community"
              className="relative inline-flex items-center justify-center gap-2 border-2 border-accent bg-accent px-[28px] py-[10px] sm:px-[35px] sm:py-[12px] text-sm sm:text-base font-semibold text-accent-foreground whitespace-nowrap min-w-[200px] sm:min-w-[250px] transition-all hover:scale-105"
            >
              <span>Privacy is Power</span>
            </Link>
          </div>

          <div className="flex flex-row gap-4 lg:gap-8">
            {/* Sidebar Navigation - Left side */}
            <aside className="w-16 sm:w-20 lg:w-[294px] flex-shrink-0">
              {/* Mobile: Current Category Indicator */}
              <div className="mb-3 lg:hidden">
                <div className="rounded-lg border border-accent/30 bg-accent/10 px-2.5 py-1.5 text-center">
                  <p className="text-[10px] font-semibold text-accent capitalize leading-tight">
                    {navItems.find((item) => item.id === activeFilter)?.label || "Xcoin"}
                  </p>
                </div>
              </div>

              {/* Desktop: Box around navigation */}
              <div className="hidden lg:block border border-border rounded-xl p-[21px] bg-card/50">
                <nav className="space-y-[5.25px]">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveFilter(item.id)}
                      className={`db-nav__item group flex w-full items-center justify-start gap-[15.75px] rounded-lg p-[15.75px] transition-all ${
                        activeFilter === item.id
                          ? "bg-accent/10 text-accent"
                          : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <div className="db-nav__icon flex h-[50px] w-[50px] items-center justify-center">
                        <div className="relative h-[32px] w-[32px]">
                          <Image
                            src="/xcoin-logo.png"
                            alt={item.label}
                            width={48}
                            height={48}
                            className="animate-spin [animation-duration:10000ms] object-contain"
                            unoptimized
                          />
                        </div>
                      </div>
                      <p className="text-[18.9px] font-semibold transition-colors duration-300 group-hover:text-cyan-400">
                        {item.label}
                      </p>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Mobile: Navigation without box - vertical */}
              <nav className="flex flex-col lg:hidden gap-2.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveFilter(item.id)}
                    className={`db-nav__item group flex items-center justify-center rounded-lg p-3 transition-all ${
                      activeFilter === item.id
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <div className="db-nav__icon flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
                      <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                        <Image
                          src="/xcoin-logo.png"
                          alt={item.label}
                          width={48}
                          height={48}
                          className="animate-spin [animation-duration:10000ms] object-contain"
                          unoptimized
                        />
                      </div>
                    </div>
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content Grid */}
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 gap-[21px] sm:gap-[31.5px] lg:grid-cols-3 lg:gap-[31.5px] w-full">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    data-category={item.category}
                    className="db-content__card group"
                  >
                    <Link href={item.href} className="block h-full w-full">
                      <div className="db-card__visual relative w-full overflow-hidden rounded-xl border border-border bg-card">
                        <div className="dash-res-card__visual-before absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                        <div className="relative aspect-video w-full flex items-center justify-center bg-gradient-to-br from-accent/10 via-background to-background overflow-hidden">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              loading="lazy"
                              quality={85}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
