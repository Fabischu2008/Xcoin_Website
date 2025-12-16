import type { Metadata } from "next"
import Link from "next/link"
import { Users, Vote, Coins, Settings, Shield, Code, Zap, CheckCircle2 } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is XXX DAO?",
  description:
    "A DAO is a Decentralized Autonomous Organization. No company, no CEO, no boardroom—just rules written in code, enforced by token holders.",
  openGraph: {
    title: "What is XXX DAO?",
    description: "Decentralized, on-chain governance. Decisions made transparently, by vote, executed by smart contracts.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is XXX DAO?",
    description: "Code > People. Real decentralization—not just marketing claims.",
  },
}

const daoControls = [
  {
    icon: Zap,
    title: "Protocol upgrades",
  },
  {
    icon: Coins,
    title: "Budget allocations",
  },
  {
    icon: Users,
    title: "Validator elections",
  },
  {
    icon: Shield,
    title: "Ecosystem partnerships",
  },
  {
    icon: Settings,
    title: "DAO structure and governance rules",
  },
]

export default function WhatIsXXXDAOPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/learning" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is XXX DAO?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A <strong className="text-foreground">DAO</strong> is a <strong className="text-foreground">Decentralized Autonomous Organization</strong>. That means: no company, no CEO, no boardroom — just rules written in code, enforced by token holders. It's not run by management. It's run by the community. <strong className="text-foreground">It's run by you.</strong>
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            A DAO replaces centralized control with decentralized, on-chain governance. It removes the need for trust in people — and replaces it with trust in code and community. It's a system where decisions are made transparently, by vote, and executed by smart contracts — without the influence from governments, authorities and big-tech.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            XXX DAO governs everything that happens in the Xcoin ecosystem. It is the highest authority in the protocol.
          </p>
        </div>

        {/* What the DAO Controls */}
        <div className="mt-20 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            What the DAO Controls
          </h2>
          <div className="mx-auto max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8 text-center">
              The DAO holds and controls the entire protocol treasury. It decides how funds are spent, what gets built, and who gets supported.
            </p>
            <p className="text-lg font-semibold text-foreground mb-8 text-center">
              This includes:
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {daoControls.map((control) => (
                <div
                  key={control.title}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  <control.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{control.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-2xl border border-accent/30 bg-accent/5 text-center">
              <p className="text-muted-foreground mb-2">
                Every vote is public. Every proposal is verifiable. Once passed, decisions are executed automatically — or via multisig, with elected signers from the community.
              </p>
              <p className="text-lg font-semibold text-foreground">
                You don't need permission to submit a proposal. You just need XXX Tokens.
              </p>
            </div>
          </div>
        </div>

        {/* Code > People */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                Code &gt; People
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              The DAO is built on smart contracts. Once deployed, no one — not developers, not validators, not insiders — can change the rules without a vote. Power rests entirely with XXX Token holders.
            </p>
            <p className="text-lg font-semibold text-foreground">
              That means real decentralization — not just marketing claims.
            </p>
          </div>
        </div>

        {/* DAO = Direction */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                DAO = Direction
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              The DAO doesn't run day-to-day operations. It decides direction. It sets priorities, allocates resources, and ensures that Xcoin stays censorship-resistant, user-driven, and private by default.
            </p>
            <p className="text-lg font-semibold text-foreground">
              If the protocol evolves, it does so by vote — not by fiat. The DAO is how change happens — and how it stays legitimate.
            </p>
          </div>
        </div>

        {/* Your Role in the DAO */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Your Role in the DAO
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Holding XXX Tokens gives you a vote in everything the DAO controls. <strong className="text-foreground">One token = one vote.</strong> No gatekeepers. No tiers. You can submit proposals. You can vote on them. You can help lead the direction of Xcoin — starting now.
            </p>
            <div className="mt-8 p-6 rounded-xl border border-accent/30 bg-accent/5">
              <p className="text-xl font-semibold text-foreground text-center">
                With XXX Tokens, you're a decision-maker. Without them, you're just a user.
              </p>
            </div>
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
                href="/power-in-the-hands-of-the-community"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Power in the Hands of the Community
              </Link>
              <Link
                href="/the-power-of-xxx-dao-members"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                The Power of XXX DAO Members
              </Link>
              <Link
                href="/crowdfunding"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Crowdfunding
              </Link>
              <Link
                href="/learning/xxx-dao"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                XXX DAO (Glossary)
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

