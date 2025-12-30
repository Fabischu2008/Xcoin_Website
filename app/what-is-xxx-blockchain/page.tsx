import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Lock, Shield, Zap, Network, Eye, Users, Check, ArrowLeft } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is the XXX Blockchain?",
  description:
    "The XXX Blockchain is a fully private, quantum-secure, and scalable blockchain designed to replace Bitcoin. Built on DAG architecture with zero-knowledge proofs and post-quantum cryptography.",
  openGraph: {
    title: "What is the XXX Blockchain?",
    description: "A fully private, quantum-secure, and scalable blockchain designed to replace Bitcoin.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is the XXX Blockchain?",
    description: "The architecture digital finance has been waiting for.",
  },
}

const keyFeatures: Array<{
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  details?: string
  links?: Record<string, string>
}> = [
  {
    icon: Eye,
    title: "True Privacy by Default",
    description: "Every transaction hides the sender, receiver, and amount using zk-STARKs, stealth addresses, and ring signatures.",
    details: "No data is visible on-chain. No metadata. No IP traces.",
    links: {
      "zk-STARKs": "/what-is-zk-starks",
      "stealth addresses": "/what-is-stealth-addresses",
      "ring signatures": "/what-is-ring-signature",
    },
  },
  {
    icon: Shield,
    title: "Quantum-Safe Architecture",
    description: "Xcoin uses SPHINCS+, WOTS+, and SHA-3 / Poseidon.",
    details: "Cryptography that even future quantum computers can't break.",
    links: {
      "SPHINCS+": "/what-is-sphincs-plus",
      "WOTS+": "/what-is-wots-plus",
      "SHA-3": "/learning/post-quantum-cryptography",
      "Poseidon": "/what-is-poseidon-hash",
    },
  },
  {
    icon: Zap,
    title: "DAG + zk-Rollup Hybrid Model",
    description: "Processes 10,000+ TPS, with parallel validation and fee compression.",
    details: "Faster and cheaper than Bitcoin or Ethereum.",
    links: {
      "DAG": "/what-is-dag-plus",
      "zk-Rollup": "/what-is-zk-rollups",
    },
  },
  {
    icon: Network,
    title: "Fixed Supply. No Inflation",
    description: "21 million Xcoins are pre-mined at genesis.",
    details: "No mining, no new coins, no VC pre-sales, fair launch only.",
    links: {
      "21 million Xcoins": "/learning/fixed-supply",
    },
  },
  {
    icon: Users,
    title: "DAO-Governed",
    description: "All changes, upgrades, and treasury decisions are voted on by the community via on-chain governance.",
    details: "No central control, ever.",
    links: {
      "DAO": "/what-is-xxx-dao",
    },
  },
  {
    icon: Lock,
    title: "View Keys for Optional Transparency",
    description: "Users can share specific transaction data securely (e.g. for taxes or audits) without exposing their wallet or identity.",
    links: {
      "View Keys": "/what-are-view-keys",
    },
  },
  {
    icon: Zap,
    title: "Green by Design",
    description: "No Proof-of-Work. No energy waste.",
    details: "Lightweight nodes make the blockchain very efficient.",
  },
]

function renderTextWithLinks(text: string, links?: Record<string, string>) {
  if (!links) return <span>{text}</span>

  const parts: (string | { text: string; href: string })[] = []
  let remaining = text

  for (const [key, href] of Object.entries(links)) {
    const index = remaining.indexOf(key)
    if (index !== -1) {
      if (index > 0) {
        parts.push(remaining.substring(0, index))
      }
      parts.push({ text: key, href })
      remaining = remaining.substring(index + key.length)
    }
  }
  
  if (remaining) {
    parts.push(remaining)
  }

  if (parts.length === 0 || (parts.length === 1 && typeof parts[0] === 'string')) {
    return <span>{text}</span>
  }

  return (
    <span>
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return <span key={index}>{part}</span>
        }
        return (
          <Link
            key={index}
            href={part.href}
            className="text-accent hover:text-accent/80 underline transition-colors"
          >
            {part.text}
          </Link>
        )
      })}
    </span>
  )
}

export default function WhatIsXXXBlockchainPage() {
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
              src="/img/xcoin_grid/box4.jpeg"
              alt="What is the XXX Blockchain?"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  What is the XXX Blockchain?
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <p className="mt-6 text-lg text-muted-foreground">
            <strong className="text-foreground">The XXX Blockchain</strong> is a fully private, quantum-secure, and scalable blockchain—designed to <strong className="text-foreground">replace Bitcoin</strong> as the foundation of a new financial system.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            It combines advanced cryptography with next-gen architecture to deliver <strong className="text-foreground">fast, anonymous, and censorship-resistant transactions</strong> —without mining, staking, or inflation. Unlike Bitcoin, where every transaction is public and traceable, <strong className="text-foreground">Xcoin makes privacy the default</strong> —not an option.
          </p>
        </div>

        {/* Not a Blockchain */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Not a Blockchain
            </h2>
            <p className="text-muted-foreground mb-4">
              Although we call it the XXX Blockchain, it's not a blockchain in the traditional sense. There are no blocks. No chains. No miners.
            </p>
            <p className="text-muted-foreground mb-4">
              At its core, XXX runs on a <strong className="text-foreground">Directed Acyclic Graph (DAG)</strong> — a cutting-edge structure that processes transactions in parallel, not in sequence.
            </p>
            <p className="text-muted-foreground mb-4">
              Where blockchains group transactions into blocks and confirm them in order, the XXX DAG handles them as they come — instantly, without congestion.
            </p>
            <p className="text-lg font-semibold text-foreground">
              The result? <strong className="text-accent">Faster speed. Better scalability. Native privacy.</strong> This is the architecture digital finance has been waiting for.
            </p>
            <Link
              href="/what-is-dag-plus"
              className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Learn more about DAG
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-20 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {renderTextWithLinks(feature.description, feature.links)}
                </p>
                {feature.details && (
                  <p className="mt-2 text-sm font-medium text-foreground">
                    → {feature.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-20 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
            <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground mb-4">
              Xcoin isn't here to compete with Bitcoin.
            </p>
            <p className="text-3xl font-[family-name:var(--font-heading)] font-bold bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
              It's here to replace it.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

