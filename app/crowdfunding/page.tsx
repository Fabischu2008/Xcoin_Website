import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Check, Zap, Shield, Rocket, Users, Coins, ArrowLeft } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Crowdfunding",
  description:
    "Join the XXX DAO crowdfunding campaign. All funds go directly to the DAO treasury. Invest in the world's first privacy-by-default, quantum-secure, validator-powered financial layer.",
  openGraph: {
    title: "Crowdfunding",
    description: "True decentralized funding — transparent, democratic, and community-led.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crowdfunding",
    description: "Join the revolution. Invest in XXX Tokens and shape the future of finance.",
  },
}

const developmentGoals = [
  "Developing the XXX Blockchain software",
  "Developing validator node install packages",
  "Launching the global XXX mainnet",
  "Securing integrations with Lotus Wallet and Global Exchange Platform (GEP)",
  "Deploying secure DAO voting infrastructure",
  "Building seamless payment and integration APIs for real-world adoption",
]

const investingBenefits = [
  "You choose your investment amount: minimum €100",
  "You receive XXX Tokens instantly, with no waiting period.",
  "You pay directly to the DAO wallet via crypto — no accounts, no KYC, no registration",
  "You lock in the fixed rate: 1 XXX Token = 10 Xcoins",
]

const earlyInvestorBenefits = [
  "No waiting. No restrictions. You get XXX Tokens instantly, with full flexibility to redeem, trade, or hold — on your terms.",
  "No dilution. No inflation. What you buy now is what you get. The supply is fixed, the rules are set, and no one can change them.",
  "Full DAO rights from day one. Every XXX Token equals one vote in XXX DAO. You have a voice in shaping the financial future — not just for Xcoin, but for the world it enables.",
  "Priority access to everything that follows. Voting power, governance roles, real influence. It all starts here.",
]

const noCompromises = [
  "Anonymous by default — no toggles, no tricks",
  "Immune to quantum attacks — future-proofed from day one",
  "Lightning fast — over 10,000 TPS using zk-Rollups and DAG",
  "Fully decentralized — no founders, no middlemen",
  "Environmentally clean — no mining, no waste",
]

function renderTextWithLinks(text: string, links?: Record<string, string>) {
  if (!links) return <span>{text}</span>

  const parts: (string | { text: string; href: string })[] = []
  let remaining = text

  for (const [key, href] of Object.entries(links)) {
    const index = remaining.indexOf(key)
    if (index !== -1) {
      if (index > 0) {
        parts.push(remaining.substring(0, index))
      }
      parts.push({ text: key, href })
      remaining = remaining.substring(index + key.length)
    }
  }
  
  if (remaining) {
    parts.push(remaining)
  }

  if (parts.length === 0 || (parts.length === 1 && typeof parts[0] === 'string')) {
    return <span>{text}</span>
  }

  return (
    <span>
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return <span key={index}>{part}</span>
        }
        return (
          <Link
            key={index}
            href={part.href}
            className="text-accent hover:text-accent/80 underline transition-colors"
          >
            {part.text}
          </Link>
        )
      })}
    </span>
  )
}

export default function CrowdfundingPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Button - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/overview" position="top" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Image with Content Overlay */}
        <div className="mx-auto max-w-6xl mb-12">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/xcoin_grid/crowdfunding.jpg"
              alt="Crowdfunding"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  Crowdfunding
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <p className="mt-6 text-lg text-muted-foreground">
            All funds raised go directly to the <strong className="text-foreground">XXX DAO</strong> treasury — not to a company, not to a founder, and not to a VC. The DAO controls all funds, and every major decision is made through on-chain governance. This is true decentralized funding — transparent, democratic, and community-led.
          </p>
        </div>

        {/* Funding Goal */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
            <div className="flex items-center gap-4 mb-4">
              <Coins className="h-8 w-8 text-accent" />
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                €6 Million Funding Goal
              </h2>
            </div>
            <p className="text-muted-foreground">
              XXX DAO is raising €6 million to complete development of the blockchain — the world's first privacy-by-default, quantum-secure, and validator-powered financial layer. Your support directly enables:
            </p>
          </div>
        </div>

        {/* Development Goals */}
        <div className="mt-12 mx-auto max-w-4xl">
          <ul className="space-y-3">
            {developmentGoals.map((goal, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors"
              >
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Investing is Simple */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            Investing is Simple — and Immediate
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {investingBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Invest Early */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            Why Invest Early?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            This is the ground floor — and the doors won't stay open forever.
          </p>
          <div className="space-y-4">
            {earlyInvestorBenefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors"
              >
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-xl border border-accent/30 bg-accent/5">
            <p className="text-lg font-semibold text-foreground mb-2">
              Claim your seat at the table — and secure your voice in creating the future of finance.
            </p>
            <Link
              href="/fund"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Get XXX Tokens now
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>

        {/* No Compromises */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-accent" />
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                No Compromises...
              </h2>
            </div>
            <ul className="space-y-3">
              {noCompromises.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{renderTextWithLinks(item, {
                    "zk-Rollups": "/what-is-zk-rollups",
                    "DAG": "/what-is-dag-plus",
                  })}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              Everything is governed on-chain.<br />
              Everything is open.
            </p>
          </div>
        </div>

        {/* Fair Launch */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="h-6 w-6 text-accent" />
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                Fair Launch...
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              There's no private round. No VC allocation. No secret deals.
            </p>
            <p className="text-muted-foreground mb-4">
              Every XXX Token is sold under the same conditions, first come, first served.
            </p>
            <div className="mt-6 space-y-2 text-muted-foreground">
              <p>You're not a spectator here.</p>
              <p>You're not a customer.</p>
              <p className="font-semibold text-foreground">
                You're a co-owner of the most advanced, privacy-secure crypto project ever built.
              </p>
            </div>
            <p className="mt-6 text-lg font-semibold text-foreground">
              This is your moment. Don't miss it.
            </p>
          </div>
        </div>

        {/* Why Invest in XXX Tokens Now */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            Why Invest in XXX Tokens Now?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Xcoin is a real world utility currency, a governance token, and a foundational asset in a fully decentralized financial system. Unlike hype-driven meme coins or speculative tokens, Xcoin has a real-world purpose, backed by breakthrough technology and a strong DAO governance model.
          </p>
          <p className="text-lg font-semibold text-foreground mb-8">
            Here's why you should invest, and why now is the right moment to do so:
          </p>

          {/* Limited Supply */}
          <div className="mt-8 p-6 rounded-xl border border-border bg-card">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
              Limited Supply...
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>The DAO is raising €6 million. Once that target is reached, no more XXX Tokens will be available.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>There is no second presale, no second round, and no token inflation — ever.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Every XXX Token sold is part of a strictly limited early issuance — separate from the fixed 21 million Xcoins. Once the crowdfunding goal is met, no additional XXX Tokens will ever be created.</span>
              </li>
            </ul>
          </div>

          {/* 1 XXX Token = 1 Xcoin at Launch */}
          <div className="mt-6 p-6 rounded-xl border border-accent/30 bg-accent/5">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
              1 XXX Token = 1 Xcoin at Launch
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Every XXX Token is redeemable 1:1 for real Xcoins the moment the Xcoin blockchain goes live.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Xcoin will launch at €10 per coin — meaning a €100 investment today yields €100 in future value (plus DAO power).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>That exchange is guaranteed by the DAO, and written into the protocol.</span>
              </li>
            </ul>
          </div>

          {/* Real Market Demand */}
          <div className="mt-6 p-6 rounded-xl border border-border bg-card">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
              Real Market Demand. Real Growth Potential.
            </h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Xcoin will launch on the Global Exchange Platform (GEP) and be fully tradable from day one.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>As the only quantum-secure, privacy-by-default, DAG-based coin in existence, demand is expected to rise sharply after launch, especially among traders, privacy advocates, and DeFi developers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Early investors benefit from price exposure without speculation risk — they lock in a guaranteed price of €10 per Xcoin, while others must buy on the open market.</span>
              </li>
            </ul>
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm font-semibold text-foreground mb-2">And here's the reality of most major launches:</p>
              <p className="text-sm text-muted-foreground mb-3">
                Large traders and crypto speculators often use bots to buy up massive volumes immediately after listing, pushing prices upward and limiting availability for regular users. This kind of activity frequently causes sharp price spikes, sometimes in just seconds after launch.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                If you wait until Xcoin hits the open market, you may end up paying significantly more for the same coins that early supporters acquired at a fixed, guaranteed rate.
              </p>
              <p className="text-sm font-semibold text-foreground">
                By securing XXX Tokens now, you bypass the chaos, lock in your price, and position yourself ahead of the curve — not behind it.
              </p>
            </div>
            <Link
              href="/fund"
              className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Get XXX Tokens now
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>

        {/* After Redemption */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
              After Redemption…
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Unlike most projects, governance does not end when tokens are redeemed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Even after converting XXX Tokens into Xcoins, the voting rights remain attached to the XXX Token itself.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Token holders can continue to propose upgrades, vote on treasury usage, approve validator applications, and shape the protocol's evolution.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>XXX Tokens retain their full governance power, and can still be traded or transferred with those rights attached.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Community */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-accent" />
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                Community...
              </h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>XXX DAO is more than a community — it's a self-governing economy.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Validators, developers, and holders all participate in a living ecosystem with no central authority.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>As a DAO member, you gain direct influence over how the network evolves — from fees and functionality to privacy standards and cross-chain integrations.</span>
              </li>
            </ul>
            <Link
              href="/governance"
              className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Learn more about governance
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>

        {/* Built for Utility */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-6 w-6 text-accent" />
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                Built for Utility...
              </h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Xcoin supports fast, anonymous, and ultra secure payments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>It's integrated directly into Lotus Wallet, and CREO with features like private swaps, quantum-safe messaging, view-key-based audits and more.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>The architecture is post-quantum secure, designed to withstand both regulatory pressure and technological disruption.</span>
              </li>
            </ul>
            <Link
              href="/privacy"
              className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Learn more about privacy features
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>

        {/* No Restrictions */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
              No Restrictions…
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>You can redeem, sell, hold, or use your XXX Tokens — anytime, any way you want.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>No vesting. No lockups. No participation limits.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Buy as many XXX Tokens as you choose — there's no cap per buyer.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Once the €6 million funding goal is reached, no more XXX Tokens will be minted or sold.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>When the Testnet goes live, XXX Token sales will end — permanently.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Bottom Line
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Investing in XXX Tokens isn't just a financial move.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              It's a vote for privacy, sovereignty, and next-generation crypto infrastructure.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              It's your chance to make a profit — and help shape the future of finance.
            </p>
            <p className="text-xl font-semibold text-foreground mb-2">
              But only while the tokens last.
            </p>
            <p className="text-xl font-semibold text-foreground mb-8">
              The window is open — but not for long.
            </p>
            <Link
              href="/fund"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
            >
              Get XXX Now
              <ArrowLeft className="h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>

      </div>

      {/* Back Button - Bottom */}
      <div className="w-full px-6 lg:px-8 pb-8">
        <BackButton fallbackHref="/overview" position="bottom" />
      </div>
    </div>
  )
}


