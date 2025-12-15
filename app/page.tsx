import Hero from "@/components/hero"
import CTA from "@/components/cta"
import DashboardSection from "@/components/dashboard-section"

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
