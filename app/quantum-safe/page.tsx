import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Shield, X, AlertTriangle, Check, Lock, Zap } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Why Quantum-Safe Cryptography Matters",
  description:
    "Encryption protects your wallet, transactions, and private communication. But today's cryptographic systems weren't designed for quantum computing. Xcoin is quantum-safe by default.",
  openGraph: {
    title: "Why Quantum-Safe Cryptography Matters",
    description: "Quantum safety isn't a future feature. It's an absolute necessity.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Quantum-Safe Cryptography Matters",
    description: "Xcoin is already quantum-resistant. No migration needed. Protection from day one.",
  },
}

const quantumTechnologies = [
  {
    name: "SPHINCS+",
    description: "for digital signatures",
    link: "/what-is-sphincs-plus",
  },
  {
    name: "WOTS+",
    description: "for digital signatures",
    link: "/what-is-wots-plus",
  },
  {
    name: "Keccak-512",
    description: "for secure hashing (SHA-3 family)",
    link: "/learning/post-quantum-cryptography",
  },
  {
    name: "Poseidon Hash",
    description: "for zero-knowledge circuits",
    link: "/what-is-poseidon-hash",
  },
  {
    name: "AES-512 Cascade Encryption",
    description: "for layered data protection",
    link: "/what-is-aes-512",
  },
]

const failureConsequences = [
  "Mass withdrawals and chaos",
  "Panic-driven selloffs and collapsed prices",
  "Emergency forks or chaotic migration efforts",
  "Permanent loss of trust and relevance",
]

function renderTextWithLinks(text: string, links?: Record<string, string>) {
  if (!links) return <span>{text}</span>

  const parts: (string | { text: string; href: string })[] = []
  let remaining = text

  for (const [key, href] of Object.entries(links)) {
    const index = remaining.indexOf(key)
    if (index !== -1) {
      if (index > 0) {
        parts.push(remaining.substring(0, index))
      }
      parts.push({ text: key, href })
      remaining = remaining.substring(index + key.length)
    }
  }
  
  if (remaining) {
    parts.push(remaining)
  }

  if (parts.length === 0 || (parts.length === 1 && typeof parts[0] === 'string')) {
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

export default function QuantumSafePage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Back Buttons - Absolute positioned, no space taken */}
      <BackButton fallbackHref="/overview" position="top" />
      <BackButton fallbackHref="/overview" position="bottom" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Image with Content Overlay */}
        <div className="mx-auto max-w-6xl mb-12">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/img/xcoin_grid/quantum_safe.jpg"
              alt="Why Quantum-Safe Cryptography Matters"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}

            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  Why Quantum-Safe Cryptography Matters
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <p className="mt-6 text-lg text-muted-foreground">
            Encryption is what protects your wallet, your transactions, and all private communication. But the cryptographic systems we rely on today — such as RSA, elliptic curves, and EdDSA — were never designed with quantum computing in mind.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Quantum computers will eventually be able to break these algorithms using methods like Shor's and Grover's. <strong className="text-foreground">It's not a matter of if, only when.</strong>
          </p>
        </div>

        {/* Xcoin's Post-Quantum Approach */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-6">
              Xcoin takes this threat seriously. That's why the entire protocol is built from the ground up using <strong className="text-foreground">post-quantum cryptography</strong>. Every key, every signature, every proof is designed to resist quantum attacks — not hypothetically, but practically, right now. This includes:
            </p>
            <div className="grid gap-4 md:grid-cols-2 mt-8">
              {quantumTechnologies.map((tech) => (
                <div key={tech.name} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <Link
                      href={tech.link}
                      className="font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      {tech.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg text-muted-foreground">
              Together, these form a robust security model that doesn't depend on outdated assumptions — it anticipates the future and is ready for it.
            </p>
          </div>
        </div>

        {/* When Cryptography Fails */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            When Cryptography Fails
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-muted-foreground mb-6">
              When a cryptographic system is broken, the consequences are immediate and irreversible. If attackers can derive private keys from public keys, they can access your funds without your knowledge. If digital signatures can be forged, anyone can impersonate you. If zero-knowledge proofs collapse, private transactions become traceable.
            </p>
            <p className="text-muted-foreground mb-6">
              For most cryptocurrencies, this would lead to:
            </p>
            <div className="space-y-4 mt-6">
              {failureConsequences.map((consequence, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{consequence}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground">
              In such a scenario, even coins with strong communities and skilled developers could vanish overnight. Just as traditional markets react instantly to hacks or breaches, a single credible quantum breakthrough could set off a chain reaction across the entire crypto industry.
            </p>
          </div>
        </div>

        {/* Quantum-Safe by Default */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                Quantum-Safe by Default
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Xcoin doesn't plan to "upgrade later." It is already quantum-resistant. There are no fallback algorithms, no emergency workarounds. The protocol was designed with the assumption that quantum attacks are real, and inevitable.
            </p>
            <p className="text-lg text-muted-foreground">
              As a result, Xcoin users won't need to migrate their keys, reissue assets, or wrap tokens in future-proof layers. The protection is native and permanent — from day one.
              </p>
            </div>
        </div>

        {/* The Real Advantage */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              The Real Advantage
            </h2>
            <p className="text-muted-foreground mb-4">
              While others may be forced into rapid, high-risk responses, Xcoin holders can act with calm and confidence — knowing that their privacy, their assets, and their identities remain intact. No panic. No patches. No chain-wide resets.
            </p>
            </div>
        </div>

        {/* Final Statement */}
        <div className="mt-16 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
            <p className="text-3xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              Quantum safety isn't a future feature — it's the foundation.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
