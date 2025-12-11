import Link from "next/link"
import { FileText, Book, Code, Download, ExternalLink } from "lucide-react"
import XcoinLogo from "@/components/xcoin-logo"

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
    <div className="relative overflow-hidden pt-32 pb-24">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/1212-compressed.mp4" type="video/mp4" />
        </video>
        {/* Overlay für bessere Textlesbarkeit */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight lg:text-5xl">
            Documentation
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need to understand, build on, and participate in the Xcoin network.
          </p>
        </div>

        {/* Main Documents */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <doc.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {doc.version}
                </span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-xl font-semibold">{doc.title}</h3>
              <p className="mt-3 text-muted-foreground">{doc.description}</p>
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
        <div className="mt-24">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Developer Resources</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/50"
              >
                <span className="font-medium">{resource.title}</span>
                {resource.external && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
              </Link>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-24 rounded-2xl border border-border bg-card p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mt-4 text-muted-foreground">
                Join our developer community and start building on the Xcoin network. Our comprehensive documentation
                and active community are here to help.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/community"
                  className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
                >
                  Join Community
                </Link>
                <Link
                  href="#"
                  className="rounded-full border border-border bg-background px-6 py-3 font-semibold transition-all hover:bg-secondary"
                >
                  View on GitHub
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <pre className="text-sm text-muted-foreground">
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
  )
}
