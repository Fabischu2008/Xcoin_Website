import type { Metadata } from "next"
import TokenomicsChart from "@/components/tokenomics-chart"
import { Coins, TrendingUp, Lock, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tokenomics",
  description:
    "A simple and immutable monetary model designed for long-term stability and fair distribution. Fixed supply of 21 million XXX tokens. Zero inflation. Fair launch with no pre-mine.",
  openGraph: {
    title: "Tokenomics | Xcoin",
    description:
      "A simple and immutable monetary model designed for long-term stability and fair distribution. Fixed supply of 21 million XXX tokens.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokenomics | Xcoin",
    description: "Fixed supply of 21 million. Zero inflation. Fair launch with no pre-mine.",
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

export default function TokenomicsPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-150 origin-center"
        >
          <source src="/1216-compressed.mp4" type="video/mp4" />
        </video>
        {/* Overlay für bessere Textlesbarkeit */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Tokenomics
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
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
          <h2 className="text-center font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">Token Distribution</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm sm:text-base text-muted-foreground px-4">
            Transparent allocation ensuring long-term sustainability and community ownership.
          </p>
          <div className="mt-8 sm:mt-12 rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-8 xl:p-12 overflow-visible">
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
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold">1 Token = 1 Xcoin</h3>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                Each XXX Token entitles its holder to receive one Xcoin from the Genesis supply at mainnet launch.
                Simple, fair, and transparent redemption.
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

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold">
              Ready to Buy Xcoin?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Get your XXX Tokens now and secure your position in the future of private finance.
            </p>
            <a
              href="#waitlist"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
            >
              BuyXcoin
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
