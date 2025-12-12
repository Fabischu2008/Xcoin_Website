import type { Metadata } from "next"
import { Lock, Shield, Zap, Server, Network, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Discover the advanced technology behind Xcoin: DAG architecture, zk-STARKs, post-quantum cryptography, and stealth addresses for complete privacy and security.",
  openGraph: {
    title: "Technology | Xcoin",
    description: "Advanced DAG architecture, quantum-safe cryptography, and zero-knowledge privacy technology.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology | Xcoin",
    description: "Quantum-safe, private, and scalable cryptocurrency technology.",
  },
}

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

export default function TechnologyPage() {
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
          <source src="/1210-compressed.mp4" type="video/mp4" />
        </video>
        {/* Overlay für bessere Textlesbarkeit */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Technology
          </h1>
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
              <p className="mt-4 text-muted-foreground">{tech.description}</p>
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
  )
}
