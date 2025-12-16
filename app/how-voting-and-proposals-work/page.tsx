import type { Metadata } from "next"
import Link from "next/link"
import { Vote, Users, Shield, CheckCircle2, X, ArrowRight } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "How Voting and Proposals Work",
  description:
    "As a token holder, you can vote on every critical decision that shapes the future of Xcoin. Not just upgrades. Not just budgeting. But the direction of Xcoin itself.",
  openGraph: {
    title: "How Voting and Proposals Work",
    description: "You have a say. Every vote is a statement. Every proposal is a chance to reshape the system.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Voting and Proposals Work",
    description: "You are not the product. You are the DAO.",
  },
}

const bigTechProblems = [
  "Your voice doesn't matter",
  "Decisions are made in closed rooms",
  "Your data isn't yours",
  "You are the product, not the participant",
  "You don't get a say — you get a notification",
]

const proposalProcess = [
  {
    step: "1",
    title: "Submit Your Idea",
    description: "As a member of XXX DAO, you have the right to bring forward ideas for improvements, features, or funding.",
  },
  {
    step: "2",
    title: "Review Phase",
    description: "Every proposal enters a review phase, assessed by an elected community committee to ensure proposals are well-formed, technically sound, and aligned with protocol values.",
  },
  {
    step: "3",
    title: "Community Vote",
    description: "If your proposal passes review, it enters the official voting cycle where every XXX Token holder can read, debate, and vote on it.",
  },
  {
    step: "4",
    title: "Automatic Execution",
    description: "If your proposal wins a majority, the system executes it automatically and irreversibly — no backdoors, no special privileges.",
  },
]

export default function HowVotingAndProposalsWorkPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/overview" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            How Voting and Proposals Work
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Imagine this: you hold a <Link href="/what-are-xxx-tokens" className="text-accent hover:text-accent/80 underline">XXX Token</Link>. It's your entry badge to a decentralized system where real decisions are made — by people like you. You're not a spectator. You're not a customer. You are part of the XXX Community — and that comes with responsibilities and rights.
          </p>
        </div>

        {/* You have a say */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              You have a say.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              As a token holder, you can vote on every critical decision that shapes the future of Xcoin. Not just upgrades. Not just budgeting. But the direction of Xcoin itself. You help decide what gets built. Who gets supported. Which values are upheld — and which ideas are left behind.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              This is what governance means here: not filling out surveys. Not clicking buttons on a company website. But casting votes that actually count, on-chain, where no one can tamper with the outcome — not even the developers. Every vote is a statement. Every proposal is a chance to reshape the system.
            </p>
          </div>
        </div>

        {/* The Opposite of Big Tech */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            The Opposite of Big Tech
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-6">
              In the world of Big Tech, your voice doesn't matter. You don't vote on the rules of Facebook. You don't get to challenge Apple's App Store fees. You don't decide what happens when YouTube changes its algorithm — or when PayPal freezes an account. Your voice isn't heard — unless it leads to more profit … for them.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Decisions are made in closed rooms. By executives. By shareholders. By algorithms you can't see, let alone influence. Your data isn't yours. Your content isn't yours. In many cases, even your money isn't fully yours. You are the product, not the participant.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              And when policies change — when features vanish, or fees go up, or accounts get banned — you don't get a say. You get a notification.
            </p>
            <p className="text-lg font-semibold text-foreground mb-6">
              That is not freedom. It's not neutrality. It's not you! It's control over you.
            </p>
            <div className="space-y-3 mt-8">
              {bigTechProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                  <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground mb-4">
              <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">XXX DAO</Link> exists to be the opposite. No corporate gatekeepers. No shadowy boards. No terms of service you didn't write and can't revise. If something needs to change, it goes to a vote. If someone wants to spend from the treasury, it goes to a vote. If someone wants to shape the future of Xcoin, it goes to a vote.
            </p>
            <p className="text-xl font-[family-name:var(--font-heading)] font-bold text-foreground text-center mt-8">
              Here, you are not the product.
            </p>
            <p className="text-xl font-[family-name:var(--font-heading)] font-bold text-foreground text-center mt-2">
              You are the DAO.
            </p>
            <p className="mt-6 text-lg text-muted-foreground">
              Holding a <Link href="/what-are-xxx-tokens" className="text-accent hover:text-accent/80 underline">XXX Token</Link> doesn't just give you access — it gives you power. This isn't Big Tech. This is a system designed to listen — because it can't be made to shut up.
            </p>
          </div>
        </div>

        {/* How Proposals Work */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            How Proposals Work
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-6">
              Let's say you have an idea. A better way to route transactions. A new feature that could improve privacy. Or maybe a project that deserves DAO funding. As a member of <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">XXX DAO</Link>, you have the right to bring that idea forward.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Not every idea goes straight to a vote. At XXX DAO, every proposal first enters a review phase, where it's assessed by an elected community committee. Their role is not to block innovation, but to ensure that proposals are well-formed, technically sound, and in accordance with the values of the protocol. Only proposals that meet that standard move forward to the full community vote — giving every token holder a clear, focused decision to make.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">
              This isn't gatekeeping. It's curation. It's making sure that the ideas reaching the community are worthy of the community's attention.
            </p>
            <p className="text-lg text-muted-foreground">
              If your proposal passes that bar, it enters the official voting cycle.
            </p>
          </div>
        </div>

        {/* Proposal Process Steps */}
        <div className="mt-16 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            The Proposal Process
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {proposalProcess.map((process) => (
              <div
                key={process.step}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <span className="text-2xl font-bold text-accent">{process.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* A Vote That Matters */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              A Vote That Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Now, your proposal is live. Every <Link href="/what-are-xxx-tokens" className="text-accent hover:text-accent/80 underline">XXX Token</Link> holder, anywhere in the world, can read it. Debate it. And vote on it. The vote isn't symbolic. If your proposal wins a majority — according to rules written in smart contracts — the system executes it. Automatically. Irreversibly. Some votes trigger on-chain code. Others instruct multi-sig signers. But in every case, the result is binding.
            </p>
          </div>
        </div>

        {/* No Backdoors. No Special Privileges. */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              No Backdoors. No Special Privileges.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              There is no override button. No hidden admin panel. Not even the project's creators can change a passed vote. That's the power of <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">XXX DAO</Link>: it doesn't ask you to trust people — it lets you trust code.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              And because every vote, every proposal, every treasury move is permanently recorded on-chain, the entire process is auditable by anyone, anytime. Journalists. Developers. Skeptics. You.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">No override button</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">No hidden admin panel</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Not even creators can change a passed vote</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Fully auditable by anyone, anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              You don't need to ask for permission. You just need to care.
            </p>
            <p className="text-xl font-semibold text-foreground mb-4">
              If you're holding a <Link href="/what-are-xxx-tokens" className="text-accent hover:text-accent/80 underline">XXX Token</Link>, you don't just have a voice. You have the power to act.
            </p>
            <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              Use it.
            </p>
          </div>
        </div>

        {/* Related Topics */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-4">
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/what-is-xxx-dao"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                XXX DAO
              </Link>
              <Link
                href="/what-are-xxx-tokens"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                XXX Tokens
              </Link>
              <Link
                href="/participate-in-governance"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Participate in Governance
              </Link>
              <Link
                href="/your-role-as-a-token-holder"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Your Role as a Token Holder
              </Link>
            </div>
          </div>
        </div>

        {/* Back Button - Bottom */}
        <div className="mt-16">
          <BackButton fallbackHref="/overview" position="bottom" />
        </div>
      </div>
    </div>
  )
}

