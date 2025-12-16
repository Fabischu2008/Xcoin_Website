import type { Metadata } from "next"
import Link from "next/link"
import { Shield, X, AlertTriangle, CheckCircle2, Lock } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is a Trusted Setup?",
  description:
    "A Trusted Setup is a special initialization process used in some cryptographic systems. Xcoin does NOT use trusted setups—it relies on zk-STARKs and Halo 2, which are transparent, trustless, and quantum-secure.",
  openGraph: {
    title: "What is a Trusted Setup?",
    description: "No hidden keys, no central authorities, and no backdoors—ever.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is a Trusted Setup?",
    description: "Xcoin avoids trusted setups entirely, using transparent, trustless cryptography.",
  },
}

const keyPoints = [
  {
    icon: Lock,
    title: "Initial Configuration",
    description: "Trusted setups generate a hidden \"master key\" at the start of the system.",
  },
  {
    icon: AlertTriangle,
    title: "Trust Assumption",
    description: "You have to trust that the people who created the setup destroyed the secret parts—and didn't keep a copy.",
  },
  {
    icon: X,
    title: "Permanent Risk",
    description: "If the secret was compromised—even once—the system could be silently faked, forever.",
  },
]

const problems = [
  {
    icon: X,
    title: "Breaks Decentralization",
    description: "A small group holds too much power during setup.",
  },
  {
    icon: AlertTriangle,
    title: "Creates a Single Point of Failure",
    description: "If the setup is dishonest or hacked, any proof could be forged, and no one would know.",
  },
  {
    icon: Shield,
    title: "Not Transparent",
    description: "Even in well-documented setups, the public must trust the process—which goes against the zero-trust principle of cryptography.",
  },
]

export default function WhatIsNoTrustedSetupPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/cryptographic-building-blocks" position="top" />
      <BackButton fallbackHref="/cryptographic-building-blocks" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Shield className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl text-center mb-6">
            What is a Trusted Setup?
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-8">
            A <strong className="text-foreground">Trusted Setup</strong> is a special initialization process used in some cryptographic systems (like zk-SNARKs) to generate secret keys or parameters that allow zero-knowledge proofs to function.
          </p>
          <p className="text-lg font-semibold text-foreground text-center mb-12">
            The problem? If those secret parameters are ever leaked or misused, the entire system's security can be broken.
          </p>
        </div>

        {/* Key Points */}
        <div className="mt-16 mx-auto max-w-6xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Key Points
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {keyPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <point.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{point.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why It's a Problem */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8 text-center">
              Why It's a Problem
            </h2>
            <div className="space-y-6">
              {problems.map((problem) => (
                <div key={problem.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <problem.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How Xcoin Avoids This */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-accent/10 mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6 text-center">
              How Xcoin Avoids This
            </h2>
            <p className="text-lg text-muted-foreground mb-4 text-center">
              Xcoin does <strong className="text-foreground">NOT</strong> use trusted setups. It relies on <Link href="/what-is-zk-starks" className="text-accent hover:text-accent/80 underline">zk-STARKs</Link> and <Link href="/what-is-halo-2" className="text-accent hover:text-accent/80 underline">Halo 2</Link>, which are transparent, trustless, and quantum-secure.
            </p>
            <p className="text-xl font-semibold text-foreground text-center mt-6">
              That means: no hidden keys, no central authorities, and no backdoors—ever.
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
                href="/what-is-halo-2"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Halo 2
              </Link>
              <Link
                href="/cryptographic-building-blocks"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Cryptographic Building Blocks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

