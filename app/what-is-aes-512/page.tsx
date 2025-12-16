import type { Metadata } from "next"
import Link from "next/link"
import { Lock, Shield, Zap, Key, CheckCircle2, FileText, Server, HardDrive } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What is AES-512?",
  description:
    "AES-512 is a proprietary 512-bit version of the Advanced Encryption Standard, designed to deliver an extreme level of cryptographic security—far beyond what's used in any systems today.",
  openGraph: {
    title: "What is AES-512?",
    description: "Military-grade encryption with 512-bit key length. Quantum-resistant and non-exportable.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is AES-512?",
    description: "Sovereign-grade encryption standard. Future-proof protection for critical infrastructure.",
  },
}

const keyFeatures = [
  {
    icon: Key,
    title: "512-bit Key Length",
    description: "With 2^512 possible combinations, AES-512 offers protection far beyond the reach of brute-force attacks—now or in the future.",
  },
  {
    icon: Shield,
    title: "Quantum Resistance",
    description: "While quantum computers pose a risk to many current encryption systems, AES-512 is designed to remain secure even against quantum-scale processing.",
  },
  {
    icon: Lock,
    title: "Non-exportable Design",
    description: "In Xcoin, the AES-512 implementation is private and cannot be extracted or copied, eliminating the risk of code exposure or unauthorized duplication.",
  },
  {
    icon: Zap,
    title: "Full Integration",
    description: "AES-512 is deeply embedded in the Xcoin stack, securing not just data, but also validator keys, node authentication, encrypted DAO governance, and more.",
  },
  {
    icon: Shield,
    title: "Cascade Encryption",
    description: "Data can be encrypted in multiple layers using independent AES-512 keys, making it exponentially harder to break—even under advanced forensic or quantum attack models.",
  },
  {
    icon: Zap,
    title: "Fast & Lightweight",
    description: "Despite its size, AES-512 is optimized for high performance, with hardware acceleration where available, ensuring real-time encryption without lag.",
  },
]

const useCases = [
  {
    icon: Lock,
    title: "Wallet Encryption",
    description: "Lotus Wallet uses AES-512 to encrypt private keys and transaction histories, ensuring that sensitive data stays safe even if device storage is compromised.",
  },
  {
    icon: FileText,
    title: "Secure Storage",
    description: "Files, documents, and encrypted notes within the CREO ecosystem are locked with AES-512, keeping information unreadable to anyone without proper keys.",
  },
  {
    icon: Server,
    title: "Protocol-Level Security",
    description: "Internal functions such as DAO vote signing, consensus messaging, and access control for infrastructure components are AES-512 protected.",
  },
  {
    icon: HardDrive,
    title: "Offline Storage",
    description: "Lotus Wallet uses AES-512 encryption to secure assets in a fully offline wallet called Lotus Vault. Completely isolated from the internet, it's ideal for long-term, high-value storage with maximum protection against digital threats.",
  },
]

export default function WhatIsAES512Page() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/learning" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is AES-512?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            <strong className="text-foreground">AES-512</strong> is a proprietary 512-bit version of the Advanced Encryption Standard, designed to deliver an extreme level of cryptographic security—far beyond what's used in any systems today.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            While traditional applications like banking apps or secure messengers use 256-bit AES (already considered secure), AES-512 doubles the key length. In fact, AES-512 offers 2<sup>512</sup> possible combinations. That's not just twice as strong—AES-512 offers 2<sup>512</sup> possible keys, which equals approximately:
          </p>
          <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-sm font-mono text-muted-foreground break-all">
              13407807929942597099574024998205846127479365820592393377723561443721764030073546976801874298166903427690031858186486050853753882811946569946433649006084096...
            </p>
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            — an unimaginably large keyspace that makes brute-force attacks infeasible forever.
          </p>
        </div>

        {/* Proprietary Design */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Proprietary Design
            </h2>
            <p className="text-muted-foreground mb-4">
              AES-512 is not part of the public AES specification maintained by NIST. Instead, it is a real, custom-designed encryption system with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>True 512-bit key sizes</li>
              <li>A proprietary cipher structure</li>
              <li>Live, operational deployment inside the XXX blockchain, CREO platform, and Lotus Wallet</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Unlike public cryptographic standards, the AES-512 implementation used in Xcoin is private and non-exportable—meaning no third-party tools can be built to reverse-engineer or audit it. This makes it immune to code-level exploits or protocol fingerprinting.
            </p>
            <p className="text-muted-foreground">
              Its internal structure includes additional transformation rounds, larger block sizes, and dynamic key schedules that reduce predictability and eliminate cryptanalytic weak points. It is specifically built to withstand even future quantum computing attacks.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-20 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Common Use Cases */}
        <div className="mt-20 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Common Use Cases
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <useCase.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{useCase.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Deep Integration
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              AES-512 serves as the cryptographic backbone for Xcoin's most sensitive operations—from encrypted storage and wallet protection to validator authentication and governance logic. It enables military-grade encryption without performance compromise.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              By embedding AES-512 deeply into its infrastructure, Xcoin ensures that encryption is not an add-on, but a foundational layer. Whether applied to user-level wallets or protocol-level logic, AES-512 delivers consistent, tamper-proof protection across the ecosystem.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Its integration into Xcoin, CREO, and Lotus Wallet provides a unified, sovereign-grade standard that goes beyond compliance—it's designed for environments where failure is not an option.
            </p>
          </div>
        </div>

        {/* Why it Matters */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why it Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              AES-512 represents a new tier of cryptographic strength. In a world where encryption is increasingly targeted by state actors, AI, and emerging quantum machines, 256-bit security may soon no longer be enough. AES-512 is designed to future-proof the most critical aspects of blockchain infrastructure—from privacy to control, from governance to storage.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Xcoin's adoption of AES-512 makes it the only blockchain in the world to implement this proprietary encryption standard. By going beyond known cryptographic standards and into sovereign-grade design, AES-512 ensures that your assets, messages, and identity remain fully protected—permanently.
            </p>
          </div>
        </div>

        {/* Related Topics */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-4">
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/learning/post-quantum-cryptography"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Post-Quantum Cryptography
              </Link>
              <Link
                href="/what-is-sphincs-plus"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                SPHINCS+
              </Link>
              <Link
                href="/what-is-wots-plus"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                WOTS+
              </Link>
              <Link
                href="/quantum-safe"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Why Quantum-Safe Cryptography Matters
              </Link>
            </div>
          </div>
        </div>

        {/* Back Button - Bottom */}
        <div className="mt-16">
          <BackButton fallbackHref="/learning" position="bottom" />
        </div>
      </div>
    </div>
  )
}

