import type { Metadata } from "next"
import Link from "next/link"
import { Zap, Network, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "How Xcoin Handles 10000+ Transactions Per Second",
  description:
    "Most blockchains buckle under pressure. Xcoin breaks that pattern. It's not a queue. It's a web. And it moves differently.",
  openGraph: {
    title: "How Xcoin Handles 10000+ Transactions Per Second",
    description: "A network that grows in every direction. Parallelism + Proof = Performance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Xcoin Handles 10000+ Transactions Per Second",
    description: "It's not magic. It's math—applied differently.",
  },
}

const keyPoints = [
  {
    icon: Network,
    title: "A network that grows in every direction",
    description: "Instead of lining transactions up in a chain, Xcoin uses a DAG+ — a Directed Acyclic Graph where each transaction connects directly to others. No waiting for blocks. No fixed intervals. No wasted time.",
    detail: "Transactions confirm other transactions as they enter the network, expanding the graph outward in parallel. It's like adding branches to a tree — instead of stacking bricks.",
  },
  {
    icon: Lock,
    title: "Compression at scale",
    description: "To avoid flooding the chain with data, Xcoin bundles thousands of encrypted transactions into a single proof using zk-Rollups.",
    detail: "The network doesn't record every step — it records that all the steps were correct. The result? A blockchain that grows slowly, even while it processes fast.",
  },
  {
    icon: Zap,
    title: "Parallelism + Proof = Performance",
    description: "What makes this possible isn't just the structure — it's the cryptography behind it:",
    details: [
      "DAG+ lets transactions flow in parallel",
      "zk-Rollups reduce those flows to minimal, verifiable updates",
      "SEP Nodes coordinate everything through lightweight checkpoints",
    ],
    closing: "There's no mining, no block contention, no heavy consensus. Just honest traffic, checked and compressed in real time.",
  },
]

const whyItScales = [
  "Because Xcoin doesn't push transactions through a single bottleneck",
  "It spreads them out, proves them in batches, and moves forward without friction",
]

export default function HowXcoinHandles10000TPSPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/learning" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            How Xcoin Handles 10000+ Transactions Per Second
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Most blockchains buckle under pressure. The more users join, the slower they get. Fees spike, delays stack up, and every new transaction waits its turn in line.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            That's because traditional chains treat time like a queue: one block at a time, one after the other, forever.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            Xcoin breaks that pattern.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            It's not a queue. It's a web. And it moves differently.
          </p>
        </div>

        {/* Key Points */}
        <div className="mt-20 mx-auto max-w-7xl space-y-16">
          {keyPoints.map((point, index) => (
            <div key={index} className="rounded-2xl border border-border bg-card p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                  <point.icon className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                  {point.title}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-4">{point.description}</p>
              {point.detail && (
                <p className="text-muted-foreground mb-4">{point.detail}</p>
              )}
              {point.details && (
                <div className="mt-6 space-y-3">
                  {point.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{detail}</p>
                    </div>
                  ))}
                </div>
              )}
              {point.closing && (
                <p className="mt-6 text-lg font-semibold text-foreground">{point.closing}</p>
              )}
            </div>
          ))}
        </div>

        {/* Why it scales */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why it scales
            </h2>
            <div className="space-y-3 mt-6">
              {whyItScales.map((point, index) => (
                <p key={index} className="text-lg text-muted-foreground">
                  {point}
                </p>
              ))}
            </div>
            <p className="mt-8 text-xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              It's not magic. It's math — applied differently.
            </p>
          </div>
        </div>

        {/* Related Topics */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-4">
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/what-is-dag-plus"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                DAG+
              </Link>
              <Link
                href="/what-is-zk-rollups"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                zk-Rollups
              </Link>
              <Link
                href="/learning/scalability"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Scalability
              </Link>
              <Link
                href="/what-is-xxx-blockchain"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                What is the XXX Blockchain?
              </Link>
            </div>
          </div>
        </div>

        {/* Back Button - Bottom */}
        <div className="mt-16">
          <BackButton fallbackHref="/learning" position="bottom" />
        </div>
      </div>
    </div>
  )
}

