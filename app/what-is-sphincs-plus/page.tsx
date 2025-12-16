import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Lock, Zap, Hash, CheckCircle2 } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is SPHINCS+?",
  description:
    "SPHINCS+ is a quantum-secure digital signature algorithm designed to protect data—even from future quantum computers.",
  openGraph: {
    title: "What is SPHINCS+?",
    description: "A quantum-secure digital signature algorithm resistant to quantum computer attacks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is SPHINCS+?",
    description: "Post-quantum security standardized by NIST.",
  },
}

const keyFeatures = [
  {
    icon: Shield,
    title: "Post-Quantum Security",
    description: "Resistant to quantum algorithms like Shor's, which can break ECC and RSA.",
  },
  {
    icon: Hash,
    title: "Stateless & Hash-Based",
    description: "SPHINCS+ uses only hash functions (like SHA-3), which are simple, proven, and quantum-resistant by design.",
  },
  {
    icon: CheckCircle2,
    title: "Standardized by NIST",
    description: "SPHINCS+ is one of the first post-quantum signature schemes officially selected by NIST for future use.",
  },
  {
    icon: Zap,
    title: "No Special Hardware Needed",
    description: "Runs securely on regular devices—no mining rigs or quantum tech required.",
  },
]

export default function WhatIsSPHINCSPlusPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/learning" position="top" />
      <BackButton fallbackHref="/learning" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is SPHINCS+?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            <strong className="text-foreground">SPHINCS+</strong> is a quantum-secure digital signature algorithm designed to protect data—even from future quantum computers.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Most blockchains today use <strong className="text-foreground">elliptic curve cryptography (ECC)</strong>, which can be broken by quantum computers. SPHINCS+ replaces ECC with a new system based on hash functions—making it immune to those threats.
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

        {/* Why it matters */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why it matters
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Quantum computers will make most of the current blockchain systems obsolete. Private keys, signatures, even wallets could be exposed.
            </p>
            <p className="text-lg font-semibold text-foreground mb-6">
              SPHINCS+ stops that—before it starts.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              That's why Xcoin uses SPHINCS+ (and <Link href="/what-is-wots-plus" className="text-accent hover:text-accent/80 underline">WOTS+</Link>) for all signatures.
            </p>
            <p className="text-lg font-semibold text-foreground">
              It's not just secure today—it's secure for the next 50 years.
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
                href="/what-is-wots-plus"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                WOTS+
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

      </div>
    </div>
  )
}

