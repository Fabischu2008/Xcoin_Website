import Hero from "@/components/hero"
import CTA from "@/components/cta"
import Link from "next/link"
import { Lock, Shield, Zap, Users, Globe, Leaf, User, Code2, Server } from "lucide-react"

const principles = [
  {
    icon: Lock,
    title: "Private by Default",
    description: "Complete transaction privacy protects user data and enables use cases in high-risk environments. A fundamental competitive advantage.",
    href: "/privacy",
  },
  {
    icon: Shield,
    title: "Quantum-Safe by Design",
    description: "Future-proof security with NIST-approved algorithms. Protects long-term value against emerging threats.",
    href: "/quantum-safe",
  },
  {
    icon: Zap,
    title: "Scalable Infrastructure",
    description: "DAG-based architecture enables thousands of transactions per second. Built for global adoption and real-world usage.",
    href: "/scalability",
  },
  {
    icon: Users,
    title: "Community-Governed",
    description: "XXX DAO ensures decentralized decision-making. Token holders control protocol evolution and treasury allocation.",
    href: "/governance",
  },
  {
    icon: Globe,
    title: "Decentralized Network",
    description: "Open validator participation with no privileged nodes. True decentralization reduces systemic risks and censorship.",
    href: "/network",
  },
  {
    icon: Leaf,
    title: "Sustainable Economics",
    description: "No inflation, no mining waste, minimal energy costs. Fixed 21M supply creates long-term value preservation.",
    href: "/sustainability",
  },
  {
    icon: User,
    title: "Fair Distribution",
    description: "No pre-mine, no private sale advantages. All 21M coins created in Genesis Block ensure equal opportunity.",
    href: "/member",
  },
  {
    icon: Code2,
    title: "Build-First Approach",
    description: "Technology-focused development before marketing. Substance over speculation creates sustainable value.",
    href: "/contributor",
  },
  {
    icon: Server,
    title: "Validator Economics",
    description: "Earn transaction fees by running nodes. Sustainable revenue model without inflation or token dilution.",
    href: "/validator",
  },
]

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

      {/* Principles Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight lg:text-4xl">
              Why Invest in Xcoin
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A long-term infrastructure project built on sustainable economics, future-proof technology, and community governance.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <Link
                key={principle.title}
                href={principle.href}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all group-hover:bg-accent/20 group-hover:scale-110">
                  <principle.icon className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-xl font-semibold transition-colors group-hover:text-accent">
                  {principle.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{principle.description}</p>
              </Link>
            ))}
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
