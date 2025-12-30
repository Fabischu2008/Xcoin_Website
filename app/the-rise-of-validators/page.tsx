import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Zap, Shield, X, Check, Network, ArrowRight } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "The Rise of the Validators",
  description:
    "From wasteful mining to true participation. Xcoin does it differently with SEP Node validators. No race, no waste. Just collaboration, efficiency, and true decentralization.",
  openGraph: {
    title: "The Rise of the Validators",
    description: "Validators are the heroes of tomorrow. They are the ones keeping the system online, private, fast, and secure for everyone.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rise of the Validators",
    description: "Be part of it. Run a SEP Node. Earn Xcoin. Shape the future.",
  },
}

const xcoinAdvantages = [
  {
    icon: Zap,
    title: "No race, no waste",
    description: "Every validator works together to process transactions in a secure, decentralized, privacy-first network.",
  },
  {
    icon: Network,
    title: "10,000+ TPS",
    description: "Over 10,000 transactions per second, confirmed in seconds, all while using only a fraction of the energy mining requires.",
  },
  {
    icon: Shield,
    title: "True collaboration",
    description: "Instead of burning energy to compete, your SEP Node collaborates with others to verify and secure the ledger.",
  },
]

const decentralizationFeatures = [
  "Anyone can join",
  "No expensive hardware needed",
  "No massive electricity budget required",
  "Just a Linux server and internet connection",
  "Rewarded in Xcoin for keeping your SEP Node online",
  "No constant attention needed",
]

export default function TheRiseOfValidatorsPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/overview" position="top" />
      <BackButton fallbackHref="/overview" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Image with Content Overlay */}
        <div className="mx-auto max-w-6xl mb-12">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/img/validators_grid/the_rise_of_the_validators.jpg"
              alt="The Rise of the Validators"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  The Rise of the Validators
                </h1>
                <p className="text-xl lg:text-2xl text-white font-semibold">
                  From Wasteful Mining to True Participation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Broken Promise */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                The Broken Promise
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Bitcoin may have started as a dream of decentralization, but over time the reality has shifted. The big players have taken over the mining game, building massive warehouses full of specialized hardware. The result? Ordinary people have been pushed out. Hardware costs have skyrocketed, electricity bills keep rising, and the only ones still making real profits are those with deep pockets and access to industrial-scale power.
            </p>
            <p className="text-muted-foreground mb-4">
              Mining has become a pointless arms race. Thousands of machines burn unimaginable amounts of energy, all fighting to solve the same puzzle first. The winner takes all, and everyone else gets nothing. There is no cooperation, no shared progress, only waste and competition.
            </p>
            <p className="text-lg font-semibold text-foreground">
              The network crawls along at around seven transactions per second, yet consumes more electricity than entire countries.
            </p>
          </div>
        </div>

        {/* Xcoin does it differently */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                Xcoin does it differently
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              With SEP Node validators, there is no race and no waste. Every validator works together to process transactions in a secure, decentralized, privacy-first network. Instead of burning energy to compete, your SEP Node collaborates with others to verify and secure the ledger.
            </p>
            <p className="text-lg font-semibold text-foreground">
              The result is staggering: over 10,000 transactions per second, confirmed in seconds, all while using only a fraction of the energy mining requires.
            </p>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="mt-12 mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {xcoinAdvantages.map((advantage) => (
              <div
                key={advantage.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <advantage.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{advantage.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decentralization */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8 text-center">
            Decentralization
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-muted-foreground mb-6">
              Anyone can join. You do not need expensive hardware or a massive electricity budget. All it takes is a Linux server, an internet connection, and the will to support the network. Validators are rewarded in Xcoin for keeping their SEP Node online. No constant attention needed, just a simple setup and occasional updates.
            </p>
            <div className="grid gap-3 md:grid-cols-2 mt-8">
              {decentralizationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground">
              This is decentralization done right. No big-tech control, no government interference, no centralized power. Just a global network owned and operated by the people who run it.
            </p>
          </div>
        </div>

        {/* Final Statement */}
        <div className="mt-16 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
            <p className="text-xl text-muted-foreground mb-4">
              Validators are the heroes of tomorrow. They are the ones keeping the system online, private, fast, and secure for everyone.
            </p>
            <p className="text-xl font-semibold text-foreground mb-8">
              They are the ones who will stand at the heart of the post-quantum financial future.
            </p>
            <div className="space-y-2 text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              <p>Be part of it.</p>
              <p>Run a SEP Node.</p>
              <p>Earn Xcoin.</p>
              <p className="bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
                Shape the future.
              </p>
            </div>
            <Link
              href="/validator-application"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
            >
              Join
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
                href="/validator"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Earn Xcoin Effortlessly
              </Link>
              <Link
                href="/what-is-sep"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                What is SEP?
              </Link>
              <Link
                href="/how-xcoin-handles-10000-tps"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                10,000+ TPS
              </Link>
              <Link
                href="/validator-application"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

