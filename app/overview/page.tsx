import type { Metadata } from "next"
import Link from "next/link"
import { Check, X, Lock, Shield, Zap, Server, Network, Eye, ArrowRight } from "lucide-react"

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
        {/* Learning Center Introduction */}
        <div className="mx-auto max-w-4xl mb-20">
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              Welcome to the Xcoin Overview
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Xcoin is more than just a cryptocurrency. It's a fully private, quantum-secure financial protocol designed for a post-surveillance world. This page introduces you to the key concepts, technologies, and principles that make Xcoin unique — and shows you where to learn more. Below you'll find all learning resources grouped into logical categories.
            </p>
          </div>

          {/* Core Concepts */}
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">1. Core Concepts</h2>
            <div className="space-y-4">
              <div>
                <Link href="/what-is-privacy-by-default" className="text-accent hover:text-accent/80 underline font-medium">
                  What is Privacy by Default?
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Every Xcoin transaction is private by default — no settings, no opt-ins.</p>
              </div>
              <div>
                <Link href="/quantum-safe" className="text-accent hover:text-accent/80 underline font-medium">
                  Why Quantum-Safe Cryptography Matters
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Xcoin protects you from future quantum threats using post-quantum cryptography today.</p>
              </div>
              <div>
                <Link href="/what-is-fixed-supply" className="text-accent hover:text-accent/80 underline font-medium">
                  Fixed Supply, No Inflation: The Xcoin Model
                </Link>
                <p className="text-sm text-muted-foreground mt-1">With a hard cap of 21 million coins, Xcoin prevents dilution and mimics Bitcoin's deflationary model.</p>
              </div>
              <div>
                <Link href="/how-xcoin-scales-without-mining" className="text-accent hover:text-accent/80 underline font-medium">
                  How Xcoin Scales Without Mining
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Xcoin removes mining entirely, using validators and a DAG to scale securely and sustainably.</p>
              </div>
              <div>
                <Link href="/philosophy-behind-anonymous-finance" className="text-accent hover:text-accent/80 underline font-medium">
                  The Philosophy Behind Anonymous Finance
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Financial privacy is a human right — Xcoin is designed to defend it against surveillance.</p>
              </div>
            </div>
          </div>

          {/* Cryptographic Foundations */}
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">2. Cryptographic Foundations</h2>
            <div className="space-y-4">
              <div>
                <Link href="/what-is-zk-starks" className="text-accent hover:text-accent/80 underline font-medium">
                  zk-STARKs: Zero-Knowledge Proofs Explained
                </Link>
                <p className="text-sm text-muted-foreground mt-1">A zero-knowledge system that proves something is true without revealing any private data.</p>
              </div>
              <div>
                <Link href="/what-is-ring-signature" className="text-accent hover:text-accent/80 underline font-medium">
                  Ring Signatures: Sender Anonymity Made Real
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Transactions are signed by a group, hiding who the real sender is.</p>
              </div>
              <div>
                <Link href="/what-is-stealth-addresses" className="text-accent hover:text-accent/80 underline font-medium">
                  Stealth Addresses 2.0: Hiding the Recipient
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Each payment uses a one-time address, so no one knows who receives funds.</p>
              </div>
              <div>
                <span className="font-medium">SPHINCS+ WOTS+: Quantum-Resistant Signatures</span>
                <p className="text-sm text-muted-foreground mt-1">
                  Two proven, post-quantum signature schemes secure Xcoin at the cryptographic level.{" "}
                  <Link href="/what-is-sphincs-plus" className="text-accent hover:text-accent/80 underline">SPHINCS+</Link>{" "}
                  and{" "}
                  <Link href="/what-is-wots-plus" className="text-accent hover:text-accent/80 underline">WOTS+</Link>
                </p>
              </div>
              <div>
                <Link href="/what-is-halo-2" className="text-accent hover:text-accent/80 underline font-medium">
                  Halo 2: Obscuring Transaction Amounts
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Xcoin hides how much you send, not just who sends or receives it.</p>
              </div>
              <div>
                <Link href="/what-are-view-keys" className="text-accent hover:text-accent/80 underline font-medium">
                  View Keys: Optional, Controlled Transparency
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Let auditors or partners view your private transactions without full control.</p>
              </div>
              <div>
                <Link href="/what-is-keccak-512" className="text-accent hover:text-accent/80 underline font-medium">
                  Keccak-512: The ultimate hash algorithm
                </Link>
                <p className="text-sm text-muted-foreground mt-1">A secure, high-speed hashing algorithm that powers address generation in Xcoin.</p>
              </div>
              <div>
                <Link href="/what-is-poseidon-hash" className="text-accent hover:text-accent/80 underline font-medium">
                  Poseidon Hash: Tailor-made for zero-knowledge
                </Link>
                <p className="text-sm text-muted-foreground mt-1">A STARK-friendly hash function optimized for privacy, scalability, and ZK-proof efficiency.</p>
              </div>
            </div>
          </div>

          {/* Technology & Architecture */}
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">3. Technology & Architecture</h2>
            <div className="space-y-4">
              <div>
                <Link href="/what-is-dag-plus" className="text-accent hover:text-accent/80 underline font-medium">
                  DAG+: Beyond Blocks, Beyond Chains
                </Link>
                <p className="text-sm text-muted-foreground mt-1">A Directed Acyclic Graph combined with validator checkpoints replaces slow, linear blockchains.</p>
              </div>
              <div>
                <Link href="/what-is-zk-rollups" className="text-accent hover:text-accent/80 underline font-medium">
                  zk-Rollup: Compressing Transactions Efficiently
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Xcoin batches thousands of encrypted transactions into a single proof for high throughput.</p>
              </div>
              <div>
                <Link href="/what-is-sep" className="text-accent hover:text-accent/80 underline font-medium">
                  SEP Nodes: What Validators Do
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Secure Entry Points (SEP nodes) verify encrypted transactions and vote on checkpoints.</p>
              </div>
              <div>
                <Link href="/how-xcoin-handles-10000-tps" className="text-accent hover:text-accent/80 underline font-medium">
                  How Xcoin Handles 10,000+ Transactions Per Second
                </Link>
                <p className="text-sm text-muted-foreground mt-1">By combining DAG and rollup tech, Xcoin breaks the limits of traditional chains.</p>
              </div>
              <div>
                <Link href="/what-is-aes-512" className="text-accent hover:text-accent/80 underline font-medium">
                  AES-512 Cascade Encryption
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Every transaction is wrapped in multiple layers of AES-512 encryption — even metadata is hidden.</p>
              </div>
              <div>
                <Link href="/why-xcoin-uses-no-mining" className="text-accent hover:text-accent/80 underline font-medium">
                  Why Xcoin Uses No Mining, No Staking, No Block Rewards
                </Link>
                <p className="text-sm text-muted-foreground mt-1">No wasteful computation or incentives that centralize power — only security and speed.</p>
              </div>
            </div>
          </div>

          {/* Governance & DAO */}
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">4. Governance & DAO</h2>
            <div className="space-y-4">
              <div>
                <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline font-medium">
                  What is XXX DAO?
                </Link>
                <p className="text-sm text-muted-foreground mt-1">A decentralized autonomous organization that governs Xcoin's rules and upgrades.</p>
              </div>
              <div>
                <Link href="/how-voting-and-proposals-work" className="text-accent hover:text-accent/80 underline font-medium">
                  How Voting and Proposals Work
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Every token holder can vote on proposals, upgrades, and treasury decisions.</p>
              </div>
              <div>
                <Link href="/who-holds-power-in-the-ecosystem" className="text-accent hover:text-accent/80 underline font-medium">
                  Who Holds Power in the Ecosystem?
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Power is distributed to participants, not miners or foundations.</p>
              </div>
              <div>
                <Link href="/treasury-delegation-and-validator-licenses" className="text-accent hover:text-accent/80 underline font-medium">
                  Treasury, Delegation, and Validator Licenses
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Funds are managed transparently, and validators are licensed via token staking.</p>
              </div>
              <div>
                <Link href="/your-role-as-a-token-holder" className="text-accent hover:text-accent/80 underline font-medium">
                  Your Role as a Token Holder
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Holding XXX tokens gives you real influence over Xcoin's direction.</p>
              </div>
              <div>
                <Link href="/what-are-xxx-tokens" className="text-accent hover:text-accent/80 underline font-medium">
                  What are XXX Tokens?
                </Link>
                <p className="text-sm text-muted-foreground mt-1">The native governance and utility tokens that power participation and access in the Xcoin ecosystem.</p>
              </div>
            </div>
          </div>

          {/* Use Cases & Benefits */}
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">5. Use Cases & Benefits</h2>
            <div className="space-y-4">
              <div>
                <Link href="/using-xcoin-for-payments-and-savings" className="text-accent hover:text-accent/80 underline font-medium">
                  Using Xcoin for Payments and Savings
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Send, receive, and store value privately — instantly and securely.</p>
              </div>
              <div>
                <Link href="/anonymous-donations-remittances-and-business-transfers" className="text-accent hover:text-accent/80 underline font-medium">
                  Anonymous Donations, Remittances, and Business Transfers
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Xcoin is ideal for private, untraceable financial activity, both personal and professional.</p>
              </div>
              <div>
                <Link href="/why-xcoin-is-better" className="text-accent hover:text-accent/80 underline font-medium">
                  Why Xcoin is Better Than Monero, Zcash, or Bitcoin
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Xcoin combines more privacy, better speed, post-quantum safety, and no chain bloat.</p>
              </div>
              <div>
                <Link href="/optional-compliance" className="text-accent hover:text-accent/80 underline font-medium">
                  Optional Compliance for Audits and Taxes
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Use view keys to prove activity when required — and only when you choose.</p>
              </div>
              <div>
                <Link href="/eco-friendly-infrastructure" className="text-accent hover:text-accent/80 underline font-medium">
                  Eco-Friendly Infrastructure and Near-Zero Energy Use
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Xcoin consumes minimal energy, using no mining or proof-of-work.</p>
              </div>
              <div>
                <Link href="/why-xcoin-replaces-bitcoin" className="text-accent hover:text-accent/80 underline font-medium">
                  Why Xcoin Will Replace Bitcoin
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Bitcoin started the revolution — Xcoin is built to finish it.</p>
              </div>
            </div>
          </div>

          {/* Getting Involved */}
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">6. Getting Involved</h2>
            <div className="space-y-4">
              <div>
                <Link href="/validator-application" className="text-accent hover:text-accent/80 underline font-medium">
                  Become a Validator (SEP Node)
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Run a node, verify proofs, and help secure the Xcoin network.</p>
              </div>
              <div>
                <Link href="/participate-in-governance" className="text-accent hover:text-accent/80 underline font-medium">
                  Participate in Governance
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Vote on proposals and shape the protocol's future.</p>
              </div>
              <div>
                <Link href="/fund" className="text-accent hover:text-accent/80 underline font-medium">
                  Join the Early Access Sale
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Secure your XXX tokens early and support the project's launch phase.</p>
              </div>
              <div>
                <Link href="/stay-updated" className="text-accent hover:text-accent/80 underline font-medium">
                  Stay Updated
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Join our community channels and be the first to hear what's next.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 p-8 rounded-2xl border border-border bg-card">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to explore?
            </p>
            <p className="text-base text-muted-foreground">
              Dive deeper into each topic by clicking one of the guides above — or scroll through the whitepapers and technology explainers to understand what makes Xcoin the most advanced privacy coin of its generation.
            </p>
          </div>
        </div>

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

        {/* CTA to Learning Center */}
        <div className="mt-24 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
              Explore the Learning Center
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dive deeper into Xcoin's technology, governance, and use cases with our comprehensive Learning Center.
            </p>
            <Link
              href="/learning"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
            >
              Visit Learning Center
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
