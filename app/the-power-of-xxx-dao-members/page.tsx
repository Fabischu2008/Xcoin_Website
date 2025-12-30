import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Share2, Gift, CheckCircle2, Sparkles } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "The Power of XXX DAO Members",
  description:
    "As a XXX DAO member, you can get a personal referral code. Share it and receive 1 Xcoin for free at launch for every XXX Token bought through your code.",
  openGraph: {
    title: "The Power of XXX DAO Members",
    description: "Get your referral code and earn Xcoins for helping grow the DAO.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Power of XXX DAO Members",
    description: "Your code. Your money. Your future.",
  },
}

const steps = [
  {
    number: "1",
    title: "Join the XXX DAO and get your referral code",
    description: "As a member, you automatically receive your unique referral code.",
  },
  {
    number: "2",
    title: "Share your code anywhere: online, in person, at events",
    description: "Spread the word about Xcoin and help grow the community.",
  },
  {
    number: "3",
    title: "Receive your Xcoins at launch for every XXX Token bought through your code",
    description: "For every XXX Token purchased using your referral code, you'll receive 1 Xcoin when Xcoin officially goes live.",
  },
]

export default function ThePowerOfXXXDAOMembersPage() {
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
              src="/img/members_grid/the_power_of_xxx_dao_members.jpg"
              alt="The Power of XXX DAO Members"
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  The Power of XXX DAO Members
                </h1>
                <p className="text-xl lg:text-2xl text-white/90">
                  As a XXX DAO member, you already hold a position of influence and opportunity. But there is more: Every member can get a personal referral code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Referral Code Section */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-accent/10 mx-auto mb-6">
              <Share2 className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Your Referral Code
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-4">
              Share it with your community, with everyone who believes in freedom, privacy, and decentralized power. For every XXX Token bought through your code, you will receive <span className="font-semibold text-foreground">1 Xcoin for free at launch</span>.
            </p>
            <p className="text-center text-lg text-muted-foreground mb-6">
              That means if someone buys 8 XXX Tokens through your referral, you will receive <span className="font-semibold text-accent">8 Xcoins</span> in your wallet when Xcoin officially goes live. This is not just a thank-you. It is a direct stake in the network's growth and your chance to start the Xcoin era with a powerful advantage.
            </p>
            <div className="flex justify-center">
              <Link
                href="/crowdfunding"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
              >
                Get Your Referral Code
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold mb-12">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-8 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-3xl font-bold text-accent mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-xl font-semibold text-foreground">
            It really is that simple.
          </p>
        </div>

        {/* This Is the Moment */}
        <div className="mt-24 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-accent/10 mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              This Is the Moment
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-4">
              Every person you bring in, strengthens the DAO and increases the value of your stake. The earlier you act, the more you stand to gain. Share your code, spread the word, and watch your future Xcoin balance grow.
            </p>
            <p className="text-center text-lg text-muted-foreground mb-6">
              The world is moving toward private, secure, community-led money. XXX is leading the way. Be part of it and get rewarded for helping it grow.
            </p>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">
                Your code. Your money. Your future.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/crowdfunding"
            className="inline-flex items-center gap-2 rounded-full border-2 border-accent bg-transparent px-8 py-4 font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground text-lg"
          >
            Join the XXX DAO
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

