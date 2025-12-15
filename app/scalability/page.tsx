import { Zap, Network, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import BackButton from "@/components/back-button"

export default function ScalabilityPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
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
          <source src="/1212-compressed.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/" />
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Zap className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Scalable for the Real World
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Thousands of transactions per second through advanced DAG-based parallel validation. Built to scale with global adoption.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Network className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">DAG Architecture</h3>
            <p className="mt-4 text-muted-foreground">
              Unlike traditional blockchains with sequential blocks, the Directed Acyclic Graph (DAG) allows transactions to confirm each other directly. This enables parallel validation and true scalability.
            </p>
            <ul className="mt-6 space-y-3">
              {["Parallel transaction processing", "No block size limits", "Scales with network usage", "Instant confirmations"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <TrendingUp className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">High Throughput</h3>
            <p className="mt-4 text-muted-foreground">
              The network is designed to handle thousands of transactions per second, making it suitable for everyday payments, microtransactions, and global commerce without congestion or high fees.
            </p>
            <ul className="mt-6 space-y-3">
              {["10,000+ TPS capacity", "Low transaction fees", "No network congestion", "Suitable for global scale"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold">Performance Metrics</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">10k+</div>
              <div className="mt-2 text-sm font-semibold">Transactions Per Second</div>
              <p className="mt-1 text-sm text-muted-foreground">Scalable to global demand</p>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">&lt;1s</div>
              <div className="mt-2 text-sm font-semibold">Confirmation Time</div>
              <p className="mt-1 text-sm text-muted-foreground">Instant finality</p>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-heading)] text-4xl font-bold text-accent">€0.01</div>
              <div className="mt-2 text-sm font-semibold">Average Fee</div>
              <p className="mt-1 text-sm text-muted-foreground">Low cost transactions</p>
            </div>
          </div>
        </div>

        {/* Learn More CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Learn More</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our comprehensive Learning Center to dive deeper into DAG architecture, scalability, and related concepts.
          </p>
          <Link
            href="/learning"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Visit Learning Center
          </Link>
        </div>
      </div>
    </div>
  )
}

