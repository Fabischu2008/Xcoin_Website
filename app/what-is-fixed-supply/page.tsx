import type { Metadata } from "next"
import Link from "next/link"
import { Coins, Users, Vote, FileText, Shield, CheckCircle2 } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is Fixed Supply?",
  description:
    "All 21 million Xcoins are minted in the Genesis Block—with no mining, no inflation, and no future coin creation. The DAO controls how coins are used, distributed, or reserved.",
  openGraph: {
    title: "What is Fixed Supply?",
    description: "The 21 million coins don't belong to founders or funds. They belong to the community—and the DAO makes that real.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Fixed Supply?",
    description: "No central authority. No founders holding the keys. No corporate manipulation.",
  },
}

const daoControls = [
  {
    icon: Coins,
    title: "Initial Distribution",
    description: "The DAO allocates the first public coin supply (e.g. exchange listings, liquidity pools, grants).",
  },
  {
    icon: FileText,
    title: "Treasury Management",
    description: "Coins held by the DAO can be used to:",
    items: ["Fund development", "Support integrations", "Reward validators", "Build the ecosystem"],
  },
  {
    icon: Vote,
    title: "Budget Proposals",
    description: "Anyone can propose how to spend DAO funds.",
    detail: "→ Proposals are voted on by token holders using on-chain tools like Snapshot or Tally.",
  },
  {
    icon: Shield,
    title: "Transparency & Oversight",
    description: "Every decision, vote, and transaction is visible on-chain—fully auditable by the public.",
  },
  {
    icon: Users,
    title: "No Central Control",
    description: "Coins cannot be moved without DAO approval. There are no privileged wallets or hidden powers.",
  },
]

const whyItMatters = [
  "Prevents abuse or insider dumping",
  "Aligns incentives with long-term community growth",
  "Makes Xcoin resilient, adaptive, and truly decentralized",
]

export default function WhatIsFixedSupplyPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/learning" position="top" />
      <BackButton fallbackHref="/learning" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            21 Million Xcoins
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            All 21 million Xcoins are minted in the <Link href="/what-is-genesis-block" className="text-accent hover:text-accent/80 underline">Genesis Block</Link>—with no mining, no inflation, and no future coin creation.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            But who decides what happens to those coins?
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            Answer: the <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">DAO</Link>.
          </p>
        </div>

        {/* What is the DAO? */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              What is the DAO?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">XXX DAO</Link> (Decentralized Autonomous Organization) is the community-run governance system behind Xcoin.
            </p>
            <p className="text-lg text-muted-foreground">
              It controls how coins are used, distributed, or reserved — with no central authority, no founders holding the keys, and no corporate manipulation.
            </p>
          </div>
        </div>

        {/* What the DAO Controls */}
        <div className="mt-16 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            What the DAO Controls
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {daoControls.map((control) => (
              <div
                key={control.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <control.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{control.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{control.description}</p>
                {control.items && (
                  <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    {control.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {control.detail && (
                  <p className="mt-3 text-sm text-muted-foreground">{control.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why This Matters
            </h2>
            <div className="space-y-3 mt-6">
              {whyItMatters.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground">
              The 21 million coins don't belong to founders or funds.
            </p>
            <p className="mt-4 text-lg font-semibold text-foreground">
              They belong to the community—and the DAO makes that real.
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
                href="/what-is-genesis-block"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Genesis Block
              </Link>
              <Link
                href="/what-is-xxx-dao"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                XXX DAO
              </Link>
              <Link
                href="/what-are-xxx-tokens"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                XXX Tokens
              </Link>
              <Link
                href="/learning/zero-inflation"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Zero Inflation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

