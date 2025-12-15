import { Users, Vote, FileText, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import BackButton from "@/components/back-button"

export default function GovernancePage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/" />
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <Users className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Community-Governed
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Every rule change or upgrade decided collectively by token holders through the XXX DAO. True decentralization means the community controls the protocol.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <Vote className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">Democratic Voting</h3>
            <p className="mt-4 text-muted-foreground">
              Token holders can propose changes to the protocol, funding allocations, or ecosystem decisions. All proposals are voted on transparently, with each XXX Token representing one vote.
            </p>
            <ul className="mt-6 space-y-3">
              {["One token, one vote", "Transparent voting process", "Community proposals", "On-chain governance"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
              <FileText className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold">XXX DAO</h3>
            <p className="mt-4 text-muted-foreground">
              The XXX DAO (Decentralized Autonomous Organization) is the governance layer that operates independently from the DAG network. It manages treasury funds, protocol upgrades, and ecosystem development.
            </p>
            <ul className="mt-6 space-y-3">
              {["Treasury management", "Protocol upgrades", "Funding decisions", "Community-driven development"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold">How Governance Works</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-xl font-bold text-accent">1</div>
              <h4 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold">Propose</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Any token holder can submit a proposal for protocol changes or funding requests.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-xl font-bold text-accent">2</div>
              <h4 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold">Discuss</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                The community reviews and discusses proposals through forums and communication channels.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-xl font-bold text-accent">3</div>
              <h4 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold">Vote</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Token holders vote on proposals. Decisions are implemented based on majority consensus.
              </p>
            </div>
          </div>
        </div>

        {/* Learn More CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Learn More</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our comprehensive Learning Center to dive deeper into XXX DAO, governance, and related concepts.
          </p>
          <Link
            href="/learning"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Visit Learning Center
          </Link>
        </div>
      </div>
    </div>
  )
}

