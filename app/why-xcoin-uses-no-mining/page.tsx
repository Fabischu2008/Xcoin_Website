import type { Metadata } from "next"
import Link from "next/link"
import BackButton from "@/components/back-button"
import { Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Why Xcoin Uses No Mining, No Staking, No Block Rewards",
  description: "No wasteful computation or incentives that centralize power — only security and speed.",
}

export default function WhyXcoinUsesNoMiningPage() {
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
            Why Xcoin Uses No Mining, No Staking, No Block Rewards
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              No wasteful computation or incentives that centralize power — only security and speed.
            </p>

            <div className="space-y-6 text-muted-foreground">
              <p>
                Most cryptocurrencies rely on mining, staking, or block rewards to secure their networks. These mechanisms create new coins, incentivize participation, and maintain consensus. But they also introduce fundamental problems: centralization, waste, and inflation.
              </p>

              <p>
                Xcoin eliminates all of this. No mining. No staking. No block rewards. Just efficient validation and transaction fees.
              </p>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                The Problem with Mining
              </h2>

              <p>
                Proof-of-work mining creates several issues:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Energy Waste</strong> — Massive electricity consumption for no productive purpose</li>
                <li><strong className="text-foreground">Centralization</strong> — Mining pools control the network</li>
                <li><strong className="text-foreground">Inflation</strong> — New coins created through block rewards</li>
                <li><strong className="text-foreground">Slow Transactions</strong> — Waiting for blocks to be mined</li>
                <li><strong className="text-foreground">High Fees</strong> — Competition for block space drives up costs</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                The Problem with Staking
              </h2>

              <p>
                Proof-of-stake also has drawbacks:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Wealth Concentration</strong> — Rich get richer through staking rewards</li>
                <li><strong className="text-foreground">Inflation</strong> — New coins created through staking rewards</li>
                <li><strong className="text-foreground">Centralization</strong> — Large stakers control governance</li>
                <li><strong className="text-foreground">Locked Capital</strong> — Coins must be staked, reducing liquidity</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Xcoin's Solution
              </h2>

              <p>
                Xcoin uses a different model:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Validators, Not Miners</strong> — <Link href="/validator" className="text-accent hover:text-accent/80 underline">Validators</Link> verify proofs, not solve puzzles</li>
                <li><strong className="text-foreground">Transaction Fees Only</strong> — Validators earn fees, not block rewards</li>
                <li><strong className="text-foreground">No New Coins</strong> — All 21 million coins exist from the Genesis Block</li>
                <li><strong className="text-foreground">No Staking Required</strong> — Validators need licenses, not staked coins</li>
                <li><strong className="text-foreground">Efficient Validation</strong> — Minimal computation, maximum security</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Benefits of This Model
              </h2>

              <p>
                By removing mining, staking, and block rewards, Xcoin achieves:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">No Inflation</strong> — Fixed supply of 21 million coins</li>
                <li><strong className="text-foreground">Energy Efficiency</strong> — Near-zero energy consumption</li>
                <li><strong className="text-foreground">True Decentralization</strong> — No mining pools or staking cartels</li>
                <li><strong className="text-foreground">Fast Transactions</strong> — No waiting for blocks</li>
                <li><strong className="text-foreground">Low Fees</strong> — Efficient validation keeps costs minimal</li>
                <li><strong className="text-foreground">Fair Distribution</strong> — No advantage for early miners or stakers</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                How It Works
              </h2>

              <p>
                Xcoin's validation model:
              </p>

              <ol className="list-decimal pl-6 space-y-2">
                <li><strong className="text-foreground">Validators Run SEP Nodes</strong> — Standard servers verify transactions</li>
                <li><strong className="text-foreground">Earn Transaction Fees</strong> — Validators receive fees for processing transactions</li>
                <li><strong className="text-foreground">No Block Rewards</strong> — No new coins created</li>
                <li><strong className="text-foreground">License-Based</strong> — Validators need licenses, not staked coins</li>
                <li><strong className="text-foreground">Efficient Consensus</strong> — <Link href="/what-is-dag-plus" className="text-accent hover:text-accent/80 underline">DAG+ architecture</Link> enables fast, parallel validation</li>
              </ol>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Why This Matters
              </h2>

              <p>
                Xcoin proves that you don't need wasteful mining or inflationary staking to build a secure, decentralized network. By focusing on efficient validation and transaction fees, Xcoin achieves:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Better security through cryptographic proofs</li>
                <li>Faster transactions through parallel processing</li>
                <li>Lower costs through efficient validation</li>
                <li>True decentralization through open participation</li>
                <li>Sustainable economics through fixed supply</li>
              </ul>

              <p>
                This is the future of cryptocurrency — efficient, sustainable, and truly decentralized.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/how-xcoin-scales-without-mining"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  How Xcoin Scales Without Mining
                </Link>
                <Link
                  href="/eco-friendly-infrastructure"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Eco-Friendly Infrastructure
                </Link>
                <Link
                  href="/what-is-fixed-supply"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Fixed Supply
                </Link>
                <Link
                  href="/validator"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Validators
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

