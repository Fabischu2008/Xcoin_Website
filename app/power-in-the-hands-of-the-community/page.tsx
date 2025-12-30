import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Vote, Coins, Settings, Award, Lightbulb, Handshake, Zap, Calendar } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Power in the Hands of the Community",
  description:
    "The XXX DAO is run by its members. Every member has a voice, and every voice counts. Through on-chain voting, the community decides how the project evolves.",
  openGraph: {
    title: "Power in the Hands of the Community",
    description: "Join the XXX DAO and have a real impact on the direction of the project.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Power in the Hands of the Community",
    description: "Decentralized governance at its best: transparent, democratic, and community-led.",
  },
}

const memberCapabilities = [
  {
    icon: Lightbulb,
    title: "Propose new ideas",
    description:
      "Any member can put forward a proposal for the community to consider. Whether it's a new feature, a partnership, or a change in governance rules, you can bring your vision to the table.",
  },
  {
    icon: Vote,
    title: "Vote on key decisions",
    description:
      "Every major decision is made through transparent, blockchain-recorded voting. The weight of your vote is proportional to your stake in the DAO.",
  },
  {
    icon: Coins,
    title: "Guide the treasury",
    description:
      "The DAO treasury is controlled entirely by its members. Propose how funds should be allocated, whether for development, marketing, security audits, or community initiatives.",
  },
  {
    icon: Settings,
    title: "Shape the rules",
    description:
      "Members can vote to change governance policies, adjust voting systems, or introduce new rules to make decision-making more efficient and fair.",
  },
  {
    icon: Award,
    title: "Select and reward contributors",
    description:
      "Decide which developers, marketers, or community members receive funding or grants for their work on the project.",
  },
]

const proposalExamples = [
  {
    icon: Zap,
    title: "Technology upgrades",
    description: "Approve funding to develop a new privacy protocol or improve transaction speed.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Decide whether to collaborate with another blockchain project or integrate with a popular exchange.",
  },
  {
    icon: Coins,
    title: "Treasury use",
    description: "Vote on allocating funds to community growth campaigns, bug bounties, or liquidity pools.",
  },
  {
    icon: Settings,
    title: "Protocol parameters",
    description: "Adjust transaction fees, staking rewards, or validator requirements.",
  },
  {
    icon: Calendar,
    title: "Event funding",
    description: "Approve budgets for conferences, hackathons, or meet-ups to expand the XXX community.",
  },
]

export default function PowerInTheHandsOfTheCommunityPage() {
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
              src="/img/members_grid/power_in_the_hands_of_the_community.jpg"
              alt="Power in the Hands of the Community"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}

            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  Power in the Hands of the Community
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-6 text-lg text-muted-foreground">
            The XXX DAO is run by its members, people like you. Every member has a voice, and every voice counts. Through on-chain voting, the community decides how the project evolves, how funds are used, and what our priorities should be.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            Membership in the XXX DAO means more than just holding tokens, it means having a real impact on the direction of the project.
          </p>
        </div>

        {/* What Members Can Do */}
        <div className="mt-20">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold mb-12">
            What Members Can Do
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {memberCapabilities.map((capability, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-8 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <capability.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">
                  {capability.title}
                </h3>
                <p className="mt-4 text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Examples of Possible Proposals */}
        <div className="mt-24">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
            Examples of Possible Proposals
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            To give you a sense of what DAO members might vote on:
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proposalExamples.map((example, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  <example.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-2">
                  {example.title}
                </h3>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* A True Decentralized Future */}
        <div className="mt-24 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-accent/10 mx-auto mb-6">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              A True Decentralized Future
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Joining the XXX DAO means you're not just a user... you're a co-owner of the ecosystem. Every proposal, every vote, and every decision moves us forward together. This is decentralized governance at its best: transparent, democratic, and community-led.
            </p>
            <p className="text-lg font-semibold text-foreground">
              The future of XXX isn't dictated from the top. It's built by the people who believe in it, use it, and help it grow. The DAO members.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/crowdfunding"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
          >
            Join the XXX DAO
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

