"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import XcoinLogo from "./xcoin-logo"

const navigation = [
  { name: "Overview", href: "/overview" },
  { name: "Develop", href: "/develop" },
  { name: "Fund", href: "/fund" },
  { name: "Learning", href: "/learning" },
  { name: "Docs", href: "/docs" },
  { name: "FAQ", href: "/faq" },
  { name: "Community", href: "/community" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="w-full flex items-center justify-between py-4 transition-all duration-400" style={{ paddingLeft: isScrolled ? '1rem' : '1.5rem', paddingRight: isScrolled ? '1rem' : '1.5rem' }}>
        <Link 
          href="/" 
          className="flex items-center gap-3 transition-all duration-400" 
          style={{ 
            paddingLeft: isScrolled ? '0.5rem' : '1.5rem',
            transform: isScrolled ? 'translateX(-0.5rem) translateY(-0.25rem)' : 'translateX(0) translateY(0)'
          }} 
          aria-label="Xcoin Home"
        >
          <div className="relative">
            <Image 
              src="/img/xcoin.svg" 
              alt="Xcoin" 
              width={40}
              height={40}
              className="animate-spin-slow"
              style={{ 
                filter: 'brightness(0) saturate(100%) invert(67%) sepia(89%) saturate(1234%) hue-rotate(185deg) brightness(101%) contrast(101%)',
                animationDuration: '10000ms'
              }}
            />
            <div className="absolute inset-0 bg-[#93c5fd] rounded-lg blur-lg opacity-70 -z-10" />
          </div>
          <span className="text-3xl font-bold tracking-tight text-white">Xcoin</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-8" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-4 transition-all duration-400" style={{ paddingRight: isScrolled ? '0.5rem' : '1.5rem' }}>
          <Link
            href="/crowdfunding"
            className="text-sm font-medium text-white transition-all duration-400 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
            style={{ 
              transform: isScrolled ? 'translateX(0.5rem) translateY(-0.25rem)' : 'translateX(0) translateY(0)'
            }}
          >
            Crowdfunding
          </Link>
          <Link
            href="#waitlist"
            className="relative flex items-center gap-2 rounded px-5 py-2.5 text-sm font-semibold text-black transition-all duration-400 overflow-hidden group"
            style={{ 
              transform: isScrolled ? 'translateX(0.5rem) translateY(-0.25rem)' : 'translateX(0) translateY(0)'
            }}
          >
            <div className="flex items-center gap-2 relative z-10">
              <span>Buy Token</span>
              <div className="rounded-full border border-black p-1">
                <Image 
                  src="/img/xcoin.svg" 
                  alt="Xcoin" 
                  width={20}
                  height={20}
                  className="brightness-0 group-hover:animate-spin"
                  style={{ animationDuration: '10000ms' }}
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-[#93c5fd] rounded -z-10 transition-transform duration-300 group-hover:scale-95" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden pr-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[73px] bg-background/95 backdrop-blur-md z-40" 
          role="menu" 
          aria-label="Mobile navigation menu"
          onClick={(e) => {
            // Close menu when clicking on backdrop
            if (e.target === e.currentTarget) {
              setMobileMenuOpen(false)
            }
          }}
        >
          <div className="space-y-1 border-t border-border pl-6 pr-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                role="menuitem"
                className="block py-2 text-base font-medium text-white hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/crowdfunding"
              role="menuitem"
              className="block py-2 text-base font-medium text-white hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Crowdfunding
            </Link>
            <Link
              href="#waitlist"
              role="menuitem"
              className="mt-4 relative flex items-center justify-center gap-2 w-full rounded px-5 py-2.5 text-center text-sm font-semibold text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-all overflow-hidden group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2 relative z-10">
                <span>Buy Token</span>
                <div className="rounded-full border border-white p-1">
                  <Image 
                    src="/img/xcoin.svg" 
                    alt="Xcoin" 
                    width={20}
                    height={20}
                    className="brightness-0 group-hover:animate-spin"
                    style={{ animationDuration: '10000ms' }}
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-[#93c5fd] rounded -z-10 transition-transform duration-300 group-hover:scale-95" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
