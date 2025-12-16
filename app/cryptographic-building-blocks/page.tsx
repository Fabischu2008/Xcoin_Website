import type { Metadata } from "next"
import Link from "next/link"
import { Lock, Shield, Zap, Network, Eye, CheckCircle2, Key, Hash, Layers, Database, FileKey } from "lucide-react"
import BackButton from "@/components/back-button"

function renderTextWithLinks(text: string, links: Record<string, string>) {
  if (!links || Object.keys(links).length === 0) {
    return <span>{text}</span>
  }

  const parts: (string | { text: string; href: string })[] = []
  let remaining = text
  const linkEntries = Object.entries(links).sort((a, b) => b[0].length - a[0].length) // Sort by length descending to match longer strings first

  // Find all link positions
  const linkPositions: Array<{ start: number; end: number; text: string; href: string }> = []
  for (const [key, href] of linkEntries) {
    let searchIndex = 0
    while (true) {
      const index = remaining.indexOf(key, searchIndex)
      if (index === -1) break
      linkPositions.push({ start: index, end: index + key.length, text: key, href })
      searchIndex = index + 1
    }
  }

  // Sort by position
  linkPositions.sort((a, b) => a.start - b.start)

  // Remove overlapping links (keep first occurrence)
  const filteredPositions: Array<{ start: number; end: number; text: string; href: string }> = []
  for (const pos of linkPositions) {
    const overlaps = filteredPositions.some(
      (existing) => !(pos.end <= existing.start || pos.start >= existing.end)
    )
    if (!overlaps) {
      filteredPositions.push(pos)
    }
  }
  filteredPositions.sort((a, b) => a.start - b.start)

  let lastIndex = 0
  for (const pos of filteredPositions) {
    if (pos.start > lastIndex) {
      parts.push(remaining.substring(lastIndex, pos.start))
    }
    parts.push({ text: pos.text, href: pos.href })
    lastIndex = pos.end
  }
  if (lastIndex < remaining.length) {
    parts.push(remaining.substring(lastIndex))
  }

  if (parts.length === 0) {
    return <span>{text}</span>
  }

  return (
    <span>
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return <span key={index}>{part}</span>
        }
        return (
          <Link
            key={index}
            href={part.href}
            className="text-accent hover:text-accent/80 underline transition-colors"
          >
            {part.text}
          </Link>
        )
      })}
    </span>
  )
}

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
    purposeLinks: {},
    whyItMatters: "No trusted setup, quantum-secure, scalable privacy",
    whyItMattersLinks: {
      "quantum-secure": "/quantum-safe",
      "privacy": "/what-is-privacy-by-default",
    },
    link: "/what-is-zk-starks",
    icon: Shield,
  },
  {
    component: "Halo 2",
    purpose: "Hides transaction amounts",
    purposeLinks: {},
    whyItMatters: "Efficient range proofs without exposing values",
    whyItMattersLinks: {},
    link: "/what-is-halo-2",
    icon: Eye,
  },
  {
    component: "Ring Signatures",
    purpose: "Hides the sender",
    purposeLinks: {},
    whyItMatters: "Sender anonymity within a group—unlinkable and untraceable",
    whyItMattersLinks: {},
    link: "/what-is-ring-signature",
    icon: Key,
  },
  {
    component: "Stealth Addresses",
    purpose: "Hides the receiver",
    purposeLinks: {},
    whyItMatters: "One-time, invisible addresses for every transaction",
    whyItMattersLinks: {},
    link: "/what-is-stealth-addresses",
    icon: Network,
  },
  {
    component: "SPHINCS+",
    purpose: "Digital signatures (post-quantum)",
    purposeLinks: {
      "post-quantum": "/quantum-safe",
    },
    whyItMatters: "Approved by NIST; secures messages and transactions from quantum decryption",
    whyItMattersLinks: {
      "quantum decryption": "/quantum-safe",
    },
    link: "/what-is-sphincs-plus",
    icon: Lock,
  },
  {
    component: "WOTS+",
    purpose: "One-time signature scheme",
    purposeLinks: {},
    whyItMatters: "Simple, secure, and quantum-resistant; foundation for SPHINCS+",
    whyItMattersLinks: {
      "quantum-resistant": "/quantum-safe",
      "SPHINCS+": "/what-is-sphincs-plus",
    },
    link: "/what-is-wots-plus",
    icon: FileKey,
  },
  {
    component: "Poseidon Hash",
    purpose: "Fast hash function for zero-knowledge circuits",
    purposeLinks: {
      "zero-knowledge": "/what-is-zk-starks",
    },
    whyItMatters: "Built for zk-proofs—smaller, faster, and cheaper than traditional hashes",
    whyItMattersLinks: {
      "zk-proofs": "/what-is-zk-starks",
    },
    link: "/what-is-poseidon-hash",
    icon: Hash,
  },
  {
    component: "Keccak-512",
    purpose: "General-purpose hashing",
    purposeLinks: {},
    whyItMatters: "Secure against quantum attacks; used in broader system operations",
    whyItMattersLinks: {
      "quantum attacks": "/quantum-safe",
    },
    link: "/what-is-keccak-512",
    icon: Hash,
  },
  {
    component: "zk-Rollups",
    purpose: "Bundles many transactions into one proof",
    purposeLinks: {},
    whyItMatters: "Enables high throughput, low fees, and minimal on-chain data",
    whyItMattersLinks: {},
    link: "/what-is-zk-rollups",
    icon: Layers,
  },
  {
    component: "DAG Structure",
    purpose: "Transaction ordering and scalability",
    purposeLinks: {},
    whyItMatters: "Parallel validation without mining—scales to millions of users",
    whyItMattersLinks: {
      "mining": "/why-xcoin-uses-no-mining",
    },
    link: "/what-is-dag-plus",
    icon: Network,
  },
  {
    component: "View Keys",
    purpose: "Optional, read-only transparency",
    purposeLinks: {},
    whyItMatters: "Lets users prove specific data without compromising privacy",
    whyItMattersLinks: {
      "privacy": "/what-is-privacy-by-default",
    },
    link: "/what-are-view-keys",
    icon: Eye,
  },
  {
    component: "No Trusted Setup",
    purpose: "System integrity",
    purposeLinks: {},
    whyItMatters: "Removes centralized risk—no hidden secrets, no single point of failure",
    whyItMattersLinks: {},
    link: "/what-is-no-trusted-setup", // Placeholder - wird später erstellt
    icon: CheckCircle2,
  },
  {
    component: "AES-512",
    purpose: "Proprietary encryption for maximum security",
    purposeLinks: {},
    whyItMatters: "Reinforces sensitive operations beyond standard cryptographic safeguards",
    whyItMattersLinks: {},
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
            {renderTextWithLinks(
              "Most blockchains depend on a patchwork of outdated or vulnerable cryptography. They rely on algorithms that were designed decades ago, before quantum computing became a real threat, before privacy became a necessity, and before scale became a requirement.",
              {
                "quantum computing": "/quantum-safe",
                "privacy": "/what-is-privacy-by-default",
              }
            )}
          </p>
          <p className="text-lg text-muted-foreground text-center mb-8">
            {renderTextWithLinks(
              "Xcoin takes a fundamentally different approach. Every component is selected, tested, and integrated with one goal: to create a system that is private by default, quantum-safe from day one, and capable of handling billions of transactions without compromise.",
              {
                "private by default": "/what-is-privacy-by-default",
                "quantum-safe": "/quantum-safe",
              }
            )}
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
                    // Alle Komponenten sollen verlinkt sein
                    const ComponentName = (
                      <Link
                        href={item.link || "#"}
                        className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent/80 transition-colors underline"
                      >
                        <ComponentIcon className="h-5 w-5" />
                        {item.component}
                      </Link>
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
              {renderTextWithLinks(
                "Xcoin is the first chain designed from scratch to resist surveillance, resist quantum attacks, and scale to billions—without tradeoffs.",
                {
                  "surveillance": "/what-is-privacy-by-default",
                  "quantum attacks": "/quantum-safe",
                }
              )}
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

