import type { Metadata } from "next"
import Link from "next/link"
import { Lock, Shield, Zap, Network, Eye, CheckCircle2, Key, Hash, Layers, Database, FileKey } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Cryptographic Building Blocks",
  description:
    "Xcoin combines cutting-edge cryptographic technologies into a unified protocol. No trusted setup, quantum-secure, and designed to scale to billions.",
  openGraph: {
    title: "Cryptographic Building Blocks",
    description: "The foundation of Xcoin's security, privacy, and scalability.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryptographic Building Blocks",
    description: "Xcoin is the only blockchain that combines all these cryptographic building blocks into a single, unified protocol.",
  },
}

const components = [
  {
    component: "zk-STARKs",
    purpose: "Private, trustless transaction proofs",
    whyItMatters: "No trusted setup, quantum-secure, scalable privacy",
    link: "/what-is-zk-starks",
    icon: Shield,
  },
  {
    component: "Halo 2",
    purpose: "Hides transaction amounts",
    whyItMatters: "Efficient range proofs without exposing values",
    link: "/what-is-halo-2",
    icon: Eye,
  },
  {
    component: "Ring Signatures",
    purpose: "Hides the sender",
    whyItMatters: "Sender anonymity within a group—unlinkable and untraceable",
    link: "/what-is-ring-signature",
    icon: Key,
  },
  {
    component: "Stealth Addresses",
    purpose: "Hides the receiver",
    whyItMatters: "One-time, invisible addresses for every transaction",
    link: "/what-is-stealth-addresses",
    icon: Network,
  },
  {
    component: "SPHINCS+",
    purpose: "Digital signatures (post-quantum)",
    whyItMatters: "Approved by NIST; secures messages and transactions from quantum decryption",
    link: "/what-is-sphincs-plus",
    icon: Lock,
  },
  {
    component: "WOTS+",
    purpose: "One-time signature scheme",
    whyItMatters: "Simple, secure, and quantum-resistant; foundation for SPHINCS+",
    link: "/what-is-wots-plus",
    icon: FileKey,
  },
  {
    component: "Poseidon Hash",
    purpose: "Fast hash function for zero-knowledge circuits",
    whyItMatters: "Built for zk-proofs—smaller, faster, and cheaper than traditional hashes",
    link: "/what-is-poseidon-hash",
    icon: Hash,
  },
  {
    component: "Keccak-512",
    purpose: "General-purpose hashing",
    whyItMatters: "Secure against quantum attacks; used in broader system operations",
    link: "/what-is-keccak-512",
    icon: Hash,
  },
  {
    component: "zk-Rollups",
    purpose: "Bundles many transactions into one proof",
    whyItMatters: "Enables high throughput, low fees, and minimal on-chain data",
    link: "/what-is-zk-rollups",
    icon: Layers,
  },
  {
    component: "DAG Structure",
    purpose: "Transaction ordering and scalability",
    whyItMatters: "Parallel validation without mining—scales to millions of users",
    link: "/what-is-dag-plus",
    icon: Network,
  },
  {
    component: "View Keys",
    purpose: "Optional, read-only transparency",
    whyItMatters: "Lets users prove specific data without compromising privacy",
    link: "/what-are-view-keys",
    icon: Eye,
  },
  {
    component: "No Trusted Setup",
    purpose: "System integrity",
    whyItMatters: "Removes centralized risk—no hidden secrets, no single point of failure",
    link: null,
    icon: CheckCircle2,
  },
  {
    component: "AES-512",
    purpose: "Proprietary encryption for maximum security",
    whyItMatters: "Reinforces sensitive operations beyond standard cryptographic safeguards",
    link: "/what-is-aes-512",
    icon: Lock,
  },
]

export default function CryptographicBuildingBlocksPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/overview" position="top" />
      <BackButton fallbackHref="/overview" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Shield className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl text-center mb-6">
            Cryptographic Building Blocks
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Most blockchains depend on a patchwork of outdated or vulnerable cryptography. They rely on algorithms that were designed decades ago, before quantum computing became a real threat, before privacy became a necessity, and before scale became a requirement.
          </p>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Xcoin takes a fundamentally different approach. Every component is selected, tested, and integrated with one goal: to create a system that is private by default, quantum-safe from day one, and capable of handling billions of transactions without compromise.
          </p>
          <p className="text-lg font-semibold text-foreground text-center mb-12">
            The technologies below are not experimental. They are proven, battle-tested, and ready for production. Together, they form the foundation of a system designed to outlast, outperform, and outlast every blockchain that came before it.
          </p>
        </div>

        {/* Components Table */}
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Component</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Purpose</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {components.map((item, index) => {
                    const ComponentIcon = item.icon
                    const ComponentName = item.link ? (
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-accent transition-colors"
                      >
                        <ComponentIcon className="h-5 w-5" />
                        {item.component}
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                        <ComponentIcon className="h-5 w-5" />
                        {item.component}
                      </span>
                    )

                    return (
                      <tr key={index} className="hover:bg-muted/20 transition-colors">
                        <td className="px-6 py-4 text-sm">{ComponentName}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{item.purpose}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{item.whyItMatters}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-4">
              Xcoin is the only blockchain that combines all of these cryptographic building blocks into a single, unified protocol. No compromises. No shortcuts. No trusted setups.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">
              This architecture goes beyond competing with existing blockchains — it renders all others obsolete.
            </p>
            <p className="text-lg text-muted-foreground">
              Xcoin is the first chain designed from scratch to resist surveillance, resist quantum attacks, and scale to billions—without tradeoffs.
            </p>
          </div>
        </div>

        {/* Related Topics */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-4">
              Explore the Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {components
                .filter((item) => item.link)
                .map((item) => (
                  <Link
                    key={item.component}
                    href={item.link!}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {item.component}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

