import type { Metadata } from "next"
import Link from "next/link"
import { Eye, Lock, Shield, Zap, Key, CheckCircle2 } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is a Stealth Address?",
  description:
    "A Stealth Address is a one-time-use, invisible blockchain address that hides the receiver's identity in every transaction.",
  openGraph: {
    title: "What is a Stealth Address?",
    description: "One-time-use addresses that hide the receiver's identity. Total receiver anonymity—built in, always on.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is a Stealth Address?",
    description: "Every transaction uses Stealth Addresses by default. No visible link between sender and receiver.",
  },
}

const keyFeatures = [
  {
    icon: Eye,
    title: "Receiver Privacy",
    description: "The recipient's real wallet address is never recorded on the blockchain.",
  },
  {
    icon: Zap,
    title: "Automatic & One-Time Use",
    description: "A new stealth address is generated for every transaction, even if sent to the same person.",
  },
  {
    icon: Shield,
    title: "Quantum-Secure (in Xcoin)",
    description: "Xcoin uses hash-based cryptography (like WOTS+) to protect stealth addresses from future quantum attacks.",
  },
  {
    icon: Key,
    title: "No Interaction Needed",
    description: "The receiver doesn't need to manually create the address—the sender creates it on their behalf, invisibly.",
  },
]

const howItWorksSteps = [
  "The sender uses the recipient's public stealth key to generate a unique, one-time address.",
  "Funds are sent to that address.",
  "Only the real recipient can detect and unlock the payment using their private key.",
  "On the blockchain, there's no visible link between the sender and receiver. No one else even knows who got paid.",
]

export default function WhatIsStealthAddressesPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/learning" position="top" />
      <BackButton fallbackHref="/learning" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is a Stealth Address?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A <strong className="text-foreground">Stealth Address</strong> is a one-time-use, invisible blockchain address that hides the receiver's identity in every transaction.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Instead of showing your real wallet address on-chain, the sender generates a unique stealth address just for that payment—making it impossible to link the transaction to you.
          </p>
        </div>

        {/* Key Features */}
        <div className="mt-20 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

        {/* Closing Statement */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              With Xcoin, every transaction uses Stealth Addresses by default.
            </p>
            <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              The result: total receiver anonymity—built in, always on.
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
                href="/learning/zero-knowledge-privacy"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Zero-Knowledge Privacy
              </Link>
              <Link
                href="/what-is-zk-starks"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                zk-STARKs
              </Link>
              <Link
                href="/what-is-wots-plus"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                WOTS+
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

