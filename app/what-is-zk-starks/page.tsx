import type { Metadata } from "next"
import Link from "next/link"
import { Lock, Shield, Zap, CheckCircle2, Eye } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is zk-STARK?",
  description:
    "zk-STARK stands for Zero-Knowledge Scalable Transparent Argument of Knowledge. A next-generation cryptographic technology that lets you prove something is true—without revealing any details.",
  openGraph: {
    title: "What is zk-STARK?",
    description: "Zero-knowledge proofs that enable private, anonymous payments without revealing transaction details.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is zk-STARK?",
    description: "Untraceable, unstoppable, and future-proof privacy technology.",
  },
}

const keyBenefits = [
  {
    icon: Eye,
    title: "Zero-Knowledge",
    description: "Transactions are proven valid without showing any data.",
    detail: "Perfect for private, anonymous payments.",
  },
  {
    icon: Shield,
    title: "No Trusted Setup",
    description: "Unlike zk-SNARKs (used by Zcash), zk-STARKs don't require a secret initial configuration.",
    detail: "No central point of failure. No hidden risks.",
  },
  {
    icon: Lock,
    title: "Quantum-Resistant",
    description: "zk-STARKs are built with hash-based cryptography, making them secure even against future quantum computer attacks.",
  },
  {
    icon: Zap,
    title: "Highly Scalable",
    description: "They can prove thousands of transactions in a single proof, dramatically reducing blockchain load and fees.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent and Auditable",
    description: "The math is public and verifiable—no need to trust a third party.",
  },
]

const howItWorksSteps = [
  "Instead of recording full transaction data, zk-STARK creates a cryptographic proof that a valid transaction occurred.",
  "That proof is posted on the blockchain, not the actual transaction details.",
  "The network accepts the proof because:",
]

const proofReasons = [
  "It confirms the rules were followed",
  "It can't be faked",
  "It reveals nothing about the actual data",
]

export default function WhatIsZKSTARKSPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/learning" position="top" />
      <BackButton fallbackHref="/learning" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is zk-STARK?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            <strong className="text-foreground">zk-STARK</strong> stands for <strong className="text-foreground">Zero-Knowledge Scalable Transparent Argument of Knowledge</strong>. It's a next-generation cryptographic technology that lets you prove something is true—without revealing any details.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            In the context of blockchain, zk-STARKs allow transactions to be fully validated without exposing the sender, receiver, or amount.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="mt-20 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Key Benefits
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keyBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{benefit.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{benefit.description}</p>
                {benefit.detail && (
                  <p className="mt-2 text-sm font-medium text-accent">→ {benefit.detail}</p>
                )}
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
                <p key={index} className="text-muted-foreground">
                  {step}
                </p>
              ))}
              <div className="mt-6 space-y-3 pl-4 border-l-2 border-accent/30">
                {proofReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              zk-STARKs are the backbone of Xcoin's privacy.
            </p>
            <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              Untraceable, unstoppable, and future-proof.
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
                href="/learning/zero-knowledge-proofs"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Zero-Knowledge Proofs
              </Link>
              <Link
                href="/what-is-zk-rollups"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                zk-Rollups
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

