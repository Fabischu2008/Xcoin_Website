import Link from "next/link"
import { ArrowRight, Shield, Zap, Lock } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src="/1208-compressed.mp4" type="video/mp4" />
        </video>
        {/* Overlay für bessere Textlesbarkeit */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-muted-foreground">Mainnet launching soon</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            The Future of <span className="text-accent">Private Finance</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            A truly private, quantum-secure, and community-governed financial network. Fixed supply of 21 million. No
            inflation. Zero-knowledge privacy by default.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#waitlist"
              className="flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90"
            >
              BuyXcoin
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/docs"
              className="flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Read the Whitepaper
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
            <div>
              <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-accent">21M</div>
              <div className="mt-1 text-sm text-muted-foreground">Fixed Supply</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-accent">0%</div>
              <div className="mt-1 text-sm text-muted-foreground">Inflation Rate</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-accent">10k+</div>
              <div className="mt-1 text-sm text-muted-foreground">TPS Capacity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
