import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, Lock, Shield, Zap, Server, Network, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Overview | Xcoin",
  description:
    "The future standard for anonymous value transfer. Compare Xcoin with Bitcoin, Monero, Zcash, Ethereum, and USDT.",
  openGraph: {
    title: "Overview | Xcoin",
    description: "Built to withstand supercomputers, regulations, and time.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overview | Xcoin",
    description: "Privacy is always on — no settings to switch, no compromises.",
  },
}

const comparisonData = [
  {
    feature: "Privacy by default",
    xcoin: true,
    bitcoin: false,
    monero: true,
    zcash: false,
    ethereum: false,
    usdt: false,
  },
  {
    feature: "Quantum-safe",
    xcoin: true,
    bitcoin: false,
    monero: false,
    zcash: false,
    ethereum: false,
    usdt: false,
  },
  {
    feature: "Fixed supply",
    xcoin: true,
    bitcoin: true,
    monero: false,
    zcash: true,
    ethereum: false,
    usdt: false,
  },
  {
    feature: "zk-STARKs",
    xcoin: true,
    bitcoin: false,
    monero: false,
    zcash: false,
    ethereum: false,
    usdt: false,
  },
  {
    feature: "Zero metadata",
    xcoin: true,
    bitcoin: false,
    monero: false,
    zcash: false,
    ethereum: false,
    usdt: false,
  },
  {
    feature: "Optional audits (View Keys)",
    xcoin: true,
    bitcoin: false,
    monero: false,
    zcash: false,
    ethereum: false,
    usdt: false,
  },
]

const whyXcoinLeads = [
  "Privacy is always on — no settings to switch, no compromises",
  "Quantum-resistant and built for true scalability",
  "Ultra-fast, energy-efficient, and incredibly low transaction fees",
  "Compliant by design — without ever exposing user privacy",
  "No hype, no mining, no inflation — just world-class cryptography",
]

const technologies = [
  {
    icon: Network,
    title: "Directed Acyclic Graph (DAG)",
    description:
      "Unlike traditional blockchains with sequential blocks, the XXX DAG forms a web of connected transactions. Each transaction references and validates two previous ones, enabling parallel processing and instant confirmations.",
    features: ["No block wait times", "Scales with usage", "True decentralization"],
  },
  {
    icon: Eye,
    title: "zk-Rollups & zk-STARKs",
    description:
      "Zero-knowledge proofs bundle thousands of transactions into a single cryptographic proof. The network verifies correctness without revealing who sent what to whom.",
    features: ["Complete privacy", "Reduced on-chain data", "No trusted setup required"],
  },
  {
    icon: Shield,
    title: "Post-Quantum Cryptography",
    description:
      "SPHINCS+ and WOTS+ signature schemes approved by NIST protect against quantum computer attacks. Your assets remain secure even as computing evolves.",
    descriptionWithLinks: true,
    features: ["NIST-approved algorithms", "Future-proof security", "Quantum-resistant signatures"],
  },
  {
    icon: Lock,
    title: "Stealth Addresses & Halo 2",
    description:
      "Advanced cryptographic techniques ensure sender, receiver, and transaction amounts remain completely hidden. Privacy is not optional—it's the default.",
    features: ["Untraceable transactions", "Hidden amounts", "No metadata leakage"],
  },
  {
    icon: Server,
    title: "Validator Network",
    description:
      "Independent servers verify cryptographic integrity without seeing transaction contents. Anyone with the minimum requirements can become a validator.",
    features: ["Open participation", "Fee-based rewards", "No mining hardware needed"],
  },
  {
    icon: Network,
    title: "SEP Network Integration",
    description:
      "Secure Encryption Protocol provides encrypted multi-hop routing. Validators also function as SEP nodes, creating a comprehensive privacy infrastructure.",
    features: ["Encrypted routing", "Metadata protection", "Communication privacy"],
  },
]

export default function OverviewPage() {
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
            The Future Standard for Anonymous Value Transfer
          </h1>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 mx-auto max-w-7xl">
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-foreground">Xcoin</th>
                  <th className="px-6 py-4 text-center font-semibold text-muted-foreground">Bitcoin</th>
                  <th className="px-6 py-4 text-center font-semibold text-muted-foreground">Monero</th>
                  <th className="px-6 py-4 text-center font-semibold text-muted-foreground">Zcash</th>
                  <th className="px-6 py-4 text-center font-semibold text-muted-foreground">Ethereum</th>
                  <th className="px-6 py-4 text-center font-semibold text-muted-foreground">USDT</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.xcoin ? (
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.bitcoin ? (
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.monero ? (
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.zcash ? (
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.ethereum ? (
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.usdt ? (
                        <Check className="h-5 w-5 text-accent mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Xcoin Leads the Way */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why Xcoin Leads the Way
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Built to withstand supercomputers, regulations, and time.
            </p>
            <div className="space-y-4">
              {whyXcoinLeads.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How Xcoin Sets a New Standard */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              How Xcoin Sets a New Standard
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Most cryptocurrencies claim to be revolutionary — but when you look closer, many still rely on outdated architectures, limited privacy, and fragile security models. This table doesn't just highlight differences; it reveals a deeper truth:
            </p>
            <div className="space-y-4 mt-6">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Bitcoin</strong> started the movement, but it was never built for privacy or scale.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Monero</strong> offers anonymity, but struggles with adoption and compliance.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Zcash</strong> introduced advanced cryptography, but optional privacy means optional protection.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Ethereum and USDT</strong> serve as essential infrastructure, but they're traceable by default — and vulnerable to surveillance and control.
              </p>
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground mb-4">
              Xcoin takes the best ideas from them all and combines them with zero-knowledge cryptography, quantum resistance, and privacy that's always on.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              You don't need to flip a switch or trust a third party.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              You don't even need to know it's happening.
            </p>
            <p className="text-xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              Xcoin is just private. By default. As it should be.
            </p>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mt-24 mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
              Technology
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Breakthrough technologies combining DAG-based architecture with zero-knowledge proofs and post-quantum
              cryptography for truly private, scalable finance.
            </p>
          </div>

          {/* Technology Cards */}
          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {technologies.map((tech) => (
              <div key={tech.title} className="rounded-2xl border border-border bg-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <tech.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">{tech.title}</h3>
                <p className="mt-4 text-muted-foreground">
                  {tech.descriptionWithLinks ? (
                    <>
                      <Link href="/what-is-sphincs-plus" className="text-accent hover:text-accent/80 underline">
                        SPHINCS+
                      </Link>{" "}
                      and{" "}
                      <Link href="/what-is-wots-plus" className="text-accent hover:text-accent/80 underline">
                        WOTS+
                      </Link>{" "}
                      signature schemes approved by NIST protect against quantum computer attacks. Your assets remain secure even as computing evolves.
                    </>
                  ) : (
                    tech.description
                  )}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tech.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Diagram Section */}
          <div className="mt-24">
            <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold">System Architecture</h2>
            <div className="mt-12 rounded-2xl border border-border bg-card p-8 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                    <Zap className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold">Transaction Layer</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    DAG-based ledger with parallel validation and instant confirmations
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                    <Eye className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold">Privacy Layer</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    zk-Rollups with zk-STARKs for complete transaction privacy
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold">Security Layer</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Post-quantum signatures protecting against future threats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
