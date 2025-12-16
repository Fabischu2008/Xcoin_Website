import type { Metadata } from "next"
import Link from "next/link"
import { Users, Vote, Zap, Shield, CheckCircle2, ArrowRight } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Your Role as a Token Holder",
  description:
    "Holding XXX Tokens isn't just about having access — it's about having a say. A real one. You're not a passive investor. You're a participant in a living, evolving protocol that you can help steer.",
  openGraph: {
    title: "Your Role as a Token Holder",
    description: "This is not a protocol for the powerful. It's a powerful protocol for people like you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Role as a Token Holder",
    description: "You decide where the protocol goes.",
  },
}

const tokenHolderPowers = [
  {
    icon: Vote,
    title: "You can vote",
    description: "Cast votes on every critical decision that shapes the future of Xcoin.",
  },
  {
    icon: Users,
    title: "You can delegate",
    description: "Delegate your voting power to someone you trust without handing over your tokens.",
  },
  {
    icon: Zap,
    title: "You can propose",
    description: "Bring forward ideas for improvements, features, or funding to the DAO.",
  },
  {
    icon: Shield,
    title: "You can lead",
    description: "Shape the protocol's direction with every vote, proposal, and conversation.",
  },
]

const whatYouCanDecide = [
  "Fund development of a new feature",
  "Challenge an upgrade",
  "Reshape the way the treasury is used",
]

const tokenAdvantages = [
  "Your tokens don't expire",
  "They don't degrade",
  "You don't need to stake them in risky pools to use your voice",
  "You hold them in your wallet",
  "You vote from your wallet",
  "Your influence comes from showing up — not from how early you bought in",
]

export default function YourRoleAsATokenHolderPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/overview" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Your Role as a Token Holder
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Token holders are here to shape what comes next.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Holding <Link href="/what-are-xxx-tokens" className="text-accent hover:text-accent/80 underline">XXX Tokens</Link> isn't just about having access — it's about having a say. A real one. Not a "vote" buried in a feedback form. Not a "choice" between two options someone else decided for you.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            It means influence.
          </p>
          <p className="mt-2 text-lg font-semibold text-foreground">
            It means impact.
          </p>
        </div>

        {/* Your Role */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-4">
              When you hold XXX Tokens, you're not a passive investor. You're a participant in a living, evolving protocol that you can help steer — with every vote you cast, every proposal you support, and every conversation you join.
            </p>
            <p className="text-lg text-muted-foreground">
              And unlike most systems where tokens are locked up, diluted, or hidden behind complicated staking rules — XXX Tokens are simple. Clean. Liquid. Yours.
            </p>
          </div>
        </div>

        {/* You decide where the protocol goes */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            You decide where the protocol goes
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="space-y-4 mb-6">
              {whatYouCanDecide.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Want to {item.toLowerCase()}?</span> You can.
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold text-foreground mb-4">
              With XXX Tokens, you're not just reacting to decisions made by others.
            </p>
            <p className="text-lg font-semibold text-foreground">
              You're making them.
            </p>
          </div>
        </div>

        {/* Your Powers */}
        <div className="mt-16 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Your Powers
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tokenHolderPowers.map((power) => (
              <div
                key={power.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-4">
                  <power.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{power.title}</h3>
                <p className="text-sm text-muted-foreground">{power.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-muted-foreground">
            And no one can take that from you — not a government, not a company, not even the original developers. Because the protocol doesn't just allow participation. It runs on it.
          </p>
        </div>

        {/* Power that stays yours */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            Power that stays yours
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="space-y-3 mb-6">
              {tokenAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{advantage}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              And if you choose to delegate your votes? You're still in control. You can take them back at any time. It's your choice. Your voice. Your weight in the system.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              This is not a protocol for the powerful.
            </p>
            <p className="text-xl font-semibold text-foreground mb-6">
              It's a powerful protocol for people like you.
            </p>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground">
                So if you believe privacy matters…
              </p>
              <p className="text-lg text-muted-foreground">
                If you believe finance should serve people — not the other way around…
              </p>
              <p className="text-lg text-muted-foreground">
                If you're ready to do more than just hope the future turns out well…
              </p>
            </div>
            <div className="mt-8 space-y-2">
              <p className="text-lg font-semibold text-foreground">
                Buy a token...
              </p>
              <p className="text-lg font-semibold text-foreground">
                Take a seat. And help build it.
              </p>
            </div>
            <div className="mt-8">
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
                href="/what-is-xxx-dao"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                XXX DAO
              </Link>
              <Link
                href="/how-voting-and-proposals-work"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                How Voting and Proposals Work
              </Link>
              <Link
                href="/participate-in-governance"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Participate in Governance
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

