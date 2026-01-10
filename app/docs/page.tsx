import type { Metadata } from "next"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation",
  description: "Xcoin Whitepapers - Every Revolution Begins with an Idea, The Path to Bitcoin Replacement, XXX DAO Governance Protocol",
  openGraph: {
    title: "Documentation",
    description: "Complete technical documentation covering the Xcoin protocol, architecture, and vision.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation",
    description: "Complete technical documentation and developer resources for the Xcoin network.",
  },
}

const whitepapers = [
  {
    title: "Every Revolution Begins with an Idea",
    subtitle: "Xcoin Whitepaper 1",
    href: "/every-revolution-begins-with-an-idea",
  },
  {
    title: "The Path to Bitcoin Replacement",
    subtitle: "Xcoin Whitepaper 2",
    href: "/the-path-to-bitcoin-replacement",
  },
  {
    title: "XXX DAO Governance Protocol",
    subtitle: "Xcoin Whitepaper 3",
    href: "/xxx-dao-governance-protocol",
  },
]

export default function DocsPage() {
  return (
    <div className="relative overflow-hidden pt-32 pb-12 sm:pb-16 md:pb-24">
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
          <source src="/1212-compressed.mp4" type="video/mp4" />
        </video>
        {/* Overlay für bessere Textlesbarkeit */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-white">
            Documentation
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
            Everything you need to understand, build on, and participate in the Xcoin network.
          </p>
        </div>

        {/* Whitepaper Cards */}
        <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 md:grid-cols-3">
          {whitepapers.map((whitepaper) => (
            <Link
              key={whitepaper.title}
              href={whitepaper.href}
              className="group rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 flex flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-4">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {whitepaper.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">
                {whitepaper.subtitle}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all mt-auto">
                <span>Click here</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Getting Started Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Ready to Get Started?
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                Join our developer community and start building on the Xcoin network. Our comprehensive documentation
                and active community are here to help.
              </p>
              <div className="mt-5 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/community"
                  className="w-full sm:w-auto rounded-full bg-accent px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-center flex items-center justify-center gap-2"
                >
                  Join Community
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="w-full sm:w-auto rounded-full border border-border bg-background px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold transition-all hover:bg-secondary text-center"
                >
                  View on GitHub
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 mt-0 lg:mt-0 rounded-xl border border-border bg-background p-3 sm:p-4 md:p-6 overflow-hidden">
              <div className="overflow-x-auto -mx-3 sm:-mx-4 md:-mx-6 px-3 sm:px-4 md:px-6">
                <pre className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground whitespace-pre font-mono leading-relaxed">
                <code>{`# Install Xcoin Validator
$ curl -sSL https://install.xcoin.network | sh

# Initialize node
$ xcoin init --network mainnet

# Start validator
$ xcoin start`}</code>
              </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
