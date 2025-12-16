"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import clsx from "clsx"

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

  // Build parts array
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

const faqs = [
  {
    question: "Why should I invest in Xcoin?",
    answer:
      "Xcoin has the potential to become the next Bitcoin, but with better tech, more privacy, and a fraction of the price. Bitcoin was once just a few euros. Today, it's worth tens of thousands. Xcoin solves Bitcoin's biggest flaws: no privacy, no scalability, and high energy use. It's fully anonymous, quantum-safe, eco-friendly, and capped at 21 million coins. The price is fixed at just €10 per coin for early supporters. Ask yourself: If you could buy Bitcoin at €10 today, would you? This is that moment, but with even more upside.",
  },
  {
    question: "What makes Xcoin better than Bitcoin, Monero, or USDT?",
    answer:
      "Xcoin is simply better, and here's why: Monero is private, but it's not quantum-proof and doesn't scale well. Bitcoin is neither anonymous nor energy-efficient, Xcoin is both. USDT is centralized and inflation-prone, Xcoin is the opposite. Xcoin is the only coin that offers: zk-STARK privacy by default, AES-512 cascade encryption, No mining, no inflation, Quantum-safe architecture, View Keys support for optional auditability.",
    answerWithLinks: true,
    links: {
      "zk-STARK": "/what-is-zk-starks",
      "AES-512": "/what-is-aes-512",
      "View Keys": "/what-are-view-keys",
    },
  },
  {
    question: "How does the value of Xcoin grow over time?",
    answer:
      "Xcoin has a fixed supply of 21 million coins, just like Bitcoin — but: No mining = no sell pressure. No inflation = no devaluation. Early access = fixed price of €10 per coin. Supply is capped forever, and adoption + demand will drive value.",
  },
  {
    question: "Is Xcoin really private by default?",
    answer:
      "Yes. Unlike Monero or Zcash, there are no toggles, no partial privacy, no settings to adjust. Untraceable. Encrypted with AES-512 (Cascade). Invisible with zk-STARKs. Routed through stealth addresses. Zero metadata — not even wallet links or timestamps are exposed. No one — not even we — can see your transactions.",
    answerWithLinks: true,
    links: {
      "AES-512": "/what-is-aes-512",
      "zk-STARKs": "/what-is-zk-starks",
      "stealth addresses": "/what-is-stealth-addresses",
    },
  },
  {
    question: "Is Xcoin quantum-safe?",
    answer:
      "Yes, absolutely. Xcoin uses: SPHINCS+ / WOTS+ signatures, zk-STARKs (quantum-resistant zero-knowledge proofs), Poseidon & Keccak-512 (quantum-resistant hashing).",
    answerWithLinks: true,
    links: {
      "SPHINCS+": "/what-is-sphincs-plus",
      "WOTS+": "/what-is-wots-plus",
      "zk-STARKs": "/what-is-zk-starks",
      "Poseidon": "/what-is-poseidon-hash",
      "Keccak-512": "/what-is-keccak-512",
    },
  },
  {
    question: "Is it fast and cheap to use?",
    answer:
      "Extremely. Xcoin uses: zk-Rollups for bundling transactions, DAG (Directed Acyclic Graph) for near-instant confirmations, No mining = no gas war fees, Thousands of transactions per second, Very low transaction fees.",
    answerWithLinks: true,
    links: {
      "zk-Rollups": "/what-is-zk-rollups",
      "DAG": "/what-is-dag-plus",
    },
  },
  {
    question: "Is Xcoin green?",
    answer:
      "Yes, absolutely — it's one of the greenest blockchains ever. No energy-hungry mining. Validation is light, fast, and decentralized. Bitcoin = massive CO₂ emissions. Xcoin = the new green currency.",
  },
  {
    question: "Will I need to verify my identity?",
    answer:
      "No. Xcoin is 100% private and decentralized. No KYC. No accounts. No surveillance. Unless you choose to use View Keys (for audits or tax reporting), your activity remains invisible.",
    answerWithLinks: true,
    links: {
      "View Keys": "/what-are-view-keys",
    },
  },
  {
    question: "What exactly are XXX tokens?",
    answer:
      "XXX tokens are your early access gateway to Xcoin, the future of private finance. 1 XXX token = 1 Xcoin when the XXX network launches. Locked-in price of just €10 per Xcoin — guaranteed, no matter the future market rate. Instantly delivered to your wallet and fully tradeable (SPL tokens on Solana). Can be held, transferred, or exchanged for real Xcoins as soon as the mainnet goes live. Think of XXX as your VIP access to a groundbreaking technology, before the rest of the world catches on.",
    answerWithLinks: true,
    links: {
      "XXX tokens": "/what-are-xxx-tokens",
    },
  },
  {
    question: "Can I trade XXX tokens?",
    answer:
      "Yes. XXX Tokens are SPL tokens on Solana. You can hold them, send them, or trade them. At launch, you redeem them for real Xcoins 1:1.",
  },
  {
    question: "Can I trade Xcoin?",
    answer:
      "Yes. Once launched, Xcoin will be fully tradable. It will be supported by Lotus Wallet and other wallets. You'll be able to: Hold your coins securely, Send and receive them instantly, Trade on the official Global Exchange Platform (GEP) and other supported exchanges.",
  },
  {
    question: "When is the official Xcoin launch?",
    answer:
      "Planned for Q4 2026, after: Testnet, audits & wallet deployment (2026), Validator launch & public infrastructure (late 2026).",
  },
  {
    question: "Can I reverse my investment or get a refund?",
    answer:
      "No refunds, but you keep full control over your tokens. You can: Hold, Trade, Redeem at launch.",
  },
  {
    question: "Can I store XXX tokens in MetaMask?",
    answer:
      "Yes — just add your XXX token by following the instructions on our website. You can use MetaMask or any other wallet that supports Polygon. All info you need is provided on the confirmation page.",
  },
  {
    question: "Is this like USDT or stablecoins?",
    answer:
      "No, Xcoin is not pegged to anything. USDT = centralized, controlled, inflated. Xcoin = decentralized, scarce, and anonymous.",
  },
  {
    question: "Will Xcoin be listed on exchanges?",
    answer:
      "Yes. Xcoin will launch on the Global Exchange Platform (GEP) and later be listed on: DEXs (like Uniswap, Sushi, etc.), CEXs (pending DAO approval).",
  },
  {
    question: "Is it legal to use Xcoin?",
    answer:
      "Yes. Privacy is a human right. Xcoin includes optional View Keys for: Voluntary audits, Tax reports, Business compliance.",
    answerWithLinks: true,
    links: {
      "View Keys": "/what-are-view-keys",
    },
  },
  {
    question: "How is this different from hype coins or memes?",
    answer:
      "Xcoin: Has no celebrity marketing, No pump-and-dump tokenomics, No inflation, no staking gimmicks, Just world-class tech with real utility.",
  },
  {
    question: "Is Xcoin a meme coin?",
    answer:
      "Absolutely not! Xcoin isn't based on hype, memes, or dog pictures. It's based on math, cryptography, and real-world necessity.",
  },
  {
    question: "Who controls Xcoin?",
    answer:
      "No one. Xcoin is governed by a DAO. That means: Everyone gets a fair chance to participate, All decisions are transparent, No company, no central owner, no centralized control.",
    answerWithLinks: true,
    links: {
      "DAO": "/what-is-xxx-dao",
    },
  },
  {
    question: "Can I invest from anywhere?",
    answer:
      "Yes. As long as you can use crypto and access your wallet, you can invest. No restrictions. No geo-blocks. No discrimination.",
  },
  {
    question: "How do I stay updated?",
    answer:
      "Join us via: Discord, Twitter/X, This official Xcoin website, Email newsletter.",
  },
  {
    question: "How do I buy XXX tokens?",
    answer:
      "You can buy XXX tokens directly on this website. Connect your wallet (MetaMask or any Solana compatible wallet), Select how many tokens you want to purchase, Pay in with crypto currency, Your XXX tokens will be delivered instantly to your wallet. Check it out? Just click here ➜ Get XXX Tokens",
    answerWithLinks: true,
    links: {
      "Get XXX Tokens": "/fund",
    },
  },
  {
    question: "What happens when the mainnet launches?",
    answer:
      "When the Xcoin mainnet goes live (planned for Q4 2026), you'll be able to redeem each XXX Token for 1 real Xcoin via a secure on-chain redemption portal. 1 XXX = 1 Xcoin (fixed rate). No fees, no delays, instant redemption. We'll announce the redemption link on all official channels.",
  },
  {
    question: "How are funds raised with XXX tokens used?",
    answer:
      "All funds raised help bring Xcoin to life, fast, secure, and globally accessible. Development of validator software and wallets, Security audits and network testing, Global Exchange Platform (GEP) integration, DAO infrastructure and proposal tooling, Community expansion and ecosystem partnerships. All spending is managed by XXX DAO and reported publicly each year.",
    answerWithLinks: true,
    links: {
      "XXX DAO": "/what-is-xxx-dao",
    },
  },
  {
    question: "What if I lose access to my wallet?",
    answer:
      "If you lose access to your wallet, your XXX Tokens cannot be recovered. Xcoin is fully decentralized, only you control your funds. Always back up your seed phrase. Never share your private key. Use a hardware wallet for extra security if possible. We cannot reset or recover your wallet. Privacy means full ownership and responsibility.",
  },
  {
    question: "Is Xcoin open source?",
    answer:
      "Yes. All key components of Xcoin will be open source and available on our GitHub: Validator software and cryptographic libraries, Governance contracts and DAO tooling, Wallet integrations and redemption portals. We believe in transparency, peer review, and open innovation, always.",
  },
  {
    question: "What if I miss the launch?",
    answer:
      "No problem. While early supporters who purchase XXX Tokens will have guaranteed access to Xcoin at launch, you'll still be able to buy Xcoin afterward on public exchanges. However, please keep in mind: After the €6 million funding target is reached, XXX Tokens cannot be purchased anymore. XXX Tokens will no longer be available once the Testnet is Launched. The launch price is fixed at €10 per Xcoin. Post-launch, the price of Xcoin will be determined by market demand on public exchanges. If you miss the early phase, you're still welcome to join the community, participate in DAO governance, and purchase Xcoin after launch, but the early supporter benefits (such as guaranteed pricing and early access) will no longer apply.",
    answerWithLinks: true,
    links: {
      "XXX Tokens": "/what-are-xxx-tokens",
      "DAO": "/what-is-xxx-dao",
    },
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need to know about Xcoin, the technology, and how to participate.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-16 max-w-3xl space-y-4" role="list">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="rounded-2xl border border-border bg-card transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1" role="listitem">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setOpenIndex(openIndex === index ? null : index)
                  }
                }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-[family-name:var(--font-heading)] text-lg font-semibold">{faq.question}</span>
                <ChevronDown
                  className={clsx(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                    openIndex === index && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div 
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="px-6 pb-6"
                >
                  {faq.answerWithLinks && faq.links ? (
                    <div className="text-muted-foreground whitespace-pre-line">
                      {renderTextWithLinks(faq.answer, faq.links)}
                    </div>
                  ) : (
                    <p className="text-muted-foreground whitespace-pre-line">{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-24 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Still have questions?</h2>
          <p className="mt-4 text-muted-foreground">
            Join our community channels to get answers from the team and other community members.
          </p>
          <a
            href="/community"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Join Community
          </a>
        </div>
      </div>
    </div>
  )
}
