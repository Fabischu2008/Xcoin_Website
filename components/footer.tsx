import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Product: [
    { name: "Technology", href: "/technology" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Tokenomics", href: "/tokenomics" },
  ],
  Resources: [
    { name: "Learning Center", href: "/learning" },
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
    <footer className="border-t border-border bg-card relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Background Image - Desktop only */}
        <img 
          src="/Xcoin_footer.svg" 
          alt="" 
          loading="lazy" 
          decoding="async" 
          aria-hidden="true" 
          role="presentation" 
          className="hidden lg:block h-auto w-full absolute top-12 right-0 bottom-0 left-0 object-contain opacity-10 pointer-events-none"
          style={{ filter: 'grayscale(100%)' }}
        />
        <div className="relative grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-4">
              <Image 
                src="/xcoin-logo.png" 
                alt="Xcoin Logo" 
                width={64} 
                height={64} 
                className="h-16 w-16"
              />
              <span className="text-4xl lg:text-5xl font-bold tracking-tight">Xcoin</span>
            </Link>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground">The future of private, quantum-secure finance.</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-base lg:text-lg font-semibold text-foreground">{category}</h3>
              <ul className="mt-6 space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base lg:text-lg text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
