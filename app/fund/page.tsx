import type { Metadata } from "next"
import TokenomicsChart from "@/components/tokenomics-chart"
import { Coins, TrendingUp, Lock, Users, ArrowRight, Check, Zap, Shield, Network, Eye } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Fund",
  description:
    "Your early access window to Xcoin. Fixed supply of 21 million XXX tokens. Zero inflation. Fair launch with no pre-mine. Get XXX Tokens now before launch.",
  openGraph: {
    title: "Fund",
    description:
      "Your direct path to owning the next-generation financial protocol — before it launches to the world.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fund",
    description: "Fixed supply of 21 million. Zero inflation. Fair launch. Get XXX Tokens now.",
  },
}

const tokenDetails = [
  {
    icon: Coins,
    title: "Fixed Supply",
    value: "21,000,000",
    description: "Total XXX tokens created in the Genesis Block. Never to be increased.",
  },
  {
    icon: TrendingUp,
    title: "Zero Inflation",
    value: "0%",
    description: "No block rewards or new token generation. Validators earn transaction fees only.",
  },
  {
    icon: Lock,
    title: "Initial Price",
    value: "€10",
    description: "Reference price per XXX Token during the first public auction phase.",
  },
  {
    icon: Users,
    title: "Fair Launch",
    value: "No Pre-mine",
    description: "All coins exist from the start and are distributed publicly.",
  },
]

const whyThisMatters = [
  {
    icon: Eye,
    title: "True privacy",
    description: "Your activity, identity, and assets are invisible by default",
  },
  {
    icon: Shield,
    title: "Quantum-proof security",
    description: "Immune to future supercomputer attacks",
  },
  {
    icon: Zap,
    title: "No mining, no inflation",
    description: "Energy-efficient and economically sound",
  },
  {
    icon: Network,
    title: "Massive scalability",
    description: "10,000+ transactions per second",
  },
  {
    icon: Users,
    title: "DAO-led",
    description: "No central control, no backdoors, no founders with veto power",
  },
]

const howItWorks = [
  "Buy XXX Tokens directly from this official Xcoin site",
  "Pay in Bitcoin or Monero",
  "Receive your tokens immediately via Polygon smart contract",
  "Redeem 1 XXX for 10 Xcoins after mainnet goes live",
]

export default function FundPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src="/1212-compressed.mp4" type="video/mp4" />
        </video>
        {/* Overlay für bessere Textlesbarkeit */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Fund
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            What if you could go back in time and buy Bitcoin before anyone knew its name? What if you had a second chance — but this time, the technology is stronger, the mission is clearer, and the playing field is finally fair?
          </p>
          <div className="mt-8 space-y-2">
            <p className="text-xl font-semibold text-foreground">Welcome to Xcoin.</p>
            <p className="text-xl font-semibold text-foreground">Welcome to your early access window.</p>
          </div>
          <p className="mt-6 text-lg text-muted-foreground">
            This is not a promo. This is not a presale for whales. This is your direct path to owning the next-generation financial protocol — before it launches to the world.
          </p>
        </div>

        {/* Why This Moment Matters */}
        <div className="mt-16 mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold mb-12">
            Why This Moment Matters
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyThisMatters.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            The vision is bold — but it's real, and it's already in motion. Now, the network needs one last thing before launch: <strong className="text-foreground">you</strong>.
          </p>
        </div>

        {/* What Is the Early Access Sale */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              What Is the Early Access Sale?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              To fund the launch of the Xcoin blockchain, the protocol is offering a one-time release of <strong className="text-foreground">XXX Tokens</strong> — your exclusive access pass to future Xcoins.
            </p>
            <div className="grid gap-4 md:grid-cols-2 mt-8">
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Costs €100</p>
                  <p className="text-sm text-muted-foreground">Redeemable for 10 Xcoins at launch</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Guaranteed entry price</p>
                  <p className="text-sm text-muted-foreground">€10 per Xcoin</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Delivered instantly</p>
                  <p className="text-sm text-muted-foreground">No waiting, no lockups</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">No accounts</p>
                  <p className="text-sm text-muted-foreground">No personal info. No KYC. No middlemen.</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center font-semibold text-foreground">
              This is the only round. No private sales. No insider allocations. No second chances.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8 text-center">
            How It Works
          </h2>
          <div className="space-y-4">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card"
              >
                <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{step}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-muted-foreground">
            Everything is decentralized. Fully verifiable. Unstoppable.
          </p>
        </div>

        {/* Why You'll Want to Be First */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why You'll Want to Be First
            </h2>
            <p className="text-muted-foreground mb-4">
              After launch, there will be no fixed prices, no guarantees — only raw market forces. The €10 price tag disappears. Early access ends. Global demand begins.
            </p>
            <p className="text-muted-foreground mb-4">
              Just look at history: Bitcoin launched under €1. Ethereum at a few euros. Today? Tens of thousands.
            </p>
            <p className="text-lg font-semibold text-foreground mb-6">
              Do you really think a quantum-secure, private-by-default upgrade to Bitcoin will still go for €10 once the world catches on?
            </p>
            <p className="text-muted-foreground mb-6">
              Probably not. And by then, your chance will be long gone.
            </p>
            <div className="p-6 rounded-xl border border-accent/30 bg-accent/5 mb-6">
              <p className="font-semibold text-foreground mb-3">With XXX Tokens, you lock in:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>The first Xcoins ever issued</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>A guaranteed fixed price of €10 per Xcoin only</span>
                </li>
              </ul>
            </div>
            <p className="text-muted-foreground mb-4">
              This is a limited supply opportunity that won't return.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">
              Ask yourself: If you had bought Bitcoin for €10, would you have sold — or built your future on it?
            </p>
            <p className="text-lg font-semibold text-foreground">
              This is your moment to decide again — only now, with a better blueprint.
            </p>
          </div>
        </div>

        {/* Start Now Section */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8 text-center">
            Start Now — It's This Simple:
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-6 rounded-xl border border-border bg-card">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">1.</span> Choose your investment amount (starting at €100 for 10 Xcoins)
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">2.</span> Send crypto to the indicated wallet address
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">3.</span> Receive XXX Tokens to your wallet
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">4.</span> Done. You're in.
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-muted-foreground">
            No KYC. No account. No name needed.<br />
            Just you, your wallet, and your stake in the future of private finance.
          </p>
        </div>

        {/* Token Details Section */}
        <div className="mt-20 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
              Token Details
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A simple and immutable monetary model designed for long-term stability and fair distribution.
            </p>
          </div>

          {/* Token Stats */}
          <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tokenDetails.map((detail) => (
              <div key={detail.title} className="rounded-2xl border border-border bg-card p-4 sm:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <detail.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="mt-4 font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold text-accent">
                  {detail.value}
                </div>
                <div className="mt-1 text-sm sm:text-base font-medium">{detail.title}</div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{detail.description}</p>
              </div>
            ))}
          </div>

          {/* Distribution Chart */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8 xl:p-12 overflow-visible">
              <TokenomicsChart />
            </div>
          </div>

          {/* Token Utility */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h2 className="text-center font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">XXX Token Utility</h2>
            <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                  Redemption Right
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold">1 XXX Token = 10 Xcoins</h3>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                  Each XXX Token entitles its holder to receive 10 Xcoins from the Genesis supply at mainnet launch.
                  Simple, fair, and transparent redemption at a guaranteed price of €10 per Xcoin.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                  Governance Right
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold">Full Voting Power</h3>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                  The same XXX Token grants full voting power within the XXX DAO. Participate in proposals, vote on
                  protocol changes, and shape the future of the network.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Act CTA */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Ready to Act?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              This page only exists for one reason: to give you a fair shot at something most people will only hear about when it's too late.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
                <Check className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Fixed supply</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
                <Check className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Transparent rules</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
                <Check className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">First-come, first-served</span>
              </div>
            </div>
            <p className="text-lg font-semibold text-foreground mb-8">
              When it's gone — it's gone.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              When Xcoin hits exchanges, you'll either be watching… or already holding. The choice is yours.
            </p>
            <Link
              href="/crowdfunding"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
            >
              Get XXX Tokens Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

