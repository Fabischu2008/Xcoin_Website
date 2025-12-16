import type { Metadata } from "next"
import Link from "next/link"
import { Network, Zap, Shield, CheckCircle2, Lock, ArrowRight } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "DAG+: Beyond Blocks, Beyond Chains",
  description:
    "Instead of bundling transactions into blocks, a Directed Acyclic Graph lets every transaction connect directly to others—like branches of a tree constantly growing outward.",
  openGraph: {
    title: "DAG+: Beyond Blocks, Beyond Chains",
    description: "No blocks, no miners, no delays. Just fast, unstoppable private payments.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAG+: Beyond Blocks, Beyond Chains",
    description: "You don't need to imagine what comes after blockchains. It's already here—and it's not a chain.",
  },
}

const keyFeatures = [
  {
    icon: Network,
    title: "No Blocks, No Miners",
    description: "Every transaction confirms one or more previous ones—no need to wait for a new block to be mined.",
  },
  {
    icon: Zap,
    title: "High Throughput",
    description: "Transactions are validated simultaneously, not sequentially—perfect for scaling to thousands per second.",
  },
  {
    icon: Shield,
    title: "Lightweight & Efficient",
    description: "No heavy mining or staking required. Even low-power devices can validate transactions.",
  },
  {
    icon: CheckCircle2,
    title: "No Forks",
    description: "DAGs avoid the risk of chain splits or reorgs, ensuring consistent and stable transaction history.",
  },
]

const howItWorksSteps = [
  "You send a transaction.",
  "Your transaction references and confirms two previous ones.",
  "Others build on top of yours, and the network grows organically—like a graph, not a chain.",
  "Over time, the network self-validates, and consensus emerges naturally.",
]

const whyItMattersPoints = [
  "There are no blocks to fill, no slots to fight for",
  "Transactions confirm others instantly and organically",
  "Consensus is distributed across the entire network graph",
  "Finality is achieved fast — and can't be undone",
]

export default function WhatIsDAGPlusPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/learning" position="top" />
      <BackButton fallbackHref="/learning" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            DAG+: Beyond Blocks, Beyond Chains
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Blockchains used to be revolutionary. But imagine a single-lane road where every car must wait for the one before it to move. That's how most blockchains still work — one block at a time, in a straight line, every new transaction stacked behind the last.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Now imagine a highway — no, a whole web of lanes — where every car finds its own path forward, independently but still safely. <strong className="text-foreground">That's what a DAG is.</strong>
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Instead of bundling transactions into blocks, a Directed Acyclic Graph lets every transaction connect directly to others — like branches of a tree constantly growing outward. There's no need to wait for a miner, a block, or the next space in line. If you're ready to send, you just send.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Each new transaction confirms a few earlier ones — and in doing so, helps validate the network as a whole. The graph expands in all directions, not just forward. More activity makes it stronger, not slower.
          </p>
        </div>

        {/* From sequence to structure */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              From sequence to structure
            </h2>
            <p className="text-muted-foreground mb-4">
              Traditional chains are fragile: if two miners produce blocks at the same time, the chain splits. One version wins. The other is discarded. In a DAG, there are no forks — only progress. Every valid transaction adds to the web, never against it.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Instead of choosing one path, every path moves the network forward.
            </p>
          </div>
        </div>

        {/* Introducing DAG+ */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Introducing DAG+
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Xcoin's DAG+ adds something more: validator checkpoints — lightweight cryptographic anchors that keep the graph honest and synchronized without sacrificing speed or decentralization.
            </p>
            <p className="text-lg text-muted-foreground">
              They ensure that even in a permissionless environment, the web of transactions stays coherent, verifiable, and secure — no miners, no leaders, no bottlenecks.
            </p>
          </div>
        </div>

        {/* What is a DAG Structure? */}
        <div className="mt-20 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            What is a DAG Structure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            DAG stands for <strong className="text-foreground">Directed Acyclic Graph</strong>—a blockchain alternative that organizes transactions like a web, not a chain.
          </p>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Instead of blocks lined up one after another, a DAG allows transactions to be processed in parallel, speeding up the network and eliminating bottlenecks.
          </p>
        </div>

        {/* Key Features */}
        <div className="mt-12 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              How It Works (Simplified)
            </h2>
            <div className="space-y-4 mt-8">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why it matters */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why it matters
            </h2>
            <div className="space-y-3 mt-6">
              {whyItMattersPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground">
              You don't need to imagine what comes after blockchains. It's already here — and it's not a chain.
            </p>
            <p className="mt-4 text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              It's a graph. It's DAG+. And it's how Xcoin scales.
            </p>
          </div>
        </div>

        {/* Why it matters in Xcoin */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why it matters in Xcoin
            </h2>
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Enables instant, parallel validation</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Powers zk-Rollups and low-fee transactions</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Makes the network faster, greener, and more scalable</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why it's safer than a blockchain */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why it's safer than a blockchain
            </h2>
            <p className="text-muted-foreground mb-4">
              In traditional blockchains, transactions are packed into blocks — and those blocks are linked in a single line. That line can be broken. If two blocks are mined at the same time, the network must choose one and discard the other. This can lead to reorgs, where recent transactions are reversed or replaced — opening the door to fraud and double-spending.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">
              Xcoin's DAG structure avoids all of that.
            </p>
            <p className="text-muted-foreground mb-4">
              There are no blocks. No chain. No forks.
            </p>
            <p className="text-muted-foreground mb-4">
              Each transaction in Xcoin confirms previous ones directly. The more confirmations it gets, the more permanent it becomes — not because it sits in some lucky "longest chain," but because it's part of a growing, decentralized graph that can't be rewritten.
            </p>
            <p className="text-muted-foreground mb-4">
              There's no way to build a parallel history. No way to "win" by creating a longer fork. And no need to wait for 6 confirmations before trusting a payment.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Once your transaction is in the DAG, and others build on top of it, it's final. Irreversible. Immutable by design.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <p className="text-xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              Xcoin uses a DAG structure to remove the limits of traditional blockchains—
            </p>
            <p className="text-xl font-[family-name:var(--font-heading)] font-bold text-foreground mt-4">
              no miners, no blocks, no delays. Just fast, unstoppable private payments.
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
                href="/learning/dag"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                DAG (Glossary)
              </Link>
              <Link
                href="/what-is-zk-starks"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                zk-STARKs
              </Link>
              <Link
                href="/what-is-zk-rollups"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                zk-Rollups
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

      </div>
    </div>
  )
}

