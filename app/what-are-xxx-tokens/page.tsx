import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Coins, Vote, Shield, CheckCircle2, Lock, Zap, ArrowLeft, ArrowRight, Check, Clock, Gift } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What are XXX Tokens?",
  description:
    "A token is a cryptographic proof of ownership. XXX Tokens prove that you own a real stake in the Xcoin ecosystem — with both financial value and governance rights.",
  openGraph: {
    title: "What are XXX Tokens?",
    description: "Value today, and power tomorrow. Each XXX Token gives you the right to redeem 1Xcoin at mainnet launch and governance rights.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What are XXX Tokens?",
    description: "XXX Tokens are limited, on-chain, and private. They give you something very few assets can offer.",
  },
}

const tokenRights = [
  {
    icon: Coins,
    title: "The right to redeem 1Xcoin at mainnet launch",
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
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/learning" position="top" />
      <BackButton fallbackHref="/learning" position="bottom" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Image with Content Overlay */}
        <div className="mx-auto max-w-6xl mb-12">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/img/xcoin_grid/box8.jpeg"
              alt="What are XXX Tokens?"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  What are XXX Tokens?
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl">
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

        {/* Early Access Opportunity */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
              This is your early access opportunity.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              This is not a promo. This is not a presale for whales. This is your direct path to owning a part of the next-generation financial platform, before it launches to the world.
            </p>
          </div>
        </div>

        {/* Token Pricing */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="text-4xl font-bold text-foreground">€10</div>
                <div className="text-2xl text-muted-foreground">/</div>
                <div className="text-4xl font-bold text-foreground">XXX Token</div>
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">
                Fixed minimum price at launch, guaranteed
              </p>
              <p className="text-lg text-muted-foreground">
                The protocol is offering a one-time release of XXX Tokens. 1 XXX Token = 1 Xcoin. In addition every XXX Token grants you exclusive access to the DAO, including governance rights, voting power, proposal access, and participation in key community decisions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mt-8">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Coins className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Costs €10 per XXX Token</h3>
                </div>
                <p className="text-sm text-muted-foreground">one-time investment for 1 Xcoin</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Redeemable for 1 Xcoin at launch</h3>
                </div>
                <p className="text-sm text-muted-foreground">fixed exchange rate guaranteed</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Guaranteed entry price of €10 per Xcoin</h3>
                </div>
                <p className="text-sm text-muted-foreground">no price volatility risk before launch</p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl border border-accent/30 bg-accent/5">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-foreground">Delivered instantly to your wallet</h3>
              </div>
              <p className="text-sm text-muted-foreground">automatic and secure token transfer</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6 text-center">
              Start Now. It's This Simple:
            </h2>
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Choose your investment amount</h3>
                  <p className="text-muted-foreground">(starting at €10 for 1 Xcoin)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Send crypto to the indicated wallet address</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Receive XXX Tokens to your wallet</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Done. You're in.</h3>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 rounded-xl border border-accent/30 bg-accent/5 text-center">
              <p className="text-lg font-semibold text-foreground">
                No KYC. No account. No name needed.
              </p>
              <p className="text-muted-foreground mt-2">
                Just you, your wallet, and your stake in the future of private finance
              </p>
            </div>
          </div>
        </div>

        {/* Why You'll Want to Be First */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why You'll Want to Be First.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              After launch, there will be no fixed prices, no guarantees — only raw market forces. The XXX Tokens sale ends. The €10 price tag disappears. Global demand begins.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Just look at history: Bitcoin launched under €1. Ethereum at a few euros. Today? Tens of thousands. Do you really think a quantum-secure, private-by-default upgrade to Bitcoin will still go for €10 once the world catches on? Probably not. And by then, your chance will be long gone.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8 text-center">
              Benefits
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Guaranteed launch price: €10 per Xcoin</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">1 XXX Token = 1 Xcoin at mainnet launch</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Full DAO access: voting rights, proposals, treasury decisions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Freedom: hold, sell, or redeem at your own pace</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Conversion */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6 text-center">
              Example Conversion
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Investment</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">XXX Tokens</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Xcoins</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 text-foreground font-semibold">€10</td>
                    <td className="py-4 px-4 text-foreground">1 XXX</td>
                    <td className="py-4 px-4 text-foreground">1 Xcoin</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 text-foreground font-semibold">€50</td>
                    <td className="py-4 px-4 text-foreground">5 XXX</td>
                    <td className="py-4 px-4 text-foreground">5 Xcoins</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-foreground font-semibold">€100</td>
                    <td className="py-4 px-4 text-foreground">10 XXX</td>
                    <td className="py-4 px-4 text-foreground">10 Xcoins</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 p-6 rounded-xl border border-accent/30 bg-accent/5">
              <p className="text-lg font-semibold text-foreground text-center">
                And the best part?
              </p>
              <p className="text-muted-foreground mt-2 text-center">
                After you redeem your XXX Tokens for Xcoins, you don't lose your governance rights. Your XXX tokens retain full voting power, proposal access, and community rights. Your XXX Tokens will be your key to XXX DAO, forever.
              </p>
            </div>
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

        {/* Ready to Act */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
              Ready to Act?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              This sale only exists for one reason: to give you a fair shot at something most people will only hear about when it's too late. First-come, first-served. When it's gone — it's gone. When Xcoin hits exchanges, you'll either be watching… or already holding. The choice is yours.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <p className="text-sm">Available from XXXXXXX XX, 2025</p>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              This is the only round. No KYC. No second chances.
            </p>
            <Link
              href="/fund"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
            >
              Get XXX Tokens now
              <ArrowRight className="h-5 w-5" />
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
      </div>
    </div>
  )
}

