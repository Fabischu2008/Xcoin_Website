import type { Metadata } from "next"
import Link from "next/link"
import { Network, Shield, Zap, Lock, CheckCircle2, Server } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is SEP?",
  description:
    "SEP stands for Secure Encryption Protocol — the decentralized network architecture behind CREO that replaces traditional servers with a peer-to-peer system built for maximum privacy, reliability, and independence.",
  openGraph: {
    title: "What is SEP?",
    description: "No central servers. Peer-to-peer & distributed. End-to-end + network-level security.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is SEP?",
    description: "SEP is not just a network. It's a secure, invisible layer of digital freedom.",
  },
}

const keyCharacteristics = [
  {
    icon: Server,
    title: "No Central Servers",
    description: "All communication happens directly through encrypted SEP Nodes — never routed through third parties.",
  },
  {
    icon: Network,
    title: "Peer-to-Peer & Distributed",
    description: "Anyone can run a SEP Node — but nobody can access any data, not even the node operator.",
  },
  {
    icon: Shield,
    title: "End-to-End + Network-Level Security",
    description: "Combined with CREO's encryption layers, SEP ensures that both message content and delivery routes are completely protected.",
  },
  {
    icon: Zap,
    title: "Scalable & Fast",
    description: "The more validators and nodes join SEP, the faster and more resilient the network becomes.",
  },
  {
    icon: Lock,
    title: "Censorship-Resistant",
    description: "Governments or attackers can't shut down or monitor CREO by targeting a server—it has none.",
  },
  {
    icon: Network,
    title: "Untraceable Routing",
    description: "SEP hides not only what is being communicated, but who is talking to whom, when, and from where.",
  },
]

const whyItMatters = [
  "No reliance on cloud infrastructure",
  "No exposure to centralized risks",
  "No trust required in any single provider",
]

export default function WhatIsSEPPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/learning" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is SEP?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            <strong className="text-foreground">SEP</strong> stands for <strong className="text-foreground">Secure Encryption Protocol</strong> — the decentralized network architecture behind CREO that replaces traditional servers with a peer-to-peer system built for maximum privacy, reliability, and independence.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Unlike cloud-based platforms, SEP ensures that there is no central point of control, storage, or failure. This makes it virtually immune to hacking, censorship, surveillance, or data leaks.
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

        {/* Why it matters */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why it matters
            </h2>
            <div className="space-y-3 mt-6">
              {whyItMatters.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xl font-[family-name:var(--font-heading)] font-bold text-foreground text-center">
              SEP is not just a network.
            </p>
            <p className="mt-4 text-xl font-[family-name:var(--font-heading)] font-bold text-foreground text-center">
              It's a secure, invisible layer of digital freedom.
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
                href="/validator"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Validator
              </Link>
              <Link
                href="/learning/validator-network"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Validator Network
              </Link>
              <Link
                href="/learning/sep-network"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                SEP Network
              </Link>
              <Link
                href="/network"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Decentralized Network
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

