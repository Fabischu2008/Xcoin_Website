import type { Metadata } from "next"
import Link from "next/link"
import { Zap, Coins, Eye, Lock, CheckCircle2, Shield } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is a zk-Rollup?",
  description:
    "A zero-knowledge-Rollup is a blockchain technology that bundles thousands of transactions into a single proof—making the network faster, cheaper, and more private.",
  openGraph: {
    title: "What is a zk-Rollup?",
    description: "Massive scalability, low fees, and zero-knowledge privacy—all in one solution.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is a zk-Rollup?",
    description: "Private, high-speed, low-cost payments that scale to millions of users.",
  },
}

const keyFeatures = [
  {
    icon: Zap,
    title: "Massive Scalability",
    description: "Instead of recording every transaction individually, a zk-Rollup compresses them into one cryptographic proof posted on-chain.",
  },
  {
    icon: Coins,
    title: "Low Fees",
    description: "Because the chain only needs to verify the proof—not each transaction—fees drop drastically.",
  },
  {
    icon: Eye,
    title: "Zero-Knowledge Privacy",
    description: "The proof verifies that all transactions followed the rules, but doesn't show who sent what, to whom, or how much.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Thousands of transactions can be validated in parallel, allowing for real-time performance at scale.",
  },
  {
    icon: Shield,
    title: "Immutable & Verifiable",
    description: "Anyone can independently verify that the proof is legitimate—without trusting third parties.",
  },
]

const howItWorksSteps = [
  "Off-chain, a group of transactions is processed.",
  "A zk-proof is generated to confirm they're all valid.",
  "That proof is posted to the blockchain.",
  "The chain accepts it—no need to publish the full transaction data.",
]

const blockchainProblems = [
  "High fees",
  "Slow speeds",
  "Public transaction data",
]

export default function WhatIsZKRollupsPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/learning" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is a zk-Rollup?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A <strong className="text-foreground">zero-knowledge-Rollup</strong> is a blockchain technology that bundles thousands of transactions into a single proof—making the network faster, cheaper, and more private.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            The <strong className="text-foreground">"zk"</strong> stands for zero-knowledge, meaning the proof confirms all transactions are valid without revealing any private data.
          </p>
        </div>

        {/* Key Features */}
        <div className="mt-20 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              How It Works (Simplified)
            </h2>
            <div className="space-y-4 mt-8">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why it matters */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why it matters
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Blockchains like Ethereum and Bitcoin struggle with:
            </p>
            <div className="space-y-3 mt-6">
              {blockchainProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground mb-4">
              zk-Rollups solve all three at once.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              In Xcoin, zk-Rollups are used together with <Link href="/what-is-zk-starks" className="text-accent hover:text-accent/80 underline">zk-STARKs</Link> and a <Link href="/what-is-dag-plus" className="text-accent hover:text-accent/80 underline">DAG architecture</Link>.
            </p>
            <p className="text-lg font-semibold text-foreground">
              The result: private, high-speed, low-cost payments that scale to millions of users.
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
                href="/what-is-zk-starks"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                zk-STARKs
              </Link>
              <Link
                href="/what-is-dag-plus"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                DAG+
              </Link>
              <Link
                href="/learning/zero-knowledge-proofs"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Zero-Knowledge Proofs
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

