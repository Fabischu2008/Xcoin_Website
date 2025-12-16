import type { Metadata } from "next"
import Link from "next/link"
import { Lock, Shield, Zap, X, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react"
import BackButton from "@/components/back-button"

export const metadata: Metadata = {
  title: "Anonymous Donations, Remittances, and Business Transfers",
  description:
    "Financial freedom means nothing without financial privacy. Xcoin allows anyone to transact freely — without fear of exposure, retaliation, or censorship. Anonymous donations, cross-border remittances, and business payments — all private by default.",
  openGraph: {
    title: "Anonymous Donations, Remittances, and Business Transfers",
    description: "True freedom means not having to ask permission. Not to donate. Not to save. Not to pay.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anonymous Donations, Remittances, and Business Transfers",
    description: "You shouldn't need permission to make a transfer. With Xcoin, you don't.",
  },
}

const censorshipExamples = [
  {
    icon: X,
    title: "WikiLeaks blocked",
    description: "Blocked by PayPal and Visa.",
  },
  {
    icon: X,
    title: "GoFundMe freezing",
    description: "Freezing causes deemed 'too political.'",
  },
  {
    icon: X,
    title: "SWIFT systems",
    description: "Monitored and weaponized.",
  },
  {
    icon: X,
    title: "Crypto donations",
    description: "Deanonymized, traced, and used as legal evidence.",
  },
]

const useCases = [
  {
    icon: Shield,
    title: "Anonymous donations",
    description: "To individuals or causes — without surveillance or reputational risk",
  },
  {
    icon: Zap,
    title: "Cross-border remittances",
    description: "Fast, cheap, and invisible",
  },
  {
    icon: Lock,
    title: "Business payments",
    description: "For clients, vendors, or salaries you don't want published to the world",
  },
  {
    icon: Shield,
    title: "Private transfers",
    description: "To send money to friends, family, or maybe even a secret lover the world doesn't need to know about",
  },
]

const xcoinAdvantages = [
  "No exposed addresses",
  "No linkable histories",
  "No central authority to freeze funds or flag behavior",
  "Zero-knowledge cryptography",
  "AES-512 cascade encryption",
  "No metadata leaks",
  "No IP tracking",
  "No forensic breadcrumbs",
]

export default function AnonymousDonationsRemittancesAndBusinessTransfersPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <BackButton fallbackHref="/overview" position="top" />

        {/* Header */}
        <div className="mx-auto max-w-4xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Anonymous Donations, Remittances, and Business Transfers
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A weak financial system invites abuse, power plays, control, and censorship.
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground">
            It becomes a battlefield where the strongest make the rules.
          </p>
        </div>

        {/* Censorship Examples */}
        <div className="mt-16 mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {censorshipExamples.map((example) => (
              <div
                key={example.title}
                className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 mb-4">
                  <example.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{example.title}</h3>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg font-semibold text-foreground max-w-3xl mx-auto">
            Financial freedom means nothing without financial privacy.
          </p>
        </div>

        {/* Real-World Cases */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            Real-World Cases
          </h2>
          
          {/* Ukraine Case */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
                  Ukraine Donations (2022)
                </h3>
                <p className="text-muted-foreground mb-4">
                  After the Russian invasion of Ukraine in February 2022, the country received an outpouring of global support — including millions of dollars in crypto donations. One of the most prominent recipients was the Ukrainian NGO Come Back Alive, which collected over $4 million in cryptocurrency to fund military equipment.
                </p>
                <p className="text-muted-foreground mb-4">
                  Despite crypto's reputation for censorship resistance, blockchain analytics firm Elliptic revealed that these donations were fully traceable. Because static wallet addresses were used, transactions could be mapped, exposing the identity patterns of donors.
                </p>
                <p className="text-lg font-semibold text-foreground">
                  This lack of privacy raised serious concerns — especially for donors in countries with strict surveillance and authoritarian policies. In Russia, some individuals were even arrested for sending money to Ukrainian organizations.
                </p>
              </div>
            </div>
          </div>

          {/* Garantex Case */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
                  Garantex Exchange (2022)
                </h3>
                <p className="text-muted-foreground mb-4">
                  In March 2022, the Russian crypto exchange Garantex, based in Moscow, was sanctioned by the U.S. Treasury's Office of Foreign Assets Control (OFAC). Despite claims of anonymity, authorities were able to trace the flow of funds through the platform, resulting in frozen assets and the eventual shutdown of the exchange.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Warning */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-4">
              These cases make one thing brutally clear: Even in so-called "free" markets — even in crypto — transparency without privacy is a threat. Your wallet can be mapped, your actions can be punished. And no one is immune.
            </p>
          </div>
        </div>

        {/* The Case for Privacy-First Finance */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            The Case for Privacy-First Finance
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-4">
              These aren't edge cases. They're warnings. It's not important who it happened to — or why. What matters is that it can happen. And that it does.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              These examples expose just how vulnerable standard crypto transactions are to surveillance, tracking, and intervention. If your transaction history is public, your intent can be questioned. Your identity can be revealed. Your actions can be punished.
            </p>
            <p className="text-xl font-semibold text-foreground">
              That's why financial privacy isn't optional. It's essential.
            </p>
          </div>
        </div>

        {/* Xcoin is built for privacy */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-6">
              Xcoin is built for privacy.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              With advanced privacy protections and a decentralized, minerless structure, it allows anyone to transact freely — without fear of exposure, retaliation, or censorship.
            </p>
            <p className="text-lg font-semibold text-foreground mb-4">
              Because true freedom means not having to ask permission.
            </p>
            <p className="text-lg text-muted-foreground">
              Not to donate. Not to save. Not to pay.
            </p>
          </div>
        </div>

        {/* This is where Xcoin comes in */}
        <div className="mt-16 mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-8">
            This is where Xcoin comes in
          </h2>
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <p className="text-lg text-muted-foreground mb-6">
              With Xcoin, there are no exposed addresses. No linkable histories. No central authority to freeze funds or flag behavior. Whether you're sending $10 or $10,000,000, the network doesn't know who you are — and doesn't need to.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Every transaction is sealed with <Link href="/what-is-zk-starks" className="text-accent hover:text-accent/80 underline">zero-knowledge cryptography</Link> and <Link href="/what-is-aes-512" className="text-accent hover:text-accent/80 underline">AES-512 cascade encryption</Link>. No metadata leaks. No IP tracking. No forensic breadcrumbs.
            </p>
          </div>
        </div>

        {/* Xcoin Advantages */}
        <div className="mt-12 mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {xcoinAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-16 mx-auto max-w-7xl">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12 text-center">
            Use Cases
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-4">
                  <useCase.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            And because Xcoin is lightweight, scalable, and runs without mining or staking, anyone can use it — anywhere.
          </p>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center">
            <div className="space-y-4 mb-8">
              <p className="text-lg font-semibold text-foreground">
                You shouldn't need permission to make a transfer.
              </p>
              <p className="text-lg font-semibold text-foreground">
                You shouldn't need to explain your intentions to others.
              </p>
              <p className="text-lg font-semibold text-foreground">
                You shouldn't have to choose between your cause and your safety.
              </p>
            </div>
            <p className="text-xl font-semibold text-foreground mb-4">
              With Xcoin, you don't.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Want to support something that matters — or move money with dignity?
            </p>
            <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-foreground">
              Now you can. Privately. Permanently. Freely.
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
                href="/what-is-privacy-by-default"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Privacy by Default
              </Link>
              <Link
                href="/using-xcoin-for-payments-and-savings"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Using Xcoin for Payments and Savings
              </Link>
              <Link
                href="/what-is-zk-starks"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                zk-STARKs
              </Link>
              <Link
                href="/what-is-aes-512"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                AES-512
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



