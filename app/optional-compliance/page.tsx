import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Eye, Check, FileText, Users, Lock } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Optional Compliance for Audits and Taxes | Xcoin",
  description:
    "With Xcoin, you can generate View Keys to verify what needs to be verified. Nothing more. Nothing else. And only when you decide it's necessary.",
  openGraph: {
    title: "Optional Compliance for Audits and Taxes | Xcoin",
    description: "Privacy isn't the opposite of transparency. It's the power to decide when, where, to whom and how you are transparent.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optional Compliance for Audits and Taxes | Xcoin",
    description: "The future of credible, usable, privacy-focused finance.",
  },
}

const useCases = [
  {
    icon: FileText,
    title: "Tax purposes",
    description: "Need to prove a payment for tax purposes? Generate one-time view keys.",
  },
  {
    icon: Users,
    title: "Financial audits",
    description: "Working with a financial auditor? Grant access to your wallet, without worries.",
  },
  {
    icon: Shield,
    title: "Build trust",
    description: "Want to build trust with a customer or investor? Show where your funds came from.",
  },
]

export default function OptionalCompliancePage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Optional Compliance for Audits and Taxes
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Privacy should never mean isolation. And transparency shouldn't mean exposure.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            With Xcoin, you don't have to choose.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-4">
              Modern financial systems increasingly demand proof: for <Link href="/learning/tax-compliance" className="text-accent hover:text-accent/80 underline transition-colors">taxes</Link>, for <Link href="/learning/compliance" className="text-accent hover:text-accent/80 underline transition-colors">compliance</Link>, for <Link href="/learning/audit" className="text-accent hover:text-accent/80 underline transition-colors">audits</Link>, or simply to build trust with partners.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              But those requirements don't justify permanent surveillance. You shouldn't have to hand over your entire <Link href="/learning/wallet" className="text-accent hover:text-accent/80 underline transition-colors">wallet</Link> just to prove a single transaction.
            </p>
            <p className="text-lg font-semibold text-foreground">
              That's where optional compliance comes in. With Xcoin, you can generate a set of <Link href="/what-are-view-keys" className="text-accent hover:text-accent/80 underline transition-colors">View Keys</Link> to verify what needs to be verified. Nothing more. Nothing else. And only when <em>you</em> decide it's necessary.
            </p>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            Why this matters
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-muted-foreground mb-4">
              In 2023, <Link href="/why-xcoin-is-better" className="text-accent hover:text-accent/80 underline transition-colors">Monero</Link> was removed from major exchanges like Binance and Kraken. The reason? A lack of compliance tools. Without the ability to audit or verify anything — even voluntarily — platforms were pressured to delist it.
            </p>
            <p className="text-lg font-semibold text-foreground">
              The result: less accessibility, less adoption, and more fear around privacy coins.
            </p>
          </div>
        </div>

        {/* Xcoin Solution */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                Xcoin solves this without compromising privacy
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              You control what's visible. You control when. And you control who sees it. No backdoors. No surveillance. Just an optional, verifiable record — issued only by you, and only for the purpose you define.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Learn more about <Link href="/what-are-view-keys" className="text-accent hover:text-accent/80 underline transition-colors">View Keys</Link> and how they work.
            </p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-16 mx-auto max-w-6xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8 text-center">
            Use it when you need to
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <useCase.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{useCase.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* When It's Done */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <Lock className="h-6 w-6 text-accent" />
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                And when it's done?
              </h2>
            </div>
            <p className="text-lg font-semibold text-foreground mb-2">
              The <Link href="/what-are-view-keys" className="text-accent hover:text-accent/80 underline transition-colors">View Keys</Link> expire.
            </p>
            <p className="text-muted-foreground mb-2">
              No permanent link. No lingering access. No risk. No worries.
            </p>
            <p className="text-muted-foreground">
              The View Keys are gone. Forever. Without exposing your <Link href="/learning/private-keys" className="text-accent hover:text-accent/80 underline transition-colors">private keys</Link>. No risks. No worries.
            </p>
          </div>
        </div>

        {/* Final Statement */}
        <div className="mt-16 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Privacy isn't the opposite of transparency
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              It's the power to decide when, where, to whom and how you are transparent.
            </p>
            <p className="text-xl font-semibold text-foreground">
              And that's the future of credible, usable, privacy-focused finance.
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
                href="/what-are-view-keys"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                View Keys
              </Link>
              <Link
                href="/privacy"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/why-xcoin-is-better"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Why Xcoin Is Better
              </Link>
              <Link
                href="/learning"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Learning Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

