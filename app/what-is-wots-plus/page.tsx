import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Lock, Zap, Hash, CheckCircle2 } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is WOTS+?",
  description:
    "WOTS+ stands for Winternitz One-Time Signature Plus—a quantum-secure digital signature scheme that's simple, fast, and impossible to break, even by future quantum computers.",
  openGraph: {
    title: "What is WOTS+?",
    description: "A quantum-secure digital signature scheme that's simple, fast, and impossible to break.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is WOTS+?",
    description: "Quantum-resistant signatures built on hash functions only.",
  },
}

const keyFeatures = [
  {
    icon: Shield,
    title: "Quantum-Resistant",
    description: "WOTS+ uses hash functions only, which are immune to quantum attacks.",
  },
  {
    icon: Lock,
    title: "One-Time Use = Maximum Security",
    description: "Each key is used to sign only one message, making it impossible to reuse or forge.",
  },
  {
    icon: Zap,
    title: "Simple & Efficient",
    description: "The algorithm is lightweight—perfect for fast validation and low-resource devices.",
  },
  {
    icon: Hash,
    title: "Building Block for SPHINCS+",
    description: "WOTS+ is the core component that powers SPHINCS+, giving it both speed and post-quantum strength.",
  },
]

const howItWorksSteps = [
  "A hash-based public/private key pair is generated.",
  "The private key is used once to sign a message.",
  "The signature is verified using the public key.",
  "That key pair is then discarded—no reuse, no risk.",
]

const advantages = [
  "Never reusing keys",
  "Never exposing the private key",
  "Only using hash functions (no elliptic curves)",
]

export default function WhatIsWOTSPlusPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/learning" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is WOTS+?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            <strong className="text-foreground">WOTS+</strong> stands for <strong className="text-foreground">Winternitz One-Time Signature Plus</strong>—a quantum-secure digital signature scheme that's simple, fast, and impossible to break, even by future quantum computers.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            It's part of the <Link href="/what-is-sphincs-plus" className="text-accent hover:text-accent/80 underline">SPHINCS+</Link> signature system and is used to sign data without relying on vulnerable cryptography like RSA or ECC.
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

        {/* Why it matters */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why it matters
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Traditional crypto (like Bitcoin) uses reusable keys that quantum computers will eventually crack.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              WOTS+ avoids this completely by:
            </p>
            <div className="space-y-3 mt-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{advantage}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground">
              In Xcoin, WOTS+ ensures every signature is future-proof, tamper-proof, and quantum-secure.
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
                href="/learning/post-quantum-cryptography"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Post-Quantum Cryptography
              </Link>
              <Link
                href="/what-is-sphincs-plus"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                SPHINCS+
              </Link>
              <Link
                href="/quantum-safe"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Why Quantum-Safe Cryptography Matters
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

