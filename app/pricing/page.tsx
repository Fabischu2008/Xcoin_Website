"use client"

import { useState } from "react"
import Link from "next/link"

function PricingSection() {
  const [showOverlay, setShowOverlay] = useState(false)

  return (
      <section className="relative py-24">
        <div className="mx-auto max-w-[85%] px-6 lg:px-8 pricing-section-container">
        {/* Header */}
        <div className="text-center mb-16 pricing-header">
          <div className="mx-auto max-w-3xl">
            <h2 className="h-medium mb-6 mt-8 lg:mt-12 pricing-header-title">This is your early access opportunity.</h2>
            <p className="p-reg text-white opacity-70 pricing-header-text">
              This is not a promo. This is not a presale for whales. This is your direct path to owning a part of the next-generation financial platform, before it launches to the world.
            </p>
          </div>
          </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 items-stretch pricing-cards-container">
          {/* Left Card - Main Price */}
          <div className="relative rounded-2xl border border-border p-12 lg:p-16 flex flex-col justify-between h-full pricing-card-wrapper pricing-card-gray">
            <div className="flex flex-col items-center gap-9">
              {/* Price Header */}
              <div className="w-full">
                <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
                  <h3 className="h-price leading-none whitespace-nowrap">€100</h3>
                  <span className="h-price leading-none">/</span>
                  <div className="h-price leading-none whitespace-nowrap">XXX Token</div>
              </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-25" />
                  <div className="eyebrow">Fixed minimum price at launch, guaranteed</div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-25" />
                </div>
              </div>

              {/* Description */}
              <p className="p-small text-muted-foreground opacity-70 text-left w-full">
                The protocol is offering a one-time release of XXX Tokens. 1 XXX Token = 10 Xcoins. In addition every XXX Token grants you exclusive access to the DAO, including governance rights, voting power, proposal access, and participation in key community decisions.
              </p>

              {/* Features */}
              <div className="space-y-4 w-full text-left">
                {[
                  { title: 'Costs €100 per XXX Token', desc: 'one-time investment for 10 Xcoins' },
                  { title: 'Redeemable for 10 Xcoins at launch', desc: 'fixed exchange rate guaranteed' },
                  { title: 'Guaranteed entry price of €10 per Xcoin', desc: 'no price volatility risk before launch' },
                  { title: 'Delivered instantly to your wallet', desc: 'automatic and secure token transfer' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#1a1a1a] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <p className="p-reg font-medium mb-1">{feature.title}</p>
                      <p className="p-small opacity-70">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="relative mt-8">
              <Link
                href="#"
                className="group relative inline-flex items-center justify-center w-full px-6 py-3 rounded-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[#93c5fd] rounded-lg -z-10 group-hover:bg-[#93c5fd]/90 transition-colors" />
                <span className="p-reg text-black">Get XXX Tokens now</span>
              </Link>
              <div className="absolute inset-0 bg-black/70 text-white border border-white/10 px-4 py-2 shadow-xl text-center space-y-1 cursor-not-allowed flex flex-col items-center justify-center rounded-lg">
                <span className="text-[10px] uppercase tracking-widest opacity-80">Available from</span>
                <span className="block font-semibold text-sm">XXXXXXX XX, 2025</span>
              </div>
              <p className="text-sm opacity-50 mt-5 text-center">This is the only round. No KYC. No second chances.</p>
            </div>
          </div>

          {/* Right Card - Orange Card with Overlay */}
          <div className={`relative rounded-2xl border border-border bg-[#93c5fd] p-12 lg:p-16 flex flex-col justify-between text-black h-full pricing-card-wrapper ${showOverlay ? 'show-overlay' : ''}`}>
            {/* Tag Button - XCoin_Basti Style */}
            <div className="price-card-tag">
              <button 
                onClick={() => setShowOverlay(!showOverlay)}
                className="price-card-tag__inner"
              >
                <div className="eyebrow text-white">explore benefits</div>
                <div className="eyebrow circle text-white">?</div>
              </button>
              {/* Close button for overlay */}
              <div className="price-overlay__close">
                <button onClick={() => setShowOverlay(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 14" fill="none" className="close-icon">
                    <path d="M7.02441 0.2C7.02441 0.0895426 7.11396 0 7.22441 0H8.57441C8.68487 0 8.77441 0.0895431 8.77441 0.2V13.8C8.77441 13.9105 8.68487 14 8.57441 14H7.22441C7.11396 14 7.02441 13.9105 7.02441 13.8V0.2Z" fill="currentColor" />
                    <path d="M14.6994 6.125C14.8099 6.125 14.8994 6.21454 14.8994 6.325V7.675C14.8994 7.78546 14.8099 7.875 14.6994 7.875L1.09941 7.875C0.988957 7.875 0.899414 7.78546 0.899414 6.325C0.899414 6.21454 0.988957 6.125 1.09941 6.125L14.6994 6.125Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className={`flex flex-col gap-14 text-left transition-opacity duration-300 ${showOverlay ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
              <h4 className="h-small mt-8">Start Now. It's This Simple:</h4>
              
              <div className="space-y-4">
                {[
                  { num: '1', title: 'Choose your investment amount', desc: '(starting at €100 for 10 Xcoins)' },
                  { num: '2', title: 'Send crypto to the indicated wallet address' },
                  { num: '3', title: 'Receive XXX Tokens to your wallet' },
                  { num: '4', title: 'Done. You\'re in.' },
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#1a1a1a] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                      {step.num}
                    </div>
                    <div>
                      <p className="p-reg font-medium mb-1">{step.title}</p>
                      {step.desc && <p className="p-small opacity-70">{step.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <p className="p-small">
                No KYC. No account. No name needed.<br/>
                Just you, your wallet, and your stake in the future of private finance
              </p>

              <p className="p-small mb-20">
                <span className="block h-small mb-3">Ready to Act?</span>
                This sale only exists for one reason: to give you a fair shot at something most people will only hear about when it's too late. First-come, first-served. When it's gone — it's gone. When Xcoin hits exchanges, you'll either be watching… or already holding. The choice is yours.
              </p>
            </div>

            {/* Overlay Content */}
            <div className={`absolute inset-0 rounded-2xl bg-[#93c5fd] p-12 lg:p-16 flex flex-col gap-9 text-left transition-opacity duration-300 ${showOverlay ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

              <h4 className="h-small mt-8">Why This Moment Matters.</h4>
              <p className="p-small mb-5">
                Ask yourself: What if you could go back in time and buy Bitcoin before anyone knew its name? What if you had a second chance... but this time, the technology is stronger, the mission is clearer, and the playing field is finally fair?<br/><br/>
                This is your moment to decide again, only now with a better blueprint.<br/>
                Xcoin offers:
              </p>

              <div className="space-y-4 pb-20">
                {[
                  { title: 'True privacy', desc: 'your activity, identity, and assets are invisible by default' },
                  { title: 'Quantum-proof security', desc: 'immune to future supercomputer attacks' },
                  { title: 'No mining, no inflation', desc: 'energy-efficient and economically sound' },
                  { title: 'Massive scalability', desc: '— 10,000+ transactions per second' },
                  { title: 'DAO-led', desc: 'no central control, no backdoors, no founders with veto power' },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#1a1a1a] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
          </div>
                    <div>
                      <p className="p-reg font-medium mb-1">{benefit.title}</p>
                      <p className="p-small opacity-70">{benefit.desc}</p>
        </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="relative">
              <div className="bg-black/90 backdrop-blur-xl text-white border border-white/10 px-4 py-2 shadow-xl text-center space-y-1 cursor-not-allowed">
                <span className="text-[10px] uppercase tracking-widest opacity-80">Available from</span>
                <span className="block font-semibold text-sm">XXXXXXX XX, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card - Why You'll Want to Be First */}
        <div className="rounded-2xl border border-border p-12 lg:p-16 pricing-card-gray">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="h-small mb-6 pricing-bottom-title">Why You'll Want to Be First.</h4>
            <p className="p-reg text-white pricing-bottom-text">
              After launch, there will be no fixed prices, no guarantees — only raw market forces. The XXX Tokens sale ends. The €10 price tag disappears. Global demand begins. Just look at history: Bitcoin launched under €1. Ethereum at a few euros. Today? Tens of thousands. Do you really think a quantum-secure, private-by-default upgrade to Bitcoin will still go for €10 once the world catches on? Probably not. And by then, your chance will be long gone.
            </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section mit Video - nur oberer Bereich */}
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
              This is your early access opportunity.
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              This is not a promo. This is not a presale for whales. This is your direct path to owning
              a part of the next-generation financial platform, before it launches to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />
    </div>
  )
}
