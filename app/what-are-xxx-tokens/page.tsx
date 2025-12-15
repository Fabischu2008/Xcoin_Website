import type { Metadata } from "next"
import Link from "next/link"
import { Coins, Vote, Shield, CheckCircle2, Lock, Zap, ArrowLeft } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What are XXX Tokens? | Xcoin",
  description:
    "A token is a cryptographic proof of ownership. XXX Tokens prove that you own a real stake in the Xcoin ecosystem — with both financial value and governance rights.",
  openGraph: {
    title: "What are XXX Tokens? | Xcoin",
    description: "Value today, and power tomorrow. Each XXX Token gives you the right to redeem 10 Xcoins at mainnet launch and governance rights.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What are XXX Tokens? | Xcoin",
    description: "XXX Tokens are limited, on-chain, and private. They give you something very few assets can offer.",
  },
}

const tokenRights = [
  {
    icon: Coins,
    title: "The right to redeem 10 Xcoins at mainnet launch",
  },
  {
    icon: Vote,
    title: "The right to vote on proposals, upgrades, and treasury decisions",
  },
  {
    icon: Shield,
    title: "The right to submit your own proposals to the XXX DAO",
  },
]

const governanceDecisions = [
  "Protocol changes",
  "Budget allocations",
  "Validator elections",
  "Ecosystem partnerships",
  "Any future DAO initiatives",
]

export default function WhatAreXXXTokensPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/learning" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What are XXX Tokens?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A token is a cryptographic proof of ownership. It cannot be faked, duplicated, or forged. <strong className="text-foreground">XXX Tokens</strong> prove that you own a real stake in the Xcoin ecosystem — with both financial value and governance rights. They are issued by <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">XXX DAO</Link>, verifiable on-chain, and fully under your control.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            If you hold XXX Tokens, the network recognizes you as a verified participant. You don't need to register. You don't need permission. Your wallet is your identity. The token is your proof.
          </p>
        </div>

        {/* Token Rights */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Each XXX Token gives you:
            </h2>
            <div className="space-y-4">
              {tokenRights.map((right, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <right.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-lg text-muted-foreground pt-2">{right.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Value Today, Power Tomorrow
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              At launch, 1 Xcoin will be worth €10.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">
              That means each XXX Token gives you €100 in immediate redeemable value — guaranteed.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Once Xcoin hits the open market, prices may rise fast. Early token holders lock in the best rate.
            </p>
            <p className="text-lg font-semibold text-foreground">
              XXX Tokens are limited, on-chain, and private. They give you something very few assets can offer: value today, and power tomorrow.
            </p>
          </div>
        </div>

        {/* Governance Power */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Governance Power
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              XXX Tokens are governance tokens. That means they grant control — not just access.
            </p>
            <p className="text-lg font-semibold text-foreground mb-6">
              If you hold XXX Tokens, you help decide what happens to Xcoin next.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              This includes:
            </p>
            <div className="space-y-3 mt-6">
              {governanceDecisions.map((decision, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{decision}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-xl border border-border bg-card">
              <p className="text-muted-foreground mb-2">
                Voting is public, tamper-proof, and executed on-chain.
              </p>
              <p className="text-muted-foreground mb-2">
                Each token equals one vote.
              </p>
              <p className="text-muted-foreground mb-2">
                If you hold 1 token, you cast 1 vote.
              </p>
              <p className="text-muted-foreground mb-4">
                If you hold 100 tokens, you cast 100 votes.
              </p>
              <p className="text-lg font-semibold text-foreground">
                There is no minimum. No delegation required. Even with a single token, you have the right to vote — and the right to propose. No central authority. No big-tech. Just rules written in code — and enforced by token holders.
              </p>
            </div>
          </div>
        </div>

        {/* Fixed Supply */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Fixed Supply
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              There is a hard cap on the number of XXX Tokens. Once reached, no new tokens will ever be minted. No inflation. No dilution. That means Xcoin governance power becomes more scarce over time — especially as more users join the community. Each token holds its full weight, permanently. Learn more about <Link href="/what-is-fixed-supply" className="text-accent hover:text-accent/80 underline">Fixed Supply</Link>.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              XXX Tokens are only available for a limited time through this official Xcoin Crowdfunding website. There are no insider allocations. No founder reserves. No VC carve-outs.
            </p>
            <p className="text-lg font-semibold text-foreground mb-8">
              Without XXX Tokens, you don't get launch-rate Xcoins. Without XXX Tokens, you don't get a vote in the future of the protocol.
            </p>

            {/* 21 Million Xcoins */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
                21 Million Xcoins
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                All 21 million Xcoins are minted in the <Link href="/what-is-genesis-block" className="text-accent hover:text-accent/80 underline">Genesis Block</Link>—with no mining, no inflation, and no future coin creation.
              </p>
              <p className="text-lg font-semibold text-foreground mb-6">
                But who decides what happens to those coins?
              </p>
              <p className="text-lg font-semibold text-foreground mb-6">
                Answer: the <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">DAO</Link>.
              </p>
            </div>

            {/* What is the DAO? */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
                What is the DAO?
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">XXX DAO</Link> (Decentralized Autonomous Organization) is the community-run governance system behind Xcoin.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                It controls how coins are used, distributed, or reserved — with no central authority, no founders holding the keys, and no corporate manipulation.
              </p>
            </div>

            {/* What the DAO Controls */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
                What the DAO Controls
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">Initial Distribution</h4>
                  <p className="text-muted-foreground">
                    The DAO allocates the first public coin supply (e.g. exchange listings, liquidity pools, grants).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">Treasury Management</h4>
                  <p className="text-muted-foreground mb-2">
                    Coins held by the DAO can be used to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Fund development</li>
                    <li>Support integrations</li>
                    <li>Reward validators</li>
                    <li>Build the ecosystem</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">Budget Proposals</h4>
                  <p className="text-muted-foreground">
                    Anyone can propose how to spend DAO funds.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    → Proposals are voted on by token holders using on-chain tools like Snapshot or Tally.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">Transparency & Oversight</h4>
                  <p className="text-muted-foreground">
                    Every decision, vote, and transaction is visible on-chain—fully auditable by the public.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">No Central Control</h4>
                  <p className="text-muted-foreground">
                    Coins cannot be moved without DAO approval. There are no privileged wallets or hidden powers.
                  </p>
                </div>
              </div>
            </div>

            {/* Why This Matters */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
                Why This Matters
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Prevents abuse or insider dumping</li>
                <li>Aligns incentives with long-term community growth</li>
                <li>Makes Xcoin resilient, adaptive, and truly decentralized</li>
              </ul>
              <p className="text-lg font-semibold text-foreground mt-6">
                The 21 million coins don't belong to founders or funds.
              </p>
              <p className="text-lg font-semibold text-foreground">
                They belong to the community—and the DAO makes that real.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
            <p className="text-xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              If you believe in private, unstoppable digital money — this is your chance to get in at the start. With value. With rights. With a say in what comes next.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
              Ready to Get XXX Tokens?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the crowdfunding campaign and secure your stake in the future of private finance.
            </p>
            <Link
              href="/fund"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
            >
              Get XXX Tokens
              <ArrowLeft className="h-5 w-5 rotate-180" />
            </Link>
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
                href="/crowdfunding"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Crowdfunding
              </Link>
              <Link
                href="/what-is-xxx-dao"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                XXX DAO
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

