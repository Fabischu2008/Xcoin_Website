import { Globe, Server, Network, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function NetworkPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Globe className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Decentralized Network
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            No privileged nodes or central operators. Anyone can become a validator and help secure the network while earning rewards.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Server className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Open Participation</h3>
            <p className="mt-4 text-muted-foreground">
              There are no privileged nodes or special permissions required. Anyone meeting the hardware requirements can run a validator node and participate in transaction verification and network security.
            </p>
            <ul className="mt-6 space-y-3">
              {["No permission required", "Equal validator rights", "Global participation", "True decentralization"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Network className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Distributed Validation</h3>
            <p className="mt-4 text-muted-foreground">
              The network operates through a distributed network of independent validators worldwide. No single point of failure, no central control, and no geographic restrictions.
            </p>
            <ul className="mt-6 space-y-3">
              {["No central authority", "Distributed globally", "Fault tolerant", "Censorship resistant"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold">Network Benefits</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">Security</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Distributed network means no single point of attack or failure.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">Resilience</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Network continues operating even if individual validators go offline.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold">Fairness</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Equal participation rights ensure no single entity can control the network.
              </p>
            </div>
          </div>
        </div>

        {/* Learn More CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Learn More</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our comprehensive Learning Center to dive deeper into decentralization, validator networks, and related concepts.
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

