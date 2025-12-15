import type { Metadata } from "next"
import Link from "next/link"
import BackButton from "@/components/back-button"
import { Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Eco-Friendly Infrastructure and Near-Zero Energy Use | Xcoin",
  description: "Xcoin consumes minimal energy, using no mining or proof-of-work.",
}

export default function EcoFriendlyInfrastructurePage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <BackButton fallbackHref="/overview" position="top" />

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Leaf className="h-8 w-8 text-accent" />
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Eco-Friendly Infrastructure and Near-Zero Energy Use
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Xcoin consumes minimal energy, using no mining or proof-of-work.
            </p>

            <div className="space-y-6 text-muted-foreground">
              <p>
                Traditional cryptocurrencies like Bitcoin consume enormous amounts of energy. The Bitcoin network uses more electricity than entire countries, contributing to climate change and environmental degradation. This is a direct result of proof-of-work mining, where powerful computers compete to solve cryptographic puzzles.
              </p>

              <p>
                Xcoin eliminates this entirely. By removing mining and proof-of-work, Xcoin achieves near-zero energy consumption while maintaining security and decentralization.
              </p>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                No Mining, No Waste
              </h2>

              <p>
                Xcoin doesn't use proof-of-work mining, which means:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">No Energy-Intensive Computation</strong> — Validators verify proofs, not solve puzzles</li>
                <li><strong className="text-foreground">No Specialized Hardware</strong> — Standard servers are sufficient</li>
                <li><strong className="text-foreground">No Mining Farms</strong> — No need for massive data centers</li>
                <li><strong className="text-foreground">No Carbon Footprint</strong> — Minimal energy consumption</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Efficient Validation
              </h2>

              <p>
                Instead of mining, Xcoin uses <Link href="/validator" className="text-accent hover:text-accent/80 underline">validators</Link> that:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Verify cryptographic proofs (not compute them)</li>
                <li>Run on standard server hardware</li>
                <li>Consume minimal electricity</li>
                <li>Scale efficiently with network growth</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                DAG Architecture Efficiency
              </h2>

              <p>
                Xcoin's <Link href="/what-is-dag-plus" className="text-accent hover:text-accent/80 underline">DAG+ architecture</Link> is inherently more efficient than blockchains:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>No block mining required</li>
                <li>Parallel transaction processing</li>
                <li>Minimal computational overhead</li>
                <li>Scales without increasing energy consumption</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Environmental Impact
              </h2>

              <p>
                Compared to Bitcoin, Xcoin:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Uses 99.9% Less Energy</strong> — No proof-of-work means minimal consumption</li>
                <li><strong className="text-foreground">No Carbon Emissions</strong> — Can run entirely on renewable energy</li>
                <li><strong className="text-foreground">Sustainable Long-Term</strong> — Energy use doesn't increase with adoption</li>
                <li><strong className="text-foreground">Future-Proof</strong> — Designed for a sustainable financial system</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Why This Matters
              </h2>

              <p>
                As cryptocurrency adoption grows, the environmental impact of proof-of-work becomes increasingly problematic. Xcoin proves that you can have:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Complete privacy and security</li>
                <li>High transaction throughput</li>
                <li>True decentralization</li>
                <li>Near-zero environmental impact</li>
              </ul>

              <p>
                All without sacrificing any of the benefits that make cryptocurrency valuable. Xcoin is built for a sustainable future — one where financial privacy and environmental responsibility go hand in hand.
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
                  href="/why-xcoin-uses-no-mining"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Why Xcoin Uses No Mining
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

