"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"

// FAQ Daten nach Kategorien organisiert (wie bei XCoin_Basti)
const faqData = {
  "Investment": [
    {
      question: "Why should I invest in Xcoin?",
      answer: `<p>Xcoin has the potential to become the next Bitcoin — but with better tech, more privacy, and a fraction of the price.</p>
<ul style="margin-left: 1rem; margin-top: 0.5rem;">
<li>Bitcoin was once just a few euros. Today, it's worth tens of thousands.</li>
<li>Xcoin solves Bitcoin's biggest flaws: no privacy, no scalability, and high energy use.</li>
<li>It's fully anonymous, quantum-safe, eco-friendly, and capped at 21 million coins.</li>
</ul>
<p style="margin-top: 0.5rem;">The price is fixed at just <strong>€10 per coin</strong> for early supporters.<br/>
Ask yourself: <em>If you could buy Bitcoin at €10 today, would you?</em><br/>
This is that moment — but with even more upside.</p>`
    },
    {
      question: "How does the value of Xcoin grow over time?",
      answer: `<p>Xcoin has a fixed supply of 21 million coins, just like Bitcoin — but:</p>
<ul class="list-disc list-inside ml-4">
<li>No mining = no sell pressure</li>
<li>No inflation = no devaluation</li>
<li>Early access = fixed price of €10 per coin</li>
</ul>
<p class="mt-2">Supply is capped forever, and adoption + demand will drive value.</p>`
    },
    {
      question: "When is the official Xcoin launch?",
      answer: `<p>Planned for Q1 2026, after:</p>
<ul class="list-disc list-inside ml-4">
<li>Testnet, audits & wallet deployment (2025)</li>
<li><a class="text-blue-400 underline hover:text-blue-300" href="/validator-application">Validator launch</a> & public infrastructure (late 2025)</li>
</ul>`
    },
    {
      question: "Can I reverse my investment or get a refund?",
      answer: `<p>No refunds — but you keep full control over your tokens. You can:</p>
<ul class="list-disc list-inside ml-4">
<li>Hold</li>
<li>Trade</li>
<li>Redeem at launch</li>
</ul>`
    },
    {
      question: "Can I invest from anywhere?",
      answer: `<p>Yes. As long as you can use crypto and access your wallet, you can invest.</p>
<p>No restrictions. No geo-blocks. No discrimination.</p>`
    },
    {
      question: "How do I stay updated?",
      answer: `<p>Join us via:</p>
<ul class="list-disc list-inside ml-4">
<li>Discord</li>
<li>Twitter/X</li>
<li>This official Xcoin website</li>
<li>Email newsletter</li>
</ul>`
    },
    {
      question: "What happens when the mainnet launches?",
      answer: `<p>When the Xcoin mainnet goes live (planned for Q1 2026), you'll be able to redeem each <a class="text-blue-400 underline hover:text-blue-300" href="/what-are-xxx-tokens">XXX Token</a> for 10 real Xcoins via a secure on-chain redemption portal.</p>
<ul class="list-disc list-inside ml-4 mt-2">
<li>1 XXX = 10 Xcoin (fixed rate)</li>
<li>No fees, no delays — instant redemption</li>
</ul>
<p class="mt-2">We'll announce the redemption link on all official channels.</p>`
    },
    {
      question: "What if I miss the launch?",
      answer: `<p>No problem. While early supporters who purchase <a class="text-blue-400 underline hover:text-blue-300" href="/what-are-xxx-tokens">XXX Tokens</a> will have guaranteed access to Xcoin at launch, you'll still be able to buy Xcoin afterward on public exchanges.</p>
<p class="mt-2">However, please keep in mind:</p>
<ul class="list-disc list-inside ml-4">
<li>After the €6 million funding target is reached, XXX Tokens cannot be purchased anymore</li>
<li>XXX Tokens will no longer be available once the Testnet is Launched</li>
<li>The launch price is fixed at €10 per Xcoin</li>
<li>Post-launch, the price of Xcoin will be determined by market demand on public exchanges</li>
</ul>
<p class="mt-4">If you miss the early phase, you're still welcome to <a class="text-blue-400 underline hover:text-blue-300" href="/community">join the community</a>, participate in DAO governance, and purchase Xcoin after launch — but the early supporter benefits (such as guaranteed pricing and early access) will no longer apply.</p>`
    },
  ],
  "Technology": [
    {
      question: "What makes Xcoin better than Bitcoin, Monero, or USDT?",
      answer: `<p>Xcoin is simply better — and here's why:</p>
<ul class="list-disc list-inside ml-4">
<li>Monero is private, but it's not quantum-proof and doesn't scale well</li>
<li>Bitcoin is neither anonymous nor energy-efficient — Xcoin is both</li>
<li>USDT is centralized and inflation-prone — Xcoin is the opposite</li>
</ul>
<p class="mt-2">Xcoin is the only coin that offers:</p>
<ul class="list-disc list-inside ml-4">
<li>✅ <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-zk-starks">zk-STARK</a> privacy by default</li>
<li>✅ <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-aes-512">AES-512</a> cascade encryption</li>
<li>✅ No mining, no inflation</li>
<li>✅ <a class="text-blue-400 underline hover:text-blue-300" href="/cryptographic-building-blocks">Quantum-safe architecture</a></li>
<li>✅ <a class="text-blue-400 underline hover:text-blue-300" href="/what-are-view-keys">View Keys</a> support for optional auditability</li>
</ul>`
    },
    {
      question: "Is Xcoin quantum-safe?",
      answer: `<p>Yes, absolutely. Xcoin uses:</p>
<ul class="list-disc list-inside ml-4">
<li><a class="text-blue-400 underline hover:text-blue-300" href="/what-is-sphincs-plus">SPHINCS+</a> / <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-wots-plus">WOTS+</a> signatures</li>
<li><a class="text-blue-400 underline hover:text-blue-300" href="/what-is-zk-starks">zk-STARKs</a> (quantum-resistant zero-knowledge proofs)</li>
<li><a class="text-blue-400 underline hover:text-blue-300" href="/what-is-poseidon-hash">Poseidon</a> & <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-keccak-512">Keccak-512</a> (quantum-resistant hashing)</li>
</ul>`
    },
    {
      question: "Is Xcoin green?",
      answer: `<p>Yes, absolutely — it's one of the greenest blockchains ever.</p>
<ul class="list-disc list-inside ml-4">
<li>No energy-hungry mining</li>
<li>Validation is light, fast, and decentralized</li>
<li>Bitcoin = massive CO₂ emissions</li>
<li>Xcoin = the new green currency</li>
</ul>`
    },
    {
      question: "Is it legal to use Xcoin?",
      answer: `<p>Yes. Privacy is a human right. Xcoin includes optional <a class="text-blue-400 underline hover:text-blue-300" href="/what-are-view-keys">View Keys</a> for:</p>
<ul class="list-disc list-inside ml-4">
<li>Voluntary audits</li>
<li>Tax reports</li>
<li>Business compliance</li>
</ul>`
    },
    {
      question: "How is this different from hype coins or memes?",
      answer: `<p>Xcoin:</p>
<ul class="list-disc list-inside ml-4">
<li>Has no celebrity marketing</li>
<li>No pump-and-dump tokenomics</li>
<li>No inflation, no staking gimmicks</li>
<li>Just <a class="text-blue-400 underline hover:text-blue-300" href="/cryptographic-building-blocks">world-class tech</a> with real utility</li>
</ul>`
    },
    {
      question: "Is Xcoin a meme coin?",
      answer: `<p>Absolutely not! Xcoin isn't based on hype, memes, or dog pictures. It's based on math, cryptography, and real-world necessity.</p>`
    },
    {
      question: "Is Xcoin open source?",
      answer: `<p>Yes. All key components of Xcoin will be open source and available on our GitHub:</p>
<ul class="list-disc list-inside ml-4 mt-2">
<li><a class="text-blue-400 underline hover:text-blue-300" href="/validator-application">Validator software</a> and cryptographic libraries</li>
<li>Governance contracts and DAO tooling</li>
<li>Wallet integrations and redemption portals</li>
</ul>
<p class="mt-2">We believe in transparency, peer review, and open innovation — always.</p>`
    },
  ],
  "Usage": [
    {
      question: "Is Xcoin really private by default?",
      answer: `<p>Yes. Unlike Monero or Zcash, there are no toggles, no partial privacy, no settings to adjust.</p>
<ul class="list-disc list-inside ml-4">
<li>Untraceable</li>
<li>Encrypted with <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-aes-512">AES-512 (Cascade)</a></li>
<li>Invisible with <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-zk-starks">zk-STARKs</a></li>
<li>Routed through <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-stealth-addresses">stealth addresses</a></li>
<li>Zero metadata — not even wallet links or timestamps are exposed</li>
</ul>
<p>No one — not even we — can see your transactions.</p>`
    },
    {
      question: "Is it fast and cheap to use?",
      answer: `<p>Extremely. Xcoin uses:</p>
<ul class="list-disc list-inside ml-4">
<li><a class="text-blue-400 underline hover:text-blue-300" href="/what-is-zk-rollups">zk-Rollups</a> for bundling transactions</li>
<li><a class="text-blue-400 underline hover:text-blue-300" href="/what-is-dag-plus">DAG (Directed Acyclic Graph)</a> for near-instant confirmations</li>
<li>No mining = no gas war fees</li>
<li>Thousands of transactions per second</li>
<li>Very low transaction fees</li>
</ul>`
    },
    {
      question: "Will I need to verify my identity?",
      answer: `<p>No. Xcoin is 100% private and decentralized.</p>
<ul class="list-disc list-inside ml-4">
<li>No KYC</li>
<li>No accounts</li>
<li>No surveillance</li>
</ul>
<p>Unless you choose to use <a class="text-blue-400 underline hover:text-blue-300" href="/what-are-view-keys">View Keys</a> (for audits or tax reporting), your activity remains invisible.</p>`
    },
    {
      question: "What exactly are XXX tokens?",
      answer: `<p><a class="text-blue-400 underline hover:text-blue-300" href="/what-are-xxx-tokens">XXX tokens</a> are your early access gateway to Xcoin — the future of private finance.</p>
<ul class="list-disc list-inside ml-4 mt-2">
<li>1 XXX = 10 Xcoins when the network launches</li>
<li>Locked-in price of just €10 per Xcoin — guaranteed, no matter the future market rate</li>
<li>Instantly delivered to your wallet and fully tradeable (ERC-1155 on Polygon)</li>
<li>Can be held, transferred, or exchanged for real Xcoins as soon as the mainnet goes live.</li>
</ul>
<p>Think of XXX as your VIP access to a groundbreaking technology — before the rest of the world catches on.</p>`
    },
    {
      question: "Can I trade XXX tokens?",
      answer: `<p>Yes. <a class="text-blue-400 underline hover:text-blue-300" href="/what-are-xxx-tokens">XXX Tokens</a> are ERC-1155 tokens on Polygon. You can hold them, send them, or trade them. At launch, you redeem them for real Xcoins 1:10.</p>`
    },
    {
      question: "Can I trade Xcoin?",
      answer: `<p>Yes. Once launched, Xcoin will be fully tradable. It will be supported by <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-lotus-wallet">Lotus Wallet</a> and other wallets. You'll be able to:</p>
<ul class="list-disc list-inside ml-4">
<li>✅ Hold your coins securely</li>
<li>✅ Send and receive them instantly</li>
<li>✅ Trade on the official <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-gep">Global Exchange Platform (GEP)</a> and other supported exchanges</li>
</ul>`
    },
    {
      question: "Can I store XXX tokens in MetaMask?",
      answer: `<p>Yes — just add your <a class="text-blue-400 underline hover:text-blue-300" href="/what-are-xxx-tokens">XXX token</a> by following the instructions on our website.</p>
<ul class="list-disc list-inside ml-4">
<li>You can use MetaMask or any other wallet that supports Polygon</li>
<li>All info you need is provided on the confirmation page</li>
</ul>`
    },
    {
      question: "Is this like USDT or stablecoins?",
      answer: `<p>No — Xcoin is not pegged to anything.</p>
<ul class="list-disc list-inside ml-4">
<li>USDT = centralized, controlled, inflated</li>
<li>Xcoin = decentralized, scarce, and anonymous</li>
</ul>`
    },
    {
      question: "Will Xcoin be listed on exchanges?",
      answer: `<p>Yes. Xcoin will launch on the <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-gep">Global Exchange Platform (GEP)</a> and later be listed on:</p>
<ul class="list-disc list-inside ml-4">
<li>DEXs (like Uniswap, Sushi, etc.)</li>
<li>CEXs (pending DAO approval)</li>
</ul>`
    },
    {
      question: "Who controls Xcoin?",
      answer: `<p>No one. Xcoin is governed by a <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-xxx-dao">DAO</a>. That means:</p>
<ul class="list-disc list-inside ml-4">
<li>Everyone gets a <a class="text-blue-400 underline hover:text-blue-300" href="/community">fair chance</a> to participate</li>
<li>All decisions are transparent</li>
<li>No company, no central owner, no centralized control</li>
</ul>`
    },
    {
      question: "How do I buy XXX tokens?",
      answer: `<p>You can buy XXX tokens directly on this website.</p>
<ul class="list-disc list-inside ml-4 mt-2">
<li>Connect your wallet (MetaMask or any Polygon-compatible wallet)</li>
<li>Select how many tokens you want to purchase</li>
<li>Pay in BTC or XMR</li>
<li>Your XXX tokens will be delivered instantly to your wallet</li>
</ul>
<p class="mt-2">Check it out? Just click here ➜ <a class="text-blue-400 underline" href="/fund">Get XXX Tokens</a></p>`
    },
    {
      question: "How are funds raised with XXX tokens used?",
      answer: `<p>All funds raised help bring Xcoin to life — fast, secure, and globally accessible.</p>
<ul class="list-disc list-inside ml-4 mt-2">
<li>Development of <a class="text-blue-400 underline hover:text-blue-300" href="/validator-application">validator</a> software and wallets</li>
<li>Security audits and network testing</li>
<li><a class="text-blue-400 underline hover:text-blue-300" href="/what-is-gep">Global Exchange Platform (GEP)</a> integration</li>
<li>DAO infrastructure and proposal tooling</li>
<li>Community expansion and ecosystem partnerships</li>
</ul>
<p class="mt-2">All spending is managed by <a class="text-blue-400 underline hover:text-blue-300" href="/what-is-xxx-dao">XXX DAO</a> and reported publicly each year.</p>`
    },
    {
      question: "What if I lose access to my wallet?",
      answer: `<p>If you lose access to your wallet, your <a class="text-blue-400 underline hover:text-blue-300" href="/what-are-xxx-tokens">XXX Tokens</a> cannot be recovered. Xcoin is fully decentralized — only you control your funds.</p>
<ul class="list-disc list-inside ml-4 mt-2">
<li>Always back up your seed phrase</li>
<li>Never share your private key</li>
<li>Use a hardware wallet for extra security if possible</li>
</ul>
<p class="mt-2">We cannot reset or recover your wallet. Privacy means full ownership and responsibility.</p>`
    },
  ],
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof faqData>("Investment")
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Scroll zu Kategorie beim Klick
  const handleCategoryClick = (category: keyof typeof faqData) => {
    setActiveCategory(category)
    // Warte kurz, damit React die DOM-Updates verarbeitet
    setTimeout(() => {
      const element = categoryRefs.current[category]
      if (element) {
        const navHeight = 80
        const scrollContainer = document.querySelector('.section.bg-background')
        if (scrollContainer) {
          const containerRect = scrollContainer.getBoundingClientRect()
          const elementRect = element.getBoundingClientRect()
          const scrollY = window.scrollY + elementRect.top - navHeight
          
          window.scrollTo({
            top: scrollY,
            behavior: 'smooth'
          })
        }
      }
    }, 50)
  }

  // FAQ Item toggle
  const toggleItem = (category: string, index: number) => {
    const key = `${category}-${index}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pb-16 lg:pt-40 lg:pb-20">
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
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-white">
              FAQ
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Questions we think you might like answers to
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation als horizontale Navigation oben */}
          <div className="mb-12">
            <nav className="flex flex-wrap gap-2" role="navigation" aria-label="FAQ Categories">
              {(Object.keys(faqData) as Array<keyof typeof faqData>).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  type="button"
                  className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-accent/10 text-accent border border-accent/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-card border border-transparent'
                  }`}
                >
                  <span className="p-reg">{category}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* FAQ Content - Volle Breite */}
          <div>
              {(Object.entries(faqData) as [keyof typeof faqData, typeof faqData[keyof typeof faqData]][]).map(([category, items]) => (
                <div
                  key={category}
                  ref={(el) => { categoryRefs.current[category] = el }}
                  id={category.toLowerCase()}
                  className="mb-16 scroll-mt-24"
                >
                  {items.map((item, index) => {
                    const itemKey = `${category}-${index}`
                    const isOpen = openItems[itemKey] || false

                    return (
                      <div key={index} className="mb-4 border border-border rounded-2xl bg-card overflow-hidden">
                        <button
                          onClick={() => toggleItem(category, index)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-card/80 transition-colors"
                        >
                          <span className="font-[family-name:var(--font-heading)] text-lg font-semibold pr-4">{item.question}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            className={`flex-shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                          >
                            <rect x="7.38477" y="0.127441" width="1.23077" height="16" rx="0.2" fill="currentColor" />
                            <rect x="16" y="7.51172" width="1.23077" height="16" rx="0.2" transform="rotate(90 16 7.51172)" fill="currentColor" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div 
                              className="faq-answer mt-2 pl-6 text-neutral-400 prose prose-invert max-w-none"
                              dangerouslySetInnerHTML={{ __html: item.answer }} 
                            />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="rounded-3xl overflow-hidden py-20 px-8 bg-neutral-900">
            <div className="md:flex justify-between items-center gap-4 text-left">
              <div>
                <h2 className="h-small mb-4">Didn't find what you were looking for?</h2>
                <p className="p-reg opacity-70 mb-10 md:mb-0">
                  If you have a question that wasn't answered above, feel free to reach out to us directly. We're happy
                  to help! And who knows — if your question comes up often, there's a good chance it will be added
                  here to assist other visitors too.
                </p>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 text-black overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-300 rounded-lg transition-transform duration-300 group-hover:scale-105" />
                  <Mail className="h-5 w-5 text-black relative z-10" />
                  <span className="p-reg text-black relative z-10 font-semibold">Submit Question</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
