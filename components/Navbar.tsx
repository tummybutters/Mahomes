'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const leftLinks = [
    { href: '/', label: 'Home' },
    { href: '/capital-solutions', label: 'Capital Solutions' },
    { href: '/transactions', label: 'Transactions' },
  ]

  const rightLinks = [
    { href: '/about', label: 'About' },
    { href: '/capital-group', label: 'Capital Group' },
  ]

  const allLinks = [...leftLinks, ...rightLinks]

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuVisible(true)
      return
    }

    if (!isMenuVisible) return

    const timeout = window.setTimeout(() => setIsMenuVisible(false), 200)
    return () => window.clearTimeout(timeout)
  }, [isMenuOpen, isMenuVisible])

  return (
    <>
      {/* Desktop Navbar - Refined Technical Look */}
      <nav className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center animate-fade-down">
        <div className="flex items-center px-6 py-3 rounded-none bg-[#0b111a]/95 border border-white/10 shadow-[0_14px_30px_rgba(0,0,0,0.55)] backdrop-blur-md">

          {/* Left Links */}
          <div className="flex items-center">
            {leftLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-1 group"
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                    }`}>
                    {link.label}
                  </span>
                  {/* Underline */}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-[1px] transition-all duration-300 ease-out origin-left ${isActive
                      ? 'bg-accent-warm scale-x-100'
                      : 'bg-accent-warm/70 scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Divider 1 */}
          <div className="h-4 w-px bg-white/10 mx-2" />

          {/* Center Logo - Unboxed */}
          <Link href="/" className="relative mx-0 group">
            {/* Spacer for layout dimensions */}
            <div className={`${isHome ? 'w-24 h-10' : 'w-14 h-14'}`} />

            {/* Actual Logo - Positioned Absolute to overflow */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isHome ? 'w-64 h-64' : 'w-14 h-14'
                } opacity-90 group-hover:opacity-100 transition-opacity`}
            >
              <Image
                src="/images/logo.png"
                alt="Malohn Capital Group"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Divider 2 */}
          <div className="h-4 w-px bg-white/10 mx-2" />

          {/* Right Links */}
          <div className="flex items-center">
            {rightLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-1 group"
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                    }`}>
                    {link.label}
                  </span>
                  {/* Underline */}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-[1px] transition-all duration-300 ease-out origin-left ${isActive
                      ? 'bg-accent-warm scale-x-100'
                      : 'bg-accent-warm/70 scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </Link>
              )
            })}

            {/* Vertical Divider before CTA */}
            <div className="h-8 w-px bg-white/10 mx-5" />

            {/* CTA Button */}
            <Link
              href="/schedule"
              className="px-6 py-2 rounded-none bg-white/5 border border-white/10 text-white/90 text-sm font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50 md:hidden animate-fade-down">
        <div className="flex items-center justify-between px-4 py-3 rounded-none bg-[#0b111a]/95 border border-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.5)] backdrop-blur-md">
          {/* Mobile Logo - Unboxed Link */}
          <Link href="/" className="flex items-center gap-3">
            <div className={`relative ${isHome ? 'w-20 h-20' : 'w-8 h-8'}`}>
              <Image
                src="/images/logo.png"
                alt="Malohn Capital Group"
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">Malohn Capital</p>
            </div>
          </Link>

          {/* Mobile Menu Button - Sharp */}
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-none bg-white/5 border border-white/10 text-white/70 hover:text-white transition-colors active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative h-5 w-5">
              <Menu
                size={20}
                className={`absolute inset-0 transition-all duration-200 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
              />
              <X
                size={20}
                className={`absolute inset-0 transition-all duration-200 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
              />
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Menu</span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuVisible && (
          <div
            id="mobile-menu"
            className={`mt-2 p-4 rounded-none bg-[#101826] border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-2 scale-[0.98] pointer-events-none'}`}
          >
            <div className="flex flex-col gap-1">
              {allLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <div
                    key={link.href}
                    className={`transition-all duration-200 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-none text-sm font-medium transition-all duration-200 border-l-2 ${isActive
                        ? 'bg-white/5 text-white border-accent-warm'
                        : 'text-white/60 border-transparent hover:text-white hover:bg-white/5 hover:border-white/20'
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </div>
                )
              })}
              <div
                className={`mt-4 pt-4 border-t border-white/10 transition-all duration-200 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                style={{ transitionDelay: `${allLinks.length * 50}ms` }}
              >
                <Link
                  href="/schedule"
                  className="block w-full px-4 py-3 rounded-none bg-white/10 border border-white/10 text-white text-sm font-medium text-center hover:bg-white/15"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule a Meeting
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>

  )
}
