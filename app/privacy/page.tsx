import { Lock, Eye, Shield, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import BackButton from "@/components/back-button"

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/" />
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Lock className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Private by Default
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Complete transaction privacy is not an optional feature—it's built into every aspect of the Xcoin network.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Eye className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Zero-Knowledge Privacy</h3>
            <p className="mt-4 text-muted-foreground">
              Every transaction uses zero-knowledge proofs (zk-STARKs) to ensure that only cryptographic correctness is verified—never the sender, receiver, or amount. Your financial activity remains completely hidden.
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
              Each transaction uses a unique stealth address, making it impossible to link payments to your identity or wallet. Every transfer appears as a one-time interaction with no connection to previous or future transactions.
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

        {/* Learn More CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Learn More</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our comprehensive Learning Center to dive deeper into privacy, zero-knowledge proofs, and related concepts.
          </p>
          <Link
            href="/learning"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Visit Learning Center
          </Link>
        </div>
      </div>
    </div>
  )
}

