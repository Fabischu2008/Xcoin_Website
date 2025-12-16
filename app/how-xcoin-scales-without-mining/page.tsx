import type { Metadata } from "next"
import Link from "next/link"
import BackButton from "@/components/back-button"
import { Zap, Network, Shield, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "How Xcoin Scales Without Mining",
  description: "Xcoin removes mining entirely, using validators and a DAG to scale securely and sustainably.",
}

export default function HowXcoinScalesWithoutMiningPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <BackButton fallbackHref="/overview" position="top" />

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Zap className="h-8 w-8 text-accent" />
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            How Xcoin Scales Without Mining
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Most blockchains rely on mining or staking to validate transactions and secure the network. But both approaches come with serious trade-offs — from high energy consumption to centralization and slow confirmation times. Xcoin takes a fundamentally different route.
            </p>

            <div className="space-y-6 text-muted-foreground">
              <p>
                Xcoin replaces mining with a more scalable and sustainable design built on Directed Acyclic Graphs (DAGs) and validator checkpoints, eliminating the need for expensive computation or block production altogether.
              </p>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                No Miners, No Bottlenecks
              </h2>

              <p>
                Traditional proof-of-work blockchains (like Bitcoin) require every transaction to be processed one block at a time, in a strict linear chain. This limits throughput and creates delays during periods of high usage.
              </p>

              <p>
                Xcoin uses a <Link href="/what-is-dag-plus" className="text-accent hover:text-accent/80 underline">DAG+ structure</Link>, where transactions can flow in parallel and confirm each other. This means thousands of transactions can be processed simultaneously, rather than being queued behind a single miner's block.
              </p>

              <p>
                There are no miners competing for rewards, no block races, and no wasted energy. Every transaction plays a role in securing the network and moving things forward.
              </p>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Validator Checkpoints for Global Consensus
              </h2>

              <p>
                Instead of mining or staking, Xcoin uses a set of Validator Nodes (called <Link href="/what-is-sep" className="text-accent hover:text-accent/80 underline">SEP Nodes</Link>) to establish global consensus. These validators:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Verify encrypted transactions</li>
                <li>Batch them into secure checkpoints</li>
                <li>Use zero-knowledge proofs to guarantee correctness</li>
                <li>Vote on network state using cryptographic signatures</li>
              </ul>

              <p>
                Since validators do not earn block rewards or inflationary payouts, they are economically neutral — and chosen based on transparent licensing, not wealth or hardware power.
              </p>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Scalability Without Sacrificing Privacy
              </h2>

              <p>
                Even with full encryption on every transaction, Xcoin is built to handle 10,000+ transactions per second using:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Parallel DAG processing</li>
                <li><Link href="/what-is-zk-rollups" className="text-accent hover:text-accent/80 underline">zk-Rollups</Link> for compression</li>
                <li>Stateless proofs that scale efficiently</li>
              </ul>

              <p>
                This allows the network to grow without bloating the chain or revealing sensitive user data.
              </p>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Efficient, Sustainable, and Secure
              </h2>

              <p>
                By removing mining and staking altogether, Xcoin avoids:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Massive energy use</li>
                <li>Centralization of power among mining pools or stakers</li>
                <li>Inflation-based reward systems</li>
                <li>Congestion during surges in usage</li>
              </ul>

              <p>
                Instead, it offers a lightweight, high-throughput design with built-in privacy and zero inflation — making it ideal for global-scale, day-to-day use.
              </p>
            </div>

            {/* Key Features */}
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <Network className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">DAG+ Architecture</h3>
                <p className="mt-4 text-muted-foreground">
                  Transactions flow in parallel, confirming each other directly. No blocks, no queues, no waiting.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Parallel processing", "Instant confirmations", "No block wait times", "Scales with usage"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Validator Network</h3>
                <p className="mt-4 text-muted-foreground">
                  <Link href="/validator" className="text-accent hover:text-accent/80 underline">Validators</Link> verify transactions and create checkpoints without mining or staking. Economically neutral and transparent.
                </p>
                <ul className="mt-6 space-y-3">
                  {["No block rewards", "No inflation", "Transparent licensing", "Economically neutral"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/what-is-dag-plus"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  DAG+ Architecture
                </Link>
                <Link
                  href="/validator"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Validators
                </Link>
                <Link
                  href="/what-is-zk-rollups"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  zk-Rollups
                </Link>
                <Link
                  href="/how-xcoin-handles-10000-tps"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  How Xcoin Handles 10,000+ TPS
                </Link>
                <Link
                  href="/why-xcoin-uses-no-mining"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Why Xcoin Uses No Mining
                </Link>
              </div>
            </div>

            {/* Back Button at Bottom */}
            <div className="mt-12 pt-8 border-t border-border">
              <BackButton fallbackHref="/overview" position="bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

