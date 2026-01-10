"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Users } from "lucide-react"

const bulletItems = [
  'Starting a local or online Xcoin channel',
  'Translating articles, pages, or updates',
  'Organizing AMAs, workshops, or meetups',
  'Answering questions from new token holders',
  'Moderating forums or shaping future tools',
  'Helping draft principles or community guidelines',
]

const memberBulletItems = [
  'Vote on proposals that affect the protocol, treasury, partnerships, validator elections, and more.',
  'Submit proposals. Suggest changes, upgrades, or initiatives for the DAO to consider.',
  'Participate in debates and community discussions on-chain or through governance platforms.',
  'Hold governance power that increases in importance over time as the total token supply remains fixed.',
  'Stay private. While governance is transparent and verifiable, your identity and holdings remain confidential.',
]

const validatorTasks = [
  {
    title: 'Verify Transactions',
    description: "SEP Nodes validate each transaction using cutting-edge zero-knowledge cryptography that proves a transaction is valid without knowing anything about the sender, receiver, or amount."
  },
  {
    title: 'Maintain Network Consensus',
    description: "Validators uphold consensus across Xcoin's hybrid architecture. This enables true parallel processing with over 10,000 transactions per second, no bottlenecks, and instant settlement."
  },
  {
    title: 'Preserve Privacy',
    description: 'Every SEP Node ensures total anonymity by privately handling all transactions, storing no user data, and using quantum-resistant encryption to keep the network secure now and in the future.'
  }
]

const reqItems = [
  'VPS or dedicated server',
  'Reliable internet connection',
  'Static IP address',
  'Validator licence (free pre-launch)',
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'community' | 'members' | 'validators'>('community')

  // Tab Button Click Handler - wechselt einfach den Tab
  const handleTabClick = (tab: 'community' | 'members' | 'validators') => {
    setActiveTab(tab)
  }


  return (
    <div className="relative overflow-hidden">
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
            <source src="/1211-compressed.mp4" type="video/mp4" />
          </video>
          {/* Overlay für bessere Textlesbarkeit */}
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Logo */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <Image 
                src="/img/xcoin.svg" 
                alt="Xcoin Logo" 
                width={64} 
                height={64} 
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
            </div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Join the <span className="text-accent">Community</span>
            </h1>

            {/* Subheadline */}
            <p className="p-reg mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground lg:text-xl px-4">
              Connect with builders, validators, and supporters from around the world who are shaping the future of
              private finance.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-black/80 backdrop-blur-lg border-b border-white/10 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto">
            <button
              onClick={() => handleTabClick('community')}
              className={`p-reg px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'community'
                  ? 'text-blue-300 border-b-2 border-blue-300'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Community
            </button>
            <button
              onClick={() => handleTabClick('members')}
              className={`p-reg px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'members'
                  ? 'text-blue-300 border-b-2 border-blue-300'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Members
            </button>
            <button
              onClick={() => handleTabClick('validators')}
              className={`p-reg px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'validators'
                  ? 'text-blue-300 border-b-2 border-blue-300'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Validators
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <section className="section py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Community Tab */}
          <div className={activeTab === 'community' ? 'block' : 'hidden'}>
            <div className="space-y-12">
              {/* Two-column layout: Text cards left, video right */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Text Card 1 */}
                <div className="glare-card bg-white/5 rounded-3xl backdrop-blur-lg p-8 space-y-4 h-full">
                  <p className="p-large">Building the Next Crypto Revolution</p>
                  <p className="p-small opacity-70">
                    That's where we are now. The Xcoin ecosystem is live on paper and in code. But the community — the humans behind it — is just beginning to form. We don't have Telegram floods, Discord debates, or influencer raids. And honestly? That's a feature, not a bug. But every story needs a beginning. And ours already has one:
                  </p>
                  <div className="space-y-4 pt-5">
                    <p className="p-medium">Member #1 — our very first member.</p>
                    <p className="p-small opacity-70">
                      And that first member? He's already here. He laid the foundation. He is... different. He's not just a contributor — he's our Member of Honor. His name? Not now. He prefers to stay in the background. And for a very good reason.
                    </p>
                  </div>
                </div>

                {/* Text Card 2 */}
                <div className="glare-card bg-white/5 rounded-3xl backdrop-blur-lg p-8 space-y-4 h-full">
                  <p className="p-large">What matters now is what happens next</p>
                  <p className="p-small opacity-70">
                    A movement needs more than one member. It needs builders, thinkers, translators, rebels. If you're ready to take part in something that can't be bought, silenced, or shut down — this is where you step in. This is a rare window where you can get involved before the noise. Not as an observer or a passive supporter — but as someone who helps decide how this community grows, behaves, communicates, and collaborates.
                  </p>
                </div>
              </div>

              {/* Video Card */}
              <div className="glare-card bg-white/5 rounded-3xl backdrop-blur-lg overflow-hidden p-0 h-96">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src="/vid/hero4.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Bullet Card */}
              <div className="glare-card bg-blue-400/10 border border-blue-500 rounded-2xl p-8 space-y-4">
                <h3 className="h-small text-blue-300">What does help look like?</h3>
                <ul className="grid md:grid-cols-3 gap-4">
                  {bulletItems.map((item, index) => (
                    <li key={index} className="bg-blue-500/10 rounded-lg p-3 flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-400 flex-shrink-0">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="p-small">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="p-large text-center mx-auto max-w-5xl">
                You don't need permission. You don't need to be technical. You just need to care about privacy, fairness, and the opportunity to build something before it's already decided by someone else.
              </p>

              <h2 className="h-medium text-center mx-auto max-w-5xl">
                Why now?
              </h2>

              <div className="grid md:grid-cols-3 gap-10 space-y-10 md:space-y-0">
                <p className="p-small text-left mx-auto max-w-5xl">
                  Because right now, there's space. No central figures. No predefined roles. No locked doors. This isn't a club you join, it's one you help create. And as the ecosystem grows, early community members won't just be remembered, they'll be foundational.
                </p>

                <p className="p-small text-left mx-auto max-w-5xl">
                  When people look back, they'll remember the builders, the organizers, the contributors, the translators, the pioneers. That could be you. Ready to help shape the next generation of crypto? This is your chance. Be one of those pioneers.
                </p>

                <p className="p-small font-bold text-left mx-auto max-w-5xl">
                  The Xcoin community recognizes two types of participants: Members and Validators.
                </p>
              </div>
            </div>
          </div>

          {/* Members Tab */}
          <div className={activeTab === 'members' ? 'block' : 'hidden'}>
            <div className="grid md:grid-cols-12 gap-6 w-full space-y-6 md:space-y-0">
              {/* Intro Card */}
              <div className="glare-card bg-white/5 rounded-3xl p-8 space-y-4 col-span-12">
                <h3 className="h-small">Members are the core of XXX DAO</h3>
                <p className="p-small opacity-70">
                  XXX DAO is the decentralized community that governs the Xcoin ecosystem. Anyone who holds at least one XXX Token is a Member. There are no special tiers, no insider roles, and no centralized control. Every Member has equal rights and an equal voice in the decisions that shape the network.
                </p>
              </div>

              {/* What can Members do? */}
              <div className="glare-card bg-blue-400/10 border border-blue-500 rounded-2xl p-8 space-y-4 col-span-12 lg:col-span-7">
                <h3 className="h-small text-blue-300">What can Members do?</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {memberBulletItems.map((item, index) => (
                    <li key={index} className="bg-blue-500/10 rounded-lg p-3 flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-400 flex-shrink-0">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="p-small">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Voting Card */}
              <div className="glare-card bg-white/5 rounded-3xl p-8 space-y-4 col-span-12 lg:col-span-5">
                <h3 className="h-small">How does voting work?</h3>
                <p className="p-small opacity-70">
                  Every XXX Token equals one vote. Voting takes place on-chain using secure, auditable smart contracts. Once a proposal is live, Members have a fixed voting period to cast their decision. All results are recorded permanently and cannot be changed. No manipulation, no backroom deals. Some proposals may require a simple majority, while others — such as protocol upgrades or treasury deployments — may require a supermajority to pass.
                </p>
              </div>

              {/* Video Card */}
              <div className="glare-card bg-white/5 rounded-3xl backdrop-blur-lg overflow-hidden p-0 h-96 col-span-12">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src="/vid/hero10.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Proposals Card */}
              <div className="glare-card bg-white/5 rounded-3xl p-8 space-y-4 col-span-12 lg:col-span-7">
                <h3 className="h-small">How do proposals work?</h3>
                <p className="p-small opacity-70">
                  Any Member can create a proposal. You don't need to be a developer or a technical expert. Simply describe the change, explain why it matters, and how it benefits the community. Once submitted, the proposal is reviewed for formatting and basic feasibility. If it is clear, valid, and relevant, it will proceed to a community vote.
                </p>
              </div>

              {/* Become Member Card */}
              <div className="glare-card bg-white/5 rounded-3xl p-8 space-y-4 col-span-12 lg:col-span-5">
                <h3 className="h-small">How do I become a Member?</h3>
                <p className="p-small opacity-70">
                  Just hold an XXX Token. That's it. There's no registration, no KYC, and no centralized gatekeeping. The moment your wallet contains at least one token, you are a recognized Member of XXX DAO.
                </p>
              </div>

              {/* CTA */}
              <div className="col-span-12 text-center mt-14">
                <p className="h-medium mx-auto max-w-7xl mb-10">
                  This is your chance to claim your place in the future of private finance.
                </p>
                <Link
                  href="/tokenomics"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-300 rounded-full transition-transform duration-300 group-hover:scale-105" />
                  <span className="p-reg text-black relative z-10 font-semibold">Become a member</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Validators Tab */}
          <div className={activeTab === 'validators' ? 'block' : 'hidden'}>
            <div className="grid md:grid-cols-12 gap-6 w-full space-y-6 md:space-y-0">
              {/* Intro */}
              <div className="glare-card bg-white/5 rounded-3xl p-8 space-y-4 col-span-12">
                <p className="p-large text-center">
                  A validator is someone who runs a node that validates Xcoin transactions. Such a node is called a <strong>SEP Node</strong>.
                </p>
              </div>

              {/* Validator CTA - Ersetzt das große Bild */}
              <div className="glare-card bg-white/5 rounded-3xl overflow-hidden border border-border col-span-12">
                <div className="grid lg:grid-cols-2">
                  <div className="p-6 sm:p-8 lg:p-12">
                    <div className="p-reg inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent mb-6">
                      <Users className="h-4 w-4" />
                      Become a Validator
                    </div>
                    <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-4">
                      Help Secure the Network
                    </h2>
                    <p className="p-reg text-sm sm:text-base text-muted-foreground mb-6">
                      Run a validator node to earn transaction fees while contributing to the decentralization and security of
                      the Xcoin network.
                    </p>
                    <ul className="space-y-2 sm:space-y-3 mb-6">
                      {[
                        "Earn transaction fee rewards",
                        "No mining hardware required",
                        "Support network decentralization",
                        "Join a global community",
                      ].map((item) => (
                        <li key={item} className="p-reg flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                          <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/validator-application"
                      className="p-reg inline-flex rounded-full bg-accent px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90"
                    >
                      Apply to Run a SEP Node
                    </Link>
                  </div>
                  <div className="relative bg-accent/5 overflow-hidden min-h-[400px]">
                    <Image 
                      src="/Validator.webp" 
                      alt="Xcoin Validator" 
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* SEP Nodes Info */}
              <div className="glare-card bg-white/5 rounded-3xl p-8 space-y-4 col-span-12 lg:col-span-6">
                <h3 className="h-small">SEP Nodes are part of the SEP Network</h3>
                <p className="p-small opacity-70">
                  The SEP Network is a uniquely developed encryption framework that powers Xcoin's unmatched privacy and security. In traditional blockchains like Bitcoin, miners confirm transactions by solving complex mathematical puzzles.
                  <br/><br/>
                  This process consumes large amounts of energy and takes considerable time. In contrast, SEP Nodes use advanced cryptography — not electricity — to confirm transactions: faster, more efficiently, and with full anonymity.
                  <br/><br/>
                  Validators don't mine coins. They don't monitor users. They don't waste time and energy. They simply verify transactions — without ever knowing who sent what to whom. By operating a SEP Node, validators keep the Xcoin network running: fast, invisible, and quantum-secure.
                </p>
              </div>

              {/* What Does a Validator Do? */}
              <div className="glare-card bg-white/5 rounded-3xl p-8 space-y-4 col-span-12 md:col-span-6">
                <h3 className="h-small">What Does a Validator Do?</h3>
                <ul className="space-y-4 text-neutral-300">
                  {validatorTasks.map((task, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-400 flex-shrink-0 mt-1">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                      <div>
                        <span className="p-reg text-white font-medium block mb-1">{task.title}</span>
                        <span className="p-small opacity-70 leading-relaxed">{task.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video Card */}
              <div className="glare-card bg-white/5 rounded-3xl backdrop-blur-lg overflow-hidden p-0 h-96 col-span-12">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src="/vid/hero7.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Who Can */}
              <div className="glare-card bg-white/5 rounded-3xl p-8 space-y-4 col-span-12 lg:col-span-7">
                <h3 className="h-small">Who Can Become a Validator?</h3>
                <p className="p-small opacity-70">
                  Anyone with basic technical knowledge and a commitment to financial privacy can become a validator. No matter who you are or where you are from. Whether you're in a small village or a global city, XXX DAO welcomes your participation.
                </p>
              </div>

              {/* Requirements */}
              <div className="glare-card bg-white/5 rounded-3xl p-8 space-y-4 col-span-12 lg:col-span-5">
                <h3 className="h-small">What Do You Need?</h3>
                <ul className="list-disc pl-4 space-y-1">
                  {reqItems.map((item, index) => (
                    <li key={index} className="p-small opacity-70">{item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="glare-card bg-blue-400/10 border border-blue-500 rounded-2xl p-8 space-y-4 text-center col-span-12">
                <h3 className="h-small text-blue-300">Ready to Join the Front Line of Financial Freedom?</h3>
                <p className="p-large">Apply now and get your SEP Node install package when the Testnet launches.</p>
                <Link
                  href="/validator-application"
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 text-black mt-4"
                >
                  <div className="absolute inset-0 bg-blue-300 rounded-lg -z-10" />
                  <span className="p-reg text-black relative z-10">Apply to Run a SEP Node</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
