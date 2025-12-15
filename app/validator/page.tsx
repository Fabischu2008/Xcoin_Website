import type { Metadata } from "next"
import Link from "next/link"
import { Server, Zap, Check, Shield, Network, Coins, TrendingUp, Globe, ArrowLeft } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "What Is a Validator? | Xcoin",
  description:
    "A validator is someone who runs a node that validates Xcoin transactions. Such a node is called a SEP Node. Learn how to become a validator and earn Xcoin.",
  openGraph: {
    title: "What Is a Validator? | Xcoin",
    description: "By operating a SEP Node, validators keep the Xcoin network running: fast, invisible, and quantum-secure.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is a Validator? | Xcoin",
    description: "Being a validator isn't just about protecting privacy—it's also profitable.",
  },
}

const validatorTasks = [
  {
    icon: Check,
    title: "Verify Transactions",
    description: "SEP Nodes validate each transaction using cutting-edge zero-knowledge cryptography that proves a transaction is valid without knowing anything about the sender, receiver, or amount.",
  },
  {
    icon: Network,
    title: "Maintain Network Consensus",
    description: "Validators uphold consensus across Xcoin's hybrid architecture — enabling true parallel processing with 10,000+ transactions per second, no bottlenecks, and instant settlement.",
  },
  {
    icon: Shield,
    title: "Preserve Privacy",
    description: "Every SEP Node ensures total anonymity by privately handling all transactions, storing no user data, and using quantum-resistant encryption to keep the network secure — now and in the future.",
  },
]

const earningBenefits = [
  {
    icon: Coins,
    title: "Earn Transaction Fees",
    description: "Validators receive fees every time your node processes a transaction. The more transactions are processed by your node, the more you earn.",
  },
  {
    icon: TrendingUp,
    title: "Get Volume Bonuses",
    description: "High-performing nodes earn additional rewards based on transaction volume — no inflation, just real utility-based income.",
  },
  {
    icon: Network,
    title: "Support the SEP Network",
    description: "Validators also contribute to the wider post-quantum ecosystem, earning potential rewards from multiple privacy platforms, such as CREO.",
  },
]

const requirements = [
  "A VPS or dedicated server",
  "A reliable internet connection",
  "A static IP address",
  "A validator license",
]

export default function ValidatorPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            What Is a Validator?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A validator is someone who runs a node that validates Xcoin transactions. Such a node is called a <strong className="text-foreground">SEP Node</strong>.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            SEP Nodes are part of the <strong className="text-foreground">SEP Network</strong> — a uniquely developed encryption framework that powers Xcoin's unmatched privacy and security.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            In traditional blockchains like Bitcoin, miners confirm transactions by solving complex mathematical puzzles. This process consumes large amounts of energy and takes considerable time. In contrast, SEP Nodes use advanced cryptography — not electricity — to confirm transactions: faster, more efficiently, and with full anonymity.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Validators don't mine coins. They don't monitor users. They don't waste time or energy. They simply verify transactions — without ever knowing who sent what to whom.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            By operating a SEP Node, validators keep the Xcoin network running: fast, invisible, and quantum-secure.
          </p>
        </div>

        {/* What Does a Validator Do? */}
        <div className="mt-20 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
            What Does a Validator Do?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Actually, validators simply keep their nodes online. That's it. Easy? Yes.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            And while hosting a SEP Node is simple, it performs three essential tasks that keep the network private, fast, and secure:
          </p>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {validatorTasks.map((task) => (
              <div
                key={task.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <task.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-foreground">{task.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{task.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Validator */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Become a Validator
            </h2>
            <p className="text-lg font-semibold text-foreground mb-8">
              Being a validator isn't just about protecting privacy — it's also profitable.
            </p>
            <div className="space-y-6">
              {earningBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg font-semibold text-foreground">
              All rewards are paid in Xcoin. No staking. No mining. No dilution. Just clean, transparent income for supporting privacy.
            </p>
          </div>
        </div>

        {/* Who Can Become a Validator? */}
        <div className="mt-20 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Who Can Become a Validator?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Anyone with basic technical knowledge and a desire to support financial privacy can become a validator — no matter who you are or where you're from. Whether you're in a small town or a major city, in Europe, Asia, Africa, or the Americas — you're welcome. <Link href="/what-is-xxx-dao" className="text-accent hover:text-accent/80 underline">XXX DAO</Link> invites everyone, everywhere to take part.
            </p>
            <h3 className="mt-8 font-[family-name:var(--font-heading)] text-2xl font-semibold mb-4">
              What do you need?
            </h3>
            <p className="text-muted-foreground mb-4">
              You don't need expensive hardware. You just need the following:
            </p>
            <div className="space-y-3 mt-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{requirement}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground">
              You can apply for a validator license at any time — even after the Mainnet launches. But right now, during the pre-launch phase, applying is 100% free. Once the Testnet goes live, you'll receive your SEP Node install package, full documentation, and personal support from the DAO to help you set up your node.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
              Ready to Join the Front Line of Financial Freedom?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Apply now and receive your SEP Node install package when the Testnet goes live.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Being a validator is one of the easiest jobs in the world. So why not become one? Right now...
            </p>
            <Link
              href="/validator-application"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
            >
              Apply to Run a SEP Node
              <ArrowLeft className="h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
