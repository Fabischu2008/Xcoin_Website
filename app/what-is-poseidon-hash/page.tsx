import type { Metadata } from "next"
import Link from "next/link"
import { Zap, Shield, Lock, Settings, CheckCircle2 } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is Poseidon Hash?",
  description:
    "Poseidon is a modern hash function designed specifically for use in zero-knowledge proof systems like zk-Rollups and zk-STARKs.",
  openGraph: {
    title: "What is Poseidon Hash?",
    description: "ZK-friendly design. Fast in proofs, slow to break. Post-quantum ready.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Poseidon Hash?",
    description: "Ensuring that every private transaction is lightweight, fast, and quantum-secure.",
  },
}

const keyFeatures = [
  {
    icon: Zap,
    title: "ZK-Friendly Design",
    description: "Poseidon is optimized for use inside arithmetic circuits — ideal for zk-STARKs.",
  },
  {
    icon: Shield,
    title: "Fast in Proofs, Slow to Break",
    description: "It reduces the time and size of zero-knowledge proofs, but still maintains strong cryptographic security.",
  },
  {
    icon: Lock,
    title: "Post-Quantum Ready",
    description: "Based on hash functions, not elliptic curves—safe from quantum attacks.",
  },
  {
    icon: Settings,
    title: "Flexible & Efficient",
    description: "Poseidon can be customized for different field sizes and applications, giving developers more control.",
  },
]

const improvements = [
  "Proof size",
  "Proof generation time",
  "Computation cost",
]

export default function WhatIsPoseidonHashPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/learning" position="top" />
      <BackButton fallbackHref="/learning" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is Poseidon Hash?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            <strong className="text-foreground">Poseidon</strong> is a modern hash function designed specifically for use in zero-knowledge proof systems like <Link href="/what-is-zk-rollups" className="text-accent hover:text-accent/80 underline">zk-Rollups</Link> and <Link href="/what-is-zk-starks" className="text-accent hover:text-accent/80 underline">zk-STARKs</Link>.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Unlike older general-purpose hashes (like SHA-2 or SHA-3), Poseidon is built to be extremely efficient inside zk-proofs— which means faster, cheaper, and smaller proofs.
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

        {/* Why It Matters */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why It Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Traditional hash functions like SHA-256 are slow and processor intensive inside zk-proofs. Poseidon cuts down:
            </p>
            <div className="space-y-3 mt-6">
              {improvements.map((improvement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{improvement}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground">
              In Xcoin, Poseidon is used as part of its zero-knowledge infrastructure—
              ensuring that every private transaction is lightweight, fast, and quantum-secure.
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
                href="/learning/post-quantum-cryptography"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Post-Quantum Cryptography
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

