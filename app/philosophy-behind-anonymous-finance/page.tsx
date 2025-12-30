import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Lock, Eye, Shield, X, Check, Users, Globe } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "The Philosophy Behind Anonymous Finance",
  description:
    "Privacy isn't just a personal preference—it's a fundamental human right. Xcoin brings money back to its original purpose: empowering people, not controlling them.",
  openGraph: {
    title: "The Philosophy Behind Anonymous Finance",
    description: "With Xcoin, privacy is something you can count on. It's built for moments when trust breaks, systems overreach, or the world is watching.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Philosophy Behind Anonymous Finance",
    description: "It's the foundation of freedom.",
  },
}

const privacyThreats = [
  "Build profiles about your ethical, political or religious views",
  "Track your location and habits",
  "Deny you loans, insurance, or access based on past behavior",
  "Freeze your accounts or reverse your payments without consent",
]

export default function PhilosophyBehindAnonymousFinancePage() {
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
              src="/img/xcoin_grid/anonymous_finance.jpg"
              alt="The Philosophy Behind Anonymous Finance"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  The Philosophy Behind Anonymous Finance
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <p className="mt-6 text-lg text-muted-foreground">
            Money has always been more than numbers on a ledger. It's a reflection of freedom, trust, and autonomy. Yet in today's digital world, every payment tells a story about who you are. A story written not by you, but by those who monitor, analyze, and profit from your data.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            Xcoin changes that narrative. It brings money back to its original purpose: empowering people, not controlling them.
          </p>
        </div>

        {/* Privacy is a Fundamental Right */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Privacy isn't just a personal preference
            </h2>
            <p className="text-lg font-semibold text-foreground mb-4">
              It's a fundamental human right.
            </p>
            <p className="text-muted-foreground mb-4">
              In the world of finance, privacy means freedom: freedom to spend without being watched, to save without being profiled, and to participate in the economy without exposing your identity to corporations, governments, or surveillance systems.
            </p>
            <p className="text-muted-foreground">
              But over the last two decades, financial privacy has been systematically eroded. Every credit card swipe, every bank transfer, every online purchase is logged, analyzed, and tied to your name. Banks sell your data. Governments track your transactions. Tech platforms use financial behavior to shape your digital identity.
            </p>
          </div>
        </div>

        {/* We are data points */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-xl font-semibold text-foreground text-center">
              We are no longer just users of money, we are data points in systems of control.
            </p>
          </div>
        </div>

        {/* Why Privacy in Finance Matters */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            Why Privacy in Finance Matters
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-muted-foreground mb-6">
              Without privacy, there is no true financial freedom. If every transaction is traceable, your financial behavior can be used to:
            </p>
            <div className="space-y-4 mt-8">
              {privacyThreats.map((threat, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{threat}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground">
              This isn't a theory. It already happens in many countries — and not just authoritarian ones.
            </p>
          </div>
        </div>

        {/* Anonymous Finance Purpose */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-4">
              Anonymous finance isn't about hiding wrongdoing. It's about restoring balance. It gives people the power to transact without being tracked. It protects businessman, journalists, activists, and vulnerable groups.
            </p>
            <p className="text-lg font-semibold text-foreground">
              And it prevents corporations or governments from gaining absolute control over how, when, and with whom you can spend your money.
            </p>
          </div>
        </div>

        {/* Xcoin's Stance on Privacy */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                <Lock className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                Xcoin's Stance on Privacy
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Xcoin was built with one goal in mind: make financial privacy the default, not the exception.
            </p>
            <p className="text-muted-foreground mb-4">
              Every transaction on Xcoin is private. The sender, recipient, amount, and metadata are all hidden by design. There are no privacy settings. <strong className="text-foreground">Xcoin is private!</strong> You don't need to be an expert to stay private. It just works — for everyone, every time.
            </p>
            <p className="text-muted-foreground">
              And when transparency is needed (for audits, reports, or compliance), Xcoin provides <Link href="/what-are-view-keys" className="text-accent hover:text-accent/80 underline transition-colors">View Keys</Link> — a controlled way to share data without giving up your entire financial identity.
            </p>
          </div>
        </div>

        {/* Freedom by Default */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            Freedom by Default
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-muted-foreground mb-4">
              True freedom means being able to act without asking for permission — including financially. Whether you're donating to a cause, paying a friend, or moving funds between countries, you should have the right to do so without being watched.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">
              With Xcoin, privacy is something you can count on.
            </p>
            <p className="text-muted-foreground">
              It's built for moments when trust breaks, systems overreach, or the world is watching. It's the foundation of freedom.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

