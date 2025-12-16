import type { Metadata } from "next"
import Link from "next/link"
import { Eye, Lock, Shield, CheckCircle2, Zap, X } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Halo 2: Obscuring Transaction Amounts",
  description:
    "Privacy isn't complete if it only hides who was involved. True financial privacy also means hiding how much was sent. Halo 2 closes that gap.",
  openGraph: {
    title: "Halo 2: Obscuring Transaction Amounts",
    description: "Proof without exposure. Precision without exposure. Seamless, built-in privacy.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halo 2: Obscuring Transaction Amounts",
    description: "In the world of Xcoin, the blockchain says yes or no — never how much.",
  },
}

const keyFeatures = [
  {
    icon: Lock,
    title: "Proof without exposure",
    description: "Halo 2 is a type of zero-knowledge proof — a mathematical technique that lets the blockchain verify a transaction is valid without knowing the amount involved. You can prove something happened, without revealing what it was.",
    detail: 'It works like a sealed envelope that says: "This payment is real, and the math checks out — but you\'re not allowed to look inside."',
    closing: "That means no one can tell if you sent 0.01 X or 1 million X. There's no way to distinguish large payments from small ones, and no way to match payments across time.",
  },
  {
    icon: Shield,
    title: "No trusted setup. No compromises.",
    description: "Many privacy systems rely on a \"trusted setup\" — an initial phase where someone generates secret keys that, if misused, could break the whole system.",
    closing: "Halo 2 doesn't require that. There's no backdoor. No central authority. No hidden risk. It uses recursive, hash-based techniques that can prove transactions at scale, securely and transparently.",
  },
  {
    icon: CheckCircle2,
    title: "Precision without exposure",
    description: "Halo 2 also enables range proofs — cryptographic checks that confirm the amount follows basic logic:",
    details: [
      "The amount is a number",
      "The amount isn't negative",
      "The amount doesn't exceed protocol limits",
    ],
    closing: "These checks confirm validity — without ever disclosing the actual amount.",
  },
]

const dangerousAssumptions = [
  "Are you wealthy?",
  "Are you being funded?",
  "Are you spending more than you earn?",
  "Are you connected to someone else making similar payments?",
]

export default function WhatIsHalo2Page() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/learning" position="top" />
      <BackButton fallbackHref="/learning" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Halo 2: Obscuring Transaction Amounts
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Privacy isn't complete if it only hides who was involved. <strong className="text-foreground">True financial privacy also means hiding how much was sent.</strong>
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Most blockchains — even many privacy-focused ones — still reveal transaction amounts. Anyone watching the chain can see how much money moved, even if they can't always tell between whom. This leaves patterns, clues, and vulnerabilities.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            Halo 2 closes that gap. Using a cutting-edge cryptographic system, Xcoin makes sure transaction amounts are as invisible as the participants themselves.
          </p>
        </div>

        {/* Key Features */}
        <div className="mt-20 mx-auto max-w-7xl space-y-16">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="rounded-2xl border border-border bg-card p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                  {feature.title}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-4">{feature.description}</p>
              {feature.detail && (
                <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border italic">
                  <p className="text-muted-foreground">{feature.detail}</p>
                </div>
              )}
              {feature.details && (
                <div className="mt-6 space-y-3">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{detail}</p>
                    </div>
                  ))}
                </div>
              )}
              {feature.closing && (
                <p className="mt-6 text-lg font-semibold text-foreground">{feature.closing}</p>
              )}
            </div>
          ))}
        </div>

        {/* Seamless, built-in privacy */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Seamless, built-in privacy
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              In Xcoin, Halo 2 works side-by-side with <Link href="/what-is-stealth-addresses" className="text-accent hover:text-accent/80 underline">stealth addresses</Link> and <Link href="/what-is-zk-starks" className="text-accent hover:text-accent/80 underline">zk-STARKs</Link> to ensure that every transaction is fully private — sender, receiver, and now amount.
            </p>
            <p className="text-lg font-semibold text-foreground">
              There's no configuration, no toggles, and no way to "accidentally" expose information. The system does it for you, automatically and by default.
            </p>
          </div>
        </div>

        {/* Why this matters */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why this matters
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Because if someone knows what you paid — even if they don't know who — they can still make dangerous assumptions:
            </p>
            <div className="space-y-3 mt-6">
              {dangerousAssumptions.map((assumption, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{assumption}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground mb-4">
              Halo 2 eliminates that visibility. It doesn't just obscure your balance — it makes the entire concept of financial transparency opt-in, not default.
            </p>
            <p className="text-xl font-[family-name:var(--font-heading)] font-bold text-foreground text-center mt-8">
              In the world of Xcoin, the blockchain says yes or no — never how much.
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
                href="/what-is-stealth-addresses"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Stealth Addresses
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

      </div>
    </div>
  )
}

