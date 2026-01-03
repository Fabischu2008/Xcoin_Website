import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Product: [
    { name: "Overview", href: "/overview" },
    { name: "Develop", href: "/develop" },
    { name: "Fund", href: "/fund" },
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
    <footer className="border-t border-border relative overflow-hidden">
      {/* Background Image - Desktop only - direkt auf Footer-Ebene */}
      <img 
        src="/Xcoin_footer.svg" 
        alt="" 
        loading="lazy" 
        decoding="async" 
        aria-hidden="true" 
        role="presentation" 
        className="hidden lg:block absolute opacity-10 pointer-events-none"
        style={{ 
          filter: 'grayscale(100%)',
          top: 'clamp(0.25rem, 1vw, 0.75rem)',
          left: '0',
          right: '0',
          bottom: 'clamp(0.75rem, 2vw, 1.5rem)',
          width: '100%',
          height: 'calc(100% - clamp(1rem, 3vw, 2.25rem))',
          objectFit: 'contain',
          objectPosition: 'center center',
          minWidth: '100%',
          minHeight: 'calc(100% - clamp(1rem, 3vw, 2.25rem))'
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-48">
        <div className="relative grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-4">
              <Image 
                src="/img/xcoin.svg" 
                alt="Xcoin Logo" 
                width={64} 
                height={64} 
                className="h-16 w-16 animate-spin-slow"
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(67%) sepia(89%) saturate(1234%) hue-rotate(185deg) brightness(101%) contrast(101%)',
                  animationDuration: '10000ms'
                }}
              />
              <span className="text-[2.475rem] lg:text-[3.3rem] font-bold tracking-tight text-[#93c5fd]">Xcoin</span>
            </Link>
            <p className="mt-6 text-[1.1rem] lg:text-[1.21rem] text-muted-foreground">The future of private, quantum-secure finance.</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[1.1rem] lg:text-[1.21rem] font-semibold text-foreground">{category}</h3>
              <ul className="mt-6 space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[1.1rem] lg:text-[1.21rem] text-muted-foreground transition-colors hover:text-foreground"
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
