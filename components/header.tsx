"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "Learning", href: "/learning", hasDivider: true },
  { name: "Develop", href: "/develop", hasDivider: true },
  { name: "Fund", href: "/fund" },
  { name: "Use", href: "/use", hasDivider: true },
  { name: "Docs", href: "/docs", hasDivider: true },
  { name: "FAQ", href: "/faq" },
  { name: "Community", href: "/community", hasDivider: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Throttled scroll handler
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="header-nav">
        <Link href="/" className="header-logo" aria-label="Xcoin Home">
          <div className="header-logo-icon">
            <Image 
              src="/img/xcoin.svg" 
              alt="Xcoin" 
              width={40}
              height={40}
              className="header-logo-image"
            />
            <div className="header-logo-glow" />
          </div>
          <span className="header-logo-text">Xcoin</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav-desktop" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="header-nav-link"
            >
              {item.name}
              <span className="header-nav-link-underline" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:items-center lg:gap-4 transition-all duration-400" style={{ paddingRight: isScrolled ? '0.5rem' : '1.5rem' }}>
          <Link
            href="/crowdfunding"
            className="p-reg font-medium text-white transition-all duration-400 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
            style={{ 
              transform: isScrolled ? 'translateX(0.5rem) translateY(-0.25rem)' : 'translateX(0) translateY(0)'
            }}
          >
            Crowdfunding
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="#waitlist"
            className="relative flex items-center gap-2 rounded px-5 py-2.5 p-reg font-normal text-black transition-all duration-400 overflow-hidden group"
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

        {/* Mobile/Tablet Actions Row - Right side */}
        <div className="flex items-center gap-2 lg:hidden" style={{ position: 'relative', zIndex: 100 }}>
          {/* Menu Button - Plus Icon */}
        <button
          type="button"
            className={`menu-button ${mobileMenuOpen ? 'close' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="100%" 
              viewBox="0 0 15 14" 
              fill="none" 
              className="menu-button__icon"
            >
              <path d="M7.02441 0.2C7.02441 0.0895426 7.11396 0 7.22441 0H8.57441C8.68487 0 8.77441 0.0895431 8.77441 0.2V13.8C8.77441 13.9105 8.68487 14 8.57441 14H7.22441C7.11396 14 7.02441 13.9105 7.02441 13.8V0.2Z" fill="currentColor"></path>
              <path d="M14.6994 6.125C14.8099 6.125 14.8994 6.21454 14.8994 6.325V7.675C14.8994 7.78546 14.8099 7.875 14.6994 7.875L1.09941 7.875C0.988957 7.875 0.899414 7.78546 0.899414 7.675L0.899414 6.325C0.899414 6.21454 0.988957 6.125 1.09941 6.125L14.6994 6.125Z" fill="currentColor"></path>
              <path d="M8.77441 4.375V6.125H10.5244C9.55798 6.125 8.77441 5.34143 8.77441 4.375Z" fill="currentColor"></path>
              <path d="M8.77441 9.625V7.875H10.5244C9.55798 7.875 8.77441 8.65857 8.77441 9.625Z" fill="currentColor"></path>
              <path d="M7.02441 4.375V6.125H5.27441C6.24084 6.125 7.02441 5.34143 7.02441 4.375Z" fill="currentColor"></path>
              <path d="M7.02441 9.625V7.875H5.27441C6.24084 7.875 7.02441 8.65857 7.02441 9.625Z" fill="currentColor"></path>
            </svg>
            <div className="button-bg"></div>
        </button>
        </div>
      </nav>

      {/* Mobile Menu Background */}
      <div 
        className={`menu-bg ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="nav-menu-eyebrow">
          <div className="eyebrow">menu</div>
        </div>
        <div className="nav-menu__links">
          {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
              className="link nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.hasDivider && <div className="nav-menu-divider"></div>}
              <p className="nav-link-text">{item.name}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" className="nav-link-arrow">
                <path d="M0.230469 5.09969H8.95047L4.57047 0.679688H7.03047L11.7705 5.41969V6.57969L7.03047 11.3197H4.57047L8.95047 6.85969H0.230469V5.09969Z" fill="currentColor"></path>
              </svg>
              {item.hasDivider && <div className="nav-menu-divider bottom"></div>}
            </Link>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <div className="nav-menu-buttons">
          <Link
            href="/community"
            className="button is--dark"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="u--clip u--rel">
              <p className="p-reg">Join Community</p>
            </div>
            <div className="button-bg black"></div>
          </Link>
          <Link
            href="/crowdfunding"
            className="button"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="u--clip u--rel">
              <p className="p-reg">Crowdfunding</p>
          </div>
            <div className="button-bg is--dark-outline"></div>
          </Link>
        </div>
      </div>
    </header>
  )
}
