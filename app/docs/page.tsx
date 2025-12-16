import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Book, Code, Download, ExternalLink } from "lucide-react"
import XcoinLogo from "@/components/xcoin-logo"

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Everything you need to understand, build on, and participate in the Xcoin network. Complete technical documentation, validator guides, and developer resources.",
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

const documents = [
  {
    icon: FileText,
    title: "Whitepaper",
    description: "Complete technical documentation covering the Xcoin protocol, architecture, and vision.",
    href: "/XCoin_Whitepaper.pdf",
    version: "v3.4",
  },
  {
    icon: Book,
    title: "Technical Specification",
    description: "Detailed specifications for developers including cryptographic primitives and protocols.",
    href: "#",
    version: "v2.1",
  },
  {
    icon: Code,
    title: "Validator Guide",
    description: "Step-by-step instructions for setting up and running a validator node.",
    href: "#",
    version: "v1.0",
  },
]

const resources = [
  { title: "GitHub Repository", href: "#", external: true },
  { title: "API Documentation", href: "#", external: true },
  { title: "SDK Reference", href: "#", external: true },
  { title: "Block Explorer", href: "#", external: true },
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
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold tracking-tight lg:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
            Everything you need to understand, build on, and participate in the Xcoin network.
          </p>
        </div>

        {/* Main Documents */}
        <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="group rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-accent/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <doc.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {doc.version}
                </span>
              </div>
              <h3 className="mt-4 sm:mt-6 font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold">{doc.title}</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">{doc.description}</p>
              <Link
                href={doc.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <h2 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold">Developer Resources</h2>
          <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-3 sm:p-4 transition-all hover:border-accent/50"
              >
                <span className="font-medium">{resource.title}</span>
                {resource.external && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
              </Link>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl md:text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
                Join our developer community and start building on the Xcoin network. Our comprehensive documentation
                and active community are here to help.
              </p>
              <div className="mt-5 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/community"
                  className="w-full sm:w-auto rounded-full bg-accent px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-accent-foreground transition-all hover:bg-accent/90 text-center"
                >
                  Join Community
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
