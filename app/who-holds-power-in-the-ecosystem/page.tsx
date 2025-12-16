import type { Metadata } from "next"
import Link from "next/link"
import { Users, Shield, Zap, Vote, Code, X, CheckCircle2 } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Who Holds Power in the Ecosystem?",
  description:
    "In Xcoin's design, authority is not based on computing power — it's based on continued engagement. Power flows to those who contribute — through governance, validation, development, or community building.",
  openGraph: {
    title: "Who Holds Power in the Ecosystem?",
    description: "This is not a system that rewards extraction. It rewards participation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Holds Power in the Ecosystem?",
    description: "You decentralize the power.",
  },
}

const powerSources = [
  {
    icon: Vote,
    title: "Hold a XXX Token?",
    description: "You have a vote.",
    link: "/what-are-xxx-tokens",
  },
  {
    icon: Zap,
    title: "Run a SEP Node?",
    description: "You help keep the network alive.",
    link: "/what-is-sep",
  },
  {
    icon: Code,
    title: "Propose a change?",
    description: "You help shape the future.",
    link: "/how-voting-and-proposals-work",
  },
]

const whatXcoinDoesntHave = [
  "No miners",
  "No block producers",
  "No centralized foundation",
  "No hidden team pulling strings behind the curtain",
]

const noSpecialPowers = [
  "No privileged keys",
  "No emergency switches",
  "No special powers hidden in the code",
]

const traditionalCryptoProblems = [
  "Power ends up in the hands of miners",
  "Early insiders control decisions",
  "Private foundations pull the strings",
  "Small group makes all key decisions",
  "Called 'decentralized' but actually centralized",
]

export default function WhoHoldsPowerInTheEcosystemPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/overview" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Who Holds Power in the Ecosystem?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            In most crypto systems, power ends up exactly where it wasn't supposed to: in the hands of miners, early insiders, or private foundations.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            They call it "decentralized" — but when you follow the money, you find a small group making all the key decisions. That's not just disappointing. <strong className="text-foreground">It's dangerous.</strong>
          </p>
        </div>

        {/* Xcoin works differently */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Xcoin works differently.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Here, power isn't something you mine, hoard, or inherit. It's something you earn — by participating.
            </p>
          </div>
        </div>

        {/* What Xcoin Doesn't Have */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              There are no miners.
            </h2>
            <div className="space-y-3 mt-6">
              {whatXcoinDoesntHave.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground">
              Instead, power flows to those who contribute — through governance, validation, development, or community building.
            </p>
          </div>
        </div>

        {/* Power Sources */}
        <div className="mt-16 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            How You Gain Power
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {powerSources.map((source) => (
              <Link
                key={source.title}
                href={source.link}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors text-left"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-4">
                  <source.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{source.title}</h3>
                <p className="text-sm text-muted-foreground">{source.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Authority Based on Engagement */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Authority Based on Engagement
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              In Xcoin's design, authority is not based on computing power — it's based on continued engagement.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              And because all major actions — from treasury spending to protocol upgrades — must go through <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">XXX DAO</Link>, no one can rule from the shadows.
            </p>
          </div>
        </div>

        {/* No Special Powers */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              No Special Powers
            </h2>
            <div className="space-y-3 mt-6">
              {noSpecialPowers.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground mb-4">
              Just one transparent process. One shared protocol.
            </p>
            <p className="text-lg font-semibold text-foreground">
              And a community with the tools to guide it.
            </p>
          </div>
        </div>

        {/* Traditional Crypto Problems */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            The Problem with Traditional Crypto
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="space-y-3">
              {traditionalCryptoProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              This is not a system that rewards extraction.
            </p>
            <p className="text-xl font-semibold text-foreground mb-4">
              It rewards participation.
            </p>
            <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              Because if you want to build something fair, you don't just decentralize the network —
            </p>
            <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground mt-2">
              you decentralize the power.
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
                href="/how-voting-and-proposals-work"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                How Voting and Proposals Work
              </Link>
              <Link
                href="/what-is-sep"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                SEP Nodes
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

