import type { Metadata } from "next"
import Link from "next/link"
import { Lock, Zap, Shield, CheckCircle2, Eye, ArrowRight, X } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Using Xcoin for Payments and Savings",
  description:
    "Xcoin is money that doesn't expose you. Every transaction is private by default, secured by zero-knowledge cryptography and quantum-safe signatures. Send funds instantly, receive payments unlinkable to your identity, and store value in a form that's deflationary and fully in your control.",
  openGraph: {
    title: "Using Xcoin for Payments and Savings",
    description: "Privacy. Speed. Simplicity. The future of payments.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Using Xcoin for Payments and Savings",
    description: "No banks. No surveillance. No delays.",
  },
}

const dataLeakage = [
  "What you bought",
  "How often you spend",
  "Where the money came from",
  "Where you go",
  "What time of day you're likely to make certain purchases again",
]

const xcoinFeatures = [
  {
    icon: Lock,
    title: "Private by default",
    description: "Every transaction is secured by zero-knowledge cryptography and quantum-safe signatures.",
  },
  {
    icon: Zap,
    title: "Instant transactions",
    description: "Send funds instantly to anyone, anywhere — without third parties. No blocks, no bottlenecks.",
  },
  {
    icon: Shield,
    title: "Unlinkable payments",
    description: "Receive payments that are unlinkable to your identity or your wallet.",
  },
  {
    icon: CheckCircle2,
    title: "Full control",
    description: "Store value in a form that's deflationary, permissionless, and fully in your control.",
  },
]

const whoWatches = [
  "The network",
  "Advertisers",
  "Data brokers",
  "Algorithms that monetize you",
]

const whyItMattersPoints = [
  "Banks sell your data",
  "Crypto ledgers leak your history",
  "Even private coins often have flaws",
  "Xcoin was built from the ground up for privacy and usability",
]

export default function UsingXcoinForPaymentsAndSavingsPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/overview" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Using Xcoin for Payments and Savings
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Imagine standing at the checkout. You tap to pay — and suddenly, your wallet swings wide open. The cashier — and everyone else in line — sees not just what you spent, but also how much money you have left in your wallet. And it doesn't stop at the counter. The whole world is watching. Not with eyes — but with code.
          </p>
        </div>

        {/* Who Watches */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-6">
              So does the network.
            </p>
            <div className="space-y-2 mb-6">
              {whoWatches.map((watcher, index) => (
                <p key={index} className="text-lg text-muted-foreground">
                  So do {watcher}.
                </p>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Within seconds, that information is cross-checked, analyzed, and quietly stored:
            </p>
            <div className="space-y-3 mt-6">
              {dataLeakage.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                  <Eye className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg font-semibold text-foreground mb-4">
              Not to help you — but to use you. You're not the user. You're the data source.
            </p>
            <p className="text-lg text-muted-foreground">
              In today's financial systems, your data is more valuable than your money. And every time you transact, that data leaks — to platforms, to payment processors, to governments, and to corporations that don't answer to you.
            </p>
          </div>
        </div>

        {/* Xcoin's Solution */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              That's the world Xcoin refuses to accept.
            </h2>
            <p className="text-lg font-semibold text-foreground mb-4">
              That's exactly what it was designed to fix.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              With Xcoin, none of that is possible.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Xcoin is money that doesn't expose you. No public trail. No leaked history. No address reuse. Nothing. Nothing at all.
            </p>
          </div>
        </div>

        {/* Xcoin Features */}
        <div className="mt-16 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            How Xcoin Works
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {xcoinFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-4">
              Every transaction is private by default, secured by zero-knowledge cryptography and quantum-safe signatures.
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Send funds instantly to anyone, anywhere — without third parties.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Receive payments that are unlinkable to your identity or your wallet.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Store value in a form that's deflationary, permissionless, and fully in your control.</p>
              </div>
            </div>
            <p className="mt-6 text-lg font-semibold text-foreground mb-4">
              No banks. No surveillance. No delays.
            </p>
            <p className="text-lg text-muted-foreground">
              And because Xcoin runs on a <Link href="/what-is-dag-plus" className="text-accent hover:text-accent/80 underline">DAG-based protocol</Link>, there are no blocks, no bottlenecks, and no waiting for confirmations. Transactions finalize in seconds — and fees stay low, even at scale.
            </p>
          </div>
        </div>

        {/* Why it matters */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            Why it matters
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-6">
              Whether you're saving for the future, supporting a cause, or simply buying something — you deserve financial privacy. And with most legacy systems, you simply don't get it.
            </p>
            <div className="space-y-3 mb-6">
              {whyItMattersPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  {index < 3 ? (
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              But Xcoin was built from the ground up for privacy and usability. That's not just good for you. It's good for adoption.
            </p>
            <p className="text-lg text-muted-foreground">
              Because when something becomes easier, safer, and more respectful — more people use it. And when more people use it… well, just check Bitcoin to see what happens to price when supply is fixed and demand goes up.
            </p>
          </div>
        </div>

        {/* Where we are now */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Where we are now
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Xcoin isn't live yet. But you can already become part of it — through <Link href="/what-are-xxx-tokens" className="text-accent hover:text-accent/80 underline">XXX Tokens</Link>, which will convert into real Xcoins when the mainnet launches.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Every XXX Token will be worth <strong className="text-foreground">10 Xcoins</strong> at launch. And the earlier you get in, the earlier you position yourself — not just as a user, but as a builder of what's to come.
            </p>
            <div className="mt-8 space-y-2 text-center">
              <p className="text-lg font-semibold text-foreground">
                Privacy. Speed. Simplicity.
              </p>
              <p className="text-lg text-muted-foreground">
                If that sounds like the future of payments to you — you're welcome to join.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/fund"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
              >
                Get XXX Tokens
                <ArrowRight className="h-5 w-5" />
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
                href="/what-are-xxx-tokens"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                XXX Tokens
              </Link>
              <Link
                href="/what-is-privacy-by-default"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Privacy by Default
              </Link>
              <Link
                href="/what-is-dag-plus"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                DAG+
              </Link>
              <Link
                href="/what-is-fixed-supply"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Fixed Supply
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

