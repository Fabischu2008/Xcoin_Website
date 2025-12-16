import type { Metadata } from "next"
import Link from "next/link"
import { Coins, Users, Shield, Vote, CheckCircle2, Zap, Lock, X } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Treasury, Delegation, and Validator Licenses",
  description:
    "In Xcoin, money flows back to the people who actually keep the system running. The treasury, delegation, and validator licenses are all designed to make sure that the people who care the most are the ones who shape what comes next.",
  openGraph: {
    title: "Treasury, Delegation, and Validator Licenses",
    description: "In Xcoin, money doesn't create power. Participation does.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treasury, Delegation, and Validator Licenses",
    description: "Just honest, energy-efficient nodes, elected by the community.",
  },
}

const treasuryFeatures = [
  {
    icon: Coins,
    title: "No single wallet",
    description: "No CEO. No inner circle. Every coin is governed by public proposals.",
  },
  {
    icon: Vote,
    title: "Community votes",
    description: "Every decision goes through the DAO — from funding features to hiring auditors.",
  },
  {
    icon: Shield,
    title: "Fully transparent",
    description: "Every inflow and outflow is recorded on-chain, visible to everyone.",
  },
]

const delegationBenefits = [
  "Delegate voting power without handing over your tokens",
  "Choose delegates you trust — researchers, developers, activists, validators",
  "Revoke delegation instantly if trust is broken",
  "Delegates are accountable and their votes are transparent",
]

const validatorLicenseSteps = [
  {
    step: "1",
    title: "Submit Application",
    description: "Anyone can apply to become a validator by submitting a license request to the DAO.",
  },
  {
    step: "2",
    title: "Community Review",
    description: "The community reviews the application: technical specs, internet speed, location, and such.",
  },
  {
    step: "3",
    title: "DAO Approval",
    description: "If the DAO approves, the validator is granted a license — free of charge until mainnet launch.",
  },
  {
    step: "4",
    title: "Token Staking",
    description: "After mainnet launch, staking XXX Tokens may serve as a public bond — signaling commitment to honest behavior.",
  },
]

const traditionalSystemProblems = [
  "Validators compete for block rewards",
  "Mining and gas wars",
  "Hardware arms race",
  "Wasteful energy burn",
]

const xcoinAdvantages = [
  "No mining",
  "No gas wars",
  "No hardware arms race",
  "No wasteful energy burn",
  "Just honest, energy-efficient nodes",
  "Elected by the community",
  "Held to account by the system itself",
]

export default function TreasuryDelegationAndValidatorLicensesPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/overview" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Treasury, Delegation, and Validator Licenses
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            In most blockchain ecosystems, the money flows upward — toward miners, early investors, or "foundations" that operate more like private corporations. But in Xcoin, it flows back to the people who actually keep the system running.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            That begins with the treasury.
          </p>
        </div>

        {/* The Treasury */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            The Treasury
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-6">
              All protocol-level funds — including fees, grants, and system rewards — flow into a shared treasury, fully controlled by the <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">DAO</Link>. There is no single wallet. No CEO. No inner circle. Every coin in the treasury is governed by public proposals and community votes.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Want to fund a new privacy feature? Launch an outreach campaign? Hire an independent auditor?
            </p>
            <p className="text-lg font-semibold text-foreground mb-6">
              It all begins with a proposal to the DAO — and ends with a vote.
            </p>
            <p className="text-lg text-muted-foreground">
              Every inflow and outflow is recorded on-chain, visible to everyone. No backroom deals. No untraceable grants. Just math, code, and community oversight.
            </p>
          </div>
        </div>

        {/* Treasury Features */}
        <div className="mt-12 mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {treasuryFeatures.map((feature) => (
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

        {/* Delegation and Incentives */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            Delegation and Incentives
          </h2>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-6">
              Not everyone wants to vote on every proposal. That's normal. In Xcoin, you can delegate your voting power to someone you trust — a researcher, a developer, an activist, a validator — without ever handing over your tokens. This gives the system flexibility and scale, while still respecting ownership and autonomy.
            </p>
            <div className="mt-6 space-y-3">
              {delegationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground">
              This is governance that adapts to you — not the other way around.
            </p>
          </div>
        </div>

        {/* Validator Licenses */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            Validator Licenses
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-6">
              In traditional systems, validators compete for block rewards. In Xcoin, they apply for a license — and they earn it through <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">DAO approval</Link> and token staking.
            </p>
            <p className="text-lg font-semibold text-foreground mb-6">
              Here's how it works:
            </p>
          </div>
        </div>

        {/* Validator License Process */}
        <div className="mt-12 mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {validatorLicenseSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <span className="text-2xl font-bold text-accent">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* License Accountability */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-4">
              Misbehave, and your license can be revoked. Act in good faith, and you earn community trust — and delegated votes.
            </p>
          </div>
        </div>

        {/* Traditional vs Xcoin */}
        <div className="mt-16 mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Traditional Systems */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <X className="h-6 w-6 text-destructive" />
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Traditional Systems</h3>
              </div>
              <div className="space-y-3">
                {traditionalSystemProblems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Xcoin */}
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Xcoin</h3>
              </div>
              <div className="space-y-3">
                {xcoinAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              In Xcoin, money doesn't create power.
            </p>
            <p className="text-xl font-semibold text-foreground mb-4">
              Participation does.
            </p>
            <p className="text-lg text-muted-foreground">
              And the treasury, the licenses, the delegation model — they're all designed to make sure that the people who care the most are the ones who shape what comes next.
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
              <Link
                href="/validator-application"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Validator Application
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

