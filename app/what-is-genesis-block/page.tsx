import type { Metadata } from "next"
import Link from "next/link"
import { Coins, Shield, Zap, CheckCircle2, Leaf } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is a Genesis Block?",
  description:
    "The Genesis Block is the very first block in a blockchain. Xcoin mines 100% of its supply—21 million coins—at launch, in the Genesis Block.",
  openGraph: {
    title: "What is a Genesis Block?",
    description: "No inflation. No tricks. Just a clean, honest launch.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is a Genesis Block?",
    description: "The Genesis Block is where Xcoin begins—and where all 21 million coins are born.",
  },
}

const whyPremining = [
  {
    icon: Coins,
    title: "No Inflation",
    description: "New coins will never be created later. → What exists now is all that will ever exist.",
  },
  {
    icon: Shield,
    title: "No Mining Rewards or Staking Games",
    description: "Xcoin doesn't rely on miners or stakers. → Validators earn only transaction fees, not free coins.",
  },
  {
    icon: CheckCircle2,
    title: "Fair and Transparent Distribution",
    description: "Everyone knows the total supply from day one. → No secret emissions, no hidden wallets, no whales.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "No Proof-of-Work means no energy waste. → The network is green from the start.",
  },
  {
    icon: Zap,
    title: "Stable Economic Model",
    description: "Fixed supply creates scarcity, helps price discovery, and prevents inflation-based manipulation.",
  },
]

export default function WhatIsGenesisBlockPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/learning" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is a Genesis Block?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            The <strong className="text-foreground">Genesis Block</strong> is the very first block in a blockchain. It's where the entire network begins—block #0—the foundation for all future transactions and records.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            In most blockchains, coins are gradually created over time through mining or staking. But Xcoin does it differently.
          </p>
        </div>

        {/* Xcoin's Approach */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Xcoin's Approach: 21 Million Coins in the Genesis Block
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Xcoin mines 100% of its supply—21 million coins—at launch, in the Genesis Block. This is called a <strong className="text-foreground">premined fixed supply</strong>, and it's done for a very specific reason:
            </p>
          </div>
        </div>

        {/* Why Premining All Coins at Genesis? */}
        <div className="mt-20 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Why Premining All Coins at Genesis?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyPremining.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <reason.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{reason.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why It Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Most crypto projects slowly release coins over years—often favoring insiders, miners, or early stakers. Xcoin flips that model:
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">All coins exist from day one.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">The rules never change.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">The community governs how coins are used—not the protocol.</p>
              </div>
            </div>
            <p className="mt-8 text-xl font-[family-name:var(--font-heading)] font-bold text-foreground text-center">
              The Genesis Block is where Xcoin begins—
            </p>
            <p className="mt-4 text-xl font-[family-name:var(--font-heading)] font-bold text-foreground text-center">
              and where all 21 million coins are born.
            </p>
            <p className="mt-8 text-lg font-semibold text-foreground text-center">
              No inflation. No tricks. Just a clean, honest launch.
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
                href="/learning/genesis"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Genesis Block (Glossary)
              </Link>
              <Link
                href="/fund"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Fund
              </Link>
              <Link
                href="/learning/zero-inflation"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Zero Inflation
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
      </div>
    </div>
  )
}

