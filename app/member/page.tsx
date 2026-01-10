"use client"

import { Users } from "lucide-react"
import Link from "next/link"

const memberBulletItems = [
  'Vote on proposals that affect the protocol, treasury, partnerships, validator elections, and more.',
  'Submit proposals. Suggest changes, upgrades, or initiatives for the DAO to consider.',
  'Participate in debates and community discussions on-chain or through governance platforms.',
  'Hold governance power that increases in importance over time as the total token supply remains fixed.',
  'Stay private. While governance is transparent and verifiable, your identity and holdings remain confidential.',
]

export default function MemberPage() {
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
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-white">
              Become a <span className="text-[#93c5fd]">Member</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Join XXX DAO and participate in the governance of the Xcoin ecosystem. Every token holder has a voice.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section py-20 bg-background">
        <div className="container mx-auto px-4">
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

            {/* CTA - Ready to Join Section mit blauem Rahmen wie bei Validators */}
            <div className="glare-card bg-blue-400/10 border border-blue-500 rounded-2xl p-8 space-y-4 text-center col-span-12">
              <h3 className="h-small text-blue-300">Ready to Join the Front Line of Financial Freedom?</h3>
              <p className="p-large">Get your XXX Tokens now and become a Member of XXX DAO.</p>
              <Link
                href="/pricing"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 text-black mt-4"
              >
                <div className="absolute inset-0 bg-blue-300 rounded-lg -z-10 transition-transform duration-300 group-hover:scale-105" />
                <span className="p-reg text-black relative z-10 font-semibold">Become a member</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
