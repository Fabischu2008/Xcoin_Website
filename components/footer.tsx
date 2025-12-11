import Link from "next/link"
import XcoinLogo from "@/components/xcoin-logo"

const footerLinks = {
  Product: [
    { name: "Technology", href: "/technology" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Tokenomics", href: "/tokenomics" },
  ],
  Resources: [
    { name: "Documentation", href: "/docs" },
    { name: "FAQ", href: "/faq" },
    { name: "Community", href: "/community" },
  ],
  Legal: [
    { name: "Terms of Service", href: "/legal" },
    { name: "Privacy Policy", href: "/legal" },
    { name: "Disclaimer", href: "/legal" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <XcoinLogo size={48} />
              <span className="text-3xl font-bold tracking-tight">Xcoin</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">The future of private, quantum-secure finance.</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Xcoin. All rights reserved. "Xcoin" is a temporary placeholder name.
          </p>
        </div>
      </div>
    </footer>
  )
}
