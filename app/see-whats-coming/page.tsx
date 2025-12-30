import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Eye, Shield, Zap, TrendingUp, Lock, AlertTriangle } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "See What's Coming",
  description:
    "Step by step, governments are tightening their grip. Privacy is being stripped away. CBDCs are being rolled out. Quantum computers are getting more powerful. That's where Xcoin takes the stage.",
  openGraph: {
    title: "See What's Coming",
    description: "The future of finance is being shaped right now. Xcoin is ready.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "See What's Coming",
    description: "When Bitcoin collapses, Xcoin will be ready.",
  },
}

export default function SeeWhatsComingPage() {
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
              src="/img/members_grid/see_whats_coming.jpg"
              alt="See What's Coming"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  See What's Coming
                </h1>
                <p className="text-xl lg:text-2xl text-white/90">
                  Step by step, governments are tightening their grip. Privacy is being stripped away, one law at a time. The message is always the same: "It's for your safety", but the truth is, it's for their control.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* It's (not) for your safety */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
                  It's (not) for your safety
                </h2>
                <p className="text-lg text-muted-foreground">
                  CBDCs (Central Bank Digital Currencies) are being rolled out to track, monitor, and ultimately control every transaction you make. For those paying attention, the direction is clear. <strong className="text-foreground">Total financial surveillance.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Computing Race */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-6">
              <Zap className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
                  The Quantum Race
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  And while this is happening, another race is heating up: the race for quantum computing. Every day, quantum computers get more powerful. It's no longer a question of <em>if</em> they will break today's cryptography, it's <strong className="text-foreground">when</strong>.
                </p>
                <p className="text-lg text-muted-foreground">
                  The moment criminals crack the first Bitcoin wallets, chaos will follow. You don't need to be hacked yourself to lose everything. The news alone will trigger mass panic. Trust in Bitcoin will vanish overnight. The price will crash, as holders dump their coins, desperate to move into something quantum-proof.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* That's where Xcoin takes the stage */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6 text-center">
              That's where Xcoin takes the stage.
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Xcoin is one of the few cryptocurrencies in the world built from the ground up with <Link href="/quantum-safe" className="text-accent hover:text-accent/80 underline">quantum safety</Link>.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  It can handle over <Link href="/how-xcoin-handles-10000-tps" className="text-accent hover:text-accent/80 underline">10,000 transactions per second</Link>, making it the only coin capable of absorbing Bitcoin's market in a panic scenario.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">
                  Both Bitcoin and Xcoin have a fixed supply of just <Link href="/what-is-fixed-supply" className="text-accent hover:text-accent/80 underline">21 million coins</Link>. But when Bitcoin collapses and most other coins fail the quantum test, demand for Xcoin will skyrocket.
                </p>
              </div>
              <p className="text-lg font-semibold text-foreground text-center mt-6">
                The result? Xcoin's price could soar far beyond Bitcoin's peak.
              </p>
            </div>
          </div>
        </div>

        {/* Millionaire */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold mb-6">
              Millionaire
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              When that day comes, anyone holding Xcoin could wake up as a multimillionaire.
            </p>
            <div className="mt-8 p-6 rounded-xl border border-accent/30 bg-accent/5">
              <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
                And here's the best part: nobody will know that you are indeed a multimillionaire, unless you tell them.
              </p>
            </div>
            <p className="text-xl font-semibold text-accent mt-8">
              That is Privacy. That is Xcoin.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
              Ready to Secure Your Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get XXX Tokens now and be prepared for what's coming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/what-are-xxx-tokens"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
              >
                Learn About XXX Tokens
              </Link>
              <Link
                href="/fund"
                className="inline-flex items-center gap-2 rounded-full border-2 border-accent bg-transparent px-8 py-4 font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground text-lg"
              >
                Get XXX Tokens Now
              </Link>
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
                href="/quantum-safe"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Quantum-Safe Cryptography
              </Link>
              <Link
                href="/how-xcoin-handles-10000-tps"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                10,000+ TPS
              </Link>
              <Link
                href="/what-is-fixed-supply"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Fixed Supply
              </Link>
              <Link
                href="/what-are-xxx-tokens"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                XXX Tokens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

