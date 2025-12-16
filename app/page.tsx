"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Hero from "@/components/hero"
import CTA from "@/components/cta"
import DashboardSection from "@/components/dashboard-section"
import { Check } from "lucide-react"

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

function FeatureCard({ text, direction, index, links }: { text: string; direction: string; index: number; links?: Record<string, string> | undefined }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Clear any existing timeout
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current)
            }
            // Staggered animation when entering
            timeoutRef.current = setTimeout(() => setIsVisible(true), index * 80)
          } else {
            // Hide immediately when leaving viewport
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current)
            }
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [index])

  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return "translateX(-150px) rotateY(-15deg)"
      case "right":
        return "translateX(150px) rotateY(15deg)"
      case "top":
        return "translateY(-150px) rotateX(15deg)"
      case "bottom":
        return "translateY(150px) rotateX(-15deg)"
      case "back":
        return "translateZ(-300px) scale(0.3) rotateY(45deg)"
      default:
        return "translateY(100px)"
    }
  }

  return (
    <div
      ref={cardRef}
      className="rounded-2xl border border-border bg-card p-6 transition-all duration-1000 ease-out hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
      style={{
        transform: isVisible
          ? "translateX(0) translateY(0) translateZ(0) scale(1) rotateX(0) rotateY(0)"
          : getInitialTransform(),
        opacity: isVisible ? 1 : 0,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 flex-shrink-0 mt-0.5">
          <Check className="h-5 w-5 text-accent" />
        </div>
        <p className="text-sm font-medium text-foreground leading-relaxed">
          {links && Object.keys(links).length > 0 ? renderTextWithLinks(text, links) : text}
        </p>
      </div>
    </div>
  )
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
              Why Xcoin Matters
            </h2>
            
            <div className="mt-12 grid gap-8 md:grid-cols-2 md:text-left">
              <p className="text-lg text-muted-foreground">
                Xcoin was built with one purpose: real, unstoppable privacy. While others follow trends, we built technology that anticipates a world where surveillance is the norm, not the exception.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're protecting your personal freedom, operating in high-risk environments, or simply tired of being watched, Xcoin gives you silence in a world of noise.
            </p>
          </div>

            <div className="mt-12 rounded-2xl border border-border bg-card overflow-hidden">
              <video
                controls
                playsInline
                preload="none"
                poster="/xcoin-vid-poster.jpg"
                className="w-full h-auto"
              >
                <source src="/xcoin-vid-compressed.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
                </div>
      </section>

      {/* Quote Section */}
      <section className="relative pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <p className="text-foreground">
                A privacy coin that finally<br />
                gets it right. Technically<br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
                    elegant.
                  </span>
                  <span className="absolute -inset-1 bg-accent/20 blur-xl -z-10 rounded-lg" />
                </span>
                <span className="text-foreground"> </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
                    Practically invisible.
                  </span>
                  <span className="absolute -inset-1 bg-accent/20 blur-xl -z-10 rounded-lg" />
                </span>
              </p>
            </blockquote>
            <p className="mt-8 text-base sm:text-lg text-muted-foreground italic">
              — Independent Crypto Auditor
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <DashboardSection />

      {/* Xcoin Features Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              Xcoin is built to finish what Bitcoin started — and fix what it couldn't
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto mb-16">
            {([
              { text: "Fully anonymous — no traceable IP addresses or wallet links", direction: "left" as const },
              { text: "Invisible to third parties — transactions can't be observed, linked, or monitored", direction: "right" as const },
              { text: "100% private transactions by default", direction: "top" as const },
              { text: "Zero metadata, no optional privacy toggles", direction: "bottom" as const },
              { text: "Mega-fast — supports thousands of transactions per second", direction: "left" as const },
              { text: "Low transaction fees, even under high network load", direction: "right" as const },
              { text: "Energy-efficient — no mining, no staking farms", direction: "top" as const },
              { text: "Fixed supply: 21 million coins — no inflation", direction: "bottom" as const, links: { "21 million coins": "/what-is-fixed-supply" } as Record<string, string> },
              { text: "AES-512 encryption & zk-STARKs for quantum-safe privacy", direction: "back" as const, links: { "AES-512 encryption": "/what-is-aes-512", "zk-STARKs": "/what-is-zk-starks" } as Record<string, string> },
              { text: "Fully decentralized DAO — no central control", direction: "left" as const, links: { "DAO": "/what-is-xxx-dao" } as Record<string, string> },
            ] as Array<{ text: string; direction: string; links?: Record<string, string> }>).map((feature, index) => (
              <FeatureCard key={index} text={feature.text} direction={feature.direction} index={index} links={feature.links} />
            ))}
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Xcoin isn't just another coin — it's a next-generation privacy cryptocurrency designed for total anonymity, quantum resistance, and real-world utility.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              The Xcoin blockchain is built on a unique foundation of cutting-edge innovations — including quantum-safe cryptography, zero-knowledge proofs, and breakthrough privacy technology.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Discover the <Link href="/cryptographic-building-blocks" className="text-accent hover:text-accent/80 underline">cryptographic building blocks</Link> that make Xcoin unstoppable.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight lg:text-4xl">
              How the Network Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Two connected layers working in harmony for privacy and governance.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Payment Layer
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-bold">XXX DAG Network</h3>
              <p className="mt-4 text-muted-foreground">
                Replaces traditional blockchain with a Directed Acyclic Graph. Transactions confirm each other directly
                and continuously, enabling instant confirmations, massive throughput, and true scalability.
              </p>
              <ul className="mt-6 space-y-3">
                {["Instant confirmations", "Parallel validation", "No mining or staking", "Energy efficient"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Governance Layer
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-bold">XXX DAO</h3>
              <p className="mt-4 text-muted-foreground">
                The democratic part of the ecosystem. Allows the community to propose and vote on future developments,
                funding, or rules. Decisions are made collectively rather than by a company.
              </p>
              <ul className="mt-6 space-y-3">
                {["Community proposals", "Democratic voting", "Treasury management", "Protocol upgrades"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
