"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import XcoinLogo from "./xcoin-logo"

const navigation = [
  { name: "Technology", href: "/technology" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Tokenomics", href: "/tokenomics" },
  { name: "Docs", href: "/docs" },
  { name: "FAQ", href: "/faq" },
  { name: "Community", href: "/community" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <XcoinLogo size={40} className="text-foreground" />
          <span className="text-xl font-bold tracking-tight">Xcoin</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link
            href="#waitlist"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            BuyXcoin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 border-t border-border px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#waitlist"
              className="mt-4 block w-full rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-accent-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              BuyXcoin
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
