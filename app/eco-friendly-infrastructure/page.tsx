import type { Metadata } from "next"
import Link from "next/link"
import { Zap, Leaf, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Eco-Friendly Infrastructure and Near‑Zero Energy Use",
  description:
    "Xcoin takes a radically different approach. There's no mining. No block production. No global race to burn energy. Transactions operate in the milliwatt range — about the same as loading an email.",
  openGraph: {
    title: "Eco-Friendly Infrastructure and Near‑Zero Energy Use",
    description: "If Bitcoin is a coal plant, Xcoin is a solar-powered calculator.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco-Friendly Infrastructure and Near‑Zero Energy Use",
    description: "Privacy and performance don't have to cost the planet.",
  },
}

const xcoinAdvantages = [
  {
    icon: Zap,
    title: "No miners to reward",
    description: "No waste to justify",
  },
  {
    icon: Leaf,
    title: "No power struggle",
    description: "No power struggle to maintain",
  },
  {
    icon: CheckCircle2,
    title: "Fast, secure, private",
    description: "Uses thousands of times less energy than Bitcoin, Ethereum, or even Monero",
  },
]

const energyComparison = [
  {
    title: "Bitcoin",
    energy: "1,000 kWh per transaction",
    description: "Roughly the same as powering a European household for a month",
    icon: AlertTriangle,
    color: "destructive",
  },
  {
    title: "Xcoin",
    energy: "Milliwatt range",
    description: "About the same as loading an email",
    icon: CheckCircle2,
    color: "accent",
  },
]

export default function EcoFriendlyInfrastructurePage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/overview" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Eco-Friendly Infrastructure and Near‑Zero Energy Use
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            You've heard the headlines: Bitcoin uses more electricity than Argentina. Every second, miners across the world burn energy solving pointless puzzles — just to keep the network alive. That's proof-of-work. And it works. But at a cost.
          </p>
        </div>

        {/* Bitcoin Energy Consumption */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-4">
              Every single Bitcoin transaction consumes approximately <strong className="text-foreground">1,000 kWh of electricity</strong> — roughly the same as powering a European household for a month. Now imagine scaling that up to millions of daily transactions. That's not just expensive. <strong className="text-foreground">It's unsustainable.</strong>
            </p>
          </div>
        </div>

        {/* Xcoin's Approach */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Xcoin takes a radically different approach.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              There's no mining. No block production. No global race to burn energy. Instead, Xcoin runs on a lightweight <Link href="/what-is-dag-plus" className="text-accent hover:text-accent/80 underline">DAG-based protocol</Link>, maintained by efficient nodes and verified through <Link href="/what-is-zk-starks" className="text-accent hover:text-accent/80 underline">zero-knowledge cryptography</Link> — not raw computing power.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Transactions settle in seconds.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Validation takes milliseconds.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">And the energy usage? With Xcoin, a transaction operates in the milliwatt range — about the same as loading an email.</p>
              </div>
            </div>
            <p className="mt-8 text-xl font-[family-name:var(--font-heading)] font-bold text-foreground text-center">
              If Bitcoin is a coal plant, Xcoin is a solar-powered calculator.
            </p>
          </div>
        </div>

        {/* Energy Comparison */}
        <div className="mt-16 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Energy Comparison
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {energyComparison.map((comparison) => (
              <div
                key={comparison.title}
                className={`rounded-2xl border p-8 ${
                  comparison.color === "destructive"
                    ? "border-destructive/20 bg-destructive/5"
                    : "border-accent/30 bg-accent/5"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    comparison.color === "destructive"
                      ? "bg-destructive/10"
                      : "bg-accent/10"
                  }`}>
                    <comparison.icon className={`h-6 w-6 ${
                      comparison.color === "destructive"
                        ? "text-destructive"
                        : "text-accent"
                    }`} />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">{comparison.title}</h3>
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">{comparison.energy}</p>
                <p className="text-muted-foreground">{comparison.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why it matters */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            Why it matters
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-6">
              In a world facing energy shortages, rising carbon emissions, and exploding demand for sustainable infrastructure, crypto can no longer afford to ignore its footprint.
            </p>
            <p className="text-lg font-semibold text-foreground mb-6">
              Xcoin was designed with this in mind — not as a compromise, but as an upgrade:
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
              {xcoinAdvantages.map((advantage) => (
                <div
                  key={advantage.title}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 mb-3">
                    <advantage.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{advantage.title}</h4>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground">
              Just a fast, secure, private network — that uses thousands of times less energy than Bitcoin, Ethereum, or even Monero.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Privacy and performance don't have to cost the planet.
            </p>
            <p className="text-xl font-semibold text-foreground">
              With Xcoin, you get both — and you can feel good about using it.
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
                href="/how-xcoin-scales-without-mining"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                How Xcoin Scales Without Mining
              </Link>
              <Link
                href="/why-xcoin-uses-no-mining"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Why Xcoin Uses No Mining
              </Link>
              <Link
                href="/what-is-dag-plus"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                DAG+
              </Link>
              <Link
                href="/validator"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Validators
              </Link>
            </div>
          </div>
        </div>

        {/* Back Button - Bottom */}
        <div className="mt-16">
          <BackButton fallbackHref="/overview" position="bottom" />
        </div>
      </div>
    </div>
  )
}
