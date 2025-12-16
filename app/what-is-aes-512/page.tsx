"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Lock, Shield, Zap, Key, CheckCircle2, FileText, Server, HardDrive } from "lucide-react"
import BackButton from "@/components/back-button"

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

const NUMBER = "13407807929942597099574024998205846127479365820592393377723561443721764030073546976801874298166903427690031858186486050853753882811946569946433649006084096"

function AnimatedNumber() {
  const [showEllipsis, setShowEllipsis] = useState(false)

  useEffect(() => {
    // Nach 7 Sekunden (wenn die Zahl sichtbar ist) die Ellipsis anzeigen
    const ellipsisTimer = setTimeout(() => {
      setShowEllipsis(true)
    }, 7000)

    return () => clearTimeout(ellipsisTimer)
  }, [])

  return (
    <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border overflow-hidden">
      <div className="relative w-full">
        <p className="text-sm font-mono text-muted-foreground break-all whitespace-nowrap">
          <span className="inline-block animate-slide-in-and-out-loop">
            {NUMBER}
            {showEllipsis && "..."}
          </span>
        </p>
      </div>
      <style jsx global>{`
        @keyframes slide-in-and-out-loop {
          0% {
            transform: translateX(100%);
          }
          40% {
            transform: translateX(0);
          }
          60% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-slide-in-and-out-loop {
          animation: slide-in-and-out-loop 18s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default function WhatIsAES512Page() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/learning" position="top" />
      <BackButton fallbackHref="/learning" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What is AES-512?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            <strong className="text-foreground">CRΞØ's AES-512</strong> is a proprietary 512-bit variant of the Advanced Encryption (AES) Standard, engineered to provide an exceptionally high level of cryptographic security, far beyond the standards used in modern systems today.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            While conventional applications such as banking platforms or secure messaging apps typically rely on 256-bit AES encryption (already considered highly secure), AES-512 doubles the key length. This dramatically increases security. In fact, AES-512 supports 2<sup>512</sup> possible key combinations. That is not just twice the strength, but exponentially more: 2<sup>512</sup> =
          </p>
          <AnimatedNumber />
          <p className="mt-4 text-lg font-semibold text-foreground">
            This unimaginably vast keyspace makes brute-force attacks permanently infeasible, even with future advances in computing power.
          </p>
        </div>

        {/* Beyond Public Standards */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Beyond Public Standards
            </h2>
            <p className="text-muted-foreground mb-4">
              The standardized AES family includes only AES-128, AES-192 and AES-256. By contrast, the AES-512 system used within CRΞØ is a custom-developed encryption primitive with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>true 512-bit key sizes</li>
              <li>a proprietary cipher structure</li>
              <li>active deployment inside the CRΞØ platform and the SEP Network</li>
            </ul>
            <p className="text-muted-foreground">
              Unlike public cryptographic protocols, CRΞØ's AES-512 implementation is fully private and non-exportable. This prevents third parties from building tools to audit, reverse-engineer, or fingerprint the cipher. Its closed design avoids code-level vulnerabilities or protocol-based exploits that typically arise when algorithms are widely exposed and reused.
            </p>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Technical Architecture
            </h2>
            <p className="text-muted-foreground mb-4">
              CRΞØ's AES-512 is not part of the official AES standard defined by the National Institute of Standards and Technology (NIST). In CRΞØ, "AES-512" refers to a custom symmetric blockcipher design based on an extended <strong className="text-foreground">Rijndael-512</strong> configuration, which supports 512-bit blocks and keys. This construction is entirely proprietary and separate from the standardized AES versions.
            </p>
            <p className="text-muted-foreground mb-4">
              The term "cascade" reflects the cryptographic structure: multiple Rijndael-512 layers applied sequentially, each layer using independently derived keys and initialization vectors generated from <Link href="/what-is-keccak-512" className="text-accent hover:text-accent/80 underline">Keccak-512</Link> entropy. Even if a theoretical weakness were discovered in one layer, the remaining layers maintain confidentiality and integrity.
            </p>
            <p className="text-muted-foreground">
              By extending the original Rijndael architecture to 512-bit parameters and combining it with a multi-layer cascade, CRΞØ achieves a significantly enlarged post-quantum security margin. The name "AES-512" is therefore used as a shorthand label for this Rijndael-512-based cascade, not as a reference to any NIST-approved AES variant.
            </p>
          </div>
        </div>

        {/* Quantum Secure */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Quantum Secure
            </h2>
            <p className="text-lg font-semibold text-foreground mb-4">
              Designed for Future-Proof Security
            </p>
            <p className="text-muted-foreground mb-4">
              Its internal design includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Additional transformation rounds</li>
              <li>Enlarged block sizes</li>
              <li>Dynamic key scheduling</li>
            </ul>
            <p className="text-muted-foreground">
              These enhancements further reduce predictability and eliminate known cryptanalytic weaknesses. AES-512 is explicitly engineered to withstand even the threat of future quantum computing attacks.
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

        {/* AES-512 Foundation in CRΞØ */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              AES-512 Foundation in CRΞØ
            </h2>
            <p className="text-lg font-semibold text-foreground mb-4">
              The Backbone of CRΞØ
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Within the CRΞØ ecosystem, AES-512 is not a feature, it's a foundational layer. It forms the cryptographic backbone for the platform's most sensitive operations: communication, encrypted storage, authentication, governance logic, and more. This deep integration makes security tamper-proof across all layers of the system.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Ultimately, AES-512 establishes a unified, sovereign-grade encryption standard within CRΞØ. One that goes beyond traditional compliance and is purpose-built for environments where failure is simply not an option.
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

      </div>
    </div>
  )
}


