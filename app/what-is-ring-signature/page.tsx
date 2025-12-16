import type { Metadata } from "next"
import Link from "next/link"
import { Eye, Lock, Shield, Users, CheckCircle2 } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is a Ring Signature?",
  description:
    "A Ring Signature is a cryptographic method that lets a user sign a transaction anonymously within a group—so that no one can tell who actually signed it.",
  openGraph: {
    title: "What is a Ring Signature?",
    description: "Sender anonymity. Unlinkable transactions. No coordination needed.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is a Ring Signature?",
    description: "No sender, no traces, no leaks—ever.",
  },
}

const keyFeatures = [
  {
    icon: Eye,
    title: "Sender Anonymity",
    description: "The actual sender is mixed into a group of decoy signers—all equally likely to be the origin.",
  },
  {
    icon: Lock,
    title: "Unlinkable Transactions",
    description: "Transactions cannot be traced to a specific wallet, even with blockchain analysis.",
  },
  {
    icon: Users,
    title: "No Coordination Needed",
    description: "The sender doesn't need permission from the other group members—their public keys are used anonymously.",
  },
  {
    icon: Shield,
    title: "Double-Spend Protection",
    description: "With One-Time Linkable Ring Signatures (used in Xcoin), the network can still detect duplicate transactions without knowing who sent them.",
  },
]

const howItWorksSteps = [
  "The sender creates a group (a \"ring\") of possible signers, including themselves and others' public keys.",
  "They generate a ring signature that proves one of the group signed the transaction—but not which one.",
  "The network verifies the signature without ever knowing the sender's identity.",
]

export default function WhatIsRingSignaturePage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/learning" position="top" />
      <BackButton fallbackHref="/learning" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is a Ring Signature?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A <strong className="text-foreground">Ring Signature</strong> is a cryptographic method that lets a user sign a transaction anonymously within a group—so that no one can tell who actually signed it.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            It's like putting your signature in a pile with others: the transaction is proven valid, but the real signer stays hidden.
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
              In Xcoin, every transaction uses One-Time Linkable Ring Signatures by default.
            </p>
            <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              That means: no sender, no traces, no leaks—ever.
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
                href="/what-is-stealth-addresses"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Stealth Addresses
              </Link>
              <Link
                href="/what-is-zk-starks"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                zk-STARKs
              </Link>
              <Link
                href="/learning/zero-knowledge-privacy"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Zero-Knowledge Privacy
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

