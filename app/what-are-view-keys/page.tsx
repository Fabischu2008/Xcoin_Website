import type { Metadata } from "next"
import Link from "next/link"
import { Lock, Eye, Shield, Clock, CheckCircle2, FileText, Scale, Heart, Briefcase, Users } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What are View Keys?",
  description:
    "View Keys are secure, read-only access keys that allow you to share specific data without giving anyone your login, password, or control over anything.",
  openGraph: {
    title: "What are View Keys?",
    description: "Selective transparency—only when you choose. Share data securely without exposing your full account.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What are View Keys?",
    description: "Open the door just enough—never more than necessary.",
  },
}

const keyCharacteristics = [
  {
    icon: Eye,
    title: "Read-Only, One-Time Use",
    description: "View Keys cannot be used to send messages, change settings, make transactions, or alter data—only to view a snapshot of selected content, once.",
  },
  {
    icon: Shield,
    title: "Fully Controlled by You",
    description: "You choose what's visible, who gets a key, and when it expires. No one can use View Keys without your permission and knowledge.",
  },
  {
    icon: Lock,
    title: "No Password Sharing",
    description: "There's no risk of someone accessing your full account. View Keys provide only what you intentionally allow.",
  },
  {
    icon: CheckCircle2,
    title: "Zero Trust Required",
    description: "Even if a key falls into the wrong hands, it's useless after one use, and it never reveals login details.",
  },
  {
    icon: Clock,
    title: "Full Transparency Log",
    description: "You get notified every time View Keys are used—who accessed what, and when.",
  },
]

const useCases = [
  {
    icon: Briefcase,
    title: "Lotus Wallet Plugin",
    description: "Share wallet balances, transaction history, or other financial data in a secure and verifiable way—ideal for accountants, auditors, or business partners.",
  },
  {
    icon: FileText,
    title: "Tax Authorities",
    description: "Grant access to specific financial records or transaction data to comply with audits or reporting obligations—without handing over your wallet or account.",
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    description: "Provide encrypted documents or communications to lawyers, courts, or regulatory bodies—fully controlled and tamper-proof.",
  },
  {
    icon: Heart,
    title: "Healthcare & Emergency Access",
    description: "Allow doctors or emergency contacts to view encrypted medical notes when needed, without ongoing access.",
  },
  {
    icon: Users,
    title: "Employment & Projects",
    description: "Prove task completion or work documentation without exposing unrelated data or messages.",
  },
  {
    icon: Eye,
    title: "Media & Verification",
    description: "Share time-limited, verifiable data with journalists or investigators—safely and selectively.",
  },
]

export default function WhatAreViewKeysPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/learning" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What are View Keys?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            <strong className="text-foreground">View Keys</strong> are secure, read-only access keys that allow you to share specific data (for example from CREO or Lotus Wallet) — without giving anyone your login, password, or control over anything.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            They're designed for situations where you need to prove, not expose. Think legal cases, audits, emergency access, or sharing with trusted professionals.
          </p>
        </div>

        {/* Key Characteristics */}
        <div className="mt-20 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Key Characteristics
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keyCharacteristics.map((characteristic) => (
              <div
                key={characteristic.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <characteristic.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{characteristic.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{characteristic.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Common Use Cases */}
        <div className="mt-20 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Common Use Cases
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <useCase.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{useCase.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              View Keys give you selective transparency — only when you choose.
            </p>
            <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              They let you open the door just enough — never more than necessary.
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
                href="/optional-compliance"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Optional Compliance for Audits and Taxes
              </Link>
              <Link
                href="/privacy"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Privacy is Power
              </Link>
              <Link
                href="/what-is-xxx-blockchain"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                What is the XXX Blockchain?
              </Link>
            </div>
          </div>
        </div>

        {/* Back Button - Bottom */}
        <div className="mt-16">
          <BackButton fallbackHref="/learning" position="bottom" />
        </div>
      </div>
    </div>
  )
}

