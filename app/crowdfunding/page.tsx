"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, Users, Shield, Zap, ArrowRight } from "lucide-react"

const crowdfundingItems = [
  "For every €100 you invest, you receive 1 XXX Token immediately.",
  "Each XXX Token gives you access and voting rights in the XXX DAO.",
  "When the XXX blockchain launches, you will receive 10 Xcoins for every XXX Token you hold.",
  "Xcoins are set to launch at €10 each. Once the mainnet is live, you can use or trade your Xcoins freely. Many expect a rapid, potentially exponential price surge within seconds after launch",
  "On top of that, you keep your XXX Tokens. Your access and governance rights in the XXX DAO do not expire.",
  "Issuing new XXX Tokens will stop as soon as the XXX blockchain goes live or when the funding goal is reached, whichever happens first. After that, no new XXX Tokens will ever be issued. Scarcity is guaranteed.",
  "You may also trade or sell your XXX Tokens at any time.",
]

const investingBenefits = [
  "You choose your investment amount: minimum €100",
  "You receive XXX Tokens instantly, with no waiting period.",
  "You pay directly to the DAO wallet via crypto. No accounts, no KYC, no registration",
  "You lock in the fixed rate: 1 XXX Token = 10 Xcoins",
]

const limitedSupplyItems = [
  "The DAO is raising €6 million. Once that target is reached, no more XXX Tokens will be available.",
  "There is no second presale, no second round, and no token inflation. Ever.",
  "Every XXX Token sold is part of a strictly limited early issuance, separate from the fixed 21 million Xcoins that will become available at mainnet launch. Once the crowdfunding goal is met, no additional XXX Tokens will ever be created.",
]

const tokenExchangeItems = [
  "Every XXX Token is redeemable 1:10 for real Xcoins the moment the Xcoin blockchain goes live.",
  "Xcoin will launch at €10 per coin, meaning a €100 investment today yields €100 in future value (plus DAO power).",
  "That exchange is guaranteed by the DAO, and written into the protocol.",
]

const marketDemandItems = [
  "Xcoin will launch on the Global Exchange Platform (GEP) and be fully tradable from day one.",
  "As the only quantum-secure, privacy-by-default, DAG-based coin in existence, demand is expected to rise sharply after launch, especially among traders, privacy advocates, and DeFi developers.",
  "Early investors benefit from price exposure without speculation risk. They lock in a guaranteed price of €10 per Xcoin, while others must buy on the open market.",
]

export default function CrowdfundingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section mit Video */}
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
            <source src="/vid/hero11.mp4" type="video/mp4" />
          </video>
          {/* Overlay für bessere Textlesbarkeit */}
          <div className="absolute inset-0 bg-black/50" />
          <div 
            className="absolute inset-0" 
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)'
            }}
          />
          <div className="hero-gradient" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Content */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-white">
              Crowdfunding
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              XXX DAO is raising 6 million Euro to complete development of the blockchain, the world's first privacy-by-default, quantum-secure, and validator-powered financial layer. Your support directly enables:
            </p>
            <ul className="mt-6 text-left max-w-2xl mx-auto space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Developing the XXX Blockchain software</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Developing validator node install packages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Launching the global XXX mainnet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Securing integrations with Lotus Wallet and Global Exchange Platform (GEP)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Deploying secure DAO voting infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Building seamless payment and integration APIs for real-world adoption</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[2800px]">
          <div className="space-y-20">
            {/* Two Column Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Return on Investment Card */}
              <div className="glare-card bg-white/10 rounded-3xl backdrop-blur-lg p-8">
                <div className="mb-3">
                  <Image
                    src="/img/crowdfounding/roi.jpeg"
                    alt="Return on Investment"
                    width={800}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
                <div className="py-4 pb-8">
                  <h3 className="h-small mb-3">Return on Investment</h3>
                  <ul className="space-y-2">
                    {crowdfundingItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 pr-10">
                        <span className="inline-block w-1.5 h-1.5 relative top-2 rounded-full bg-[#93c5fd]"></span>
                        <span className="p-small text-white opacity-70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Investing is Simple Card */}
              <div className="glare-card bg-white/10 rounded-3xl backdrop-blur-lg p-8">
                <div className="mb-3">
                  <Image
                    src="/img/crowdfounding/xcoin_rain.jpeg"
                    alt="Investing"
                    width={800}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
                <div className="py-4 pb-8">
                  <h3 className="h-small mb-3">Investing is Simple and Immediate</h3>
                  <p className="p-reg pr-2 opacity-70 mb-4">
                    Investing in XXX Tokens is straightforward and immediate. There are no complex procedures, no waiting periods, just direct access to the future of decentralized finance.
                  </p>
                  <ul className="space-y-2">
                    {investingBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 pr-10">
                        <span className="text-green-400 text-xl">✅</span>
                        <span className="p-small text-white opacity-70">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Invest Section */}
            <div className="glare-card bg-white/10 rounded-3xl backdrop-blur-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h1 className="h-medium text-left mb-5">
                    Why Invest in <span className="text-[#93c5fd]">XXX</span> Tokens Now?
                  </h1>
                  <div className="space-y-6 mt-5">
                    <p className="p-reg opacity-70 text-left">
                      Xcoin is a real-world utility currency used for payments and transactions. The XXX Token, on the other hand, is your governance token and foundational asset in the fully decentralized financial system. Unlike hype-driven meme coins or speculative tokens, XXX Tokens combine both worlds: they give you direct access to real coins and at the same time voting power and influence in the DAO. With XXX Tokens, you don't just speculate, but you own the currency and help steer the system.
                    </p>
                    <div className="mb-3">
                      <Image
                        src="/img/crowdfounding/the_future_of_money.jpeg"
                        alt="The Future of Money"
                        width={1000}
                        height={1000}
                        className="w-full h-[1000px] rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-10">
                  {/* Limited Supply */}
                  <div className="space-y-6 border border-[rgb(73,73,73)] p-6 rounded-2xl text-left">
                    <h3 className="p-large font-normal mb-3">Limited Supply</h3>
                    <ul className="space-y-2">
                      {limitedSupplyItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 pr-10">
                          <span className="inline-block w-1.5 h-1.5 relative top-2 rounded-full bg-[#93c5fd]"></span>
                          <span className="p-small text-white opacity-70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 1 XXX Token = 10 Xcoins */}
                  <div className="space-y-6 border border-[rgb(73,73,73)] p-6 rounded-2xl text-left">
                    <h3 className="p-large font-normal mb-3">1 XXX Token = 10 Xcoins at Launch</h3>
                    <ul className="space-y-2">
                      {tokenExchangeItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 pr-10">
                          <span className="inline-block w-1.5 h-1.5 relative top-2 rounded-full bg-[#93c5fd]"></span>
                          <span className="p-small text-white opacity-70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Real Market Demand */}
                  <div className="space-y-6 border border-[rgb(73,73,73)] p-6 rounded-2xl text-left">
                    <h3 className="p-large font-normal mb-3">Real Market Demand. Real Growth Potential</h3>
                    <ul className="space-y-2">
                      {marketDemandItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 pr-10">
                          <span className="inline-block w-1.5 h-1.5 relative top-2 rounded-full bg-[#93c5fd]"></span>
                          <span className="p-small text-white opacity-70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Market Reality */}
                  <div className="space-y-2">
                    <p className="p-reg text-left font-medium">And here's the reality of most major launches:</p>
                    <p className="p-reg opacity-70 text-left pb-5">
                      Large traders and crypto speculators often use bots to buy up massive volumes immediately after listing, pushing prices upward and limiting availability for regular users. This kind of activity frequently causes sharp price spikes, sometimes in just seconds after launch.
                      <br /><br />
                      If you wait until Xcoin hits the open market, you may end up paying significantly more for the same coins that early supporters acquired at a fixed, guaranteed rate. By securing XXX Tokens now, you bypass the chaos, lock in your price, and position yourself ahead of the curve, not behind it.
                    </p>
                    <Link
                      href="/pricing"
                      className="button group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 text-black overflow-hidden w-full"
                    >
                      <div className="absolute inset-0 bg-[#93c5fd] rounded-lg -z-10" />
                      <span className="p-reg text-black relative z-10">Get XXX Tokens now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Four Graphics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {/* Community Card */}
              <div className="glare-card bg-white/10 group relative overflow-hidden flex items-start justify-center text-center min-h-[384px] max-h-[384px] h-[384px] rounded-lg">
                <div className="flex justify-center items-center gap-2 pointer-events-none absolute inset-0 transition duration-300 group-hover:opacity-0">
                  <Image
                    src="/img/crowdfounding/section1.jpg"
                    alt="Community"
                    fill
                    className="object-cover rounded-lg opacity-30"
                  />
                  <div className="w-full static z-20">
                    <Users className="w-16 h-16 text-[#93c5fd] mb-5 bg-neutral-700 p-2 rounded-full mx-auto" />
                    <h4 className="h-small block">Community</h4>
                    <span className="text-sm opacity-60 block absolute bottom-4 right-4 font-mono">Read more</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#93c5fd] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 p-4 text-left flex items-center pointer-events-none group-hover:pointer-events-auto">
                  <div>
                    <div className="mx-auto w-fit mb-5">
                      <Image
                        src="/img/xcoin.svg"
                        alt="Xcoin"
                        width={64}
                        height={64}
                        className="w-16 h-16 animate-spin [animation-duration:10000ms] object-contain brightness-0"
                      />
                    </div>
                    <p className="p-reg p-med text-black opacity-50">
                      XXX DAO is more than a community... It's a self‑governing economy. Validators, developers, and holders participate in a living ecosystem with no central authority. As a DAO member you directly influence how the network evolves, from fees and functionality to privacy standards and cross‑chain integrations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Built for Utility Card */}
              <div className="glare-card bg-white/10 group relative overflow-hidden flex items-start justify-center text-center min-h-[384px] max-h-[384px] h-[384px] rounded-lg">
                <div className="flex justify-center items-center gap-2 pointer-events-none absolute inset-0 transition duration-300 group-hover:opacity-0">
                  <Image
                    src="/img/crowdfounding/section2.jpg"
                    alt="Built for Utility"
                    fill
                    className="object-cover rounded-lg opacity-30"
                  />
                  <div className="w-full static z-20">
                    <Zap className="w-16 h-16 text-[#93c5fd] mb-5 bg-neutral-700 p-2 rounded-full mx-auto" />
                    <h4 className="h-small block">Built for Utility</h4>
                    <span className="text-sm opacity-60 block absolute bottom-4 right-4 font-mono">Read more</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#93c5fd] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 p-6 text-left flex items-center pointer-events-none group-hover:pointer-events-auto">
                  <div>
                    <div className="mx-auto w-fit mb-5">
                      <Image
                        src="/img/xcoin.svg"
                        alt="Xcoin"
                        width={64}
                        height={64}
                        className="w-16 h-16 animate-spin [animation-duration:10000ms] object-contain brightness-0"
                      />
                    </div>
                    <p className="p-reg p-med text-black opacity-70">
                      Xcoin supports fast, anonymous and ultra‑secure payments with 10,000+ TPS via zk‑Rollups and DAG. It integrates with Lotus Wallet and CREO for private swaps, quantum‑safe messaging, View‑Keys‑based audits and more. The architecture is post‑quantum secure, designed to withstand both regulatory pressure and technological disruption.
                    </p>
                  </div>
                </div>
              </div>

              {/* No Restrictions Card */}
              <div className="glare-card bg-white/10 group relative overflow-hidden flex items-start justify-center text-center min-h-[384px] max-h-[384px] h-[384px] rounded-lg">
                <div className="flex justify-center items-center gap-2 pointer-events-none absolute inset-0 transition duration-300 group-hover:opacity-0">
                  <Image
                    src="/img/crowdfounding/section3.jpg"
                    alt="No Restrictions"
                    fill
                    className="object-cover rounded-lg opacity-30"
                  />
                  <div className="w-full static z-20">
                    <Shield className="w-16 h-16 text-[#93c5fd] mb-5 bg-neutral-700 p-2 rounded-full mx-auto" />
                    <h4 className="h-small block">No Restrictions</h4>
                    <span className="text-sm opacity-60 block absolute bottom-4 right-4 font-mono">Read more</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#93c5fd] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 p-6 text-left flex items-center pointer-events-none group-hover:pointer-events-auto">
                  <div>
                    <div className="mx-auto w-fit mb-5">
                      <Image
                        src="/img/xcoin.svg"
                        alt="Xcoin"
                        width={64}
                        height={64}
                        className="w-16 h-16 animate-spin [animation-duration:10000ms] object-contain brightness-0"
                      />
                    </div>
                    <p className="p-reg p-med text-black opacity-70">
                      You can redeem, sell, hold, or use your XXX Tokens anytime, in any way you want. No vesting. No lockups. However, to ensure fair governance within the DAO and to reduce the risk of misuse or concentration of power, there is a strict purchase cap per participant. Each buyer is allowed to purchase up to a maximum of 1000 XXX Tokens.
                    </p>
                  </div>
                </div>
              </div>

              {/* After Redemption Card */}
              <div className="glare-card bg-white/10 group relative overflow-hidden flex items-start justify-center text-center min-h-[384px] max-h-[384px] h-[384px] rounded-lg">
                <div className="flex justify-center items-center gap-2 pointer-events-none absolute inset-0 transition duration-300 group-hover:opacity-0">
                  <Image
                    src="/img/crowdfounding/section4.jpg"
                    alt="After Redemption"
                    fill
                    className="object-cover rounded-lg opacity-30"
                  />
                  <div className="w-full static z-20">
                    <Check className="w-16 h-16 text-[#93c5fd] mb-5 p-2 rounded-full mx-auto" />
                    <h4 className="h-small block">After Redemption</h4>
                    <span className="text-sm opacity-60 block absolute bottom-4 right-4 font-mono">Read more</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#93c5fd] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 p-6 text-left flex items-start overflow-y-auto pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-full pt-4">
                    <div className="mx-auto w-fit mb-5">
                      <Image
                        src="/img/xcoin.svg"
                        alt="Xcoin"
                        width={64}
                        height={64}
                        className="w-16 h-16 animate-spin [animation-duration:10000ms] object-contain brightness-0"
                      />
                    </div>
                    <p className="p-small text-black opacity-70 leading-relaxed">
                      Unlike most projects, governance does not end when tokens are redeemed. Even after converting XXX Tokens into Xcoins, voting rights remain attached to the XXX Token. Holders can continue to propose upgrades, vote on treasury usage, approve validator applications, and shape the protocol's evolution. XXX Tokens retain full governance power and remain tradable or transferable with those rights attached.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Section */}
            <div className="mt-20 pt-12 border-t border-border/50">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/pricing"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[#93c5fd] rounded-lg -z-10 group-hover:bg-[#93c5fd]/90 transition-colors" />
                  <span className="p-reg text-black font-medium">Pricing</span>
                </Link>
                
                <Link
                  href="/community"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[#93c5fd] rounded-lg -z-10 group-hover:bg-[#93c5fd]/90 transition-colors" />
                  <span className="p-reg text-black font-medium">Community</span>
                </Link>
                
                <Link
                  href="/member"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[#93c5fd] rounded-lg -z-10 group-hover:bg-[#93c5fd]/90 transition-colors" />
                  <span className="p-reg text-black font-medium">Members</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

