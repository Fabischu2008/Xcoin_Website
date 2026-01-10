import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Product: [
    { name: "Overview", href: "/overview" },
    { name: "Use", href: "/use" },
    { name: "Develop", href: "/develop" },
  ],
  Resources: [
    { name: "Docs", href: "/docs" },
    { name: "Community", href: "/community" },
    { name: "FAQ", href: "/faq" },
    { name: "Learning", href: "/learning" },
  ],
  Legal: [
    { name: "Terms of Service", href: "/legal" },
    { name: "Privacy Policy", href: "/legal" },
    { name: "Disclaimer", href: "/legal" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Privacy is Power Banner */}
      <div className="relative border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 pt-0 pb-8 lg:px-8 lg:pb-12">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Strich oben */}
            <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16"></div>
            
            {/* Xcoin Logo mit Glow */}
            <div className="mb-8">
              <Image 
                src="/img/xcoin.svg" 
                alt="Xcoin Logo"
                width={120}
                height={120}
                className="h-24 w-24 lg:h-32 lg:w-32 xl:h-40 xl:w-40 animate-spin-slow"
                style={{ 
                  // Filter entfernt - SVG hat bereits die blaue Farbe (#93c5fd) eingebaut
                  // Drop-shadow für Glow-Effekt behalten
                  filter: 'drop-shadow(0 0 15px rgba(147, 197, 253, 0.7)) drop-shadow(0 0 30px rgba(147, 197, 253, 0.5))',
                  animationDuration: '10000ms'
                }}
              />
            </div>
            
            {/* Privacy is Power Text */}
            <h2 
              className="font-[family-name:var(--font-heading)] text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground uppercase"
              style={{
                textShadow: '0 0 30px rgba(147, 197, 253, 0.5), 0 0 60px rgba(147, 197, 253, 0.3)',
                filter: 'drop-shadow(0 0 12px rgba(147, 197, 253, 0.6))'
              }}
            >
              Privacy is Power.
            </h2>
          </div>
        </div>
      </div>

      {/* Footer Content with Background Image */}
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-48">
        {/* Background Image - Desktop only - nur im Footer-Content-Bereich */}
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
                  // Filter entfernt - SVG hat bereits die blaue Farbe (#93c5fd) eingebaut
                  animationDuration: '10000ms'
                }}
              />
              <span className="text-[2.475rem] lg:text-[3.3rem] font-bold tracking-tight text-[#93c5fd]">Xcoin</span>
            </Link>
            <p className="p-reg mt-6 text-[1.1rem] lg:text-[1.21rem] text-muted-foreground">The future of private, quantum-secure finance.</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-[family-name:var(--font-heading)] text-[1.1rem] lg:text-[1.21rem] font-semibold text-foreground">{category}</h3>
              <ul className="mt-6 space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="p-reg text-[1.1rem] lg:text-[1.21rem] text-muted-foreground transition-colors hover:text-foreground"
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
