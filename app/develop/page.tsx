import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Network, Users, Server, Coins, Wallet, CreditCard, ArrowLeftRight, Zap, Shield, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Development | Xcoin",
  description:
    "The development of Xcoin and its supporting infrastructure is underway. Building an entirely new, privacy-first, censorship-resistant, quantum-proof financial ecosystem.",
  openGraph: {
    title: "Development | Xcoin",
    description: "Building the future standard for anonymous value transfer.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Development | Xcoin",
    description: "Pioneering work on a privacy-first, quantum-proof financial ecosystem.",
  },
}

const developmentComponents = [
  {
    icon: Network,
    title: "Blockchain/DAG Development",
    description:
      "At the core of Xcoin lies the XXX Network — a quantum-safe, DAG-based protocol designed for scalability, parallel transaction validation, and native privacy. The base layer is being built from the ground up with post-quantum cryptography and zero-knowledge privacy structures.",
  },
  {
    icon: Shield,
    title: "Anonymous P2P Network Layer",
    description:
      "We're developing a custom peer-to-peer communication layer built on the SEP network — ensuring that transactions are not just private, but also unlinkable at the network level and invisible to external observers.",
  },
  {
    icon: Users,
    title: "On-chain DAO Governance System",
    description:
      "A lightweight governance layer is being implemented that will allow all token holders to vote on upgrades, funding proposals, and protocol parameters — fully on-chain, without revealing voter identity.",
  },
  {
    icon: Server,
    title: "Development of the SEP Node Software Packages",
    description:
      "The SEP Node packages will run the XXX DAG and serve as the backbone for network validators — enabling consensus, transaction verification, and data propagation. Each node includes integrated privacy tooling, View Keys management, and resource-light syncing — optimized to run on Linux servers.",
  },
  {
    icon: Coins,
    title: "Building the XXX Token to Xcoin Exchanger",
    description:
      "To ensure a smooth migration path, we're developing a secure token bridge and automated exchange layer that allows holders of the existing XXX Token to convert to native Xcoin at a fixed Genesis rate.",
  },
  {
    icon: Zap,
    title: "Pre-mining 21 Million Xcoins at Genesis",
    description:
      "All Xcoins will be generated at launch — no inflation, no mining, no staking. The Genesis block will contain the full 21M supply, transparently allocated across vesting contracts, DAO reserves, and public claim pools.",
  },
  {
    icon: Wallet,
    title: "Lotus Wallet Integration",
    description:
      "Lotus Wallet is a multi-chain privacy wallet with built-in stealth address support, encrypted messaging, and local key management. No centralized login. No cloud storage.",
  },
  {
    icon: ArrowLeftRight,
    title: "Integration with MultiSwap",
    description:
      "We are collaborating with MultiSwap to enable instant, permissionless conversion between Xcoin and other major privacy coins — without KYC, and without exposing transaction paths.",
  },
  {
    icon: CreditCard,
    title: "Integration with BlackCard",
    description:
      "To bridge privacy crypto with everyday payments, we are working with BlackCard to enable Xcoin-funded debit cards — without linking real-world identity to on-chain activity.",
  },
]

export default function DevelopPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source src="/1212-compressed.mp4" type="video/mp4" />
        </video>
        {/* Overlay für bessere Textlesbarkeit */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Development
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            The development of Xcoin and its supporting infrastructure is underway. Much of it is pioneering work — we are building an entirely new, privacy-first, censorship-resistant, quantum-proof financial ecosystem — the future standard for anonymous value transfer.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Below is an overview of the key components currently in development.
          </p>
        </div>

        {/* Development Components Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {developmentComponents.map((component) => (
            <div
              key={component.title}
              className="rounded-2xl border border-border bg-card p-8 hover:border-accent/50 transition-colors"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <component.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">
                {component.title}
              </h3>
              <p className="mt-4 text-muted-foreground">{component.description}</p>
            </div>
          ))}
        </div>

        {/* Crowdfunding the Vision */}
        <div className="mt-24 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Crowdfunding the Vision
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              These components are being built in parallel — by a distributed team of engineers, cryptographers, and protocol designers. But continued progress depends on funding.
            </p>
            <p className="text-lg font-semibold text-foreground mb-8">
              That's why we're raising support through crowdfunding: to keep building, block by block, until Xcoin becomes real.
            </p>
            <Link
              href="/crowdfunding"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
            >
              Support Development
              <ArrowLeft className="h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
