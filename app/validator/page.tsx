import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Coins, ArrowRight, Gift } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Earn Xcoin. Effortlessly.",
  description:
    "Validators are the backbone of the XXX network. By running a SEP Node, you secure the network, support privacy, and keep the system quantum-proof.",
  openGraph: {
    title: "Earn Xcoin. Effortlessly.",
    description: "Run a SEP Node 24/7 and get paid in Xcoin. No complicated tasks, no daily check-ins. Just keep your node online.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Earn Xcoin. Effortlessly.",
    description: "SEP Node licenses are completely free until mainnet launch. Get in now and you're set for life.",
  },
}

const earningMethods = [
  {
    title: "Base Fee",
    description: "Dynamic, auto-scaled per zk-Rollup bundle.",
  },
  {
    title: "Volume Bonus",
    description: "The top 20% of validators by traffic share in an extra rewards pool.",
  },
  {
    title: "SEP Integration Rewards",
    description: "Extra Xcoins for validators that support SEP-based communications.",
  },
  {
    title: "Proposal Execution Fees",
    description: "Earn rewards for executing governance actions via the DAO.",
  },
]

export default function ValidatorPage() {
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
              src="/img/validators_grid/earn_xcoin_effortlessly.jpg"
              alt="Earn Xcoin. Effortlessly."
              fill
              className="object-cover"
              priority
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center max-w-4xl">
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                  Earn Xcoin. Effortlessly.
                </h1>
                <p className="text-xl lg:text-2xl text-white/90">
                  Validators are the backbone of the XXX network. By running a SEP Node, you secure the network, support privacy, and keep the system quantum-proof.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6 text-center">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Your SEP Node works for you 24/7, verifying and securing transactions in the background. You only have to keep it online.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              And the best part? You get paid in Xcoin. Every month, your rewards are automatically sent to the wallet you choose. No complicated tasks, no daily check-ins. Just keep your SEP Node online, maybe install an update once in a while, and watch your Xcoin balance grow.
            </p>
          </div>
        </div>

        {/* How you earn */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              How you earn
            </h2>
            <div className="space-y-6">
              {earningMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">{method.title}:</h3>
                    <p className="text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nice? Here's the best part */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="h-8 w-8 text-accent" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                Nice? Here's the best part
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              SEP Node licenses are completely free until mainnet launch. After that, new licenses will likely require a one-time setup fee. <strong className="text-foreground">Get in now and you're set for life. No costs. No missed opportunities.</strong>
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">
              Once the mainnet goes live, demand will explode and those who waited will regret it.
            </p>
            <p className="text-lg text-muted-foreground">
              This is your chance to be part of a network designed for the future of finance: ultra-secure, lightning-fast, privacy-first, and ready for the post-quantum era. The SEP network is built to handle more than <Link href="/how-xcoin-handles-10000-tps" className="text-accent hover:text-accent/80 underline">10,000 transactions per second</Link> while protecting every user from surveillance and future quantum threats.
            </p>
          </div>
        </div>

        {/* Why it matters */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Why it matters
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              The SEP network is the future of secure, private, quantum-proof transactions. No mining. No energy waste. Just pure efficiency and direct rewards. The validator software runs on a standard Linux server you control, no special hardware required.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">
              In a world where other networks will become vulnerable, Xcoin is ready to dominate. Once quantum computers break legacy crypto, it will be too late to join the winning side.
            </p>
            <p className="text-lg text-muted-foreground">
              Sign up and secure your license now.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4">
              Ready to Earn Xcoin Effortlessly?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get your free SEP Node license now and be ready when the network launches.
            </p>
            <Link
              href="/validator-application"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-lg"
            >
              Apply to Run a SEP Node
              <ArrowRight className="h-5 w-5" />
            </Link>
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
                href="/what-is-sep"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                What is SEP?
              </Link>
              <Link
                href="/how-xcoin-handles-10000-tps"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                10,000+ TPS
              </Link>
              <Link
                href="/quantum-safe"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Quantum-Safe
              </Link>
              <Link
                href="/validator-application"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
