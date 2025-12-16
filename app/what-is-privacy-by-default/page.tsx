import type { Metadata } from "next"
import Link from "next/link"
import BackButton from "@/components/back-button"
import { Lock, Eye, Shield, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "What is Privacy by Default?",
  description: "Every Xcoin transaction is private by default — no settings, no opt-ins.",
}

export default function WhatIsPrivacyByDefaultPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/overview" position="top" />
      <BackButton fallbackHref="/overview" position="bottom" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Lock className="h-8 w-8 text-accent" />
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Privacy by Default
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Xcoin is built around the idea that privacy should be automatic. Unlike other cryptocurrencies where users must enable or configure privacy settings, Xcoin provides full anonymity by default. Every transaction is completely hidden from the public eye — no sender, no recipient, no amount, and no metadata is visible on-chain.
            </p>

            <div className="space-y-6 text-muted-foreground">
              <p>
                This is made possible through a combination of advanced cryptographic tools like:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-foreground">
                    <Link href="/what-is-zk-starks" className="text-accent hover:text-accent/80 underline">zk-STARKs</Link>
                  </strong>: Zero-knowledge proofs that validate transactions without revealing any details.
                </li>
                <li>
                  <strong className="text-foreground">
                    <Link href="/what-is-stealth-addresses" className="text-accent hover:text-accent/80 underline">Stealth Addresses</Link>
                  </strong>: One-time addresses generated for each transaction to hide the recipient.
                </li>
                <li>
                  <strong className="text-foreground">
                    <Link href="/what-is-ring-signature" className="text-accent hover:text-accent/80 underline">Ring Signatures</Link>
                  </strong>: Group signatures that anonymize the sender within a set of decoys.
                </li>
                <li>
                  <strong className="text-foreground">
                    <Link href="/what-is-aes-512" className="text-accent hover:text-accent/80 underline">AES-512 Cascade Encryption</Link>
                  </strong>: Repeated AES-512 encryption applied in layers to create exponential resistance against brute-force decryption.
                </li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Why It Matters
              </h2>

              <p>
                In a world of mass surveillance and financial profiling, optional privacy is not enough. Many privacy coins — like Monero or Zcash — offer strong protections, but often require user action to activate them, or depend on trusted setups that introduce risk.
              </p>

              <p>
                With Xcoin, there are no settings to toggle and no special tools needed. Every transaction is fully quantum proof encrypted and unlinkable — always.
              </p>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Still Compliant If You Choose
              </h2>

              <p>
                For those who need to prove their activity (for taxes, audits, or business purposes), Xcoin introduces optional <Link href="/what-are-view-keys" className="text-accent hover:text-accent/80 underline">View Keys</Link>. These allow users to share specific transaction data without exposing control of their wallet or broader activity. But unless you explicitly choose to share, no one can see anything — not even Xcoin itself.
              </p>
            </div>

            {/* Privacy Features */}
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Zero-Knowledge Privacy</h3>
                <p className="mt-4 text-muted-foreground">
                  Every transaction uses <Link href="/what-is-zk-starks" className="text-accent hover:text-accent/80 underline">zero-knowledge proofs (zk-STARKs)</Link> to ensure that only cryptographic correctness is verified—never the sender, receiver, or amount. Your financial activity remains completely hidden.
                </p>
                <ul className="mt-6 space-y-3">
                  {["No metadata collection", "Untraceable transactions", "Hidden amounts", "No transaction history exposure"].map((item) => (
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
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Stealth Addresses</h3>
                <p className="mt-4 text-muted-foreground">
                  Each transaction uses a unique <Link href="/what-is-stealth-addresses" className="text-accent hover:text-accent/80 underline">stealth address</Link>, making it impossible to link payments to your identity or wallet. Every transfer appears as a one-time interaction with no connection to previous or future transactions.
                </p>
                <ul className="mt-6 space-y-3">
                  {["One-time addresses per transaction", "No address reuse", "Complete unlinkability", "Identity protection"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Points */}
            <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12">
              <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold">Why Privacy Matters</h2>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">Financial Freedom</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Transact without fear of surveillance or discrimination based on your financial activity.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">Security</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Protect yourself from targeted attacks, fraud, and identity theft that result from exposed transaction data.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">Decentralization</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    True financial sovereignty means no third party can monitor, censor, or control your transactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/what-is-stealth-addresses"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Stealth Addresses
                </Link>
                <Link
                  href="/what-is-ring-signature"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Ring Signatures
                </Link>
                <Link
                  href="/what-is-zk-starks"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  zk-STARKs
                </Link>
                <Link
                  href="/what-are-view-keys"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  View Keys
                </Link>
                <Link
                  href="/what-is-aes-512"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  AES-512 Cascade Encryption
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

