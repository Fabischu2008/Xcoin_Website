import type { Metadata } from "next"
import Link from "next/link"
import { Hash, Zap, Shield, Lock, CheckCircle2 } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is Keccak-512?",
  description:
    "Keccak-512 is the hash function at the heart of Xcoin's cryptographic foundation. It transforms any input into a unique, fixed-length fingerprint that can't be reversed, forged, or faked.",
  openGraph: {
    title: "What is Keccak-512?",
    description: "The ultimate hash algorithm. Fast. Proven. Unbreakable.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Keccak-512?",
    description: "512 bits of strength. Quantum-safe by design. Used in production.",
  },
}

const whyItMatters = [
  "512 bits of strength: Making brute-force attacks practically impossible",
  "No backdoors: Built on simple, well-studied hash logic — not trapdoors or curves",
  "Quantum-safe by design: Resistant to future quantum attacks",
  "Used in production: Trusted by Ethereum (as Keccak-256), zk frameworks, and now Xcoin",
]

const useCases = [
  {
    icon: Lock,
    title: "Stealth address generation",
    description: "Keccak-512 secures the generation of one-time addresses for each transaction.",
  },
  {
    icon: Hash,
    title: "Internal proof structures",
    description: "Used within zero-knowledge proof systems to maintain integrity and security.",
  },
  {
    icon: Shield,
    title: "Integrity of encrypted metadata",
    description: "Ensures that encrypted transaction metadata remains tamper-proof.",
  },
  {
    icon: Zap,
    title: "Core parts of the zero-knowledge stack",
    description: "Fundamental component of Xcoin's zero-knowledge infrastructure.",
  },
]

export default function WhatIsKeccak512Page() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/learning" position="top" />
      <BackButton fallbackHref="/learning" position="bottom" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Keccak-512: The Ultimate Hash Algorithm
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Every blockchain runs on trust — and in cryptography, trust begins with the hash.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            <strong className="text-foreground">Keccak-512</strong> is the hash function at the heart of Xcoin's cryptographic foundation. It transforms any input — a key, a message, a transaction — into a unique, fixed-length fingerprint. That fingerprint can't be reversed, forged, or faked.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            No matter how complex the input, Keccak-512 distills it down to a 512-bit proof of authenticity — one that's lightning fast, collision-resistant, and quantum-resilient.
          </p>
        </div>

        {/* Built for zero-knowledge */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Built for zero-knowledge. And beyond.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Xcoin relies on <Link href="/what-is-zk-starks" className="text-accent hover:text-accent/80 underline">zero-knowledge proofs</Link> to preserve user privacy. But traditional hashes like SHA-256 slow things down and cost too much in proof systems. Keccak-512 is different. It's optimized for speed inside zk-circuits, reducing costs and keeping performance sharp — even at scale.
            </p>
            <p className="text-lg text-muted-foreground">
              It's also the algorithm behind SHA-3 — the official NIST standard — but with tweaks that make it even leaner for advanced cryptographic systems like <Link href="/what-is-zk-starks" className="text-accent hover:text-accent/80 underline">zk‑STARKs</Link> and <Link href="/what-is-zk-rollups" className="text-accent hover:text-accent/80 underline">zk-Rollups</Link>.
            </p>
          </div>
        </div>

        {/* Why it matters */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why it matters
            </h2>
            <div className="space-y-3 mt-6">
              {whyItMatters.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Keccak does in Xcoin */}
        <div className="mt-16 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            What Keccak does in Xcoin
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            In Xcoin, Keccak-512 secures:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <useCase.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{useCase.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg font-semibold text-foreground max-w-3xl mx-auto">
            It's not just a hash — it's the cryptographic glue that holds the protocol together.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <p className="text-xl font-semibold text-foreground">
              Fast. Proven. Unbreakable.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              That's why Keccak-512 is the default hash for Xcoin — now, and in the post-quantum future.
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
                href="/what-is-zk-rollups"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                zk-Rollups
              </Link>
              <Link
                href="/what-is-stealth-addresses"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Stealth Addresses
              </Link>
              <Link
                href="/what-is-poseidon-hash"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Poseidon Hash
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

