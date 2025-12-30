import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Lock, Shield, Zap, Network, Eye, X, Check, ArrowLeft } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Why Xcoin Is Better Than Monero, Zcash, or Bitcoin",
  description:
    "Privacy coins promised financial freedom, but each fell short. Bitcoin exposes everything. Monero slows everything down. Zcash hides only when asked. Xcoin was built to fix these flaws once and for all.",
  openGraph: {
    title: "Why Xcoin Is Better Than Monero, Zcash, or Bitcoin",
    description: "Xcoin eliminates the tradeoffs. You get privacy, performance, decentralization, and speed—all in one.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Xcoin Is Better Than Monero, Zcash, or Bitcoin",
    description: "Not just a replacement for Monero, Zcash, or Bitcoin, but for all cryptocurrencies.",
  },
}

const xcoinAdvantages = [
  {
    icon: Eye,
    text: "Privacy by default: every transaction is shielded",
  },
  {
    icon: Zap,
    text: "Advanced zk-rollups: no address reuse, no visible amounts",
  },
  {
    icon: Shield,
    text: "AES-512 Cascade Encryption: post-quantum layered protection",
  },
  {
    icon: Network,
    text: "DAG-based architecture: no blocks, no bottlenecks, no miners",
  },
  {
    icon: Zap,
    text: "Instant finality: transactions confirm in seconds",
  },
  {
    icon: Network,
    text: "No chain bloat: thanks to zk-compression",
  },
  {
    icon: Lock,
    text: "No staking. No block rewards. No dev tax: true community governance via the DAO",
  },
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

export default function WhyXcoinIsBetterPage() {
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
              src="/img/xcoin_grid/box5.jpeg"
              alt="Why Xcoin Is Better Than Monero, Zcash, or Bitcoin"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  Why Xcoin Is Better Than Monero, Zcash, or Bitcoin
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <p className="mt-6 text-lg text-muted-foreground">
            Privacy coins promised financial freedom, but each fell short. Bitcoin exposes everything. Monero slows everything down. Zcash hides only when asked. Xcoin was built to fix these flaws once and for all.
          </p>
        </div>

        {/* Bitcoin Section */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                Bitcoin: Transparent by Default
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Bitcoin may have launched the revolution, but it was never designed for privacy. Every transaction is public. Every wallet can be mapped. Every payment you make is permanently etched into the blockchain, visible to anyone, forever.
            </p>
            <p className="text-muted-foreground">
              Tools like chain analysis, address clustering, and forensic tracing have made Bitcoin one of the most surveilled financial systems on Earth.
            </p>
          </div>
        </div>

        {/* Monero Section */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                Monero: Better Privacy, But At a Cost
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Monero hides transaction details through ring signatures and stealth addresses, a step forward in privacy. But its performance suffers: the chain is bloated, sync is slow, and transactions are heavy.
            </p>
            <p className="text-muted-foreground">
              Forensic firms have even found weaknesses in Monero's design, and governments are watching closely.
            </p>
            <Link
              href="/what-is-stealth-addresses"
              className="mt-4 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Learn more about stealth addresses
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>

        {/* Zcash Section */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                Zcash: Optional Privacy, That Few Use
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Zcash introduced zero-knowledge proofs to blockchain, but its privacy is opt-in, not default. Most users don't bother to shield their transactions, and the network constantly leaks metadata.
            </p>
            <p className="text-muted-foreground">
              Even worse: a centralized foundation receives a built-in developer tax from every block reward. That's not decentralization, that's rent-seeking.
            </p>
            <Link
              href="/learning/zero-knowledge-privacy"
              className="mt-4 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              Learn more about zero-knowledge proofs
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>

        {/* Xcoin Section */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                Xcoin: Built to Solve What Others Couldn't
              </h2>
            </div>
            <ul className="space-y-4 mt-6">
              {xcoinAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-4">
                  <advantage.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    {renderTextWithLinks(advantage.text, {
                      "zk-rollups": "/what-is-zk-rollups",
                      "AES-512": "/what-is-aes-512",
                      "DAG-based": "/what-is-dag-plus",
                      "zk-compression": "/learning/zero-knowledge-privacy",
                      "DAO": "/what-is-xxx-dao",
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Statement */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
            <p className="text-xl font-semibold text-foreground mb-4">
              Other coins chose tradeoffs. Xcoin eliminates them.
            </p>
            <div className="mt-6 space-y-3 text-muted-foreground">
              <p>You don't have to pick between privacy and performance.</p>
              <p>Between decentralization and governance.</p>
              <p>Between speed and safety.</p>
            </div>
            <p className="mt-8 text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              With Xcoin, you get it all.
            </p>
          </div>
        </div>

        {/* Final Statement */}
        <div className="mt-12 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
            <p className="text-lg text-muted-foreground mb-2">Not a patch.</p>
            <p className="text-lg text-muted-foreground mb-2">Not a compromise.</p>
            <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              Not just a replacement for Monero, Zcash, or Bitcoin, but for all cryptocurrencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

