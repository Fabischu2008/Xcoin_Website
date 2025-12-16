import type { Metadata } from "next"
import Link from "next/link"
import BackButton from "@/components/back-button"
import { Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Participate in Governance",
  description: "Vote on proposals and shape the protocol's future.",
}

export default function ParticipateInGovernancePage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <BackButton fallbackHref="/overview" position="top" />

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Users className="h-8 w-8 text-accent" />
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            Participate in Governance
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Vote on proposals and shape the protocol's future.
            </p>

            <div className="space-y-6 text-muted-foreground">
              <p>
                The XXX DAO is governed entirely by token holders. If you hold XXX tokens, you have a voice in how Xcoin evolves. Governance isn't just for large holders — every token represents a vote, and every vote matters.
              </p>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                How to Participate
              </h2>

              <p>
                Participating in governance is straightforward:
              </p>

              <ol className="list-decimal pl-6 space-y-2">
                <li><strong className="text-foreground">Hold XXX Tokens</strong> — Each token equals one vote</li>
                <li><strong className="text-foreground">Review Proposals</strong> — Read proposals submitted to the DAO</li>
                <li><strong className="text-foreground">Cast Your Vote</strong> — Vote for or against proposals</li>
                <li><strong className="text-foreground">Submit Proposals</strong> — Create your own proposals for the community to vote on</li>
              </ol>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                What You Can Vote On
              </h2>

              <p>
                Token holders vote on:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Protocol Upgrades</strong> — Changes to Xcoin's core technology</li>
                <li><strong className="text-foreground">Treasury Allocations</strong> — How DAO funds are spent</li>
                <li><strong className="text-foreground">Validator Requirements</strong> — Rules for running SEP Nodes</li>
                <li><strong className="text-foreground">Partnerships</strong> — Strategic partnerships and integrations</li>
                <li><strong className="text-foreground">Governance Rules</strong> — Changes to how governance itself works</li>
                <li><strong className="text-foreground">Community Initiatives</strong> — Grants, bounties, and community projects</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Voting Process
              </h2>

              <p>
                The voting process is transparent and on-chain:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Proposal Submission</strong> — Anyone can submit a proposal</li>
                <li><strong className="text-foreground">Discussion Period</strong> — Community discusses the proposal</li>
                <li><strong className="text-foreground">Voting Period</strong> — Token holders cast their votes</li>
                <li><strong className="text-foreground">Execution</strong> — If passed, the proposal is automatically executed</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Delegation
              </h2>

              <p>
                If you don't want to vote on every proposal, you can delegate your voting power to trusted representatives. Delegation is:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Revocable</strong> — You can undelegate at any time</li>
                <li><strong className="text-foreground">Flexible</strong> — Delegate different amounts to different representatives</li>
                <li><strong className="text-foreground">Non-Custodial</strong> — Your tokens stay in your wallet</li>
                <li><strong className="text-foreground">Transparent</strong> — All delegations are public</li>
              </ul>

              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground mt-8 mb-4">
                Getting Started
              </h2>

              <p>
                To start participating:
              </p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>Acquire XXX tokens through the early access sale or exchanges</li>
                <li>Connect your wallet to the governance interface</li>
                <li>Review active proposals and vote</li>
                <li>Join community discussions to stay informed</li>
              </ol>

              <p>
                Governance is the foundation of decentralization. By participating, you help shape Xcoin's future and ensure it remains true to its principles of privacy, security, and community control.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/what-is-xxx-dao"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  What is XXX DAO?
                </Link>
                <Link
                  href="/how-voting-and-proposals-work"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  How Voting Works
                </Link>
                <Link
                  href="/your-role-as-a-token-holder"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  Your Role as a Token Holder
                </Link>
                <Link
                  href="/what-are-xxx-tokens"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  What are XXX Tokens?
                </Link>
              </div>
            </div>

            {/* Back Button at Bottom */}
            <div className="mt-12 pt-8 border-t border-border">
              <BackButton fallbackHref="/overview" position="bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
