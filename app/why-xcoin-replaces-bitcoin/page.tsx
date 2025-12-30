import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Check, X } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Why Xcoin Will Replace Bitcoin",
  description:
    "Bitcoin started the revolution—but Xcoin is built to finish it. Discover why Xcoin is the upgrade Bitcoin never had: private, scalable, efficient, and governed by the people.",
  openGraph: {
    title: "Why Xcoin Will Replace Bitcoin",
    description: "Bitcoin started the revolution—but Xcoin is built to finish it.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Xcoin Will Replace Bitcoin",
    description: "The upgrade Bitcoin never had: private, scalable, efficient, and governed by the people.",
  },
}

const problems = [
  "Every transaction is public — anyone can see who sent how much to whom—forever.",
  "No privacy, no fungibility — coins can be tracked, blacklisted, and censored.",
  "Not quantum-safe — Bitcoin's elliptic curve cryptography will be breakable by future quantum computers.",
  "Slow and inefficient — 7 transactions per second, high fees, and huge energy use.",
  "Controlled by miners and corporations — centralization through mining pools and dev groups.",
]

const comparisonFeatures = [
  {
    feature: "Privacy",
    bitcoin: "None—everything is public",
    xcoin: "Default—sender, receiver & amount hidden",
  },
  {
    feature: "Quantum Resistance",
    bitcoin: "No",
    xcoin: "Yes—SPHINCS+, WOTS+, zk-STARKs",
    xcoinLinks: {
      "SPHINCS+": "/what-is-sphincs-plus",
      "WOTS+": "/what-is-wots-plus",
      "zk-STARKs": "/what-is-zk-starks",
    },
  },
  {
    feature: "Scalability",
    bitcoin: "~7 TPS",
    xcoin: "10,000+ TPS via zk-Rollups + DAG",
    xcoinLinks: {
      "zk-Rollups": "/what-is-zk-rollups",
      "DAG": "/what-is-dag-plus",
    },
  },
  {
    feature: "Energy Use",
    bitcoin: "Extreme (Proof-of-Work mining)",
    xcoin: "Near-zero (no mining, no staking)",
  },
  {
    feature: "Governance",
    bitcoin: "Controlled by devs and miners",
    xcoin: "DAO-based — 1 vote per holder",
    xcoinLinks: {
      "DAO-based": "/what-is-xxx-dao",
    },
  },
  {
    feature: "Transparency Options",
    bitcoin: "None",
    xcoin: "Optional View Keys for audits/compliance",
    xcoinLinks: {
      "View Keys": "/what-are-view-keys",
    },
  },
  {
    feature: "Inflation",
    bitcoin: "Ongoing until 2140",
    xcoin: "None—21M coins premined at genesis",
    xcoinLinks: {
      "21M coins": "/learning/fixed-supply",
      "genesis": "/learning/dag",
    },
  },
  {
    feature: "Censorship Resistance",
    bitcoin: "Medium (KYC pressure, traceable)",
    xcoin: "Full—anonymous, untraceable, decentralized",
  },
]

function renderTextWithLinks(text: string, links?: Record<string, string>) {
  if (!links) return <span>{text}</span>

  // Filter out undefined values
  const validLinks = Object.fromEntries(
    Object.entries(links).filter(([_, href]) => href !== undefined)
  ) as Record<string, string>

  // Split text and find links
  const parts: (string | { text: string; href: string })[] = []
  let remaining = text

  for (const [key, href] of Object.entries(validLinks)) {
    const index = remaining.indexOf(key)
    if (index !== -1) {
      // Add text before the link
      if (index > 0) {
        parts.push(remaining.substring(0, index))
      }
      // Add the link
      parts.push({ text: key, href })
      // Update remaining text
      remaining = remaining.substring(index + key.length)
    }
  }
  
  // Add remaining text
  if (remaining) {
    parts.push(remaining)
  }

  // If no links were found, return original text
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

export default function WhyXcoinReplacesBitcoinPage() {
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
              src="/img/xcoin_grid/box1.jpeg"
              alt="Why Xcoin Will Replace Bitcoin"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  Why Xcoin Will Replace Bitcoin
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <p className="mt-6 text-lg text-muted-foreground">
            Bitcoin started the revolution—but Xcoin is built to finish it.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            While Bitcoin proved that decentralized money is possible, it still suffers from critical flaws that prevent
            it from being a true privacy-first, future-proof currency.
          </p>
        </div>

        {/* The Problems with Bitcoin */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            The Problems with Bitcoin
          </h2>
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/50 transition-colors"
              >
                <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Comparison Table */}
        <div className="mt-20 mx-auto max-w-6xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8 text-center">
            Bitcoin vs Xcoin
          </h2>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Feature</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Bitcoin</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Xcoin</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr
                      key={item.feature}
                      className="border-b border-border hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{item.feature}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <X className="h-5 w-5 text-destructive flex-shrink-0" />
                          <span>{item.bitcoin}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-foreground">
                          <Check className="h-5 w-5 text-accent flex-shrink-0" />
                          {renderTextWithLinks(item.xcoin, item.xcoinLinks as Record<string, string> | undefined)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mt-20 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            Why It Matters
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-lg mb-3 text-foreground">Bitcoin paved the way—but it's stuck in the past:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Transparent by design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Vulnerable to surveillance and quantum threats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Too slow and too expensive for global use</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-accent/30 bg-accent/5">
              <h3 className="font-semibold text-lg mb-3 text-foreground">Xcoin is the upgrade Bitcoin never had:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Private</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Scalable</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Efficient</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Governed by the people</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 mx-auto max-w-4xl text-center">
          <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground mb-4">
            The world doesn't need another coin.
          </p>
          <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground mb-4">
            It needs a replacement.
          </p>
          <p className="text-3xl font-[family-name:var(--font-heading)] font-bold bg-gradient-to-r from-accent via-cyan-400 to-accent bg-clip-text text-transparent">
            That's Xcoin.
          </p>
        </div>

      </div>
    </div>
  )
}



